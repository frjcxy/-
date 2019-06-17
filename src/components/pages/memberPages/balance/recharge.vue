<template>
  <div>
    充值记录
    <div v-for="(item,index) in List" :key="index">
      <div>
        <el-checkbox v-model="checkArr" :label="item.id" @change="changevalue"></el-checkbox>
        <span>{{item.name}}</span>
      </div>
      <table></table>
    </div>
    <el-checkbox v-model="cheackAllChecked" @change="checkAllFun">全选</el-checkbox>
    <!-- <span @click="reverseChecked">反选</span> -->
  </div>
</template>
 <script>
export default {
  data() {
    return {
      List: [
        {
          id: "1",
          name: "香蕉"
        },
        {
          id: "2",
          name: "苹果"
        },
        {
          id: "3",
          name: "橙子"
        },
        {
          id: "4",
          name: "鸭梨"
        },
        {
          id: "5",
          name: "葡萄"
        }
      ],
      cheackAllChecked: false,
      checkArr: [],
      checkCompleteArr: []
    };
  },
  methods: {
    //实现全选
    checkAllFun() {
      var _this = this;
      this.checkArr = [];
      if (this.cheackAllChecked) {
        this.List.forEach(function(item, index) {
          if (index >= 0) {
            _this.checkArr.push(item.id);
          }
        });
      }
    },
    removeByValue(changearr, checkarr) {
      var _this = this;
      for (var j = 0; j < checkarr.length; j++) {
        for (var i = 0; i < changearr.length; i++) {
          if (changearr[i] === checkarr[j]) {
            changearr.splice(i, 1);
            break;
          }
        }
      }
      this.checkArr = changearr;
      if (changearr.length <= _this.checkCompleteArr.length) {
        this.cheackAllChecked = false;
      }
      if (changearr.length === _this.checkCompleteArr.length) {
        this.cheackAllChecked = true;
      }
    },
    //选项的change事件
    changevalue() {
      var _this = this;
      if (this.checkArr.length <= _this.checkCompleteArr.length) {
        this.cheackAllChecked = false;
      }
      if (this.checkArr.length === _this.checkCompleteArr.length) {
        this.cheackAllChecked = true;
      }
    }
  },
  //全选或反选用到的完整数组值
  mounted() {
    var _this = this;
    this.List.forEach(function(item, index) {
      if (index >= 0) {
        _this.checkCompleteArr.push(item.id);
      }
    });
  }
};
</script>