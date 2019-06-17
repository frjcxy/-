<template>
  <div id="bind">
    <!-- 账户绑定 -->
    <div class="member-title">
      <h3>
        账户绑定
        <i>(未绑定)</i>
      </h3>
    </div>
    <div class="wechat">
      <div class="bind-contet">
        <span>
          <p>您可以选择绑定微信账号，绑定后，您可以通过微信扫码快速登录商城网站。</p>
          <el-button type="warning">立即绑定</el-button>
        </span>
        <span>
          <img
            src="https://static.szlcsc.com/member/resources/images/wx-bind01_1.png"
            width="60"
            height="60"
          >
          <img
            src="https://static.szlcsc.com/member/resources/images/wx-bind04.png"
            width="60"
            height="60"
          >
          <img
            src="https://static.szlcsc.com/member/resources/images/wx-bind02.png"
            width="60"
            height="60"
          >
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scope>
#bind {
  .member-title {
    h3 {
      i {
        color: #f00;
      }
    }
  }
  .wechat {
    height: 199px;
    border: 1px solid #e4e4e4;
    margin-top: 15px;
    padding: 32px 23px;
   

    .bind-contet {
        height: 100%;
         display: flex;
         align-items: center;
        span {
            &:nth-of-type(1) {
                flex: 1;
            .el-button {
                padding: 8px 20px;margin-top: 20px;
            }
            }
            &:nth-of-type(2) {
                width: 300px;
                img {
                    &:nth-of-type(2) {
                        width: 30px;
                        height: 30px;
                        margin: 0 30px;
                    }
                }
            }
        }
    }
  }
}
</style>