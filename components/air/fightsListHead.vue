<template>
    <el-row class="flight-title">
        <!-- 这里是航班头部的信息 -->
        <el-col :span="5">
            航班信息
        </el-col>
        <el-col :span="14">
            <el-row type="flex" justify="space-between">
                <el-col :span="12">
                    起飞时间
                </el-col>
                <el-col :span="12">
                    到达时间
                </el-col>
            </el-row>
        </el-col>
        <el-col :span="5">
            价格
        </el-col>
    </el-row>
</template>

<script>
export default {

}
</script>

<style scoped lang="less"> 
.flight-title{
    padding: 0 15px;
    background-color: #f6f6f6;
    border: 1px solid #dddddd;
    height: 38px;
    line-height: 38px;
    color: #666;
    font-size: 12px;
    margin-bottom: 10px;

    >div{
        text-align: center;
    }
}
</style>
