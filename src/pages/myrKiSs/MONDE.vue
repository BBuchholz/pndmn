<script setup>
const ranks = ref([
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
])

const suits = ref([
  'C', 'D', 'S', 'W',
])

const deck = ref([])
const deckLoaded = ref(false)

function loadDeck() {
  deck.value = []

  for (let s = 0; s < suits.value.length; s++) {
    for (let r = 0; r < ranks.value.length; r++) {
      const card = {
        cardKey: ranks.value[r] + suits.value[s],
        rank: ranks.value[r],
        suit: suits.value[s],
      }
      deck.value.push(card)
      // eslint-disable-next-line no-console
      console.log(`loading card ${card.cardKey}`)
    }
  }
  deckLoaded.value = true
  // eslint-disable-next-line no-console
  console.log('deck loaded')
}

function deal() {
  const dealtCard = deck.value.pop()
  // eslint-disable-next-line no-alert
  alert(dealtCard.cardKey)
  if (deck.value.length < 1)
    deckLoaded.value = false
}

// const allCards = ref([
//   {
//     cardKey: '1C',
//     image: '/images/1C.jpg',
//   },
//   {
//     cardKey: '1D',
//     image: '/images/1D.jpg',
//   },
//   {
//     cardKey: '1S',
//     image: '/images/1S.jpg',
//   },
//   {
//     cardKey: '1W',
//     image: '/images/1W.jpg',
//   },
//   {
//     cardKey: '2C',
//     image: '/images/2C.jpg',
//   },
//   {
//     cardKey: '2D',
//     image: '/images/2D.jpg',
//   },
//   {
//     cardKey: '2S',
//     image: '/images/2S.jpg',
//   },
//   {
//     cardKey: '2W',
//     image: '/images/2W.jpg',
//   },
//   {
//     cardKey: '3C',
//     image: '/images/3C.jpg',
//   },
//   {
//     cardKey: '3D',
//     image: '/images/3D.jpg',
//   },
//   {
//     cardKey: '3S',
//     image: '/images/3S.jpg',
//   },
//   {
//     cardKey: '3W',
//     image: '/images/3W.jpg',
//   },
//   {
//     cardKey: '4C',
//     image: '/images/4C.jpg',
//   },
//   {
//     cardKey: '4D',
//     image: '/images/4D.jpg',
//   },
//   {
//     cardKey: '4S',
//     image: '/images/4S.jpg',
//   },
//   {
//     cardKey: '4W',
//     image: '/images/4W.jpg',
//   },
//   {
//     cardKey: '5C',
//     image: '/images/5C.jpg',
//   },
//   {
//     cardKey: '5D',
//     image: '/images/5D.jpg',
//   },
//   {
//     cardKey: '5S',
//     image: '/images/5S.jpg',
//   },
//   {
//     cardKey: '5W',
//     image: '/images/5W.jpg',
//   },
//   {
//     cardKey: '6C',
//     image: '/images/6C.jpg',
//   },
//   {
//     cardKey: '6D',
//     image: '/images/6D.jpg',
//   },
//   {
//     cardKey: '6S',
//     image: '/images/6S.jpg',
//   },
//   {
//     cardKey: '6W',
//     image: '/images/6W.jpg',
//   },
//   {
//     cardKey: '7C',
//     image: '/images/7C.jpg',
//   },
//   {
//     cardKey: '7D',
//     image: '/images/7D.jpg',
//   },
//   {
//     cardKey: '7S',
//     image: '/images/7S.jpg',
//   },
//   {
//     cardKey: '7W',
//     image: '/images/7W.jpg',
//   },
//   {
//     cardKey: '8C',
//     image: '/images/8C.jpg',
//   },
//   {
//     cardKey: '8D',
//     image: '/images/8D.jpg',
//   },
//   {
//     cardKey: '8S',
//     image: '/images/8S.jpg',
//   },
//   {
//     cardKey: '8W',
//     image: '/images/8W.jpg',
//   },
//   {
//     cardKey: '9C',
//     image: '/images/9C.jpg',
//   },
//   {
//     cardKey: '9D',
//     image: '/images/9D.jpg',
//   },
//   {
//     cardKey: '9S',
//     image: '/images/9S.jpg',
//   },
//   {
//     cardKey: '9W',
//     image: '/images/9W.jpg',
//   },
//   {
//     cardKey: '10C',
//     image: '/images/10C.jpg',
//   },
//   {
//     cardKey: '10D',
//     image: '/images/10D.jpg',
//   },
//   {
//     cardKey: '10S',
//     image: '/images/10S.jpg',
//   },
//   {
//     cardKey: '10W',
//     image: '/images/10W.jpg',
//   },
// ])

const leftTopSelected = ref(false)
const middleTopSelected = ref(false)
const rightTopSelected = ref(false)
const leftBottomSelected = ref(false)
const middleBottomSelected = ref(false)
const rightBottomSelected = ref(false)

function leftTopSelect() {
  leftTopSelected.value = !leftTopSelected.value
}

function middleTopSelect() {
  middleTopSelected.value = !middleTopSelected.value
}

