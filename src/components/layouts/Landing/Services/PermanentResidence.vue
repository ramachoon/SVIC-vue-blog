<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="row introduction">
            <div class="col-lg-6 left-side">
              <div class="title">{{ data.title }}</div>
              <div class="overview">{{ data.overview }}</div>
              <div class="introduction_title">{{ data.introduction_left.title }}</div>
              <div class="introduction_story" v-for="(item, index) in data.introduction_left.story">{{ item }}</div>
            </div>
            <div class="col-lg-6 right-side">
              <div class="introduction_title">{{ data.introduction_right.title }}</div>
              <div class="introduction_story" v-for="(item, index) in data.introduction_right.story">{{ item }}</div>
            </div>
          </div>
          <div class="wrapCollapse">
            <template v-for="(item, i) in data.substories" :key="i">
              <dt>
                <a href="#" :class="{ active: currentSub === i }" @click="open(i)">
                  {{ item.title }}
                  <span v-if="currentSub !== i">+</span>
                  <span v-if="currentSub === i">-&nbsp;</span>
                </a>
              </dt> 
              <dd :class="{ active: currentSub === i }">
                <div v-for="(sub, j) in item.introduction">{{ sub }}</div>
              </dd>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { ref } from 'vue'

let data = {
  title: 'Permanent Residence',
  overview: 'Your Forever Home Canada! – Canada’s vision of a free, safe and prosperous country draws immigrants from all corners of the world.',
  introduction_left: {
    title: 'What is Canadian permanent resident status?',
    story: [
      'Foreigners who have Canadian permanent resident status are allowed to make Canada their home. Permanent residents may live, work and study in Canada as long as they keep their status. To obtain and maintain Canadian permanent resident status, foreigners must meet the legal requirements to enter and remain in Canada as permanent residents.',
      'After an application for Canadian permanent resident status was submitted to an Immigration, Refugees and Citizenship Canada (IRCC) office, the visa and immigration officers will decide whether to approve the request and the border officer will determine whether to admit the foreigner on a permanent basis. Furthermore, permanent residents must comply with the residency obligation (e.g. physical presence in Canada for a minimum of 730 days in a five-year period, etc.).'
    ]
  },
  introduction_right: {
    title: '',
    story: [
      'Since October 31, 2016, the Government of Canada is increasing its ambitious immigration levels by welcoming 300,000 new permanent residents in 2017, 310,000 newcomers in 2018, 330,000 immigrants in 2019, 340,000 in 2020, 401,000 in 2021, 411,000 in 2022 and 421,000 in 2023 – primarily, through Economic and Family Reunification Programs. The benefits of immigration lie in balancing the effects of a greying nation while strengthening Canada’s economy.',
      'According to annual caps (2016 – 2023: 250,000 to 421,000 immigrants per year), IRCC processes permanent resident applications under the following classes:',
      '1. Family Classes (Family and Spousal Sponsorship).',
      '2. Economic Classes (Express Entry: Skilled Worker, Trade, Canadian Experience Class; Provincial Nominee and Business Immigrant).',
      '3. Family Classes (Family and Spousal Sponsorship).',
      '4. Family Classes (Family and Spousal Sponsorship).',

    ]
  },
  substories: [
    {
      title: 'Permanent resident visas',
      introduction: [
        'Foreigners who intend to move to Canada, may apply for a permanent resident visa (PRV) to live in Canada. Permanent residents enjoy social benefits similar to Canadian citizens; however, they are not allowed to vote, hold a Canadian passport, hold a position requiring a high-level security clearance or run for elected office: these rights are reserved for Canadian citizens.',
        'Foreigners from visa-required countries must have a valid passport and a PRV to be permitted to enter and stay in Canada. A PRV is a counterfoil (sticker) issued by a visa or immigration officer that is placed in the passport to indicate that the holder may become a permanent resident on admission to Canada.',
        'Foreigner from visa-exempt countries must have a valid passport and a Confirmation of Permanent Residence (COPR) to be admitted to Canada. A COPR is a white, legal size document issued by a visa or immigration officer.',
        'As noted, a PRV/COPR does not guarantee admission to Canada. However, it permits a foreigner to travel to a Canadian port of entry (POE) by air, sea or land; to request admission to Canada. Finally, a border officer will decide whether to grant entry by reviewing new facts (e.g. criminal charges, marriages, birth of a child).'
      ]
    },
    {
      title: 'Permanent Resident Card',
      introduction: [
        'After landing, IRCC will mail the permanent resident card (PRC) to the newcomer’s home address within three months. The PRC is a wallet-sized, plastic card and used as a status and travel document.',
        'It is best practice to renew the PRC every five years.'
      ]
    },
    {
      title: 'Loss of Permanent Resident Status',
      introduction: [
        'When permanent residents do not fulfill their residency obligation, they loose their status; must leave Canada.',
        'Grounds of inadmissibility may also lead to loss of permanent residence.',
        'Permanent residents who no longer wish to reside in Canada may give up their permanent resident status.'
      ]
    }
  ]
};

const currentSub = ref(-1)

function open(i) {
  if (currentSub.value === i) {
    currentSub.value = -1;
  } else {
    currentSub.value = i;
  }
  document.querySelector('.wrapCollapse').addEventListener('click', function(event) {
    event.preventDefault();
  });
}
</script>

<style scoped>
body {
  background-color: #dfdfdf;
}

#app {
  margin-top: 50px;
}

.wrapCollapse dt {
  display: block;
}

.wrapCollapse dt a {
  display: block;
  padding: 15px;
  background-color: #e4c1b1;
  color: #fff;
  text-shadow: 0px 3px 6px rgb(0,0,0);
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 20px;
}
.wrapCollapse span {
  font-size: 30px;
  margin-top: -5px;
  color: #fff;
  text-decoration: none;
  text-shadow: 0px 3px 6px rgb(0,0,0);
}

.wrapCollapse dt a:hover {
  text-decoration: none;
}

.wrapCollapse dt a.active {
  background-color: #f7e7e0;
  color: #222222;
  text-shadow: 0px 3px 6px rgb(255,255,255);
}

.wrapCollapse dd {
  padding: 0 20px;
  height: 0;
  transition: all 0.5s ease;
  overflow: hidden;
  opacity: 0;
}
.wrapCollapse dd div {
  margin: 20px 0px;
}

.wrapCollapse dd.active {
  height: auto;
  padding: 10px 20px 20px;
  opacity: 1;
  background-color: #f7e7e0;
}

.title {
  font-size: 35px;
  font-weight: 800;
}

.overview {
  font-size: 20px;
  font-weight: 700;
  margin-top: 30px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.introduction_title {
  font-weight: 700;
}

.introduction_title, .introduction_story {
  margin: 20px 0px;
}
</style>