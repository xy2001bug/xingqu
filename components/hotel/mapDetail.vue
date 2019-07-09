<template>
  <!-- 区域的介绍和地图 -->
  <el-row type="flex" class="header">
    <!-- 区域/介绍和均价的大概 -->
    <el-col :span="14">
      <el-row class="header-left">
        <el-row class="search-options">
          <!-- 区域 -->
          <el-row type="flex" class="ins-area">
            <el-col :span="3">
              <div class="area-title">区域：</div>
            </el-col>
            <el-col>
              <div class="a-link">
                    <a href="javascript:;" class="active">全部</a>
                    <a href="javascript:;">镇兴路沿线</a>
                    <a href="javascript:;">视觉艺术学院</a>
                    <a href="javascript:;">大成名店</a>
                    <a href="javascript:;">南京西站</a>
                    <a href="javascript:;">铜山镇</a>
                    <a href="javascript:;">大桥南路</a>
                    <a href="javascript:;">宝塔路沿线</a>
                    <a href="javascript:;">北岭路沿线</a>
                    <a href="javascript:;">苜蓿园</a>
                    <a href="javascript:;">弘阳广场/新一城</a>
        
              </div>
              <a href="#">
                <i class="el-icon-d-arrow-right icon-up"></i>
                <span>等43个区域</span>
              </a>
            </el-col>
          </el-row>
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
                ￥332
              </span>
              <span>
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
                 <el-tooltip class="item i-tips-text" effect="dark" content="等级均价由平日价格计算得出，节假日价格会有上浮。" placement="top-start">
                    <el-button id="tips-btn"></el-button>
                  </el-tooltip>
                ￥332
              </span>
              <span>
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
                 <el-tooltip class="item i-tips-text" effect="dark" content="等级评定是针对房价，设施和服务等各方面的综合评价" placement="top-start">
                    <el-button id="tips-btn"></el-button>
                  </el-tooltip>
                ￥332
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
    
mounted(){
        window.onLoad  = function(){
                var map = new AMap.Map('map');
        }
        var url = `https://webapi.amap.com/maps?v=1.4.15&key=${"e3379ac7718631846d9e4aae9901ce32"}&callback=onLoad`;
        var jsapi = document.createElement('script');
        jsapi.charset = 'utf-8';
        jsapi.src = url;
        document.head.appendChild(jsapi);
    }
};
</script>

<style scoped lang="less" >
.header{
       .header-left{
           padding: 0 10px 10px 0;
           .search-options{
               color: #666;
               font-size: 14px;
               .ins-area{
                   margin-bottom: 20px; 
                   .a-link > a{
                           margin-right: 1em;
                            padding: 0 2px;
                            border-radius: 4px;
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
                   }
                   a{
                       .icon-up{
                               transform: rotate(270deg);
                                color: #f90;
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
