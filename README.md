# my-fullPage 1.0.3

适用于vue 的全屏滚动组件

# Demo
  [查看演示](http://fullpage.npm.zpen.top/)

  
# Getting Started
```shell
npm install --save @kaito_kuroba/my-fullpage
```
# Using my-fullPage

## ts-vue3-setup
```ts
import MyFullPage from '@kaito_kuroba/my-fullpage' // 引入组件

const allPage = ref(HTMLHTMLDivElement) // 获取页面dom

const fullPage = new MyFullPage() // 创建实例

// 在组件加载完成后初始化
onMounted(() => {
  fullPage.init(allPage.value) // 初始化 
})

/**
 * 自定义滚轮事件
 * 可自定义触发事件
 */
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
/* 
* 采用transition 是实现全屏滑动 
* 取消样式即可关闭全屏滑动
* 适合做自适应有更多的灵活度
*/
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
# Function

### 1、 setPageIndex(index) 设置当前页面索引
 * 参数: index : number
### 2、 getPageIndex() 获取当前页面索引
### 3、init () 初始化 
  * 参数: allPage : HtmlElement
### 4、prev () 向前滚动
### 5、next () 向后滚动
### 6、srcollToPage(start, target) 滚动到指定页面
  * 参数: start : number 起始页面索引
  * 参数: target : number 目标页面索引
