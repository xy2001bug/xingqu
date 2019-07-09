<template>
  <div class="container">
    <!-- 评论区内容 -->
    <div class="content">
       <el-row :span="24" class="title">评论</el-row>
      <el-tag closable @close="handleClose" v-if="tagShow" type="info">{{name}}</el-tag>

      <el-form ref="form" :model="form">
        <el-form-item>
          <el-input v-model="form.content" placeholder="说点什么吧..." type="textarea" resize="none"></el-input>
        </el-form-item>
        <el-form-item>
        <el-row type="flex" justify="space-between">
          <el-col :span="4">
            <el-upload
          action="http://localhost:1337/upload"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          name="files"
          ref="upload"
          :on-success="handleAvatarSuccess"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt />
        </el-dialog>
          </el-col>

        <el-col :span="3">
          <el-button type="primary" @click="onSubmit">提交</el-button>
        </el-col>
        </el-row>

        
          
        </el-form-item>
      </el-form>

      <div class="cmd-list">
       
        <el-row>
          <Digui :data="commentList" @showTag="handleShowtag"></Digui>
        </el-row>
      </div>

      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageIndex"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import Digui from "@/components/hotel/digui.vue";
export default {
  data() {
    return {
      form: {
        content: "",
         hotel:this.$route.query.id,
        pics:[],
        follow: ""     //回复ID
      },
      follow: this.$store.state.hotel.id,
      pageIndex: 1, // 默认显示第一页
      pageSize: 10, // 默认显示多少条数据
      total: 0, // 总条数
      name: 1, //标签内容
      tagShow: false,
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  mounted(){
    this.$store.commit("hotel/setUserInfo",null);
  },
  props: ["commentList"],
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleClose(tag) {
      this.tagShow = false;
      this.$store.state.hotel.id="";
    },
    handleRemove(file, fileList) {
      console.log(file,);
      console.log( fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    //提交评论
    onSubmit() {
      console.log(this.$store.state.hotel.id,1);
      this.form.follow=this.$store.state.hotel.id;
      console.log(this.form.follow);
      this.$axios({
        url:"/comments",
        method:"post",
        data:this.form,
        headers:{
           Authorization: `Bearer ${this.$store.state.user.userInfo.token}`
        }
      }).then(res=>{
  
        let{status,message}=res.data;
        if(status==0){

          //提交成功清除表单
        this.form.content="";
        this.$refs.upload.clearFiles();
        //提交成功重新请求评论
        this.$emit("getComments");
        }
          this.$message({
          message,
          type: 'success'
        });   
      })
    },
    // 上传成功
    handleAvatarSuccess(res, file,fileList){
      this.form.pics.push(res[0]);
    },
    //标签是否显示
    handleShowtag(){
      this.tagShow=true;
    }
  },
  components: {
    Digui
  },
};
</script>

<style lang="less" scoped>
.container{
  .title{
    padding: 10px;
  }
}
  
.cmd-list{
  border: 1px solid #ccc;
}
</style>

