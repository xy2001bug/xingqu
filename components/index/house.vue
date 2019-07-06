<template>
<div class="index_container">
    <div class="classic">
        <h2>精选房源</h2>
        <el-row>
        <el-col :span="6">
            <a href="javascript:;">
                <div class="grid-content bg-purple">
                    <img src="../../static/house01.jpeg" alt="">
                    <div class="two">上海</div>
                    <div class="three">享受外滩风情</div>
                </div>
            </a>
        </el-col>
        <el-col :span="6">
            <a href="javascript:;">
                <div class="grid-content bg-purple">
                    <img src="../../static/house02.jpeg" alt="">
                    <div class="two">东京</div>
                    <div class="three">とうきょう、Tōkyō</div>
                </div>
            </a>
        </el-col>
        <el-col :span="6">
            <a href="javascript:;">
                <div class="grid-content bg-purple">
                    <img src="../../static/house03.jpeg" alt="">
                    <div class="two">大阪</div>
                    <div class="three">日式和服榻榻米</div>
                </div>
            </a>
        </el-col>
        <el-col :span="6">
            <a href="javascript:;">
                <div class="grid-content bg-purple">
                    <img src="../../static/house04.jpeg" alt="">
                    <div class="two">台中</div>
                    <div class="three">大隐隐于市的世外桃源</div>
                </div>
            </a>
        </el-col>
        
        </el-row>
    </div>
</div>
</template>

<script>

export default {

}
</script>

<style scoped lang="less">
    .index_container{
        width: 1000px;
        margin:0 auto;
        h2{
            margin-top:25px;
        }
        .el-row {
        margin: 10px 0;
        margin-bottom:20px;
        width: 100%;
            img{
                width:100%;
                height: 100%;
            }
            .two{
                font-size:16px;
                font-weight:700;
                margin-top:5px;
            }
            .three{
                font-size:12px;
                margin-top:5px;
            }
        }
    }
    

    .el-col {
    border-radius: 10px;
    }
    .bg-purple {
    margin-right:20px;
        &:last-child {
        margin-bottom: 0;
        }
    }
    .grid-content {
    border-radius: 4px;
    min-height: 36px;
    }
</style>
