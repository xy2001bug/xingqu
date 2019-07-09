<template>
    <el-row>
    <!-- 自定义组件部分 -->
    <div class="PostMainbox">
        <div class="PostMainboxHot">
            <div class="PostMainboxHotbox">
                <div class="PostHot"
                    @mouseenter='PostMouseenter(index)'
                    @mouseleave="PostMouseleave(index)"
                    v-for='(item,index) in data'
                    :key='index'
                    >
                    <p  class="PostHotP">
                        {{item.type}}
                    </p>
                     <i class="el-icon-arrow-right"></i>
                </div>
            </div>
            <div class="PostToponym" >
                <span class="PostToponymSpan"
                    v-for='(item,index) in data'
                    v-if="curret==index"
                    :key='index'
                    @mouseenter='PostMouseenter(index)'
                    @mouseleave="PostMouseleave(index)"
                    >
                    <ul>
                        <li
                        v-for='(v,index) in item.children'
                        :key='index'>
                            <a href="#">
                                <i>
                                    {{index+1}}
                                </i>
                                <strong>
                                    {{v.city}}
                                </strong>
                                <span>
                                    {{v.desc}}
                                </span>
                            </a>
                        </li>
                    </ul>
                </span>
            </div>
        </div>
        
        <!-- 推荐城市 -->
        <div class="PostTown">
            <div class="PostRecommendTown">
                推荐城市
            </div>
            <a class="PostPicture" href="#">
                <img src="../../static/wallhaven-0pj6w3.jpg"/>
            </a>
        </div>
    </div> 
</el-row>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      curret: 112
    };
  },
  methods: {
    //   鼠标移入事件
    PostMouseenter(index) {
      this.curret = index;
    },
    //   鼠标移出事件
    PostMouseleave(index) {
      this.curret = -1;
    }
  },
  mounted() {
    this.$axios({
      url: "/posts/cities",
      method: "GET"
    }).then(res => {
      this.data = res.data.data;
    });
  }
};
</script>

<style scoped lang="less">
// 这是大盒子
.PostMainbox {
  
  // 城市部分
  .PostMainboxHot {
    position: relative;
    .PostMainboxHotbox {
      border-left: 1px solid #dddddd;
      border-right: 1px solid #ddd;
      border-top: 1px solid #ddd;

      // 热门城市部分
      .PostHot {
        border-bottom: 1px solid #ddd;
        position: relative;
        &:hover {
          color: orange;
        }
        // 内容
        .PostHotP {
          font-size: 14px;
          height: 41px;
          line-height: 41px;
          padding: 0 20px;
        }
        .el-icon-arrow-right {
          position: absolute;
          right: 0;
          margin-right: 10px;
          font-size: 24px;
          top: 10px;
          color: #ddd;
        }
      }
    }
  }
  // 隐藏部分
  .PostToponym {
    background-color: #fff;
    width: 350px;
    z-index: 2;
    position: absolute;
    left: 260px;
    top: 0;
    // border: 1px solid #ddd;
    .PostToponymSpan {
      ul {
        li {
          padding: 5px 10px;
          list-style: none;
          a {
            i {
              color: orange;
              font-size: 24px;
            }
            strong {
              color: orange;
              font-size: 14px;
              font-weight: 400;
              &:hover {
                border-bottom: 1px solid orange;
              }
            }
            span {
              color: #999;
              font-size: 14px;
              &:hover {
                border-bottom: 1px solid #999;
              }
            }
          }
        }
      }
    }
  }
  .PostTown {
    // 推荐城市
    margin-top: 20px;
    .PostRecommendTown {
      font-size: 18px;
      padding-bottom: 10px;
      border-bottom: 1px solid #999;
      margin-bottom: 10px;
    }
    .PostPicture {
      img {
        width: 260px;
        height: 154px;
      }
    }
  }
}
</style>
