<template>
  <!-- 区域的介绍和地图 -->
  <el-row type="flex" class="header">
    <!-- 区域/介绍和均价的大概 -->
    <el-col :span="14">
      <el-row class="header-left">
        <el-row class="search-options">
          <!-- 区域 -->
          <div  :class="{showheight:isShowHight}" >
            <el-row type="flex" class="ins-area"  >
                        <el-col :span="3">
                          <div class="area-title">区域：</div>
                        </el-col>
                        <el-col>
                          <a href="javascript:;" class="a-link">全部</a>
                          <span class="a-link" v-for="(item,index) in scenic || []" :key="index" 
                          :class="{active: index === isActive}" 
                          @click="headleCheckActive(item,index)">
                                <a href="javascript:;">{{item.name}}</a>
                          </span>
                          
                        </el-col>
                      </el-row>
          </div>
          <div class="icon-class">
            <a href="#">
              <i class="el-icon-d-arrow-right icon-up" @click="headleShowHight" :class="{down:isShowHight}"></i>
              <span>等{{scenic.length || 0}}个区域</span>
            </a>
          </div>
          <!-- 攻略 -->
          <el-row type="flex" class="ins-strategy">
            <el-col :span="3">
              <div>攻略：</div>
            </el-col>
            <el-col>
              <div>北京，你想要的都能在这找到。博古通今，兼容并蓄，天下一城，如是帝都。 景点以故宫为中心向四处辐射；地铁便宜通畅，而且覆盖绝大多数景点。 由于早上有天安门升旗仪式，所以大多数人选择在天安门附近住宿。</div>
            </el-col>
          </el-row>
          <!-- 均价 -->
          <el-row type="flex" class="ins-av-pri">
            <el-col :span="3">
              <div>
                均价
                <span>
                   <el-tooltip class="item tips-text" effect="dark" content="等级均价由平日价格计算得出，节假日价格会有上浮。" placement="top-start">
                    <el-button id="tips-btn"></el-button>
                  </el-tooltip>
                  <span class="ins-pri-tips">?</span>
                  <span>:</span>
                </span>
              </div>
            </el-col>
            <el-col class="star-price">
              <span>
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
                <el-tooltip class="item i-tips-text" effect="dark" content="等级均价由平日价格计算得出，节假日价格会有上浮。" placement="top-start">
                    <el-button id="tips-btn"></el-button>
                  </el-tooltip>
                ￥210
              </span>
              <span>
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
                 <el-tooltip class="item i-tips-text" effect="dark" content="等级均价由平日价格计算得出，节假日价格会有上浮。" placement="top-start">
                    <el-button id="tips-btn"></el-button>
                  </el-tooltip>
                ￥330
              </span>
              <span>
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
                 <el-tooltip class="item i-tips-text" effect="dark" content="等级评定是针对房价，设施和服务等各方面的综合评价" placement="top-start">
                    <el-button id="tips-btn"></el-button>
                  </el-tooltip>
                ￥531
              </span>
            </el-col>
          </el-row>
        </el-row>
      </el-row>
    </el-col>
    <!-- 地图 -->
    <el-col :span="10">
      <el-row class="header-right">
        <div id="map" class="hotel-map"></div>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data(){
    return{
      isActive:0,
      isShowHight:false,
      //响应过来的数据
      hotelData:{},
      map:null,//存放地图
      scenic:[],
      scenicId:null,
      
    }
  },
  props:{
    data:{
      type:Object,
      default:{}
    }
  },
  methods:{
    //点击选择区域
    headleCheckActive(item,index){
      // console.log(item);
      this.isActive = index
      this.scenicId = item.id
      // console.log(item.id);
      this.$router.push({
        url:"/hotels",
        query:{
          city:+this.$route.query.city,
          scenic:this.scenicId
        }
      })
    },
    //点击展开高度
    headleShowHight(){
      this.isShowHight = !this.isShowHight
    },
    //计算房价
    computedPrice(){
      let price = this.data
    }
  },
    
