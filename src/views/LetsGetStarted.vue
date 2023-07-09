<template>
  <div class="container rounded shadow mt-5">
    <div class="login-panel">
      <div class="logo-image-text">
        <img alt="SVIC-logo-image" class="logo-image" src="../assets/SVIC_logo.png" />
        <img alt="SVIC-logo-text" class="logo-text" src="../assets/logo-text.png" />
      </div>
    </div>

    <div class="text-center title">GENERAL PRE-ASSESSMENT FORM</div>
    <div class="introduction" v-if="currentState === 1">
      <p>
        The information from this pre-assessment will be used to evaluate if you fulfill the minimum acceptance criteria
        of the program you would like to apply to.
      </p>
      <p>
        Once you are done completing this form, please click submit.
      </p>
      <p>
        After reviewing your completed form an initial consultation appointment will be set up to review your results. If
        you don’t fulfill the criteria, suggestions will be given on areas to focus on to improve your chances and define
        your next steps. If you fulfill the criteria, the consultation will focus on the next steps to apply and proceed
        with your application.
      </p>
    </div>
    <form>
      <div v-if="currentState === 1">
        <div class="input-container">
          <span class="label">Name:</span>
          <div class="text writing">
            <input type="text" id="name" name="name" v-model="name">
            <span></span>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <div class="input-container">
              <span class="label">Age:</span>
              <div class="text writing">
                <input type="text" id="age" name="age" v-model="age">
                <span></span>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="input-container">
              <span class="label">Current country of residence:</span>
              <div class="text writing">
                <input type="text" id="current_country" name="current_country" v-model="current_country">
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div class="input-container">
          <span class="label">Country of citizenship(s):</span>
          <div class="text writing">
            <input type="text" id="country_citizenship" name="country_citizenship" v-model="country_citizenship">
            <span></span>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8">
            <div class="input-container">
              <span class="label">Email:</span>
              <div class="text writing">
                <input type="email" id="email" name="email" v-model="email">
                <span></span>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="input-container">
              <span class="label">Phone:</span>
              <div class="text writing">
                <input type="text" id="phone" name="phone" v-model="phone">
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div class="input-container">
          <span class="label">Highest level of education:</span>
          <div class="text writing">
            <input type="text" id="highest_education" name="highest_education" v-model="highest_education">
            <span></span>
          </div>
        </div>
        <div class="radio">
          <span>Why are you interested in coming to Canada:</span>
          <label for="reasonToCanada">
            <input type="radio" name="reasonToCanada" value="immigration" id="reasonToCanada" v-model="reasonToCanada">
            <div class="view"></div>immigration?
          </label>
          <label>
            <input type="radio" name="reasonToCanada" value="school" v-model="reasonToCanada">
            <div class="view"></div>school?
          </label>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="input-container">
              <span class="label">Occupation:</span>
              <div class="text writing">
                <input type="text" id="occupation" name="occupation" v-model="occupation">
                <span></span>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="input-container">
              <span class="label"># of years of work experience:</span>
              <div class="text writing">
                <input type="text" id="experience_year" name="experience_year" v-model="experience_year">
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div class="input-container">
          <span class="label"># of years of Canadian work experience:</span>
          <div class="text writing">
            <input type="text" id="canadian_experience" name="canadian_experience" v-model="canadian_experience">
            <span></span>
          </div>
        </div>
      </div>
      <div v-if="currentState === 2">
        <p class="question">Have you ever taken an English lanaguage or French language exam?</p>
      </div>
      <div v-if="currentState === 3">
        <table>
          <thead>
            <tr>
              <th rowspan="2">Exam</th>
              <th colspan="5">SCORE</th>
            </tr>
            <tr>
              <th>Writing</th>
              <th>Speaking</th>
              <th>Reading</th>
              <th>Listening</th>
              <th>Overall</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="text" name="exam_name[]" v-model="exam_name[0]" /></td>
              <td><input type="text" name="writing[]" v-model="writing[0]" /></td>
              <td><input type="text" name="speaking[]" v-model="speaking[0]" /></td>
              <td><input type="text" name="reading[]" v-model="reading[0]" /></td>
              <td><input type="text" name="listening[]" v-model="listening[0]" /></td>
              <td><input type="text" name="overall[]" v-model="overall[0]" /></td>
            </tr>
            <tr>
              <td><input type="text" name="exam_name[]" v-model="exam_name[1]" /></td>
              <td><input type="text" name="writing[]" v-model="writing[1]" /></td>
              <td><input type="text" name="speaking[]" v-model="speaking[1]" /></td>
              <td><input type="text" name="reading[]" v-model="reading[1]" /></td>
              <td><input type="text" name="listening[]" v-model="listening[1]" /></td>
              <td><input type="text" name="overall[]" v-model="overall[1]" /></td>
            </tr>
            <tr>
              <td><input type="text" name="exam_name[]" v-model="exam_name[2]" /></td>
              <td><input type="text" name="writing[]" v-model="writing[2]" /></td>
              <td><input type="text" name="speaking[]" v-model="speaking[2]" /></td>
              <td><input type="text" name="reading[]" v-model="reading[2]" /></td>
              <td><input type="text" name="listening[]" v-model="listening[2]" /></td>
              <td><input type="text" name="overall[]" v-model="overall[2]" /></td>
            </tr>
            <tr>
              <td><input type="text" name="exam_name[]" v-model="exam_name[3]" /></td>
              <td><input type="text" name="writing[]" v-model="writing[3]" /></td>
              <td><input type="text" name="speaking[]" v-model="speaking[3]" /></td>
              <td><input type="text" name="reading[]" v-model="reading[3]" /></td>
              <td><input type="text" name="listening[]" v-model="listening[3]" /></td>
              <td><input type="text" name="overall[]" v-model="overall[3]" /></td>
            </tr>
            <tr>
              <td><input type="text" name="exam_name[]" v-model="exam_name[4]" /></td>
              <td><input type="text" name="writing[]" v-model="writing[4]" /></td>
              <td><input type="text" name="speaking[]" v-model="speaking[4]" /></td>
              <td><input type="text" name="reading[]" v-model="reading[4]" /></td>
              <td><input type="text" name="listening[]" v-model="listening[4]" /></td>
              <td><input type="text" name="overall[]" v-model="overall[4]" /></td>
            </tr>
          </tbody>
        </table>
        <div class="input-container">
          <span class="label" style="white-space: break-spaces;">If you would like to apply for a study permit, did you
            apply for your program?</span>
          <div class="text writing">
            <input type="text" id="apply_for_program" name="apply_for_program" v-model="apply_for_program">
            <span></span>
          </div>
        </div>
        <div class="input-container">
          <span class="label" style="white-space: break-spaces;">Do you have letter of acceptance from a designated
            institution?</span>
          <div class="text writing">
            <input type="text" id="acceptance_letter" name="acceptance_letter" v-model="acceptance_letter">
            <span></span>
          </div>
        </div>
      </div>
      <div v-if="currentState === 4">
        <div class="input-container">
          <span class="label">How many children do you have?</span>
          <div class="text writing">
            <select id="children_number" name="children_number" v-model="children_number">
              <option value="">Select number of children</option>
              <option v-for="n in 10" :value="n">{{ n }} {{ n == 1 ? 'child' : 'children' }}</option>
            </select>
          </div>
        </div>

        <div class="row" v-for="(child, index) in Array.from({ length: children_number }, (_, i) => i)" :key="index">
          <div class="col-lg-8">
            <div class="input-container">
              <span class="label">Name:</span>
              <div class="text writing">
                <input type="text" :id="'childname' + index" :name="'childname' + index" v-model="childname[index]">
                <span></span>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="input-container">
              <span class="label">Age:</span>
              <div class="text writing">
                <input type="text" :id="'childage' + index" :name="'childage' + index" v-model="childage[index]">
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="input-container">
          <span class="label">Which program are you interested in?</span>
          <div class="text writing">
            <input type="text" id="interesting_program" name="interesting_program" v-model="interesting_program">
            <span></span>
          </div>
        </div>
        <div class="radio">
          <span style="white-space: break-spaces;">Are you looking to reside in a particular province?</span>
          <label for="particular_province">
            <input type="radio" name="particular_province" value="Yes" id="particular_province"
              v-model="particular_province">
            <div class="view"></div>Yes?
          </label>
          <label>
            <input type="radio" name="particular_province" value="No" v-model="particular_province">
            <div class="view"></div>No?
          </label>
        </div>
        <div class="input-container" v-if="particular_province === 'Yes'">
          <span class="label">if yes, what is your province of choice?</span>
          <div class="text writing">
            <select id="martial_status" name="martial_status" v-model="province_choice">
              <option value="">Select Province</option>
              <option value="Alberta">Alberta</option>
              <option value="British Columbia">British Columbia</option>
              <option value="Manitoba">Manitoba</option>
              <option value="New Brunswick">New Brunswick</option>
              <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
              <option value="Northwest Territories">Northwest Territories</option>
              <option value="Nova Scotia">Nova Scotia</option>
              <option value="Nunavut">Nunavut</option>
              <option value="Ontario">Ontario</option>
              <option value="Prince Edward Island">Prince Edward Island</option>
              <option value="Quebec">Quebec</option>
              <option value="Saskatchewan">Saskatchewan</option>
              <option value="Yukon">Yukon</option>
            </select>
          </div>
        </div>
        <div class="radio">
          <span style="white-space: break-spaces;">Do you have a relative living in Canada who is 18 year’s or older and
            is a Canadian citizen or permanent resident?</span>
          <label for="over_eighteen">
            <input type="radio" name="over_eighteen" value="Yes" id="over_eighteen" v-model="over_eighteen">
            <div class="view"></div>Yes?
          </label>
          <label>
            <input type="radio" name="over_eighteen" value="No" v-model="over_eighteen">
            <div class="view"></div>No?
          </label>
        </div>
        <div class="input-container" v-if="over_eighteen === 'Yes'">
          <span class="label">If yes, what is the relation to you</span>
          <div class="text writing">
            <input type="text" id="relation" name="relation" v-model="relation">
            <span></span>
          </div>
        </div>
        <div class="input-container">
          <span class="label">Marital status:</span>
          <div class="text writing">
            <select id="martial_status" name="martial_status" v-model="martial_status">
              <option value="">Select Martial Status</option>
              <option value="single">Single</option>
              <option value="common law">Common Law</option>
              <option value="married">Married</option>
              <option value="widowed">Widowed</option>
              <option value="divorced">Divorced</option>
              <option value="separated">Separated</option>
            </select>
          </div>
        </div>
      </div>
      <div v-if="currentState === 5">
        <div class="introduction" v-if="currentState === 5">
          <p>
            If you are married or you have a common-law partner, please answer the below questions with her/his
            information:
          </p>
        </div>
        <div class="input-container">
          <span class="label">Name:</span>
          <div class="text writing">
            <input type="text" id="partner_name" name="partner_name" v-model="partner_name">
            <span></span>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <div class="input-container">
              <span class="label">Age:</span>
              <div class="text writing">
                <input type="text" id="partner_age" name="partner_age" v-model="partner_age">
                <span></span>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="input-container">
              <span class="label">Current country of residence:</span>
              <div class="text writing">
                <input type="text" id="partner_residence" name="partner_residence" v-model="partner_residence">
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div class="input-container">
          <span class="label">Country of citizenship(s):</span>
          <div class="text writing">
            <input type="text" id="partner_citizenship" name="partner_citizenship" v-model="partner_citizenship">
            <span></span>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8">
            <div class="input-container">
              <span class="label">Email:</span>
              <div class="text writing">
                <input type="email" id="partner_email" name="partner_email" v-model="partner_email">
                <span></span>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="input-container">
              <span class="label">Phone:</span>
              <div class="text writing">
                <input type="text" id="partner_phone" name="partner_phone" v-model="partner_phone">
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div class="input-container">
          <span class="label">Highest level of education:</span>
          <div class="text writing">
            <input type="text" id="partner_education" name="partner_education" v-model="partner_education">
            <span></span>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="input-container">
              <span class="label">Occupation:</span>
              <div class="text writing">
                <input type="text" id="partner_occupation" name="partner_occupation" v-model="partner_occupation">
                <span></span>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="input-container">
              <span class="label"># of years of work experience:</span>
              <div class="text writing">
                <input type="text" id="partner_experience_year" name="partner_experience_year"
                  v-model="partner_experience_year">
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div class="input-container">
          <span class="label"># of years of Canadian work experience:</span>
          <div class="text writing">
            <input type="text" id="partner_canadian_experience" name="partner_canadian_experience"
              v-model="partner_canadian_experience">
            <span></span>
          </div>
        </div>
      </div>
      <div v-if="currentState === 6">
        <p class="question">If s/he have taken any foreign language tests for English and/or French (eg. IELTS, TOEFL,
          TEF) please write her/his score for each section (writing, speaking, reading, listening) and the test date next:
        </p>
      </div>
      <div v-if="currentState === 7">
        <table>
          <thead>
            <tr>
              <th rowspan="2">Exam</th>
              <th colspan="5">SCORE</th>
            </tr>
            <tr>
              <th>Writing</th>
              <th>Speaking</th>
              <th>Reading</th>
              <th>Listening</th>
              <th>Overall</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="text" name="partner_exam_name[]" v-model="partner_exam_name[0]" /></td>
              <td><input type="text" name="partner_writing[]" v-model="partner_writing[0]" /></td>
              <td><input type="text" name="partner_speaking[]" v-model="partner_speaking[0]" /></td>
              <td><input type="text" name="partner_reading[]" v-model="partner_reading[0]" /></td>
              <td><input type="text" name="partner_listening[]" v-model="partner_listening[0]" /></td>
              <td><input type="text" name="partner_overall[]" v-model="partner_overall[0]" /></td>
            </tr>
            <tr>
              <td><input type="text" name="partner_exam_name[]" v-model="partner_exam_name[1]" /></td>
              <td><input type="text" name="partner_writing[]" v-model="partner_writing[1]" /></td>
              <td><input type="text" name="partner_speaking[]" v-model="partner_speaking[1]" /></td>
              <td><input type="text" name="partner_reading[]" v-model="partner_reading[1]" /></td>
              <td><input type="text" name="partner_listening[]" v-model="partner_listening[1]" /></td>
              <td><input type="text" name="partner_overall[]" v-model="partner_overall[1]" /></td>
            </tr>
            <tr>
              <td><input type="text" name="partner_exam_name[]" v-model="partner_exam_name[2]" /></td>
              <td><input type="text" name="partner_writing[]" v-model="partner_writing[2]" /></td>
              <td><input type="text" name="partner_speaking[]" v-model="partner_speaking[2]" /></td>
              <td><input type="text" name="partner_reading[]" v-model="partner_reading[2]" /></td>
              <td><input type="text" name="partner_listening[]" v-model="partner_listening[2]" /></td>
              <td><input type="text" name="partner_overall[]" v-model="partner_overall[2]" /></td>
            </tr>
            <tr>
              <td><input type="text" name="partner_exam_name[]" v-model="partner_exam_name[3]" /></td>
              <td><input type="text" name="partner_writing[]" v-model="partner_writing[3]" /></td>
              <td><input type="text" name="partner_speaking[]" v-model="partner_speaking[3]" /></td>
              <td><input type="text" name="partner_reading[]" v-model="partner_reading[3]" /></td>
              <td><input type="text" name="partner_listening[]" v-model="partner_listening[3]" /></td>
              <td><input type="text" name="partner_overall[]" v-model="partner_overall[3]" /></td>
            </tr>
            <tr>
              <td><input type="text" name="partner_exam_name[]" v-model="partner_exam_name[4]" /></td>
              <td><input type="text" name="partner_writing[]" v-model="partner_writing[4]" /></td>
              <td><input type="text" name="partner_speaking[]" v-model="partner_speaking[4]" /></td>
              <td><input type="text" name="partner_reading[]" v-model="partner_reading[4]" /></td>
              <td><input type="text" name="partner_listening[]" v-model="partner_listening[4]" /></td>
              <td><input type="text" name="partner_overall[]" v-model="partner_overall[4]" /></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="currentState === 8">
        <div class="radio">
          <span>Is there anything else you want to add?</span>
          <label for="wanna_add">
            <input type="radio" name="wanna_add" value="yes" id="wanna_add" v-model="wanna_add">
            <div class="view"></div>Yes?
          </label>
          <label>
            <input type="radio" name="wanna_add" value="no" v-model="wanna_add">
            <div class="view"></div>No?
          </label>
        </div>
        <div class="input-container" v-if="wanna_add === 'yes'">
          <span class="label">If yes, please write below:</span>
          <div class="text writing">
            <input type="text" id="add" name="add">
            <span></span>
          </div>
        </div>
      </div>
      <div class="button-container">
        <!-- <button type="button" class="btn btn-danger text-light" v-if="currentState !== 1" @click="decrease(1)">Preview</button> -->
        <button type="button" class="btn btn-danger text-light" v-if="currentState === 1"
          @click="increase(1)">Next</button>
        <button type="button" class="btn btn-danger text-light" v-if="currentState === 2"
          @click="decrease(1)">Previous</button>
        <button type="button" class="btn btn-primary text-light" v-if="currentState === 2"
          @click="increase(2)">No</button>
        <button type="button" class="btn btn-primary text-light" v-if="currentState === 2"
          @click="increase(1)">Yes</button>
        <button type="button" class="btn btn-danger text-light" v-if="currentState === 3"
          @click="decrease(1)">Previous</button>
        <button type="button" class="btn btn-danger text-light" v-if="currentState === 3"
          @click="increase(1)">Next</button>
        <button type="button" class="btn btn-danger text-light" v-if="currentState === 4"
          @click="decrease(2)">Previous</button>
        <button type="button" class="btn btn-danger text-light"
          v-if="currentState === 4 && (martial_status === 'married' || martial_status === 'common law' || martial_status === '')"
          @click="increase(1)">Next</button>
        <button type="button" class="btn btn-danger text-light"
          v-if="currentState === 4 && (martial_status === 'single' || martial_status === 'divorced' || martial_status === 'widowed' || martial_status === 'separated')"
          @click="increase(4)">Next</button>
        <button type="button" class="btn btn-danger text-light"
          v-if="currentState === 8 && (martial_status === 'married' || martial_status === 'common law' || martial_status === '')"
          @click="decrease(1)">Previous</button>
        <button type="button" class="btn btn-danger text-light"
          v-if="currentState === 8 && (martial_status === 'single' || martial_status === 'divorced' || martial_status === 'widowed' || martial_status === 'separated')"
          @click="decrease(4)">Previous</button>
        <button type="button" class="btn btn-danger text-light" v-if="currentState === 5"
          @click="decrease(1)">Previous</button>
        <button type="button" class="btn btn-danger text-light" v-if="currentState === 5"
          @click="increase(1)">Next</button>
        <button type="button" class="btn btn-danger text-light" v-if="currentState === 6"
          @click="decrease(1)">Previous</button>
        <button type="button" class="btn btn-primary text-light" v-if="currentState === 6"
          @click="increase(2)">No</button>
        <button type="button" class="btn btn-primary text-light" v-if="currentState === 6"
          @click="increase(1)">Yes</button>
        <button type="button" class="btn btn-danger text-light" v-if="currentState === 7"
          @click="decrease(1)">Previous</button>
        <button type="button" class="btn btn-danger text-light" v-if="currentState === 7"
          @click="increase(1)">Next</button>
        <!-- <button type="button" class="btn btn-danger text-light" v-if="currentState === 8"
          @click="decrease(2)">Previous</button> -->
        <button type="submit" class="btn btn-info text-light" v-if="currentState === 8 && !spin"
          @click="sendEmail">Submit</button>
        <svg v-if="spin" id="loading-spinner" xmlns="http://www.w3.org/2000/svg" width="48" height="48"
          viewBox="0 0 48 48">
          <g fill="none">
            <path id="track" fill="#C6CCD2"
              d="M24,48 C10.745166,48 0,37.254834 0,24 C0,10.745166 10.745166,0 24,0 C37.254834,0 48,10.745166 48,24 C48,37.254834 37.254834,48 24,48 Z M24,44 C35.045695,44 44,35.045695 44,24 C44,12.954305 35.045695,4 24,4 C12.954305,4 4,12.954305 4,24 C4,35.045695 12.954305,44 24,44 Z" />
            <path id="section" fill="#3F4850"
              d="M24,0 C37.254834,0 48,10.745166 48,24 L44,24 C44,12.954305 35.045695,4 24,4 L24,0 Z">
              <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 24 24" to="360 24 24"
                dur="1s" repeatCount="indefinite" />
            </path>
          </g>
        </svg>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const currentState = ref(1);

