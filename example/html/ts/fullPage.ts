
interface FullPageOptions {
  allPage: HTMLDivElement
  pageChildren: Element[]
  // 页面模块元素
  // 锁定滚动
  pageScroll: boolean
  // 页面索引
  pageIndex: number
  preIndex: number
}

class FullPage {
  fullpage: FullPageOptions

  setPageIndex(index: number) {
    this.fullpage.pageIndex = index
  }

  getPageIndex() {
    return this.fullpage.pageIndex
  }

  init(allPage: any) {
    this.fullpage = {
      allPage,
      pageChildren: Array.from(allPage.children),
      pageIndex: 0,
      preIndex: 0,
      pageScroll: true,
    }
  }

  // 上滑
  prev() {
    if (this.fullpage.pageScroll && this.fullpage.pageIndex > 0) {
      this.fullpage.preIndex = this.fullpage.pageIndex
      this.fullpage.pageIndex--
      this.srcollToPage(this.fullpage.preIndex, this.fullpage.pageIndex)
    }
    else if (this.fullpage.pageIndex <= 0) {
      this.fullpage.pageIndex = 0
    }
  }

  // 下滑
  next() {
    if (this.fullpage.pageScroll && this.fullpage.pageIndex < this.fullpage.pageChildren.length - 1) {
      this.fullpage.preIndex = this.fullpage.pageIndex
      this.fullpage.pageIndex++
      return this.srcollToPage(this.fullpage.preIndex, this.fullpage.pageIndex)
    }
    else if (this.fullpage.pageIndex >= this.fullpage.pageChildren.length - 1) {
      this.fullpage.pageIndex = this.fullpage.pageChildren.length - 1
    }
  }

  // 滚动到对应页
  srcollToPage(start: number, target: number) {
    this.fullpage.allPage.style.top = `-${(target - 1) * 100 + ((this.fullpage.pageChildren[target] as HTMLElement).offsetHeight / document.documentElement.clientHeight) * 100}%`
    this.fullpage.allPage.style.transition = `all ease-in-out ${Math.abs(target - start) / 4 + 0.5}s`
    this.fullpage.pageScroll = false
    this.scrollTimer()
    return this.fullpage.allPage
  }

  scrollTimer() {
    setTimeout(() => {
      this.fullpage.pageScroll = true
    }, 700)
  }
}
