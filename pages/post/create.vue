<template>
  <div class="create">
    <el-form class="create-left" :rules="rules" ref="form" :model="form">
      <div class="create-title">
        <h2>发表新攻略</h2>
        <p class="create-desc">分享你的个人游记，让更多人看到哦！</p>
      </div>

      <el-form-item class="el-input">
        <el-input v-model="form.title" placeholder="请输入标题"></el-input>
      </el-form-item>

      <section class="contain-editor">
        <div id="app" class="richTextBox">
          <VueEditor 
          :config="config"
          :content="content" 
          class="VueEditor"/>
        </div>
      </section>

      <el-form-item label="选择城市" class="choose_city">
        <el-autocomplete
          :fetch-suggestions="queryDestSearch"
          placeholder="请搜索游玩城市"
          @select="handleDestSelect"
          class="el-autocomplete"
          v-model="form.city"
          >
        </el-autocomplete>
      </el-form-item>

      <el-row class="submit-button">
        <el-button type="primary" @click="handleSubmit">发布</el-button>
        <el-button @click="handleDraft" class="draft">保存到草稿箱</el-button>
        
      </el-row>
    </el-form>
    <div class="create-right">
      <el-button plain class="create-right-title">草稿箱({{form.id}})</el-button>
      <el-row v-for="(item, index) in draft" :key="index">
        <span @click="handleChange(index)"  :v-model="index" class="draftTitle">{{item.title}} <i class="el-icon-edit"></i></span>       
      </el-row>
    </div>
  </div>
</template>

<script>
import "quill/dist/quill.snow.css"
let VueEditor;