let spin = ref(false);

let name = ref('');
let age = ref('');
let current_country = ref('');
let country_citizenship = ref('');
let email = ref('');
let phone = ref('');
let highest_education = ref('');
let reasonToCanada = ref('');
let occupation = ref('');
let experience_year = ref('');
let canadian_experience = ref('');

let english_test = ref('');

let exam_name = ref(['', '', '', '', '']);
let writing = ref(['', '', '', '', '']);
let speaking = ref(['', '', '', '', '']);
let reading = ref(['', '', '', '', '']);
let listening = ref(['', '', '', '', '']);
let overall = ref(['', '', '', '', '']);
let acceptance_letter = ref('');
let apply_for_program = ref('');

let children_number = ref('');
let interesting_program = ref('');
let particular_province = ref('');
let province_choice = ref('');
let martial_status = ref('');
let over_eighteen = ref('');
let relation = ref('');
let childname = ref(['','','','','','','','','','']);
let childage = ref(['','','','','','','','','','']);

let partner_name = ref('');
let partner_age = ref('');
let partner_current_country = ref('');
let partner_country_citizenship = ref('');
let partner_citizenship = ref('');
let partner_email = ref('');
let partner_phone = ref('');
let partner_highest_education = ref('');
let partner_opcion = ref('');
let partner_occupation = ref('');
let partner_experience_year = ref('');
let partner_canadian_experience = ref('');
let partner_residence = ref('');

