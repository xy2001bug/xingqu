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
        <el-autocomplete
            v-model="state"
            :fetch-suggestions="querySearchAsync"
            placeholder="请输入内容"
            @select="handleSelect"
            >
        </el-autocomplete>
    </el-form-item>
    <el-button type="primary">发布</el-button>
    <el-button>保存到草稿箱</el-button>
    
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
        restaurants: [],
        state: '',
        timeout:  null,

        form: {
            title:"",
        },
      }
    },
    
    
    // 选择游玩城市相关代码 待修改
    methods:{
        loadAll() {
        return [
          { "value": "北京", "address": "长宁区新渔路144号" },
          { "value": "上海", "address": "上海市长宁区淞虹路661号" },
          { "value": "广州", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
          { "value": "深圳", "address": "天山西路438号" },
          { "value": "澳门", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
          { "value": "香港", "address": "上海市长宁区金钟路633号" },
          { "value": "台湾", "address": "上海市嘉定区曹安公路曹安路1685号" },
          { "value": "昆明", "address": "上海市普陀区同普路1435号" },
          { "value": "成都", "address": "上海市北翟路1444弄81号B幢-107" },
          { "value": "重庆", "address": "上海市嘉定区新郁路817号" },
          { "value": "西安", "address": "嘉定区曹安路1611号" },
          { "value": "杭州", "address": "嘉定区曹安公路2383弄55号" },
          { "value": "南京", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
          { "value": "哈尔滨", "address": "上海长宁区金钟路968号9号楼地下一层" }
        ];
      },
      querySearchAsync(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
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
    
    // 富文本框内容框高度
    .height{
        height:300px;
        margin-bottom:10px;
    }
    
    // 富文本框距下一元素边距
    .postConent{
        height: 233px;
    }
</style>
