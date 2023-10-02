<script setup>
import { allCards } from './allCards'
</script>

<template>
  <div class="display">
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
        <tr v-for="aCard in allCards" :key="aCard.cardName">
          <td>{{ aCard.cardName }}</td>
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
