<template>
<div class="index_container">
    <div class="natsu">
        <h2>夏日出行精选</h2>
        <el-row>
        <el-col :span="8">
            <a href="/post">
                <div class="grid-content bg-purple">
                    <img src="../../static/natsu01.jpg" alt="">
                    <div class="one">全球美食城市</div>
                    <div class="two">尝美味，寻访全球各地美食文化</div>
                    <div class="three">通过食物了解本地文化，给味蕾一次快乐旅行。</div>
                </div>
            </a>
        </el-col>
        <el-col :span="8">
            <a href="/post">
                <div class="grid-content bg-purple">
                    <img src="../../static/natsu02.jpg" alt="">
                    <div class="one">日本夏日祭</div>
                    <div class="two">推开窗，慢赏夏夜的绚烂花火</div>
                    <div class="three">穿浴衣，逛屋台，在河边吹晚风。在日本夏日祭的热闹中，等待花火绽放的夜空。</div>
                </div>
            </a>
        </el-col>
        <el-col :span="8">
            <a href="/post">
                <div class="grid-content bg-purple">
                    <img src="../../static/natsu03.jpg" alt="">
                    <div class="one">东非自然之旅</div>
                    <div class="two">去探险，见证东非动物大迁徙</div>
                    <div class="three">感受生命的自由壮阔，住进东非特色房源，全方位投入自然之中。</div>
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
            color:orangered;
            margin-top:25px;
        }
        .el-row {
        margin: 10px 0;
        width: 100%;
            img{
                width:100%;
                height: 100%;
            }
            .one{
                color:#999;
                font-size:12px;
            }
            .two{
                font-size:16px;
                font-weight: 700;
                margin-top:5px;
            }
            .three{
                font-size:14px;
                margin-top:5px;
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
