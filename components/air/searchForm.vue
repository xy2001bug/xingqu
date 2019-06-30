<template>
  <div class="search-form">
    <!-- 头部tab切换 -->
    <el-row type="flex" class="search-tab">
      <span
        v-for="(item, index) in tabs"
        :key="index"
        @click="handleSearchTab(item, index)"
        :class="{active: index === currentTab}"
      >
        <i :class="item.icon"></i>
        {{item.name}}
      </span>
    </el-row>

    <el-form class="search-form-content" ref="form" label-width="80px" :model="form">
      <el-form-item label="出发城市">
        <!-- fetch-suggestions 返回输入建议的方法 -->
        <!-- select 点击选中建议项时触发 -->
        <el-autocomplete
          :fetch-suggestions="queryDepartSearch"
          placeholder="请搜索出发城市"
          @select="handleDepartSelect"
          class="el-autocomplete"
          v-model="form.departCity"
        ></el-autocomplete>
      </el-form-item>
      <el-form-item label="到达城市">
        <el-autocomplete
          :fetch-suggestions="queryDestSearch"
          placeholder="请搜索到达城市"
          @select="handleDestSelect"
          class="el-autocomplete"
          v-model="form.destCity"
        ></el-autocomplete>
      </el-form-item>
      <el-form-item label="出发时间">
        <!-- change 用户确认选择日期时触发 -->
        <el-date-picker type="date" placeholder="请选择日期" style="width: 100%;" @change="handleDate" v-model="form.departDate"></el-date-picker>
      </el-form-item>
      <el-form-item label>
        <el-button style="width:100%;" type="primary" icon="el-icon-search" @click="handleSubmit">搜索</el-button>
      </el-form-item>
      <div class="reverse">
        <span @click="handleReverse">换</span>
      </div>
    </el-form>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      tabs: [
        { icon: "iconfont icondancheng", name: "单程" },
        { icon: "iconfont iconshuangxiang", name: "往返" }
      ],
      currentTab: 0,
      form:{
          departCity:"",//出发城市
          departCode:"",//出发城市的代码
          destCity:"",//到达城市
          destCode:"",//到达城市的代码
          departDate:""//出发的时候
      }
    };
  },
  methods: {
    // tab切换时触发
    handleSearchTab(item, index) {
      //往返
      if(index === 1){
        this.$confirm("目前没有这个功能，请自己解决~","提示",{
            confirmButtonText:"好的",
            showCancelButton:false,
            type:"waring"
        })
      }
    },

    // 出发城市输入框获得焦点时触发
    // value 是选中的值，cb是回调函数，接收要展示的列表
    queryDepartSearch(value, cb) {
         if(!value) {
                return;
            }
            this.$axios({
                url: "http://157.122.54.189:9095/airs/city?name=" + value,
                method: "GET"
            }).then(res => {
        
                const {data} = res.data;
                const newData = data.map(v => {
                    return {
                        ...v,
                        value: v.name.replace("市", "")
                    }
                })

                // cb函数接收的参数是数组，数据里面每一项必须是对象，然后带有value的属性
                cb(newData);
            });
    },

    // 目标城市输入框获得焦点时触发
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

    // 出发城市下拉选择时触发
    handleDepartSelect(item) {
      this.form.departCity=item.value;
      this.form.departCode=item.sort;
    },

    // 目标城市下拉选择时触发
    handleDestSelect(item) {
      this.form.destCity = item.value;
      this.form.destCode = item.sort;
    },

    // 确认选择日期时触发
    handleDate(value) {
      this.form.departDate = moment(value).format("YYYY-MM-DD")
    },

    // 触发和目标城市切换时触发
    handleReverse() {
      const {departCity,departCode,destCity,destCode} = this.form;
      this.form.departCity = destCity;
      this.form.departCode = destCode;
      this.form.destCity = departCity;
      this.form.destCode = departCode;
    },

    // 提交表单是触发
    handleSubmit() {
      //关于提交表单，在提交之前应该判断一下，表单中的值是否已经填写完毕
      //自定义一套验证规则
      const rules = {
        depart:{
          value:this.form.departCity,
          message:"请输入出发城市"
        },
        dest:{
          value:this.form.destCity,
          message:"请输入目标城市"
        },
        data:{
          value:this.form.departDate,
          message:"请输入出发日期"
        }
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
      //验证完毕，发送数据请求(直接push)从url中发送
      this.$router.push({
        path:"/air/flights",
        query:this.form
      })
    },
  },
  mounted() {}
};
</script>

<style scoped lang="less">
.search-form {
  border: 1px #ddd solid;
  border-top: none;
  width: 360px;
  height: 350px;
  box-sizing: border-box;
}

.search-tab {
  span {
    display: block;
    flex: 1;
    text-align: center;
    height: 48px;
    line-height: 42px;
    box-sizing: border-box;
    border-top: 3px #eee solid;
    background: #eee;
  }

  .active {
    border-top-color: orange;
    background: #fff;
  }

  i {
    margin-right: 5px;
    font-size: 18px;

    &:first-child {
      font-size: 16px;
    }
  }
}

.search-form-content {
  padding: 15px 50px 15px 15px;
  position: relative;

  .el-autocomplete {
    width: 100%;
  }
}

.reverse {
  position: absolute;
  top: 35px;
  right: 15px;

  &:after,
  &:before {
    display: block;
    content: "";
    position: absolute;
    left: -35px;
    width: 25px;
    height: 1px;
    background: #ccc;
  }

  &:after {
    top: 0;
  }

  &:before {
    top: 60px;
  }

  span {
    display: block;
    position: absolute;
    top: 20px;
    right: 0;
    font-size: 12px;
    background: #999;
    color: #fff;
    width: 20px;
    height: 20px;
    line-height: 18px;
    text-align: center;
    border-radius: 2px;
    cursor: pointer;

    &:after,
    &:before {
      display: block;
      content: "";
      position: absolute;
      left: 10px;
      width: 1px;
      height: 20px;
      background: #ccc;
    }

    &:after {
      top: -20px;
    }

    &:before {
      top: 20px;
    }
  }
}
</style>