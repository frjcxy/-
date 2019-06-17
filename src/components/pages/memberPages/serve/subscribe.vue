<template>
  <div id="subscribe">
    <!-- 短信订阅 -->
    <div class="member-title">
      <h3>短信/邮件订阅</h3>
    </div>
    <div class="message">
      <ul>
        <li class="title">
          <div>
            你当前绑定的邮箱为【
            <i>lc348533@szlcsc.com</i>
            】，
            <a href="#">点这里修改为常用邮箱</a>
          </div>
        </li>
        <li>
          <el-checkbox>优惠券过期提醒</el-checkbox>
          <span>优惠券过期之前，系统将发送短信给您</span>
        </li>
        <li>
          <el-checkbox>优惠券过期提醒</el-checkbox>
          <span>优惠券过期之前，系统将发送短信给您</span>
        </li>
        <li>
          <el-checkbox>优惠券过期提醒</el-checkbox>
          <span>优惠券过期之前，系统将发送短信给您</span>
        </li>
      </ul>
    </div>
    <el-button type="primary">保存设置</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less" scope>
#subscribe {
  .message {
    margin-top: 10px;
    ul {
      .title {
        div {
          font-size: 14px;
          a {
            color: #0093e6;
          }
        }
      }
      li {
        line-height: 40px;
        padding-left: 10px;
        border-top: 1px solid #e4e4e4;
        border-left: 1px solid #e4e4e4;
        border-right: 1px solid #e4e4e4;
        &:nth-last-of-type(1) {
          border-bottom: 1px solid #e4e4e4;
        }
        .el-checkbox {
          width: 30%;
          .el-checkbox__label {
            font-size: 12px;
            color: #666;
          }
        }

        span {
          color: #999;
        }
      }
    }
  }
  .el-button {
    padding: 6px 10px;
    margin-top: 14px;
  }
}
</style>