// drawStaticMap.js
var amapFile = require('amap-touchui')
var key = '4216f7d550dc95ef4ac91e3c0ee6a19a'
export default {
  data () {
    return {
      src: '',
      myAmapFun: null
    }
  },
  mounted () {
    // 挂载完成后执行初始化静态图事件
    this.initStacticMap()
  },
  methods: {
    // 初始化静态图事件
    initStacticMap () {
      // 调用amapFile.AMapWX构造函数创建myAmapFun实例对象
      this.myAmapFun = new amapFile.AMapWX({ key: key })
      // 调用ui.getSystemInfo获取设备信息
      ui.getSystemInfo({
        success: (data) => {
          // 获取设备浏览器宽高
          var height = data.windowHeight
          var width = data.windowWidth
          var size = width + '*' + height
          // 执行绘制静态图事件
          this.getStaticMap(size)
        }
      })
    },
    // 绘制事件图事件
    getStaticMap (size) {
      this.myAmapFun.getStaticmap({
        zoom: 10,
        size: size,
        scale: 2,
        location: '116.38482,39.94858',
        //  绘制点参数
        markers: 'large,0xFF0000,起:116.31604,39.96491|large,0x008000,终:116.39361,39.936957',
        //  绘制标签参数
        labels: '朝阳公园,2,0,32,0xFFFFFF,0x008000:116.48482,39.94858',
        //  绘制线段和区域参数
        paths: '10,0x0000ff,1,,:116.31604,39.96491;116.320816,39.966606;116.321785,39.966827;116.32361,39.966957;116.39361,39.966957;116.39361,39.936957|10,0x0000ff,0.1,0xFFFF00,0.7:116.32248,39.896833;116.427537,39.901837;116.378442,39.864691',
        success: (data) => {
          // 调用成功则执行此函数逻辑
          this.setData({
            src: data.url
          })
        },
        fail: (info) => {
        }
      })
    }
  }
}

