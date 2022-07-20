<script setup lang="ts">

import FullPage from '@kaito_kuroba/my-fullpage';
import { onMounted, ref } from 'vue';

const fullPage = new FullPage()
const allPage = ref(HTMLDivElement)

const color = [
  '#cfd5a6',
  '#d5cd79',
  '#d5bc57',
  '#d5a23c'
]

// 设置鼠标事件
document.onwheel = handleScroll
document.addEventListener('wheel', handleScroll)

function handleScroll(e: any) {
  if (e.wheelDelta) {
    if (e.wheelDelta < 0)
      fullPage.next()
    else
      fullPage.prev()
  }
  else {
    if (e.detail > 0)
      fullPage.next()
    else
      fullPage.prev()
  }
}
// 初始化 fullPage
onMounted(() => {
  fullPage.init(allPage.value)
})

function goto(index: number) {
  let page = fullPage.getPageIndex()
  fullPage.srcollToPage(page, index)
  fullPage.setPageIndex(index)
}
function gotoGitHub(){
  window.location.href = "https://github.com/bzpen/my-full-page"
}
</script>
<template>
  <div class="view">
    <div ref="allPage" class="view-page">
      <div class="item-1 ">
        <div class="triangle" @click="gotoGitHub()">
          <img src="../assets/github.png" alt="">
          <div :style="{borderColor: 'transparent transparent ' + color[0] + ' '+ color[0]  }"></div>

        </div>
        <h1 class=" text-7xl text-center font-black pt-80">
          My Full Page
        </h1>
        <div class="flex flex-wrap mx-auto justify-center space-x-2 pt-20">
          <button @click="goto(index)" v-for="item,index in color" :key="item" class="p-3 text-2xl px-10" :style="'background-color: '+ item ">
            {{ index }}
          </button>
        </div>
      </div>
      <div class="item-2">
        <div class="triangle" @click="gotoGitHub()">
          <img src="../assets/github.png" alt="">
          <div :style="{borderColor: 'transparent transparent ' + color[1] + ' '+ color[1]  }"></div>

        </div>
        <h1 class=" text-7xl text-center font-black pt-80">
          My Full Page
        </h1>
        <div class="flex flex-wrap mx-auto justify-center space-x-2 pt-20">
          <button @click="goto(index)" v-for="item,index in color" :key="item" class="p-3 text-2xl px-10" :style="'background-color: '+ item ">
            {{ index }}
          </button>
        </div>
      </div>
      <div class="item-3">
        <div class="triangle" @click="gotoGitHub()">
          <img src="../assets/github.png" alt="">
          <div :style="{borderColor: 'transparent transparent ' + color[2] + ' '+ color[2]  }"></div>

        </div>
        <h1 class=" text-7xl text-center font-black pt-80">
          My Full Page
        </h1>
        <div class="flex flex-wrap mx-auto justify-center space-x-2 pt-20">
          <button @click="goto(index)" v-for="item,index in color" :key="item" class="p-3 text-2xl px-10" :style="'background-color: '+ item ">
            {{ index }}
          </button>
        </div>
      </div>
      <div class="item-4">
        <div class="triangle" @click="gotoGitHub()">
          <img src="../assets/github.png" alt="">
          <div :style="{borderColor: 'transparent transparent ' + color[3] + ' '+ color[3]  }"></div>

        </div>
        <h1 class=" text-7xl text-center font-black pt-80">
          My Full Page
        </h1>
        <div class="flex flex-wrap mx-auto justify-center space-x-2 pt-20">
          <button @click="goto(index)" v-for="item,index in color" :key="item" class="p-3 text-2xl px-10" :style="'background-color: '+ item ">
            {{ index }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.view{
  --bg-color-1 : #cfd5a6;
  --bg-color-2 : #d5cd79;
  --bg-color-3 : #d5bc57;
  --bg-color-4 : #d5a23c;

}
.view{
  position: relative;
  height: 100vh;
  overflow: hidden;
}
.view-page{
  position: absolute;
  top:0%;
  height: 100%;
  width: 100%;
  transition: all ease-in-out 1.4s;
}
.item-1{
  height: 100%;
  width: 100%;
  position: relative;
  background-color: var(--bg-color-1);
}

.item-2{
  height: 100%;
  width: 100%;
  position: relative;
  background-color: var(--bg-color-2);
}

.item-3{
  height: 100%;
  width: 100%;
  position: relative;
  background-color: var(--bg-color-3);
}

.item-4{
  height: 100%;
  width: 100%;
  position: relative;
  background-color: var(--bg-color-4);
}
.triangle{
  position: absolute;
  top: 0px;
  right: 0px;
  border-style: solid;
  border-width: 70px 100px 70px 100px;
  border-color: white white transparent transparent;
  width: 0px;
  height: 0px;
  box-shadow: -7px 4px 20px 0px black;;
}
.triangle img{
  position: relative;
  top:-50px;
  left: -50px;
  max-width: 100px;
  width: 100px;
  height: 100px;
}
.triangle div{
  position: relative;
  top: -170px;
  left: -100px;
  border-width: 70px 100px 70px 100px;
  /* border-color: transparent transparent #cfd5a6 #cfd5a6; */
  cursor: pointer;
  max-width: 100px;
  width: 0px;
  height: 0px;
}

</style>
