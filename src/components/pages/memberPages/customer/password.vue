<template>
  <div id="password">
    <!-- 修改密码 -->
    <div class="member-title">
      <h3>
        修改密码
        <i class="el-icon-edit"></i>
      </h3>
    </div>
    <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="客户编号：">
        <span class="number">6444494A</span>
      </el-form-item>
      <el-form-item label="输入原密码：" >
        <el-input type="password" autocomplete="off" placeholder="字母与数字组合至少6位"></el-input>
      </el-form-item>
      <el-form-item label="输入新密码：">
        <el-input type="password"  autocomplete="off" placeholder="字母与数字组合至少6位"></el-input>
      </el-form-item>
      <el-form-item label="确认新密码：">
        <el-input type="password"  autocomplete="off" placeholder="字母与数字组合至少6位"></el-input>
      </el-form-item>
      
      <el-form-item>
        <el-button type="primary">完成</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scope>
    #password {
        .el-form {
            .number {
                color: #007fd0;
                font-weight: bold;
            }
            padding: 30px 150px;
            .el-input {
                width: 300px;
                height: 30px;
                .el-input__inner {
                    width: 100%;
                    height: 100%;
                }
                
            }
            .el-button {
                    width: 120px;
                    padding: 10px 0;
                }
        }
    }
</style>