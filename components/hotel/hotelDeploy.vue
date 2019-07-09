<template>
     <div>
            <el-row :gutter="20">
                <el-col :span="3"><div class="grid-content bg-purple ">基本信息</div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple title">入住时间：14:00之后</div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple title">离店时间:12:00之前</div></el-col>
                <el-col :span="5"><div class="grid-content bg-purple title">2014年开业/2014年装修</div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple title">酒店规模:119间客房</div></el-col>
            </el-row>
                <el-divider></el-divider>
            <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content bg-purple">主要设置</div></el-col>
                <el-col :span="2"><div class="grid-content bg-purple">电梯</div></el-col>
                <el-col :span="2"><div class="grid-content bg-purple">热水壶</div></el-col>
                <el-col :span="2"><div class="grid-content bg-purple">洗衣服务</div></el-col>
            </el-row>
            <el-divider></el-divider>
            <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content bg-purple">停车服务</div></el-col>

            </el-row>
            <el-divider></el-divider>
            <el-row :gutter="20">
                <el-col :span="4"><div class="grid-content bg-purple">品牌信息</div></el-col>

            </el-row>
        </div>
</template>

<script>
export default {

}
</script>

<style>

  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  /* .bg-purple {
    background: #d3dce6;
  } */
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .el-divider--horizontal{
      margin: 12px 0;
  }
  .title{
      font-size: 14px;
      color: #666;
  }
</style>
