<template>
<section class="contianer">
    <el-row type="flex" justify="space-between">
        <div class="IndexBox">

            <div class="IndexLeft">
                <postMain/>
            </div>
            <div class="IndexRight">
                <PostAttack/>
            </div>
        </div>
    </el-row>
</section>
   
</template>

<script>
// 引入部分组件
import PostAttack from '@/components/post/postAttack'
import postMain from '@/components/post/postMain'
export default {
    // 注册组件
    components:{
        PostAttack,
        postMain
    }
}
</script>

<style scoped lang="less">
.IndexBox{
    padding-top: 20px;
    min-width:1000px;
    margin:0 auto;
    // background-color: #000;
    // height: 1870px;
    display: flex;
    justify-content: space-between;
    .IndexLeft{
        width: 261px;  

        left: 0;
    }
    .IndexRight{
        width: 700px;
        // height: 1000px;

        right: 0;
    }
}
</style>
