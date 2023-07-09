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
  title: 'Enforcement and Appeals',
  overview: '',
  introduction_left: {
    title: '',
    story: []
  },
  introduction_right: {
    title: 'How to Appeal Canadian Immigration Decisions?',
    story: [
      'Presently, the right to appeal Canadian immigration decisions is not available in all cases.',
      'Immigration and Refugee Board of Canada',
      'The Immigration and Refugee Board of Canada (IRB) is an independent administrative tribunal that makes decisions on immigration and refugee matters in Canada. It consists of four divisions:',
      '1. Immigration Division (ID),',
      '2. Immigration Appeal Division (IAD),',
      '3. Refugee Protection Division (RPD), and',
      '4. Refugee Appeal Division (RAD).',
    ]
  },
  substories: [
    {
      title: 'Hearings',
      introduction: [
        'The Immigration Division holds admissibility hearings and detention reviews for people who are facing removal from Canada.',
        'Admissibility Hearing – Detention Review',
        'The member (decision-maker) of the Immigration Division conducts hearings regarding admissibility of permanent residents and foreigners, and review of immigration detentions.',
        'The Minister of Public Safety and Emergency Preparedness is represented by a hearings officer who will present the case pro removal, detention or inadmissibility. The individual may self-represent or retain an immigration professional (lawyer, Canadian immigration consultant, paralegal in Ontario and notary in Quebec) to assist with the proceeding.'
      ]
    },
    {
      title: 'Appeals',
      introduction: [
        'The Immigration Appeal Division hears four types of immigration appeals:',
        '1. sponsorship,',
        '2. removal order,',
        '3. residency obligation, and',
        '4. appeals by the Minister of Public Safety and Emergency Preparedness.',
        'Sponsorship Appeal',
        'A permanent resident or Canadian citizen whose application to sponsor a family member to Canada was refused by Immigration, Refugees and Citizenship Canada (IRCC) may appeal to the Immigration Appeal Division.',
        'Removal Order Appeal',
        'Permanent resident visa holders, permanent residents, refugees or protected persons, who have received a removal order, may lodge a removal order appeal.',
        'Residency Obligation Appeal',
        'Permanent residents who have been found by a Canadian visa office that they did not meet their residency obligation, may make a residency obligation appeal (loss-of-permanent-residence appeal).',
        'Minister’s Appeal',
        'The Minister of Public Safety represented by a hearings officer may appeal to the Immigration Appeal Division against a decision made by the Immigration Division at an admissibility hearing holding that the individual may remain in Canada.',
        'The appeal process begins with filing the Notice of Appeal (form) at the Immigration and Refugee Board of Canada registry within the time limit. The appellants have the right to be represented by counsel (lawyer, Canadian immigration consultant, paralegal in Ontario and notary in Quebec) at their own expense. Further, they have the right to an interpreter and may call witnesses to support their case.',
        'Federal Court',
        'If the individuals are not satisfied with the decision of the Immigration Appeal Division, they may apply to the Federal Court for leave and judicial review as a self-represented litigant or with the assistance of a lawyer.'
      ]
    },
    {
      title: 'Overcoming Inadmissibility',
      introduction: [
        'Generally, foreigners, temporary residents and permanent residents can be found inadmissible to Canada. Hence, the inadmissible person is not allowed to enter and / or remain in Canada.',
        'Rehabilitation',
        'The individual must apply for rehabilitation to overcome criminal inadmissibility with respect to offences committed outside Canada. To be exempted, the person must show that at least five years have passed since the completion of the sentence (imprisonment, fine, probation, etc.).',
        'Temporary Resident Permit',
        'Otherwise, the individual may request a temporary resident permit (TRP) before entry to Canada. A temporary resident permit (minister’s permit) is only issued in extraordinary circumstances.',
        'Authorization to Return to Canada',
        'During the inadmissibility assessment one of the three following types of removal orders may be issued:',
        '1. departure order,',
        '2. exclusion order, and',
        '3. deportation order.',
        'Departure Order',
        'The individual must leave Canada within 30 days after the departure order has been enforced. Upon re-entry an authorization to return to Canada (ARC) is not needed. If the person did not leave on time, the departure order turns into a deportation order.',
        'Exclusion Order',
        'The person is barred from entering Canada for one year and needs a written authorization to return to Canada within the one-year period after the removal order has been enforced. In misrepresentation cases, one is not allowed to return to Canada within five years, unless authorized in writing.',
        'Deportation Order',
        'One is barred for life, unless authorized to return to Canada.'
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