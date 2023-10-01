<script setup>
const something = 'test'
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
        <tr>
          <td>Le Mat</td>
          <td>Cardinal</td>
          <td>Fire</td>
          <td />
          <td />
        </tr>
        <tr>
          <td>Chariot</td>
          <td>Fixed</td>
          <td>Air</td>
          <td />
          <td />
        </tr>
        <tr>
          <td>Wheel</td>
          <td>Mutable</td>
          <td>Water</td>
          <td />
          <td />
        </tr>
        <tr>
          <td>Sun</td>
          <td />
          <td />
          <td>Sol</td>
          <td>Leo</td>
        </tr>
        <tr>
          <td>Moon</td>
          <td />
          <td />
          <td>Luna</td>
          <td>Cancer</td>
        </tr>
        <tr>
          <td>Hanged Man</td>
          <td />
          <td />
          <td>Mercury</td>
          <td>Virgo, Gemini</td>
        </tr>
        <tr>
          <td>Lovers</td>
          <td />
          <td />
          <td>Venus</td>
          <td>Libra, Taurus</td>
        </tr>
        <tr>
          <td>Tower</td>
          <td />
          <td />
          <td>Mars</td>
          <td>Aries, Scorpio</td>
        </tr>
        <tr>
          <td>Death</td>
          <td />
          <td>Earth</td>
          <td>Saturn</td>
          <td>Aquarius, Capricorn</td>
        </tr>
        <tr>
          <td>Justice</td>
          <td />
          <td />
          <td>Jupiter</td>
          <td>Pisces, Sagittarius</td>
        </tr>
        <tr>
          <td>Emperor</td>
          <td>Cardinal</td>
          <td>Fire</td>
          <td>Mars</td>
          <td>Aries</td>
        </tr>
        <tr>
          <td>Empress</td>
          <td>Cardinal</td>
          <td>Air</td>
          <td>Venus</td>
          <td>Libra</td>
        </tr>
        <tr>
          <td>Devil</td>
          <td>Fixed</td>
          <td>Earth</td>
          <td>Venus</td>
          <td>Taurus</td>
        </tr>
        <tr>
          <td>Star</td>
          <td>Fixed</td>
          <td>Fire</td>
          <td>Sol</td>
          <td>Leo</td>
        </tr>
        <tr>
          <td>Mountebank</td>
          <td>Mutable</td>
          <td>Air</td>
          <td>Mercury</td>
          <td>Gemini</td>
        </tr>
        <tr>
          <td>Popess</td>
          <td>Cardinal</td>
          <td>Water</td>
          <td>Luna</td>
          <td>Cancer</td>
        </tr>
        <tr>
          <td>Pope</td>
          <td>Cardinal</td>
          <td>Earth</td>
          <td>Saturn</td>
          <td>Capricorn</td>
        </tr>
        <tr>
          <td>Temperance</td>
          <td>Mutable</td>
          <td>Earth</td>
          <td>Mercury</td>
          <td>Virgo</td>
        </tr>
        <tr>
          <td>Hermit</td>
          <td>Fixed</td>
          <td>Water</td>
          <td>Mars</td>
          <td>Scorpio</td>
        </tr>
        <tr>
          <td>World</td>
          <td>Fixed</td>
          <td>Air</td>
          <td>Saturn</td>
          <td>Aquarius</td>
        </tr>
        <tr>
          <td>Judgement</td>
          <td>Mutable</td>
          <td>Water</td>
          <td>Jupiter</td>
          <td>Pisces</td>
        </tr>
        <tr>
          <td>Force</td>
          <td>Mutable</td>
          <td>Fire</td>
          <td>Jupiter</td>
          <td>Sagittarius</td>
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
