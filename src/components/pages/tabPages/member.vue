<template>
  <div class="centre">
    <!-- 会员中心页 -->
    <el-container>
      <el-aside width="200px" class="aside-menu">
        <h3>
          <router-link to="/shopping/member/center">会员中心</router-link>
        </h3>
        <ul>
          <li>账户中心</li>
          <li>
            <router-link to="/shopping/member/edit">编辑账户信息</router-link>
          </li>
          <li>
            <router-link to="/shopping/member/site">管理收货地址</router-link>
          </li>
          <li>
            <router-link to="/shopping/member/password">更改登录密码</router-link>
          </li>
          <li>
            <router-link to="/shopping/member/invoice">增值税开票资料</router-link>
          </li>
          <li>
            <router-link to="/shopping/member/myticket">我的优惠券</router-link>
          </li>
          <li>
            <router-link to="/shopping/member/myintegral">我的积分明细</router-link>
          </li>
          <li>
            <router-link to="/shopping/member/material">我的物料编码</router-link>
          </li>
          <li>
            <router-link to="/shopping/member/bind">账号绑定</router-link>
          </li>
        </ul>
        <ul>
          <li>交易管理</li>
          <li>
            <router-link to="/shopping/member/list">订单管理</router-link>
          </li>
          <li>
            <router-link to="/shopping/member/agent">代付订单</router-link>
          </li>
          <li>
            <router-link to="/shopping/member/BOM">BOM管理</router-link>
          </li>
          <li>
            <router-link to="/shopping/member/history">购买历史</router-link>
          </li>
          <li>
            <router-link to="/shopping/member/bill">电子对账单</router-link>
          </li>
        </ul>
        <ul>
          <li>服务中心</li>
          <li>
            <router-link to="/shopping/member/message">系统信息</router-link>
          </li>
          <li>
            <router-link to="/shopping/member/complaint">我的投诉</router-link>
          </li>
          <li>
            <router-link to="/shopping/member/favorite">我的收藏</router-link>
          </li>
          <li>
            <router-link to="/shopping/member/schedule">开票进度查询</router-link>
          </li>
          <li>
            <router-link to="/shopping/member/apply">重新开票申请记录</router-link>
          </li>
          <li>
            <router-link to="/shopping/member/after_sales">售后服务</router-link>
          </li>
          <li>
            <router-link to="/shopping/member/subscribe">短信/邮件订阅</router-link>
          </li>
        </ul>
        <ul>
          <li>预付余额</li>
          <li>
            <router-link to="/shopping/member/sum_manage">预付余额账户管理</router-link>
          </li>
          <li>
            <router-link to="/shopping/member/recharge">充值记录</router-link>
          </li>
          <li>
            <router-link to="/shopping/member/deposit">余额转出记录</router-link>
          </li>
          <li>
            <router-link to="/shopping/member/supply">补/退款记录</router-link>
          </li>
        </ul>
      </el-aside>
      <el-main>
        <!-- 内容区域 -->
        <router-view name="memberCenter"></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scope>
.centre {
  margin-top: 10px;
  .aside-menu {
    border: 1px solid #e5e5e5;
    h3 {
      line-height: 45px;
      padding-left: 20px;
      border-bottom: 1px dashed #e5e5e5;
      a {
        font-size: 16px;
        font-weight: bold;
        color: #444;
      }
    }

    ul {
      overflow: hidden;
      border-bottom: 1px dashed #e5e5e5;
      padding: 0 10px 10px 20px;
      li {
        height: 30px;
        line-height: 30px;
        padding: 0 10px 0 20px;
        &:nth-of-type(1) {
          font-size: 14px;
          font-weight: bold;
          color: #444;
          padding: 15px 10px 10px 20px;
        }
        a {
          font-size: 14px;
          color: #444;
        }
      }
    }
  }
  .el-main {
    padding-top: 0;
  }
}
</style>