//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    currentIndexNav:0,
   //首页导航数据
   navList:[],

   //轮播图数据
   swiperList:[],

   //视频列表数据
   videosList:[]
  },

  activeNav(e){
    //console.log(123);
    this.setData({
      currentIndexNav:e.target.dataset.index
    })
  },

  getNavList(){
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList',
      success(res){
        //console.log(res)
       if(res.data.code===0){
         that.setData({
           navList:res.data.data.navList
         })
       }
      }
    })
  },
  getSwiperList(){
    let that=this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList',
      success(res){
        //console.log(res);
        if(res.data.code===0){
          that.setData({
            swiperList:res.data.data.swiperList
          })
        }
      }
    })
  },
  getVideosList(){
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList',
      success(res) {
        console.log(res);
        if (res.data.code === 0) {
          that.setData({
            videosList: res.data.data.videosList
          })
        }
      }
    })
  },
  onLoad: function () {
    this.getNavList();
    this.getSwiperList();
    this.getVideosList();
  },
  onReady:function (){

  }
})
