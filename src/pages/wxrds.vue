<script setup>
import { ref } from 'vue'

const user = useUserStore()

const testWxrds = ref([
  {
    wxrdvalue: 'test',
    wxrdtype: '',
    content: '',
    related: '',
    uuid: '',
    image: '',
  },
  {
    wxrdvalue: 'test2',
    wxrdtype: '',
    content: '',
    related: '',
    uuid: '',
    image: '',
  },
  {
    wxrdvalue: 'test3',
    wxrdtype: '',
    content: '',
    related: '',
    uuid: '',
    image: '',
  },
])
</script>

<template>
  <p mt-4 text-sm>
    <span opacity-75>Recently attempts:</span>
    <ul>
      <li v-for="otherMyrKi in user.otherMyrKis" :key="otherMyrKi">
        <RouterLink :to="`/myrKiSs/${otherMyrKi}`" replace>
          {{ otherMyrKi }}
        </RouterLink>
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
