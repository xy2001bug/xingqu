<template>
    <el-form ref="form" :model="form" label-width="80px">
    <h2>发表新攻略</h2>
    <span class="slogan">分享你的个人游记，让更多人看到哦！</span>
    <el-input 
    v-model="form.title"
    class="postTitle"
    placeholder=" 请输入标题"></el-input>
    
    <!-- 富文本框 -->
    <div class="height">
    <quillEditor 
    v-model="form.content"
    class="postConent">
    </quillEditor>
    </div>

    <el-form-item label="选择城市">
        <!-- fetch-suggestions 返回输入建议的方法 -->
        <el-autocomplete
            :fetch-suggestions="queryDestSearch"
            placeholder="请搜索游玩城市"
            @select="handleDestSelect"
            class="el-autocomplete"
            v-model="form.destCity"
            >
        </el-autocomplete>
    </el-form-item>
    <el-button 
    type="primary" 
    @click="handleSubmit">
      发布
    </el-button>
    <el-button @click="handleDraft">保存到草稿箱</el-button>
    
    </el-form>
</template>

<script>
// 富文本框需要样式
import'quill/dist/quill.core.css';
import'quill/dist/quill.snow.css';
import'quill/dist/quill.bubble.css';

import { quillEditor } from 'vue-quill-editor'

export default {
  components: {
      quillEditor
  },

  data() {
    return {
      // state: '',
      // timeout:  null,

      form: {
          title:"",
          content:"",
          destCity:"", // 游玩城市
      },
    }
  },
  
  
  // 选择游玩城市相关代码 待修改
  methods:{

    // 游玩城市输入框获得焦点时触发
    // value 是选中的值，cb是回调函数，接收要展示的列表
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
      this.form.destCity = item.value
    },

    // 发布游记
    handleSubmit() {
      //自定义一套验证规则
      const rules = {
        title:{
          value:this.form.title,
          message:"请输入标题"
        },
        content:{
          value:this.form.content,
          message:"请输入游记内容"
        },
        dest:{
          value:this.form.destCity,
          message:"请输入游玩城市"
        },
      }
      //用于验证开关
      let valid = true;
      //使用规则验证：
      Object.keys(rules).forEach(v => {
        if(!valid) return;
          // 这里是不能使用.v的，因为v在这里是一个变量
        if(!rules[v].value){
            this.$message.warning(rules[v].message);
            valid = false;
        }
      })
      if(!valid) return;

    
      this.$message({
        message: "正在生成游记，请稍等...",
        type: "success"
      });

      //数据获取完成后，向后台提交游记
      // this.$axios({
      //   // url:"/airorders",
      //   method:"POST",
      //   data:this.form,
        
      //   //需要验证登录
      //   headers:{
      //       Authorization:`Bearer ${this.$store.state.user.userInfo.token || "NO KOTEN"}`
      //   }
      // })
    // 发布游记闭合}
    },

    // 保存到草稿箱
    handleDraft(){
      this.$message({
        message: "正在保存游记，请稍等...",
        type: "success"
      });
    }

  },


  mounted() { 

  }
}
</script>

<style lang="less" scoped>
    h2{
        font-size: 22px;
        font-weight: 400;
        margin-bottom: 10px;
    }

    .slogan{
        color:#999;
        font-size: 12px;
    }
    // 游记标题输入框
    .postTitle{
        width: 100%;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    
    // 富文本框div
    .height{
        height:300px;
        margin-bottom:10px;
    }
    
    // 富文本框距下一元素边距
    .postConent{
        height: 233px;
    }
</style>
