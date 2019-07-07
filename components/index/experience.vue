<template>
<div class="index_container">
    <div class="classic">
        <h2>高分体验</h2>
        <el-row>
        <el-col :span="4">
            <a href="/air">
                <div class="grid-content bg-purple">
                    <img src="../../static/e1.jpg" alt="">
                    <div class="two">泰国传统具纹身</div>
                    <div class="three">工作坊 · 清迈</div>
                    <div class="one">¥577</div>
                </div>
            </a>
        </el-col>
        <el-col :span="4">
            <a href="/air">
                <div class="grid-content bg-purple">
                    <img src="../../static/e2.jpg" alt="">
                    <div class="two">隐秘泳池 + 野外海滩</div>
                    <div class="three">一日游 · 里约热内卢</div>
                    <div class="one">¥464</div>
                </div>
            </a>
        </el-col>
        <el-col :span="4">
            <a href="/air">
                <div class="grid-content bg-purple">
                    <img src="../../static/e3.jpg" alt="">
                    <div class="two">辛特拉难忘一日！</div>
                    <div class="three">一日游 · 里斯本</div>
                    <div class="one">¥495</div>
                </div>
            </a>
        </el-col>
        <el-col :span="4">
            <a href="/air">
                <div class="grid-content bg-purple">
                    <img src="../../static/e4.jpg" alt="">
                    <div class="two">双人日落温泉体验</div>
                    <div class="three">美容 · 棕榈泉沙漠</div>
                    <div class="one">¥532</div>
                </div>
            </a>
        </el-col>
        <el-col :span="4">
            <a href="/air">
                <div class="grid-content bg-purple">
                    <img src="../../static/e5.jpg" alt="">
                    <div class="two">海岸线探险徒步行</div>
                    <div class="three">徒步 · 悉尼</div>
                    <div class="one">¥735</div>
                </div>
            </a>
        </el-col>
        <el-col :span="4">
            <a href="/air">
                <div class="grid-content bg-purple">
                    <img src="../../static/e6.jpg" alt="">
                    <div class="two">私人东京摄影师</div>
                    <div class="three">摄影 · 东京</div>
                    <div class="one">¥623</div>
                </div>
            </a>
        </el-col>
        
        </el-row>
    </div>
    <div class="more"><a href="/post">更多体验</a></div>
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
            color:#00bed4;
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
            .one{
                color:orange;
                font-size:12px;
                margin-top:3px;
            }
            .two{
                font-size:14px;
                font-weight:600;
                margin-top:5px;
            }
            .three{
                font-size:12px;
                margin-top:3px;
            }
        }
    }

    .more{
        font-size: 16px;
        font-weight: 700;
        font-family:"微软雅黑";
        margin-bottom: 20px;
        a{
            color:rgb(0,132,137);
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