let partner_education = ref('');

let partner_exam_name = ref(['', '', '', '', '']);
let partner_writing = ref(['', '', '', '', '']);
let partner_speaking = ref(['', '', '', '', '']);
let partner_reading = ref(['', '', '', '', '']);
let partner_listening = ref(['', '', '', '', '']);
let partner_overall = ref(['', '', '', '', '']);

let partner_language = ref('');

let add = ref('');
let wanna_add = ref('');

onMounted(() => {
  spin.value = false
})

const composeMessage = () => {
  let html = `

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>

.title {
  padding-top: 10px;
  font-size: 30px;
  font-weight: 700;
}

.login-panel {
  padding-top: 40px;
  background-color: white;
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: center;
  zoom: 0.8;
}

.logo-image-text {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}

.logo-image {
  width: 200px;
  margin-left: -20px;
}

.logo-text {
  height: 100px;
  margin-left: -40px;
}

.introduction {
  padding-top: 30px;
}

p {
  text-align: center;
  padding: 0px 5vw;
  font-size: 20px;
  font-weight: 500;
}

input,
textarea {
  background: transparent;
  border: 0;
  outline: 0;
  font-size: 1em;
  color: #333333;
  width: 100%;
}

.writing {
  position: relative;
  width: -webkit-fill-available;
}

.textarea textarea {
  overflow: auto;
  min-height: calc(1em + 20px);
  height: 1.2em;
  overflow: hidden;
  resize: none;
}

form {
  padding: 30px 5vw;
}

.input-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 15px;
}

.label {
  margin-right: 10px;
  font-size: larger;
  font-weight: 500;
  white-space: nowrap;
}

.button-container {
  padding: 20px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.button-container button {
  margin: 0px 10px;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  text-align: center;
  padding: 8px;
  border: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
  font-weight: bold;
}

tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}


.radio {
  padding-top: 15px;
  display: flex;
  flex-direction: row;
  gap: .5em;
  font-size: larger;
  font-weight: 500;
  align-items: center;
}

.radio label {
  display: flex;
  align-items: center;
  gap: .5em;
  width: max-content;
  cursor: pointer;
}

.radio input {
  display: none;
}

.radio .view {
  width: 1em;
  height: 1em;
  margin: 0.5em;
  background: rgb(255, 255, 255);
  border-radius: 50%;
  position: relative;
  padding: 0.15em;
  border: 2px solid #383838;
}

  </style>
</head>

<body>

  <h1>GENERAL PRE-ASSESSMENT FORM</h1>

  <div>
    <div class="input-container">
      <span class="label">Name:</span>
      <div class="text writing">
        <input type="text" id="name" name="name" value="${name.value}">
        <span></span>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <div class="input-container">
          <span class="label">Age:</span>
          <div class="text writing">
            <input type="text" id="age" name="age" value="${age.value}">
            <span></span>
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="input-container">
          <span class="label">Current country of residence:</span>
          <div class="text writing">
            <input type="text" id="current_country" name="current_country" value="${current_country.value.value}">
            <span></span>
          </div>
        </div>
      </div>
    </div>
    <div class="input-container">
      <span class="label">Country of citizenship(s):</span>
      <div class="text writing">
        <input type="text" id="country_citizenship" name="country_citizenship" value="${country_citizenship.value.value}">
        <span></span>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8">
        <div class="input-container">
          <span class="label">Email:</span>
          <div class="text writing">
            <input type="email" id="email" name="email" value="${email.value.value}">
            <span></span>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="input-container">
          <span class="label">Phone:</span>
          <div class="text writing">
            <input type="text" id="phone" name="phone" value="${phone.value}">
            <span></span>
          </div>
        </div>
      </div>
    </div>
    <div class="input-container">
      <span class="label">Highest level of education:</span>
      <div class="text writing">
        <input type="text" id="highest_education" name="highest_education" value="${highest_education.value}">
        <span></span>
      </div>
    </div>
    <div class="input-container">
      <span class="label">Why are you interested in coming to Canada:</span>
      <div class="text writing">
        <input type="text" id="reasonToCanada" name="reasonToCanada" value="${reasonToCanada.value}">
        <span></span>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="input-container">
          <span class="label">Occupation:</span>
          <div class="text writing">
            <input type="text" id="occupation" name="occupation" value="${occupation.value}">
            <span></span>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="input-container">
          <span class="label"># of years of work experience:</span>
          <div class="text writing">
            <input type="text" id="experience_year" name="experience_year" value="${experience_year.value}">
            <span></span>
          </div>
        </div>
      </div>
    </div>
    <div class="input-container">
      <span class="label"># of years of Canadian work experience:</span>
      <div class="text writing">
        <input type="text" id="canadian_experience" name="canadian_experience" value="${canadian_experience.value}">
        <span></span>
      </div>
    </div>
  </div>
  <div>
    <p class="question">Have you ever taken an English lanaguage or French language exam?</p>
  </div>
  <div>
    <table>
      <thead>
        <tr>
          <th rowspan="2">Exam</th>
          <th colspan="5">SCORE</th>
        </tr>
        <tr>
          <th>Writing</th>
          <th>Speaking</th>
          <th>Reading</th>
          <th>Listening</th>
          <th>Overall</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="text" name="exam_name[]" value="${exam_name.value[0]}" /></td>
          <td><input type="text" name="writing[]" value="${writing.value[0]}" /></td>
          <td><input type="text" name="speaking[]" value="${speaking.value[0]}" /></td>
          <td><input type="text" name="reading[]" value="${reading.value[0]}" /></td>
          <td><input type="text" name="listening[]" value="${listening.value[0]}" /></td>
          <td><input type="text" name="overall[]" value="${overall.value[0]}" /></td>
        </tr>
        <tr>
          <td><input type="text" name="exam_name[]" value="${exam_name.value[1]}" /></td>
          <td><input type="text" name="writing[]" value="${writing.value[1]}" /></td>
          <td><input type="text" name="speaking[]" value="${speaking.value[1]}" /></td>
          <td><input type="text" name="reading[]" value="${reading.value[1]}" /></td>
          <td><input type="text" name="listening[]" value="${listening.value[1]}" /></td>
          <td><input type="text" name="overall[]" value="${overall.value[1]}" /></td>
        </tr>
        <tr>
          <td><input type="text" name="exam_name[]" value="${exam_name.value[2]}" /></td>
          <td><input type="text" name="writing[]" value="${writing.value[2]}" /></td>
          <td><input type="text" name="speaking[]" value="${speaking.value[2]}" /></td>
          <td><input type="text" name="reading[]" value="${reading.value[2]}" /></td>
          <td><input type="text" name="listening[]" value="${listening.value[2]}" /></td>
          <td><input type="text" name="overall[]" value="${overall.value[2]}" /></td>
        </tr>
        <tr>
          <td><input type="text" name="exam_name[]" value="${exam_name.value[3]}" /></td>
          <td><input type="text" name="writing[]" value="${writing.value[3]}" /></td>
          <td><input type="text" name="speaking[]" value="${speaking.value[3]}" /></td>
          <td><input type="text" name="reading[]" value="${reading.value[3]}" /></td>
          <td><input type="text" name="listening[]" value="${listening.value[3]}" /></td>
          <td><input type="text" name="overall[]" value="${overall.value[3]}" /></td>
        </tr>
        <tr>
          <td><input type="text" name="exam_name[]" value="${exam_name.value[4]}" /></td>
          <td><input type="text" name="writing[]" value="${writing.value[4]}" /></td>
          <td><input type="text" name="speaking[]" value="${speaking.value[4]}" /></td>
          <td><input type="text" name="reading[]" value="${reading.value[4]}" /></td>
          <td><input type="text" name="listening[]" value="${listening.value[4]}" /></td>
          <td><input type="text" name="overall[]" value="${overall.value[4]}" /></td>
        </tr>
      </tbody>
    </table>
    <div class="input-container">
      <span class="label" style="white-space: break-spaces;">If you would like to apply for a study permit, did you
        apply for your program?</span>
      <div class="text writing">
        <input type="text" id="apply_for_program" name="apply_for_program" value="${apply_for_program.value}">
        <span></span>
      </div>
    </div>
    <div class="input-container">
      <span class="label" style="white-space: break-spaces;">Do you have letter of acceptance from a designated
        institution?</span>
      <div class="text writing">
        <input type="text" id="acceptance_letter" name="acceptance_letter" value="${acceptance_letter.value}">
        <span></span>
      </div>
    </div>
  </div>
  <div>
    <div class="input-container">
      <span class="label">How many children do you have? : ${children_number.value}</span>
    </div>

    <div class="row">
      <div class="col-lg-12">
        ${childname.value[0]} : ${childage.value[0]}
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        ${childname.value[1]} : ${childage.value[1]}
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        ${childname.value[2]} : ${childage.value[2]}
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        ${childname.value[3]} : ${childage.value[3]}
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        ${childname.value[4]} : ${childage.value[4]}
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        ${childname.value[5]} : ${childage.value[5]}
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        ${childname.value[6]} : ${childage.value[6]}
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        ${childname.value[7]} : ${childage.value[7]}
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        ${childname.value[8]} : ${childage.value[8]}
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        ${childname.value[9]} : ${childage.value[9]}
      </div>
    </div>
    <hr />
    <div class="input-container">
      <span class="label">Which program are you interested in?</span>
      <div class="text writing">
        <input type="text" id="interesting_program" name="interesting_program" value="${interesting_program.value}">
        <span></span>
      </div>
    </div>
    <div class="input-container">
      <span class="label">Are you looking to reside in a particular province?</span>
      <div class="text writing">
        <input type="text" id="particular_province" name="particular_province" value="${particular_province.value}">
        <span></span>
      </div>
    </div>
    <div class="input-container">
      <span class="label">if yes, what is your province of choice?</span>
      <div class="text writing">
        <input type="text" id="province_choice" name="province_choice" value="${province_choice.value}">
        <span></span>
      </div>
    </div>
    <div class="input-container">
      <span class="label">Do you have a relative living in Canada who is 18 year’s or older and
        is a Canadian citizen or permanent resident?</span>
      <div class="text writing">
        <input type="text" id="over_eighteen" name="over_eighteen" value="${over_eighteen.value}">
        <span></span>
      </div>
    </div>
    <div class="input-container">
      <span class="label">If yes, what is the relation to you</span>
      <div class="text writing">
        <input type="text" id="relation" name="relation" value="${relation.value}">
        <span></span>
      </div>
    </div>
    <div class="input-container">
      <span class="label">Marital status:</span>
      <div class="text writing">
        <input type="text" id="martial_status" name="martial_status" value="${martial_status.value}">
        <span></span>
      </div>
    </div>
  </div>
  <div>
    <div class="introduction">
      <p>
        If you are married or you have a common-law partner, please answer the below questions with her/his
        information:
      </p>
    </div>
    <div class="input-container">
      <span class="label">Name:</span>
      <div class="text writing">
        <input type="text" id="partner_name" name="partner_name" value="${partner_name.value}">
        <span></span>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <div class="input-container">
          <span class="label">Age:</span>
          <div class="text writing">
            <input type="text" id="partner_age" name="partner_age" value="${partner_age.value}">
            <span></span>
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="input-container">
          <span class="label">Current country of residence:</span>
          <div class="text writing">
            <input type="text" id="partner_residence" name="partner_residence" value="${partner_residence.value}">
            <span></span>
          </div>
        </div>
      </div>
    </div>
    <div class="input-container">
      <span class="label">Country of citizenship(s):</span>
      <div class="text writing">
        <input type="text" id="partner_citizenship" name="partner_citizenship" value="${partner_citizenship.value}">
        <span></span>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8">
        <div class="input-container">
          <span class="label">Email:</span>
          <div class="text writing">
            <input type="email" id="partner_email" name="partner_email" value="${partner_email.value}">
            <span></span>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="input-container">
          <span class="label">Phone:</span>
          <div class="text writing">
            <input type="text" id="partner_phone" name="partner_phone" value="${partner_phone.value}">
            <span></span>
          </div>
        </div>
      </div>
    </div>
    <div class="input-container">
      <span class="label">Highest level of education:</span>
      <div class="text writing">
        <input type="text" id="partner_education" name="partner_education" value="${partner_education.value}">
        <span></span>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="input-container">
          <span class="label">Occupation:</span>
          <div class="text writing">
            <input type="text" id="partner_occupation" name="partner_occupation" value="${partner_occupation.value}">
            <span></span>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="input-container">
          <span class="label"># of years of work experience:</span>
          <div class="text writing">
            <input type="text" id="partner_experience_year" name="partner_experience_year"
              value="${partner_experience_year.value}">
            <span></span>
          </div>
        </div>
      </div>
    </div>
    <div class="input-container">
      <span class="label"># of years of Canadian work experience:</span>
      <div class="text writing">
        <input type="text" id="partner_canadian_experience" name="partner_canadian_experience"
          value="${partner_canadian_experience.value}">
        <span></span>
      </div>
    </div>
  </div>
  <div>
    <p class="question">If s/he have taken any foreign language tests for English and/or French (eg. IELTS, TOEFL,
      TEF) please write her/his score for each section (writing, speaking, reading, listening) and the test date next:
    </p>
  </div>
  <div>
    <table>
      <thead>
        <tr>
          <th rowspan="2">Exam</th>
          <th colspan="5">SCORE</th>
        </tr>
        <tr>
          <th>Writing</th>
          <th>Speaking</th>
          <th>Reading</th>
          <th>Listening</th>
          <th>Overall</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="text" name="partner_exam_name[]" value="${partner_exam_name.value[0]}" /></td>
          <td><input type="text" name="partner_writing[]" value="${partner_writing.value[0]}" /></td>
          <td><input type="text" name="partner_speaking[]" value="${partner_speaking.value[0]}" /></td>
          <td><input type="text" name="partner_reading[]" value="${partner_reading.value[0]}" /></td>
          <td><input type="text" name="partner_listening[]" value="${partner_listening.value[0]}" /></td>
          <td><input type="text" name="partner_overall[]" value="${partner_overall.value[0]}" /></td>
        </tr>
        <tr>
          <td><input type="text" name="partner_exam_name[]" value="${partner_exam_name.value[1]}" /></td>
          <td><input type="text" name="partner_writing[]" value="${partner_writing.value[1]}" /></td>
          <td><input type="text" name="partner_speaking[]" value="${partner_speaking.value[1]}" /></td>
          <td><input type="text" name="partner_reading[]" value="${partner_reading.value[1]}" /></td>
          <td><input type="text" name="partner_listening[]" value="${partner_listening.value[1]}" /></td>
          <td><input type="text" name="partner_overall[]" value="${partner_overall.value[1]}" /></td>
        </tr>
        <tr>
          <td><input type="text" name="partner_exam_name[]" value="${partner_exam_name.value[2]}" /></td>
          <td><input type="text" name="partner_writing[]" value="${partner_writing.value[2]}" /></td>
          <td><input type="text" name="partner_speaking[]" value="${partner_speaking.value[2]}" /></td>
          <td><input type="text" name="partner_reading[]" value="${partner_reading.value[2]}" /></td>
          <td><input type="text" name="partner_listening[]" value="${partner_listening.value[2]}" /></td>
          <td><input type="text" name="partner_overall[]" value="${partner_overall.value[2]}" /></td>
        </tr>
        <tr>
          <td><input type="text" name="partner_exam_name[]" value="${partner_exam_name.value[3]}" /></td>
          <td><input type="text" name="partner_writing[]" value="${partner_writing.value[3]}" /></td>
          <td><input type="text" name="partner_speaking[]" value="${partner_speaking.value[3]}" /></td>
          <td><input type="text" name="partner_reading[]" value="${partner_reading.value[3]}" /></td>
          <td><input type="text" name="partner_listening[]" value="${partner_listening.value[3]}" /></td>
          <td><input type="text" name="partner_overall[]" value="${partner_overall.value[3]}" /></td>
        </tr>
        <tr>
          <td><input type="text" name="partner_exam_name[]" value="${partner_exam_name.value[4]}" /></td>
          <td><input type="text" name="partner_writing[]" value="${partner_writing.value[4]}" /></td>
          <td><input type="text" name="partner_speaking[]" value="${partner_speaking.value[4]}" /></td>
          <td><input type="text" name="partner_reading[]" value="${partner_reading.value[4]}" /></td>
          <td><input type="text" name="partner_listening[]" value="${partner_listening.value[4]}" /></td>
          <td><input type="text" name="partner_overall[]" value="${partner_overall.value[4]}" /></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div>
    <div class="input-container">
      <span class="label">If yes, please write below:</span>
      <div class="text writing">
        <input type="text" id="add" name="add">
        <span></span>
      </div>
    </div>
  </div>
</body>

</html>
  `;


  return html;
}

