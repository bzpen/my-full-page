/**
 * fullPage.js v0.0.1
 * @author: kaito kuroda
 */
 class FullPage {
  allPage: HTMLDivElement
  pageChildren: Element[] = []
  // 页面模块元素
  // 锁定滚动
  pageScroll = true
  // 页面索引
  pageIndex = 0
  preIndex = 0

  init(allPage: HTMLDivElement) {
    this.allPage = allPage
    this.pageChildren = Array.from(this.allPage.children)
  }

  // 上滑
  prev() {
    if (this.pageScroll && this.pageIndex > 0) {
      this.preIndex = this.pageIndex
      this.pageIndex--
      this.srcollToPage(this.preIndex, this.pageIndex)
    }
    else if (this.pageIndex <= 0) {
      this.pageIndex = 0
    }
  }

  // 下滑
  next() {
    if (this.pageScroll && this.pageIndex < this.pageChildren.length - 1) {
      this.preIndex = this.pageIndex
      this.pageIndex++
      return this.srcollToPage(this.preIndex, this.pageIndex)
    }
    else if (this.pageIndex >= this.pageChildren.length - 1) {
      this.pageIndex = this.pageChildren.length - 1
    }
  }

  // 滚动到对应页
  srcollToPage(start: number, target: number) {
    this.allPage.style.top = `-${(target - 1) * 100 + (this.pageChildren[target].offsetHeight / document.documentElement.clientHeight) * 100}%`
    this.allPage.style.transition = `all ease-in ${Math.abs(target - start) / 4 + 0.3}s`
    this.pageScroll = false
    this.scrollTimer()
    return this.allPage
  }

  scrollTimer() {
    setTimeout(() => {
      this.pageScroll = true
    }, 700)
  }
}

export default FullPage
