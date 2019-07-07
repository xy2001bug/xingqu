<template>

    <el-row class="PostAside_box">
        <!-- 搜索框大盒子 -->
        <div class="PostBox">
            
            <div class="PostSearch">
                <!-- 搜索框 -->
                <div class="PostFrame">
                <input 
                style="border:none"
                class="PostInput"
                type='text' 
                placeholder="请输入想去的地方，比如：'你家或我家'"
                />
                <span class="PostSpan">
                    <i class="el-icon-search"></i>
                </span>
                </div>
                <!-- 搜索框-推荐 -->
                <div class="PostRecommend">
                    <span>
                    推荐：
                    </span>
                        <ul>
                            <li>
                                <a href="#">成都</a>
                            </li>
                            <li>
                                <a href="#">西安</a>
                            </li>
                            <li>
                                <a href="#">北京</a>
                            </li>
                        </ul>
                </div>
            </div>
            <!-- 推荐攻略 -->
            <div class="PostStrategy">
                <h2>推荐攻略</h2>
                <nuxt-link to="/post/create">
                <el-button 
                class="PosyButton" type="primary" round>
                <i class="el-icon-edit"></i>
                写游记
                </el-button>
                </nuxt-link>
            </div>
        </div>

    <div class="Aside_Box">
        
        <!-- 地点详情 -->
        <div class="AsideDetail"
        v-for='(item,index) in arr'
        :key='index'>
            <a href="#">
            <!-- 巴塞罗那 -->
            <p class="AsideDetailP">
                <!-- 塞班贵？一定是你的打开方式不对！6000块玩转塞班 -->
                {{item.title}}
            </p>
            <!-- 介绍部分 -->
            <span class="AsideDetailSpan">
                {{item.summary}}
            </span>
            <!-- 图片 -->
            <div class="AisdeBock">
                 <div class="AsideImg"
            v-for="(v,i) in item.images"
            :key="i">
                <img :src="`${v}`"/>
                <!-- {{item.images}} -->
            </div>
            </div>
           
            </a>
            <!-- 个人信息 -->
            <div class="AisdeBox">
                <span class="AisdeBoxAddress">
                    <i class="el-icon-map-location"></i>
                    {{item.cityName}}
                </span>
                <span class="AisdeBoxName">
                    by
                    <!-- <img :src="`${item.account.defaultAvatar}`"/> -->
                    <a href="#" class="">
                        {{item.account.nickname}}
                    </a>
                </span>
                <span class="">
                    <i class="el-icon-star-off"></i>
                    1458
                </span>
                <span class="AisdeBoxLike">
                    15 赞
                </span>
            </div>
        </div>
    </div>
        <!-- 分页功能 -->
        <div class="block">
                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pageIndex"
                :page-sizes="[5, 10, 15, 20]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
            </el-pagination>
        </div>
    </el-row>
    

</template>

<script>
export default {
  data() {
    return {
        arr: [],
    //   分页数据
        pageIndex: 1,
        total:0,
        pageSize:5,
    };
  },
  methods: {
    handleSizeChange(val) {
        this.pageSize = val
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
        this.pageIndex = val
        // 计算列表数据
        this.arr = (this.pageIndex - 1) * this.pageSize,
                this.pageIndex * this.pageSize
    }
  },
  // 页面加载完成后请求数据
  mounted() {
    this.$axios({
      url: "/posts",
      method: "GET",
      params:{
        city:this.$route.query.city,
        _start:this.start,
        _limit:this.limit,

      }
    }).then(res => {
      console.log(res);
      this.arr = res.data.data;
      console.log(this.arr);
    });
  }
};
</script>

<style scoped lang="less">
.PostAside_box {
  .PostBox {
    .PostSearch {
      height: 76px;
      .PostFrame {
        border: 3px solid sandybrown;
        .PostInput {
          box-sizing: border-box;
          width: 664px;
          height: 34px;
          outline: none;
          padding: 0 20px;
        }
        .PostSpan {
          width: 24px;
          height: 24px;
          color: orange;
        }
      }
      .PostRecommend {
        width: 700px;
        float: left;
        box-sizing: border-box;
        height: 36px;
        padding: 10px 0;
        span {
          float: left;
          font-size: 12px;
          color: #666;
          //  height: 16px;
        }
        ul {
          float: left;
          li {
            margin-right: 5px;
            float: left;
            list-style: none;
            font-size: 12px;
            color: #666;
            a {
              &:hover {
                color: sandybrown;
                border-bottom: 1px solid sandybrown;
              }
            }
          }
        }
      }
    }
    // 这是推荐攻略样式
    .PostStrategy {
      box-sizing: border-box;
      height: 51px;
      border-bottom: 1px solid #999;
      position: relative;
      h2 {
        height: 47px;
        font-weight: 400;
        color: sandybrown;
        position: absolute;
        left: 0;
        line-height: 51px;
        border-bottom: 3px solid orange;
      }
      .PosyButton {
        position: absolute;
        right: 0;
      }
    }
  }
  .Aside_Box{

  
  .AsideDetail {
    padding: 20px 0;
    .AsideDetailP {
      margin-bottom: 15px;
      font-weight: 400;
      font-size: 18px;
      &:hover {
        color: orange;
      }
    }
    .AsideDetailSpan {
      margin-bottom: 15px;
      line-height: 1.5;
      font-size: 14px;
      height: 63px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      color: #999;
    }
    .AisdeBock {
      width: 700px;
      height: 150px;
      margin: 10px 0;
      overflow: hidden;
      .AsideImg {
        display: inline-block;
        img {
          width: 220px;
          height: 150px;
        }
      }
    }
    // 小图标部分
    .AisdeBox {
      font-size: 14px;
      color: #999;
      .AisdeBoxName {
        a {
          color: orange;
        }
      }
      .AisdeBoxLike {
        color: orange;
      }
      // .AisdeBoxAddress {
      // }
    }
  }
  }
}
// </script>

// <style>
// .el-dropdown {
//     vertical-align: top;
// }
// .el-dropdown + .el-dropdown {
//     margin-left: 15px;
// }
// .el-icon-arrow-down {
//     font-size: 12px;
// >>>>>>> 3ae2dba6253cee84286024121287100913d26461
// }
// </style>