mounted(){
  setTimeout(() => {
      this.hotelData = this.data
      const {data} = this.data
      if(data.length ==0){
        const obj = {
          scenic:[],
        }
        data.push(obj)
      }
      this.scenic = data[0].scenic;
      this.computedPrice()
   
        //这里要用箭头函数
        window.onLoad  = ()=>{
          if(this.data.total > 0){
            var {longitude,latitude} = this.data.data[0].location
    
          }
          else{
            var longitude = 118.39
           var latitude = 31.90
          }

                let map = new AMap.Map('map',{
                   center: [longitude, latitude],
                }); 
                this.map = map;
            //     // 工具条插件
            //    var toolbar = new AMap.ToolBar();
            //     map.addControl(toolbar);

            //     // 点标记

                  if(!this.hotelData.data){
                    // console.log("里面是空的");
                    return;
                  }
                for(let i=0;i<this.hotelData.data.length;i++){
                    let tempLocation = this.hotelData.data[i]
                    // console.log(tempLocation);
                    const {longitude,latitude} = tempLocation.location;
                    //添加点标记
                    
                    let marker= new AMap.Marker({
                    // 自定义图片内容
                    // content: `<div class="marker-route marker-marker-bus-from">${i}</div>`,
                    position: new AMap.LngLat(longitude, latitude),   // 经纬度对象
                    title: tempLocation.name,
                   
                });
                  map.add(marker)
                 
                }

               

            // var marker2 = new AMap.Marker({
            //     //content: '<div class="marker-route marker-marker-bus-from">2</div>',
            //     position: new AMap.LngLat(118.971, 31.428),   // 经纬度对象
            //     title: '高淳县淳溪镇镇'
            // });

            // // 将创建的点标记添加到已有的地图实例：
            // map.add([marker1, marker2]);
        }
       
        var url = `https://webapi.amap.com/maps?v=1.4.15&key=${"e3379ac7718631846d9e4aae9901ce32"}&callback=onLoad`;
        var jsapi = document.createElement('script');
        jsapi.charset = 'utf-8';
        jsapi.src = url;
        document.head.appendChild(jsapi);
        }, 500);
    },
    

}
</script>

<style scoped lang="less" >
.header{

       .header-left{
           padding: 0 10px 10px 0;
           .search-options{
               color: #666;
               font-size: 14px;
                 .showheight{
               height: 50px;
               overflow: hidden;
             

              }
               .ins-area{
                    overflow: hidden; 
                   color: #666;
                   .a-link > a{
            
                           margin:0 5px 5px 5px;
                            padding: 0 2px;
                            display: inline-block;
                            cursor: pointer;
                            text-decoration: none;
                            color: inherit;
                            &:hover{
                                color: skyblue;
                                
                            }
                           &:active{
                               background-color: #eee;
                           }
                           
                   }
                   .active{
                       background-color: #eee;
                       border-radius: 5px; 
                       
                   }
                   
               }
               .icon-class{
                 margin-left: 70px; 
                 margin-bottom: 10px;
                  a{
                     color: #666;
                       .icon-up{
                               transform: rotate(270deg);
                                color: #f90;
                       }
                       .down{
                         transform: rotate(90deg);
                       }
                       span{
                           color: #666;
                       }
                   }
               }
               .ins-strategy{
                   margin-bottom: 20px;          
               }
               .ins-av-pri{
                 position: relative;
                 margin-top: 50px;
                 .ins-pri-tips{
                   
                       background-color: #ccc;
                        color: #fff;
                        display: inline-block;
                        width: 1.2em;
                        height: 1.2em;
                        text-align: center;
                        border-radius: 100%;
                        // &:hover{

                        // }
                 }
                 .tips-text{
                  position: absolute;
                  display: inline-block;
                  padding: 8px;
                  opacity:0;
                 } 
                 .star-price{
                   span{
                     position: relative;
                     padding-right: 30px;
                     i{
                       color: #f90;
                     }
                     .i-tips-text{
                       position: absolute;
                       left: 0px;
                        display: inline-block;
                        padding: 10px 30px;
                        opacity:0;
                     }
                   }
                 }
               }
           }
       }
       .header-right{
           height: 100%;
           .hotel-map{
               height:260px;
               width: 420px;
               margin: 0 0 10px 10px;
           }
       }
   }
</style>
