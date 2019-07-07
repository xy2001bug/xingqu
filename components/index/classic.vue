<template>
<div class="index_container">
    <div class="classic">
        <h2>经典旅行城市</h2>
        <el-row>
        <el-col :span="4">
            <a href="/air">
                <div class="grid-content bg-purple">
                    <img src="../../static/classic01.jpg" alt="">
                    <div class="two">香港 亚洲美食之都</div>
                    <div class="three">人均<span class="highlight"> ￥440 </span>/晚</div>
                </div>
            </a>
        </el-col>
        <el-col :span="4">
            <a href="/air">
                <div class="grid-content bg-purple">
                    <img src="../../static/classic02.jpg" alt="">
                    <div class="two">清迈 泰国最文艺小城</div>
                    <div class="three">人均<span class="highlight"> ￥168 </span>/晚</div>
                </div>
            </a>
        </el-col>
        <el-col :span="4">
            <a href="/air">
                <div class="grid-content bg-purple">
                    <img src="../../static/classic03.jpg" alt="">
                    <div class="two">伦敦 感受英伦风情</div>
                    <div class="three">人均<span class="highlight"> ￥354 </span>/晚</div>
                </div>
            </a>
        </el-col>
        <el-col :span="4">
            <a href="/air">
                <div class="grid-content bg-purple">
                    <img src="../../static/classic04.jpg" alt="">
                    <div class="two">普吉 岛东南亚看海</div>
                    <div class="three">人均<span class="highlight"> ￥360 </span>/晚</div>
                </div>
            </a>
        </el-col>
        <el-col :span="4">
            <a href="/air">
                <div class="grid-content bg-purple">
                    <img src="../../static/classic05.jpg" alt="">
                    <div class="two">洛杉矶 好莱坞式繁华</div>
                    <div class="three">人均<span class="highlight"> ￥445 </span>/晚</div>
                </div>
            </a>
        </el-col>
        <el-col :span="4">
            <a href="/air">
                <div class="grid-content bg-purple">
                    <img src="../../static/classic06.jpg" alt="">
                    <div class="two">巴厘岛 度蜜月的首选</div>
                    <div class="three">人均<span class="highlight"> ￥396 </span>/晚</div>
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
            color:gold;
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
                font-size:14px;
                font-weight:600;
                margin-top:5px;
            }
            .three{
                font-size:12px;
                margin-top:5px;
                .highlight{
                    color:orange;
                }
            }
        }
    }
    

    .el-col {
    border-radius: 4px;
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
