<template>
<!-- 写游记 -->
    <div class="container">
        <el-row type="flex" justify="space-between">
            <!-- 游记内容 -->
            <div class="main">
                <PostEdit />
            </div>

            <!-- 侧边栏草稿箱 -->
            <div class="aside">
               <el-button plain>草稿箱(0)</el-button>
            </div>
        </el-row>
    </div>
</template>

<script>
import PostEdit from "@/components/post/postEdit.vue"

export default {
    components:{
        PostEdit
    },
}
</script>

<style lang="less" scoped>
    .container{
        width:1000px;
        margin:20px auto;
    }
    
    /*aside*/
    .aside{
        width: 200px;
        height: fit-content;
        text-align: center;
    }
</style>
