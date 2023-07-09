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
  title: 'Citizenship',
  overview: '',
  introduction_left: {
    title: '',
    story: []
  },
  introduction_right: {
    title: 'How to Obtain Canadian Citizenship?',
    story: [
      'Canada adopted three methods to confer citizenship: ius soli (citizenship by place of birth), ius sanguinis (citizenship by bloodline) and naturalization (citizenship by law).',
      'Canada adopted several methods to confer citizenship:',
      '1. Citizen by birth on Canadian soil',
      '2. Citizen by descent',
      '3. Citizen by way of grant (naturalization) or resumption',
      '4. Direct citizen by way of grant to persons adopted by a Canadian citizen',
    ]
  },
  substories: [
    {
      title: 'Acquisition',
      introduction: [
        'Generally, a person may acquire Canadian citizenship in three ways:',
        '1. By birth in Canada,',
        '2. By birth outside Canada to a Canadian, or',
        '3. By grant.',
        'Proof',
        'In case of status uncertainty, the individual should refer to “See if you may be a citizen” by IRCC. To ensure that the candidate is a Canadian, the person should apply for a citizenship certificate (proof of citizenship).'
      ]
    },
    {
      title: 'Grant',
      introduction: [
        'Canadian citizenship is granted to permanent residents, after they fulfilled the requirements established by the Citizenship Act.',
        'If adults (at least 18 years old) want to apply for a grant of citizenship, they must have permanent resident status in Canada. Further, adults must have been physically present in Canada for at least 1095 days (three years) out of the last five years before the application.',
        'When assessing whether the applicant meets the residency requirement, keep in mind the following four rules:',
        '1. Every day of physical presence as a permanent resident counts as one day.',
        '2. Every day of residency as a temporary resident or protected person computed as a half day; accumulating to a maximum of 365 days.',
        '3. Time spent serving a sentence or under a probation order in Canada is not considered.',
        '4. Furthermore, government employees and their family members may use time spent outside Canada.',
        'Tips',
        'To calculate the physical presence in Canada, the prospects should record their trips outside Canada in a travel journal.',
        'The best practice is to apply with more than 1095 days of physical presence to avoid any problems with the calculation.',
        'Last but not least, applicants between the ages of 18 and 54 must demonstrate sufficient knowledge in English or French, pass the citizenship test and take the citizenship oath.'
      ]
    },
    {
      title: 'Loss',
      introduction: [
        'Canadian citizenship may be lost only for two reasons: renunciation and revocation.',
        'Renunciation',
        'If Canadian citizens give up (renounce) their Canadian citizenship, they must apply to terminate citizenship. After a senior citizenship judge granted the requests to renounce Canadian citizenship, the applicants lose their rights (right to enter/remain, vote and hold public office in Canada) and privileges (issuance of a passport) as Canadian citizens. Consequently, they will not have status in Canada any longer.',
        'Revocation',
        'The Minister of Citizenship and Immigration (Immigration, Refugees and Citizenship Canada) may remove (revoke) Canadian citizenship as long as the person will not be rendered stateless, for the following two reasons: fraud or misrepresentation. The waiting period for re-applying for Canadian citizenship is ten years.'
      ]
    },
    {
      title: 'Multiple Citizenships',
      introduction: [
        'Since 1977 Canada allows multiple citizenships (dual citizenship). Hence, permanent residents are permitted to become Canadians while retaining their previous nationality.',
        'Specimen',
        'Follow the link to see examples of Canadian citizenship certificates.',
        'Federal Court',
        'If the individuals are not satisfied with the decision of the Immigration Refugees and Citizenship Canada (citizenship officers) or the Citizenship Commission (citizenship judges), they may apply to the Federal Court for leave and judicial review as a self-represented litigant or with the assistance of a lawyer.'
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