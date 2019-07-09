<template>
    <el-carousel height="350px" direction="vertical" :autoplay="true">
        <el-carousel-item v-for="item in 3" :key="item">
        </el-carousel-item>
    </el-carousel>
</template>

<script>
export default {

}
</script>

<style scoped>

  .el-carousel__item:nth-child(1) {
    background:url(../../static/wallhaven-n62r5q.jpg);
    background-size:100% 100%;
    height: 350px;
  }
  
  .el-carousel__item:nth-child(2) {
    background:url(../../static/wallhaven-4yww77.jpg);
    background-size:100% 100%;
    height: 350px;
  }

  .el-carousel__item:nth-child(3) {
    background:url(../../static/wallhaven-0pj6w3.jpg);
    background-size:100% 100%;
    height: 350px;
  }
</style>
