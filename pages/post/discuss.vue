<template>
  <div class="main_">
    <!-- 评论部分 -->
    <div class="pinlun_">
      <p>评论</p>
      <el-input v-model="input" placeholder="说点什么吧！"></el-input>
      <el-button class="submit" @click="handleTiJiao">提交</el-button>
    </div>
    <!-- 上传图片部分  -->
    <div class="tupian_">
      <el-upload
        action
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt />
      </el-dialog>
    </div>

    <!--评论区部分  -->
    <div class="comment" v-for="(item, key, index  ) in pinlun" :key="index">
      <div class="comment_">
        <div class="comment_1">
          <img src="../../avatar.jpg" alt />
          <span class="name">{{item.account.nickname}}</span>
          <span class="mate">2019-07-06 10:06</span>
          <span class="number clearfix">1</span>
        </div>

        <div class="comment_4">
          <p>{{item.content}}</p>
        

        <div class="comment_2">
          <a class="comment_3" href="#">回复</a>
        </div>
        </div>
      </div>
    </div>
    <!-- 分页 -->
    <!-- toral 总条数 -->
    <!-- page-sizes 当前页面渲染显示几条     -->
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[2, 4, 6, 8]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="dataInput.total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "", //输入框
      dataInput: "",//为了获取数据的总数
      pinlun: "",//获取数据 然后渲染出来
     
      dialogImageUrl: "",//上传图片的图片路径存放区
      dialogVisible: false, //上传图片

      currentPage4: 1, //分页的单次显示条


        fengye:{
        pageIndex:"",
        pageSize:"1",
        dataList:[],
        }

    };

    
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    //   分页组件事件
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(val);
      this.pageIndex = val;

    
      
    },
    handleTiJiao() {
      console.log(this.dialogImageUrl);
      console.log(this.input);
    }
  },
  mounted() {
    this.$axios({
      url: `/posts/comments`,
      method: "GET"
    }).then(res => {
      console.log(res);
      this.dataInput = res.data;
      this.pinlun = res.data.data;
      console.log(this.dataInput );
    });
  }
};
</script>

<style scoped lang="less">
// 双伪元素清除浮动
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.clearfix {
  *zoom: 1;
}

.main_ {
  .pinlun_ {
    position: relative;
    .submit {
      background: rgb(94, 47, 182);
      color: #ffff;
      height: 20px;
      line-height: 1px;
      text-align: center;
      font-size: 12px;
      position: absolute;
      top: 68px;
      right: 0px;
    }
  }
  .tupian_ {
    padding-top: 20px;
    margin-bottom: 40px;
  }
  .comment {
    border: 1px solid #ddd;
    .comment_ {
      border-bottom: 1px dashed #ddd;
      list-style: none;
      padding: 20px 20px 5px;

      .comment_1 {
        img {
          width: 20px;
          vertical-align: text-top;
        }
        .name,
        .mate {
          color: #666;
          font-size: 12px;
        }
        .number {
          // text-align: right;
          float: right;
          color: #999;
        }
      }

      .comment_2 {
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        text-align: right;
      }
      .comment_4{
        padding: 0 0 0 30px;
        
        p {
          padding-top: 14px;
        }

        .comment_3 {
          // 回复 样式
          color: rgba(7, 7, 204, 0.87);
          display: none;
        }
      }
    }
  }
  .block{
      margin: 20px 0 20px 0;
  }


}

.comment_4:hover .comment_3{
        display: block !important;
}
</style>
