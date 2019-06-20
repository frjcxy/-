<template>
  <div id="center">
    <!-- 会员中心 -->
    <div class="user">
      <span>
        您好，
        <i>5544464</i>
      </span>
      <router-link to="edit"> 
      <el-button class="btn"> 完善基本信息</el-button></router-link>
    </div>
    <div class="userinfo">
      <div class="custom_b_left">
        <div class="portrait"></div>
        <ul>
          <li>
            昵称：
            <span>占位</span>
          </li>
          <li>
            姓名:
            <span>{{this.$store.state.personalDetails.personName}}</span>
          </li>
          <li>
            邮箱账户：
            <span>占位占位占位</span>
          </li>
          <li>
            手机号码：
            <span>{{this.$store.state.loginPhone}}</span>
          </li>
        </ul>
      </div>

      <div class="custom_b_right">
        <ul>
          <li>
            客户等级：
            <span>
              占位占位占（成长值：
              <i>0</i>）
              <a href="#">[等级介绍]</a>
            </span>
          </li>
          <li>
            信用积分：
            <span>
              占位占位
              <a href="#">[信用积分规则]</a>
            </span>
          </li>
          <li>
            上次登录时间：
            <span>占位占位占位占位</span>
          </li>
          <li>
            现货订单付款期限为：
            <span>6个小时</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="message">
      <ul>
        <li>
          <span>购物车</span>
          <a href="javascript:;">0</a>
        </li>
        <li>
          <span>待支付</span>
          <a href="javascript:;">0</a>
        </li>
        <li>
          <span>未发货</span>
          <a href="javascript:;">0</a>
        </li>
        <li>
          <span>已收藏</span>
          <a href="javascript:;">0</a>
        </li>
        <li>
          <span>未读信息</span>
          <a href="javascript:;">0</a>
        </li>
        <li>
          <span>投诉建议</span>
          <a href="javascript:;">0</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
#center {
  border: 1px solid #e5e5e5;
  .user {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;
    padding: 10px 20px;
    span {
      font-size: 14px;
    }
    .btn {
      padding: 8px 10px;
      color: #fff;
      background-color: #ff7900;
    }
  }
  .userinfo {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    .custom_b_left {
      padding: 0 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      .portrait {
        width: 110px;
        height: 110px;
        background-color: #ccc;
        border-radius: 50%;
      }
      ul {
        margin-left: 50px;
      }
    }

    li {
      line-height: 30px;
      font-size: 14px;
      color: #a2a2a2;
    }
    span {
      color: #444;
    }
    .custom_b_right {
      border-left: 1px solid #e5e5e5;
      padding: 0 80px;
      a {
        color: #429ce7;
      }
    }
  }
  .message {
    ul {
      display: flex;
      border-top: 1px solid #e5e5e5;
      li {
        font-size: 14px;
        margin: 0 40px;
        line-height: 40px;
        a {
          color: #ff7900;
          text-decoration: underline;
          padding-left: 5px;
        }
      }
    }
  }
}
</style>