const decrease = amount => {
  currentState.value = currentState.value > 1 ? currentState.value - amount : 1;
};

const increase = amount => {
  if (currentState === 2) {
    if (amount === 2) {
      english_test.value = 'No'
    } else {
      english_test.value = 'Yes'
    }
  }
  if (currentState === 6) {
    if (amount === 2) {
      partner_language.value = 'No'
    } else {
      partner_language.value = 'Yes'
    }
  }

  currentState.value = currentState.value < 10 ? currentState.value + amount : 10;
};

const sendEmail = async (e) => {
  spin.value = true;
  if (email.value && name.value) {
    e.preventDefault();

    const message = await composeMessage();

    const body = {
      name: name.value,
      email: email.value,
      subject: 'PRE-ASSESSMENT FORM',
      message: message,
    }

    await axios.post('/mail', body, {
      headers: {
        'Content-type': 'application/json'
      }
    }).then((res) => {
      alert('Email Sent Successfully')
      console.log(res)
      // window.location.reload()
    }).catch((err) => {
      console.log(err)
    });

  } else {
    alert('Please fill all required filled')
  }
  spin.value = false;
}


document.querySelectorAll('.writing :is(input , textarea)').forEach(writinginput => {
  writinginput.addEventListener('input', () => {
    if (writinginput.value.trim() !== '') {
      writinginput.classList.add('has-text');
    } else {
      writinginput.classList.remove('has-text');
    }
  });
});


