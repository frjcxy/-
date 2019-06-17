<template>
  <div id="edit">
    <!-- 编辑用户信息 -->
    <div class="member-title">
      <h3>编辑账户信息</h3>
    </div>
    <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm edit-form">
      <el-form-item label="客户编号:" class="number">
        <span>
          <i class="el-icon-user-solid"></i>
          <i>1956456A</i>
          <a href="#">[级别介绍]</a>
        </span>
      </el-form-item>
      <el-form-item label="成长值:" class="grow-number">
        <span>0</span>
      </el-form-item>
      <el-form-item label="邮箱账号:" class="email">
        <span>
          <i>未绑定</i>
          <a href="#" class="el-icon-edit-outline"></a>
        </span>
      </el-form-item>
      <el-form-item label="手机账号:" class="phone email">
        <span>
          <i>1515155555</i>
          <a href="#" class="el-icon-edit-outline"></a>
        </span>
      </el-form-item>
      <el-form-item label="昵称:" class="nickname">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="姓名:" class="name">
        <span>占位</span>
      </el-form-item>
      <el-form-item label="性别:" class="sex">
        <el-radio label="1">男</el-radio>
        <el-radio label="2">女</el-radio>
      </el-form-item>
      <el-form-item label="身份证号码:" class="id-card">
        <el-input></el-input>
        <i class="el-icon-circle-check"></i>
        <span>（钱包提现必须预留身份证信息）</span>
      </el-form-item>
      <el-form-item label="公司名称:" class="company">
        <el-input></el-input>
        <i class="el-icon-circle-check"></i>
        <span>（用于增值税发票抬头）</span>
      </el-form-item>
      <el-form-item label="纳税人识别号:" class="identify">
        <el-input></el-input>
        <i class="el-icon-circle-check"></i>
        <span>（用于增值税发票）</span>
      </el-form-item>
      <div class="edit-btn">
        <el-button type="primary">保存修改</el-button>
        <el-button type="primary">重填</el-button>
      </div>
    </el-form>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scope>
#edit {
  
  .edit-form {
    padding-left: 50px;
    .el-form-item {
      margin-bottom: 0;
    }
    .number {
      span {
        .el-icon-user-solid {
          font-size: 20px;
          color: #555;
        }
        a {
          color: #01a1ec;
          margin-left: 30px;
        }
      }
    }

    .email {
      .el-icon-edit-outline {
        color: #ff8110;
        font-size: 18px;
        margin-left: 30px;
      }
    }
    .el-input {
      width: 300px;
      .el-input__inner {
        width: 100%;
        height: 32px;
      }
    }
    .el-icon-circle-check {
      color: #7fbe25;
      font-size: 18px;
      margin-right: 10px;
    }
    .edit-btn {
      margin: 20px 0 0 102px;
      .el-button {
        width: 90px;
        padding: 8px 0;
      }
    }
  }
}
</style>