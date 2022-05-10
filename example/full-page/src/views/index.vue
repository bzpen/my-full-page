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
  fullPage.srcollToPage(0, index)
  fullPage.setPageIndex(index)
}
</script>
<template>
  <div class="view">
    <div ref="allPage" class="view-page">
      <div class="item-1 ">
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
  background-color: #cfd5a6;
}

.item-2{
  height: 100%;
  width: 100%;
  background-color: #d5cd79;
}

.item-3{
  height: 100%;
  width: 100%;
  background-color: #d5bc57;
}

.item-4{
  height: 100%;
  width: 100%;
  background-color: #d5a23c;
}
</style>