/* Alto de textarea */
document.querySelectorAll('.textarea textarea').forEach(textarea => {
  textarea.addEventListener('input', () => {
    textarea.style.height = '1em';
    const scrollHeight = textarea.scrollHeight;
    textarea.style.height = `${scrollHeight.value}px`;
  });
});

</script>

<style>
.title {
  padding-top: 10px;
  font-size: 30px;
  font-weight: 700;
}

.login-panel {
  padding-top: 40px;
  background-color: white;
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: center;
  zoom: 0.8;

  .logo-image-text {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  }

  .logo-image {
    width: 200px;
    margin-left: -20px;
  }

  .logo-text {
    height: 100px;
    margin-left: -40px;
  }
}

.introduction {
  padding-top: 30px;
}

p {
  text-align: center;
  padding: 0px 5vw;
  font-size: 20px;
  font-weight: 500;
}

form>div {
  margin: .7em 0;
  text-align: left;
}

input,
textarea {
  background: transparent;
  border: 0;
  outline: 0;
  font-size: 1em;
  color: #333333;
  width: 100%;
}

.writing {
  position: relative;
  width: -webkit-fill-available;
}

.writing :is(input, textarea) {
  padding: 10px 10px;
}

.writing :is(input, textarea)~span {
  content: "";
  height: 1px;
  width: 100%;
  background: #80808080;
  display: flex;
  justify-content: center;
}

