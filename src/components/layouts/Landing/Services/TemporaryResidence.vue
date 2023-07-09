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
  title: 'Temporary Residence',
  overview: 'Explore Canada! – Canada’s vision of a free, safe and prosperous country draws migrants from all corners of the world.',
  introduction_left: {
    title: '',
    story: []
  },
  introduction_right: {
    title: 'What is Canadian temporary resident status?',
    story: [
      'Foreigners who have Canadian temporary resident status are allowed to visit, work or study in Canada for a limited amount of time. To obtain and maintain Canadian temporary resident status, foreigners must meet the legal requirements to enter and remain in Canada as a visitor, student, worker or temporary resident permit holder.',
      'After an application for Canadian temporary resident status was submitted to an Immigration, Refugees and Citizenship Canada (IRCC) office, the visa officer will decide whether to approve the request and the border officer will determine whether to admit the foreigner on a temporary basis while imposing various terms (e.g. length of stay). Furthermore, temporary residents must comply with general conditions (e.g. to leave Canada by the end of authorized stay; not to study or work without permission, etc.).',
      'According to demand, IRCC processes temporary resident applications under the following categories:'
    ]
  },
  substories: [
    {
      title: 'Electronic travel authorizations',
      introduction: [
        'Foreigners from visa-exempt countries must obtain electronic travel authorizations (eTA), if they want to fly to or transit through Canada by air. Applying for an eTA is an inexpensive online process (C$7 per person). Generally, eTA approvals are sent via email within minutes and are valid for five years.'
      ]
    },
    {
      title: 'Temporary resident visas',
      introduction: [
        'Foreigners from visa-required countries who seek to visit Canada, may apply for a temporary resident visa (TRV) to enter and stay in Canada for up to six months. In contrast, a super visa allows parents and grandparents to join their children and grandchildren in Canada for up to two years. Generally, visitors are not allowed to work, but may study, if the duration of the program is six months or less.',
        'Foreigners from visa-required countries must have a valid passport and a TRV to be permitted to enter and re-enter Canada. A TRV is a counterfoil (sticker) issued by a visa officer that is placed in the passport to indicate that the holder may become a temporary resident on admission to Canada.',
        'As noted, a TRV does not guarantee admission to Canada. However, it permits a foreigner to travel to a Canadian port of entry (POE) by air, sea or land; to request admission to Canada. Finally, a border officer will decide whether to grant entry.'
      ]
    },
    {
      title: 'Study Permits',
      introduction: [
        'Foreigners who wish to study in Canada for more than six months, may apply for a study permit (SP). If granted, the SP will be valid for the duration of the period of study, generally up to four years. Full time students may work part time during their studies.'
      ]
    },
    {
      title: 'Work Permits',
      introduction: [
        'Generally, foreigners who want to work in Canada, need to obtain a work permit (WP). The duration of a work permit will be tied to the length of the contract offered by the Canadian employer, usually one or two years.'
      ]
    },
    {
      title: 'Changes, extensions and loss',
      introduction: [
        'Generally, a visitor cannot be granted an initial WP or SP from an IRCC office within Canada. If approved, the applicant must leave Canada and re-enter to receive a permit at the POE. Sometimes, however, temporary residents may change the category from within Canada.',
        'Temporary resident status may be extended by written request. For example, visitors may apply to IRCC to extend their stay in Canada. If approved, a visitor record (VR) with a new expiry date will be issued.',
        'As long as the renewal application was submitted before the expiry date, the temporary resident will benefit from implied status. Temporary residents under implied status may remain in Canada under the same conditions until a decision is made.',
        'When temporary residents have overstayed, they may be eligible to apply for restoration of status within 90 days of loss, if they continue to comply with the initial conditions. Otherwise, they must depart Canada.'
      ]
    },
    {
      title: 'Temporary resident permits',
      introduction: [
        'Inadmissible foreigners need special permission to enter or remain in Canada. A temporary resident permit (TRP) is only granted in extraordinary cases. To overcome inadmissibility, the officer must be convinced that the reasons for allowing to enter and stay in Canada outweigh any health and safety risks to Canadian society.',
        'Temporary resident status may be extended by written request. For example, visitors may apply to IRCC to extend their stay in Canada. If approved, a visitor record (VR) with a new expiry date will be issued.'
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