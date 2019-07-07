<template>
    <el-row>
        <div class="recommend" >
        <p @mouseenter="handleChange(index)" @mouseleave="handleChange(hide)" v-for="(item,index) in arr" :key="index">
          {{item.type}}
          <span class="el-icon-arrow-right"></span>
        </p>
      </div>
      <!-- 导航 -->
        <div >
            <div v-for="(item,index) in arr" :key="index">
                
                <div class="left-hiddle" v-if="message===index" @mouseenter="handleChange(index)" @mouseleave="handleChange(hide)">
                    <ul class="introduce">
                        <li  v-for="(v,index) in item.children" :key="index">
                            <a href="#">
                            <i>{{index+1}}</i>
                            <span>{{v.city}}</span>
                            <span>{{v.desc}}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </el-row>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.left-container{
    width: 260px;
}


.container {
  margin: 0 auto;
  width: 1000px;
  position: relative;
  padding-top: 20px;
}
.recommend {
  width: 260px;
  height: 160px;
  // border-right: #000;
  line-height: 40px;
  z-index: 2;


  p {
    font-size: 14px;
    padding-left: 20px;
    color: #666;
    border: 1px solid #ddd;
    background-color: #fff;
    border-bottom: none;
    z-index: 2;
    position: relative;
    &:hover {
      color: violet;
      border-right-color: #fff;
    }


    &:nth-child(4) {
      border-bottom: 1px solid #ddd;
    }


    span {
      font-size: 20px;
      margin-left: 150px;
    }
  }
}
</style>
