<template>
  <div id="invoice">
    <!-- 增值税开票资料 -->
    <div class="member-title">
      <h3>增值税开票资料</h3>
    </div>
    <el-form label-width="200px" class="demo-ruleForm company">
      <el-form-item label="开票公司名称：">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="税号：">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="地址：">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="电话：">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="银行：">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="账号：">
        <el-input></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">提交审核</el-button>
      </el-form-item>
      <el-form-item>
        <p>开票资料审核只校验抬头和税号，其他信息以客户填写为准，请认真核对！</p>
      </el-form-item>
    </el-form>

    <el-form label-width="200px" class="demo-ruleForm person">
      <el-form-item label="发票收件人：">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="发票收件人手机：">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="发票收件地址：">
        <el-select placeholder="请选择省  请选择市  请选择区"></el-select>
        <el-input placeholder="街道、小区、楼牌号等，无需重复填写省市区" class="detailed"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">保存地址</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scope>
#invoice {
  .company {
    margin-top: 20px;
    border-bottom: 2px solid #eee;
    .el-form-item {
      margin-bottom: 10px;
      p {
        color: #f00;
      }
    }
  }
  .el-input {
    width: 300px;
    height: 30px;
    .el-input__inner {
      width: 100%;
      height: 100%;
    }
  }
  .person {
      margin-top: 20px;
    border-bottom: 2px solid #eee;
      .detailed {
          width: 500px;
          display: block;
      }
    
    .el-input__icon {
        height: 24px;
        line-height: 24px;
      }
  }
}
</style>