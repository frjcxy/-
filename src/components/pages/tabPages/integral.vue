<template>
  <div>
    <!-- 积分商城 -->
    <!-- 面包屑 -->
    <div class="crumbs">
      <span>你当前所在的位置：</span>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/shopping/index' }">立创商城</el-breadcrumb-item>
        <el-breadcrumb-item>积分商城</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 登录注册 -->
    <div class="login">
      <el-row class="login-row">
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <span class="say-hi">Hi, 你好！</span>
            <el-button type="warning" class="login-btn">请登录</el-button>
            <el-button type="info" class="register-btn">免费注册</el-button>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
            <a href="#" class="detail">查看积分明细>></a>
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- 优惠券 -->
    <div class="discount-coupon">
      <h2>兑换优惠券</h2>
      <div class="box">
        <div class="hollow-circles">nihaoyz</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: {},
  methods: {}
};
</script>
<style lang="less">
@textcolor: #409eff;
// 面包屑
.crumbs {
  display: flex;
  margin-top: 16px;
  align-items: center;
  span {
    font-size: 14px;
  }
}

// 登录注册
.login {
  margin: 30px;
  .login-row {
      display: flex;
      justify-content: space-between;
    .say-hi {
      font-size: 14px;
    }
    .login-btn,
    .register-btn {
      padding: 6px 18px;
      margin-left: 20px;
    }

    .login-btn {
      background-color: #ff7800;
    }
.grid-content.bg-purple-light {
    text-align: right;
    line-height: 28px;
}
    .detail {
      font-size: 14px;
      color: @textcolor;
    }
  }
}
.discount-coupon{
  .hollow-circles {
  width: 300px;
  height: 100px;
  position: relative;
  background: #4e8ae1;
  margin-bottom: 10px;
  
}
.hollow-circles::after {
  content: '';
  position: absolute;
  height: 5px;
  width:100%;
  left: 0;
  bottom: -5px;
  background-image: linear-gradient(to right, #0c79b8 5px, transparent 5px, transparent),
  radial-gradient(10px circle at 10px 5px, transparent 5px, #00adb5 5px);
  background-size: 15px 5px;
}
}
</style>