.writing :is(select) {
  height: 35px;
  border-radius: 5px;
  border-top: none;
  border-left: none;
  border-right: none;
}

.writing :is(select):focus {
  border: 2px solid #007bff;
  outline: none;
}

.writing :is(input, textarea):invalid~span {
  background: #ff0000;
}

.writing :is(input, textarea)~span {
  background: #333333;
}

.writing :is(input, textarea)~span:before {
  content: "";
  display: block;
  height: 2px;
  width: 0%;
  background: #03A9F4;
  transition: width .5s ease;
}

.writing :is(input, textarea):focus~span:before {
  width: 100%;
}

/* text y password */

/*
.writing:is(.text , .password) :is(input , input ~ span) {width: 400px;}
*/

/* textarea */
.textarea textarea {
  overflow: auto;
  min-height: calc(1em + 20px);
  height: 1.2em;
  overflow: hidden;
  resize: none;
}

form {
  padding: 30px 5vw;
}

.input-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 15px;
}

.label {
  margin-right: 10px;
  font-size: larger;
  font-weight: 500;
  white-space: nowrap;
}

.button-container {
  padding: 20px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.button-container button {
  margin: 0px 10px;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  text-align: center;
  padding: 8px;
  border: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
  font-weight: bold;
}

tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

table input[type="text"] {
  border: none;
  outline: none;
  text-align: center;
  width: 100%;
}

.radio {
  padding-top: 15px;
  display: flex;
  flex-direction: row;
  gap: .5em;
  font-size: larger;
  font-weight: 500;
  align-items: center;
}

.radio label {
  display: flex;
  align-items: center;
  gap: .5em;
  width: max-content;
  cursor: pointer;
}

.radio input {
  display: none;
}

.radio .view {
  width: 1em;
  height: 1em;
  margin: 0.5em;
  background: rgb(255, 255, 255);
  border-radius: 50%;
  position: relative;
  padding: 0.15em;
  border: 2px solid #383838;
}

.radio .view:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  height: 2.25em;
  width: 2.25em;
  border-radius: 50%;
  background-color: #3399ff26;
  z-index: -1;
  transition: transform .3s ease .5s;
}

.radio label:hover:active .view:before {
  transform: translate(-50%, -50%) scale(1);
  transition: transform .1s ease;
}

.radio .view:after {
  content: "";
  background: #383838;
  display: block;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  transform: scale(0);
  transition: transform .1s ease;
}

.radio input:checked~.view:after {
  transform: scale(1);
}
</style>