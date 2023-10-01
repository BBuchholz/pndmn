<script setup>
import { ref } from 'vue'

const allCards = ref([
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
