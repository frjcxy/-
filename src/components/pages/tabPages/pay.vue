<template>
  <!-- 支付完成页面 -->
  <div id="pay_success">
    <div class="pay_head">
      <div class="logo">
        <a href="javascript:;" @click="goToIndex">
          <img src="../../../assets/logo02.png" alt>
        </a>
        <h3>支付完成</h3>
      </div>
      <div class="search-box">
        <input type="text" placeholder="请输入型号或者产品信息" class="search">
        <el-button type="primary" class="searchBtn">
          <i class="el-icon-search"></i>
        </el-button>
      </div>
    </div>
    <div class="pay_body">
      <div class="title">订单支付结果</div>
      <div class="content">
        <h3>
          <i class="iconfont icon-success1f"></i> 订单提交成功，感谢您的购买！
        </h3>
        <p>
          现在您可以：
          <a href="javascript:;" @click="goToList">查看订单状态</a>或
          <a href="javascript:;" @click="goToIndex">返回首页</a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  inject: ["reload"],
  data() {
    return {};
  },
  created() {},
  methods: {
    goToIndex() {
      this.$router.push("/shopping/index");
      this.reload();
    },
    goToList(){
      this.$router.push("/shopping/member/list");
      this.reload();
    }
  }
};
</script>
<style lang="less" scoped>
#pay_success {
  .pay_head {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      a {
        img {
          display: inline-block;
          vertical-align: middle;
        }
      }
      h3 {
        display: inline-block;
        font-size: 22px;
      }
    }
    .search-box {
      width: 480px;
      height: 40px;
      line-height: 42px;
      border: 2px solid #409eff;
      display: flex;
      justify-content: center;
      align-items: center;
      .search {
        width: 420px;
        height: 36px;
        line-height: 36px;
        border: none;
        outline: medium;
        padding-left: 10px;
      }
      .searchBtn {
        flex: 1;
        border-radius: 0;
        .el-icon-search {
          font-size: 18px;
        }
      }
    }
  }

  .pay_body {
    height: 470px;
    .title {
      line-height: 40px;
      background-color: #eee;
      font-size: 14px;
      padding-left: 20px;
      margin-top: 20px;
    }
    .content {
      text-align: center;
      
      h3 {
        font-size: 24px;
        font-weight: 600;
        color: #666;
        line-height: 160px;
        margin-top: 40px;
        i {
          color: #5fc20f;
          font-size: 80px;
          line-height: 60px;
          font-weight: bold;
        }
      }
      p {
        font-size: 14px;
        color: #444;
        margin-bottom: 40px;
        a {
          color: #409eff;
        }
      }
    }
  }
}
</style>
