class Genid {
  constructor(options) {
    if (options.WorkerId === undefined) {
      throw new Error("lost WorkerId")
    }

    const BaseTime = 1577836800000
    if (!options.BaseTime || options.BaseTime < 0) {
      options.BaseTime = BaseTime
    }

    const WorkerIdBitLength = 6
    if (!options.WorkerIdBitLength || options.WorkerIdBitLength < 0) {
      options.WorkerIdBitLength = WorkerIdBitLength
    }

    const SeqBitLength = 6
    if (!options.SeqBitLength || options.SeqBitLength < 0) {
      options.SeqBitLength = SeqBitLength
    }

    const MaxSeqNumber = (1 << SeqBitLength) - 1
    if (options.MaxSeqNumber <= 0 || options.MaxSeqNumber === undefined) {
      options.MaxSeqNumber = MaxSeqNumber
    }

    const MinSeqNumber = 5
    if (!options.MinSeqNumber || options.MinSeqNumber < 0) {
      options.MinSeqNumber = MinSeqNumber
    }

    const topOverCostCount = 2000
    if (!options.TopOverCostCount || options.TopOverCostCount < 0) {
      options.TopOverCostCount = topOverCostCount
    }

    if (options.Method !== 2) {
      options.Method = 1
    } else {
      options.Method = 2
    }

    this.Method = BigInt(options.Method)
    this.BaseTime = BigInt(options.BaseTime)
    this.WorkerId = BigInt(options.WorkerId)
    this.WorkerIdBitLength = BigInt(options.WorkerIdBitLength)
    this.SeqBitLength = BigInt(options.SeqBitLength)
    this.MaxSeqNumber = BigInt(options.MaxSeqNumber)
    this.MinSeqNumber = BigInt(options.MinSeqNumber)
    this.TopOverCostCount = BigInt(options.TopOverCostCount)

    const timestampShift = this.WorkerIdBitLength + this.SeqBitLength
    const currentSeqNumber = this.MinSeqNumber

    this._TimestampShift = timestampShift
    this._CurrentSeqNumber = currentSeqNumber

    this._LastTimeTick = 0
    this._TurnBackTimeTick = 0
    this._TurnBackIndex = 0
    this._IsOverCost = false
    this._OverCostCountInOneTerm = 0
  }

  DoGenIdAction(OverCostActionArg) {}

  BeginOverCostAction(useTimeTick) {}

  EndOverCostAction(useTimeTick) {
    // if m1._TermIndex > 10000 {
    //     m1._TermIndex = 0
    // }
  }

  BeginTurnBackAction(useTimeTick) {}

  EndTurnBackAction(useTimeTick) {}

  NextOverCostId() {
    const currentTimeTick = this.GetCurrentTimeTick()
    if (currentTimeTick > this._LastTimeTick) {
      // this.EndOverCostAction(currentTimeTick)
      this._LastTimeTick = currentTimeTick
      this._CurrentSeqNumber = this.MinSeqNumber
      this._IsOverCost = false
      this._OverCostCountInOneTerm = 0
      // this._GenCountInOneTerm = 0

      return this.CalcId(this._LastTimeTick)
    }
    if (this._OverCostCountInOneTerm >= this.TopOverCostCount) {
      // this.EndOverCostAction(currentTimeTick)
      this._LastTimeTick = this.GetNextTimeTick()
      this._CurrentSeqNumber = this.MinSeqNumber
      this._IsOverCost = false
      this._OverCostCountInOneTerm = 0
      // this._GenCountInOneTerm = 0

      return this.CalcId(this._LastTimeTick)
    }
    if (this._CurrentSeqNumber > this.MaxSeqNumber) {
      this._LastTimeTick++
      this._CurrentSeqNumber = this.MinSeqNumber
      this._IsOverCost = true
      this._OverCostCountInOneTerm++
      // this._GenCountInOneTerm++

      return this.CalcId(this._LastTimeTick)
    }

    // this._GenCountInOneTerm++
    return this.CalcId(this._LastTimeTick)
  }

  NextNormalId() {
    const currentTimeTick = this.GetCurrentTimeTick()
    if (currentTimeTick < this._LastTimeTick) {
      if (this._TurnBackTimeTick < 1) {
        this._TurnBackTimeTick = this._LastTimeTick - 1
        this._TurnBackIndex++
        if (this._TurnBackIndex > 4) {
          this._TurnBackIndex = 1
        }
        this.BeginTurnBackAction(this._TurnBackTimeTick)
      }

      return this.CalcTurnBackId(this._TurnBackTimeTick)
    }
    if (this._TurnBackTimeTick > 0) {
      this.EndTurnBackAction(this._TurnBackTimeTick)
      this._TurnBackTimeTick = 0
    }

    if (currentTimeTick > this._LastTimeTick) {
      this._LastTimeTick = currentTimeTick
      this._CurrentSeqNumber = this.MinSeqNumber

      return this.CalcId(this._LastTimeTick)
    }

    if (this._CurrentSeqNumber > this.MaxSeqNumber) {
      this.BeginOverCostAction(currentTimeTick)
      // this._TermIndex++
      this._LastTimeTick++
      this._CurrentSeqNumber = this.MinSeqNumber
      this._IsOverCost = true
      this._OverCostCountInOneTerm = 1
      // this._GenCountInOneTerm = 1

      return this.CalcId(this._LastTimeTick)
    }

    return this.CalcId(this._LastTimeTick)
  }

  CalcId(useTimeTick) {
    const result =
      BigInt(useTimeTick << this._TimestampShift) +
      BigInt(this.WorkerId << this.SeqBitLength) +
      BigInt(this._CurrentSeqNumber)
    this._CurrentSeqNumber++

    return result
  }

  CalcTurnBackId(useTimeTick) {
    const result =
      BigInt(useTimeTick << this._TimestampShift) +
      BigInt(this.WorkerId << this.SeqBitLength) +
      BigInt(this._TurnBackIndex)
    this._TurnBackTimeTick--

    return result
  }

  GetCurrentTimeTick() {
    const millis = BigInt(new Date().valueOf())

    return millis - this.BaseTime
  }

  GetNextTimeTick() {
    let tempTimeTicker = this.GetCurrentTimeTick()
    while (tempTimeTicker <= this._LastTimeTick) {
      tempTimeTicker = this.GetCurrentTimeTick()
    }

    return tempTimeTicker
  }

  NextId() {
    if (this._IsOverCost) {
      return parseInt(this.NextOverCostId())
    } else {
      return parseInt(this.NextNormalId())
    }
  }
}

module.exports = Genid
