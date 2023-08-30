<script setup>
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