if (process.browser) {
  VueEditor = require('vue-word-editor').default
}
export default {
  name: 'app',
  components: { VueEditor },
  data() {
    return {
      draft: [],
      article: [],
      content: "",
      form: {
        title: "",
        city: "",
        id: "",
        index:0
      },
      rules: {
        city: [{ required: true, message: "请输入城市名", trigger: "blur" }],
        title: [{ required: true, message: "请输入标题", trigger: "blur" }]
      },
        // 富文本相关
      config: {
        modules: { 
          // 工具栏
          toolbar: [
          ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
          ['blockquote', 'code-block'],
          ['image', 'video'],

          [{ 'header': 1 }, { 'header': 2 }],               // custom button values
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
          [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
          [{ 'direction': 'rtl' }],                         // text direction
          ]
        },
        // 主题
        theme: 'snow',
        uploadImage: {
          url: "http://localhost:1337/upload",
          name: "files",
          uploadBefore(file){
          return true
          },
          uploadProgress(res){

          },
          uploadSuccess(res, insert){
          insert("http://localhost:1337" + res.data[0].url)
          },
          uploadError(){},
          showProgress: false
        },

        uploadVideo: {
          //url: "http://157.122.54.189:9095/upload",
          url: "http://localhost:1337/upload",
          name: "files",
          uploadBefore(file){
          return true
          },
          uploadProgress(res){

          },
          uploadSuccess(res, insert){
          insert("http://localhost:1337" + res.data[0].url)
          },
          uploadError(){},
        }
        }
    }
    
  },

  methods: {
    handleChange(index) {
      const localPost = JSON.parse(localStorage.getItem("post-draft"));
      this.form.title = localPost[index].title;
      this.form.content = localPost[index].content;
      this.form.city = localPost[index].city;
    },
    // 选择城市
    queryDestSearch(value, cb) {
      if(!value){
        return;
      }
      this.$axios({
          url:"http://157.122.54.189:9095/airs/city?name=" + value,
          method:"GET"
      }).then(res=>{
        const {data} = res.data
        const newArr = data.map(v=>{
          return {
            ...v,
            value: v.name.replace("市","")
          }
        })
        cb(newArr)
      })
    },
    // 选择游玩城市下拉选择时触发
    handleDestSelect(item) {
      this.form.city = item.value
    },
    handleSubmit() {
      const token = this.$store.state.user.userInfo.token;
      if (!token) {
        setTimeout(()=>{
          this.$router.push("../user/login")
        },3500)
        this.$message.success("登录后才可以发布哟~为您跳转中...");
        return;
      }
      const rules = {
        title: {
          value: this.form.title,
          message: "请输入标题"
        },
        // content:{
        //   value: this.form.content,
        //   message: "请输入内容"
        // },
        city: {
          value: this.form.city,
          message: "请输入游玩城市"
        }
      };
      let valid = true;
      Object.keys(rules).forEach(v => {
        if (!valid) return;
        if (!rules[v].value) {
          this.$message.warning(rules[v].message);
          valid = false;
        }
      });
      if (rules.title.value&& rules.city.value) {
        this.article.unshift({
          content: this.content,
          city: this.form.city,
          title: this.form.title
        });
        localStorage.setItem("posts", JSON.stringify(this.article));
      }
      const data = {
        content: this.content,
        city: this.form.city,
        title: this.form.title
      };
      const {
        user: { userInfo }
      } = this.$store.state;
      if (rules.title.value&& rules.city.value) {
      this.$axios({
        url: "posts",
        method: "POST",
        data,
        headers: {
          Authorization: `Bearer ${userInfo.token || "NO TOKEN"}`
        }
      }).then(res => {
        const { status, message } = res.data;
        if (status == 0) {
          this.$message.success(message);
        }
        this.form.city = "";
        this.form.title = "";
        this.content = "";
      });
      }
      this.draft.splice(this.index,1)
      localStorage.removeItem("post-draft")
      this.form.id = this.draft.length;
    },
    handleDraft() {
      const token = this.$store.state.user.userInfo.token;
      console.log(token);
      if (!token) {
        setTimeout(()=>{
          this.$router.push("../user/login")
        },3500)
        this.$message.success("登录后才可以保存哟~为您跳转中...");
        return;
      }
      const rules = {
        title: {
          value: this.form.title,
          message: "请输入标题"
        }
      };
      let valid = true;
      Object.keys(rules).forEach(v => {
        if (!valid) return;
        if (!rules[v].value) {
          this.$message.warning(rules[v].message);
          valid = false;
        }
      });
      if (!valid) {
        return;
      }
      if (rules.title.value) {
        this.draft.unshift({
          content: this.content,
          city: this.form.city,
          title: this.form.title
        });
        localStorage.setItem("post-draft", JSON.stringify(this.draft));
        this.form.id = this.draft.length;
      }
    }
  },
  mounted() {
    this.draft = JSON.parse(localStorage.getItem("post-draft") || `[]`);
    this.form.id = this.draft.length;
  }
};
</script>

<style scopde lang="less">
.create {
  width: 1000px;
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  .create-left {
    width: 750px;
    .create-title {
      h2 {
        font-weight: 400;
        font-size: 22px;
        margin-bottom: 10px;
      }
      .create-desc {
        font-size: 12px;
        color: #999;
        margin-bottom: 10px;
      }
    }
    .el-input {
      background-color: #fff;
      border-radius: 4px;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      width: 100%;
      // margin-bottom: 22px;
    }
    .contain-editor {
      // margin-top: 20px;
      .quill-editor {
        min-height: 200px;
        height: 450px;
        max-height: 600px;
        overflow-y: auto;
      }
    }
    .choose_city {
      margin-bottom:15px;
      span {
        text-align: right;
        float: left;
        font-size: 14px;
        color: #606266;
        line-height: 40px;
        padding: 0 12px 0 0;
        box-sizing: border-box;
      }
      .search-city {
        position: relative;
        font-size: 14px;
        display: inline-block;
        width: 100%;
      }
      .submit-side {
        font-size: 14px !important;
      }
    }
  }
  .create-right {
    width: 200px;
    color:inherit;
    text-align: center;
    margin-top:15px;
    .draftTitle{
      cursor:pointer;
      color:#00bed4;
        .el-icon-edit{
          color: #00bed4;
          margin-top:10px;
        }
    }
  }
}

// 富文本框高度
    .richTextBox{
        height: 300px;
        .VueEditor{
          height: 250px;
        }
    }
</style>
