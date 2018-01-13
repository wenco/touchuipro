// table3.js
export default {
  data () {
    return {
      offsetTop: ui.DEFAULT_HEADER_HEIGHT,
      startRefresh: false,
      imgHeight: parseInt(ui.WIN_WIDTH / 1125 * 263),
      height: ui.DEFAULT_CONTENT_HEIGHT,
      thisHeader: [{
        name: 'id',
        display: '编号',
        sort: true,
        width: '64',
        align: 'center',
        headerAlign: 'center'
      }, {
        name: 'name',
        display: '名字',
        sort: true,
        width: '70',
        align: 'center',
        headerAlign: 'center'
      }, {
        name: 'age',
        display: '年龄',
        sort: true,
        width: '64',
        align: 'center',
        headerAlign: 'center'
      }, {
        name: 'place',
        display: '地区',
        sort: true,
        width: '100%',
        align: 'center',
        headerAlign: 'center'
      }, {
        name: 'sex',
        display: '性别',
        sort: true,
        width: '65',
        align: 'center',
        headerAlign: 'center'
      }],
      thisData: {}
    }
  },
  methods: {
    showname (obj) {
      ui.showToast({ title: obj.rowData.name })
    },
    sortloading () {
      // ui.triggerPagePullDown()
    },
    handleActive () {
      this.startRefresh = true
    },
    handleAfter () {
    },
    scroll (y) {
      if (y > 0) {
        // //滚动容器没有滚动到最上方
        this.scrollTop = '1'
      } else {
        // 滚动容器滚动到最上方
        this.scrollTop = '0'
      }
    },
    touchstart (e) {
      this.startX = e.changedTouches[0].clientX
      this.startY = e.changedTouches[0].clientY
    },
    touchmove (e) {
      var moveX = e.changedTouches[0].clientX
      var moveY = e.changedTouches[0].clientY
      var disX = moveX - this.startX
      var disY = moveY - this.startY
      // 判断scrollview内容向下滚动
      if (Math.abs(disX) < Math.abs(disY) && disY < 0) {
        this.scrollDirection = '0'
      } else if (Math.abs(disX) < Math.abs(disY) && disY > 0) {    // 判断scrollview内容向上滚动
        this.scrollDirection = '1'
        if (this.scrollTop === '0') {  // 当scrollview内容向上滚动到最上方时，把图片显示出来
          ui.pageScrollTo(0, 200)
        }
      }
    },

    touchend (e) {
      // scrollview内容向下滚动时，把图片隐藏
      if (this.scrollDirection === '0') {
        ui.pageScrollTo(87, 200)
      }
    }
  },
  mounted () {
  }
}
