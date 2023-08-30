<script setup>
import { ref } from 'vue'

const allCards = ref([
  {
    passCode: 'ADMIT_1',
    wxrdtype: '',
    localDescription: '',
    uuid: '',
    image: '/Myriad_Central.png',
  },
  {
    passCode: 'ADMITONE',
    wxrdtype: '',
    localDescription: '',
    uuid: '',
    image: '/ADMITONE-aee5.png',
  },
  {
    passCode: 'BAOLG1',
    wxrdtype: '',
    localDescription: 'Builders Association Ov Layered Generalists',
    uuid: '',
    image: '/BAOLG-97eb.png',
  },
  {
    passCode: 'BAOLG2',
    wxrdtype: '',
    localDescription: 'Builders Association Ov Layered Generalists',
    uuid: '',
    image: '/BAOLG-0c83.png',
  },
  {
    passCode: 'JUSBEU',
    wxrdtype: '',
    localDescription: 'A Space To Connect To Source, A Place To Find Your Self',
    uuid: '',
    image: '/JUSBEU-60ad_CARD2.png',
  },
  {
    passCode: 'PLAY',
    wxrdtype: '',
    localDescription: 'A Place 4 Musicians 2 Play',
    uuid: '',
    image: '/PLAY-4249.png',
  },
  {
    passCode: 'STS',
    wxrdtype: '',
    localDescription: 'Shepton Transmission Services',
    uuid: '',
    image: '/STS-3ff9.png',
  },
  {
    passCode: 'SYLFAN',
    wxrdtype: '',
    localDescription: 'Sylvan Circle Academy',
    uuid: '',
    image: '/SYLFAN-857a_CARD.png',
  },
  {
    passCode: 'MCCU',
    wxrdtype: '',
    localDescription: 'Myriad Central Credit Union - Giving Credit Where Credit Is Due',
    uuid: '',
    image: '/MCCU-adec_CARD.png',
  },
  {
    passCode: 'AMOS',
    wxrdtype: '',
    localDescription: 'A Myriad Ov Services',
    uuid: '',
    image: '/AMOS-47cb_CARD.png',
  },
  {
    passCode: 'CGBA',
    wxrdtype: '',
    localDescription: 'Coventry Grove Builders Association',
    uuid: '',
    image: '/CGBA-13c9.png',
  },
])
</script>

<template>
  <h1>"cArds OnThA tAble"</h1>
  <p mt-4 text-sm>
    The definitive way to see all "installed" cards on a particular MCN (Myriad Central Node). Anywhere within the Myriad EcoSysTem try typing "CARDS" to see your available options :)
  </p>
  <div class="card">
    <img src="/CARDS-6752_CARD.png">
  </div>
  <p mt-4 text-sm>
    <span opacity-75>Recently attempts:</span>
    <ul>
      <li v-for="aCard in allCards" :key="aCard">
        <div>
          <RouterLink :to="`/myrKiSs/${aCard.passCode}`" replace>
            {{ aCard.passCode }}
            <div class="card">
              <img :src="aCard.image">
            </div>
          </RouterLink>
        </div>
      </li>
    </ul>
  </p>

  <!-- <p>
    Wxrds
  </p>

  <StepInStone
    v-for="wxrd in testWxrds"
    :key="wxrd.uuid"
    :uuid="wxrd.uuid"
    :wxrdvalue="wxrd.wxrdvalue"
    :wxrdtype="wxrd.wxrdtype"
    :content="wxrd.content"
    :related="wxrd.related"
    :image="wxrd.image"
  /> -->
</template>

<style>
  .card {
    max-width: 50%;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    margin-bottom: 50px;
    border: 5px;
    border-color: white;
    border-style: solid;
    border-radius: 1%;
  }
</style>
