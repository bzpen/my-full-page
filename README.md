# my-fullPage

适用于vue3 的全屏滚动组件

# Getting Started
```shell
npm install --save @kaito_kuroba/my-fullpage
```
# Using my-fullPage

## ts
```ts
import MyFullPage from '@kaito_kuroba/my-fullpage' // 引入组件

const allPage = ref(HTMLHTMLDivElement) // 获取页面dom

const fullPage = new MyFullPage() // 创建实例

// 在组件加载完成后初始化
onMounted(() => {
  /***
   *   allPage => 显示页面dom
   */
  fullPage.init(allPage: HTMLDivElement) // 初始化 
})

// 自定义滚轮事件
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

```
```html
  <div class="view">
    <div ref="allPage" class="view-page">
      <div class="item ">
       
      </div>
      <div class="item">
        
      </div>
      <div class="item">
       
      </div>
      <div class="item">
        
      </div>
    </div>
  </div>

```

```css
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
.item{
  height: 100%;
  width: 100%;
}
```
