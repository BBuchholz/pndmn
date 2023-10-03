<script setup>
import {
  allCards,
  getPotentialMatchesFor,
} from './allCards'

let matches = $ref('')

function nameClicked(cardName) {
  matches = `Matches for ${cardName}: ${getPotentialMatchesFor(cardName)}`
}

function matchesClicked() {
  matches = ''
}
</script>

<template>
  <div
    v-if="matches.trim()"
    class="display"
    @click="matchesClicked"
  >
    {{ matches }}
    (click here to return to table)
  </div>
  <div
    v-if="!matches.trim()"
    class="display"
  >
    <table>
      <thead>
        <tr>
          <th>Card</th>
          <th>Modality</th>
          <th>Element</th>
          <th>Planet</th>
          <th>Sign</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="aCard in allCards"
          :key="aCard.cardName"
        >
          <td
            @click="nameClicked(aCard.cardName)"
          >
            {{ aCard.cardName }}
          </td>
          <td>{{ aCard.modality }}</td>
          <td>{{ aCard.element }}</td>
          <td>{{ aCard.planet }}</td>
          <td>{{ aCard.sign }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
  .display {
    margin: 40px;
  }
  table, th, td {
    border: 1px solid;
    padding: 10px;
  }
</style>
