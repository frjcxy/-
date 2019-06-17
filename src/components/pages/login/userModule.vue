<template>
  <div id="userModule">
    <!-- 用户界面 -->
    <el-container>
      <el-header id="userModule-header">
        <div class="W title">
          <router-link to="/login" class="authentication">
            <h1>立创商城登录认证平台</h1>
          </router-link>
          <router-link to="/shopping/index" class="website">立创商城网站</router-link>
        </div>
      </el-header>
      <el-main id="userModule-main">
        <!-- 内容区域 -->
        <div class="W">
          <router-view name="user"></router-view>
        </div>
      </el-main>
      <el-footer id="userModule-footer">
        <div>
          <p>立创商城服务QQ：4000800709 / 服务热线：400-830-2058</p>
          <a href="#">粤ICP备13005967号-2</a>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scope>
#userModule {
  @textcolor : #409EFF;
  .W {
    width: 995px;
    margin: 0 auto;
  }
  // 界面头部
  #userModule-header {
    height: 102px !important;
    .title {
      display: flex;
      height: 100%;
      justify-content: space-between;
      align-items: center;
    }
    .authentication {
      font-size: 26px;
      line-height: 26px;
      color: @textcolor;
      font-weight: bold;
    }
    .website {
      font-size: 16px;
      color: #6c6c6c;
    }
  }
  // 主体
  #userModule-main {
    // height: 680px;
    background-color: #c7e6f5;
  }

  #userModule-footer {
    text-align: center;
    div {
      padding: 30px 0;
      p {
        color: #333;
        font-size: 14px;
        line-height: 28px;
      }
      a {
        color: #333;
        font-size: 14px;
        line-height: 28px;
      }
    }
  }
}
</style>