function rightTopSelect() {
  rightTopSelected.value = !rightTopSelected.value
}

function leftBottomSelect() {
  leftBottomSelected.value = !leftBottomSelected.value
}

function middleBottomSelect() {
  middleBottomSelected.value = !middleBottomSelected.value
}

function rightBottomSelect() {
  rightBottomSelected.value = !rightBottomSelected.value
}
</script>

<template>
  <div class="grid-container">
    <div class="buttonsLeft">
      buttonsLeft
    </div>

    <div class="buttonsMiddle">
      buttonsMiddle
      <button
        v-if="!deckLoaded.value"
        @click="loadDeck"
      >
        shuffle
      </button>
      <button
        v-else
        @click="deal"
      >
        deal
      </button>
    </div>

    <div class="buttonsRight">
      buttonsRight
    </div>

    <div class="header1">
      <h2>header1</h2>
    </div>
    <div class="header2">
      <h2>header2</h2>
    </div>

    <div class="leftTop">
      <div
        :class="{ shake: leftTopSelected }"
        @click="leftTopSelect"
      >
        Card
      </div>
    </div>
    <div class="middleTop">
      <div
        :class="{ shake: middleTopSelected }"
        @click="middleTopSelect"
      >
        Card
      </div>
    </div>
    <div class="rightTop">
      <div
        :class="{ shake: rightTopSelected }"
        @click="rightTopSelect"
      >
        Card
      </div>
    </div>

    <div class="leftBottom">
      <div
        :class="{ shake: leftBottomSelected }"
        @click="leftBottomSelect"
      >
        Card
      </div>
    </div>
    <div class="middleBottom">
      <div
        :class="{ shake: middleBottomSelected }"
        @click="middleBottomSelect"
      >
        Card
      </div>
    </div>
    <div class="rightBottom">
      <div
        :class="{ shake: rightBottomSelected }"
        @click="rightBottomSelect"
      >
        Card
      </div>
    </div>

    <div class="footer1">
      <p>footer1</p>
    </div>
    <div class="footer2">
      <p>footer2</p>
    </div>
  </div>
</template>

<style>
.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  border: solid
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}

* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

/* Style the buttonsLeft */
.buttonsLeft {
  grid-area: buttonsLeft;
  background-color: darkgray;
  padding: 30px;
  text-align: center;
}

/* Style the buttonsMiddle */
.buttonsMiddle {
  grid-area: buttonsMiddle;
  background-color: darkgray;
  padding: 30px;
  text-align: center;
}

/* Style the buttonsRight */
.buttonsRight {
  grid-area: buttonsRight;
  background-color: darkgray;
  padding: 30px;
  text-align: center;
}

/* Style the header */
.header1 {
  grid-area: header1;
  background-color: darkgray;
  padding: 30px;
  text-align: center;
  font-size: 35px;
}

/* Style the header */
.header2 {
  grid-area: header2;
  background-color: darkgray;
  padding: 30px;
  text-align: center;
  font-size: 35px;
}

/* Style the footer1 */
.footer1 {
  grid-area: footer1;
  background-color: darkgray;
  padding: 30px;
  text-align: center;
  font-size: 35px;
}

/* Style the footer2 */
.footer2 {
  grid-area: footer2;
  background-color: darkgray;
  padding: 30px;
  text-align: center;
  font-size: 35px;
}

/* The grid container */
.grid-container {
  display: grid;
  grid-template-areas:
    'buttonsLeft buttonsLeft buttonsMiddle buttonsMiddle buttonsRight buttonsRight'
    'header1 header1 header1 header2 header2 header2'
    'leftTop leftTop middleTop middleTop rightTop rightTop'
    'leftBottom leftBottom middleBottom middleBottom rightBottom rightBottom'
    'footer1 footer1 footer1 footer2 footer2 footer2';
  gap: 20px;
  margin: 20px;
}

.leftTop,
.leftBottom,
.middleTop,
.middleBottom,
.rightTop,
.rightBottom {
  padding: 10px;
  height: 300px; /* Should be removed. Only for demonstration */
}

/* Style the leftTop column */
.buttonsLeft {
  grid-area: buttonsLeft;
  background-color: darkgray;
}

/* Style the leftTop column */
.buttonsMiddle {
  grid-area: buttonsMidd.buttonsMiddle;
  background-color: darkgray;
}

/* Style the leftTop column */
.buttonsRight {
  grid-area: buttonsRight;
  background-color: darkgray;
}

/* Style the leftTop column */
.leftTop {
  grid-area: leftTop;
  background-color: darkgray;
}

/* Style the leftBottom column */
.leftBottom {
  grid-area: leftBottom;
  background-color: darkgray;
}

/* Style the middleTop column */
.middleTop {
  grid-area: middleTop;
  background-color: darkgray;
}

/* Style the middleBottom column */
.middleBottom {
  grid-area: middleBottom;
  background-color: darkgray;
}

/* Style the rightTop column */
.rightTop {
  grid-area: rightTop;
  background-color: darkgray;
}

/* Style the rightBottom column */
.rightBottom {
  grid-area: rightBottom;
  background-color: darkgray;
}
</style>
