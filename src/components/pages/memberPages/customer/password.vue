<template>
  <div id="password">
    <!-- 修改密码 -->
    <div class="member-title">
      <h2>
        修改密码
        <i class="el-icon-edit"></i>
      </h2>
    </div>
    <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="客户编号：">
        <span class="number">116444494A</span>
      </el-form-item>
      <el-form-item label="输入原密码：" >
        <el-input type="password" autocomplete="off" placeholder="字母与数字组合至少6位"></el-input>
      </el-form-item>
      <el-form-item label="输入新密码：">
        <el-input placeholder="请输入密码" v-model="input" show-password></el-input>
      </el-form-item>
      <el-form-item label="确认新密码：">
        <el-input type="password"  autocomplete="off" placeholder="字母与数字组合至少6位"></el-input>
      </el-form-item>
      <el-form-item label="邮箱验证码：">
        <el-input type="password"  autocomplete="off" placeholder="请输入验证码"></el-input>
      </el-form-item>
  
      <el-form-item>
        <el-button type="primary" @click="open">获取邮箱验证码</el-button>
        <h1>邮箱验证</h1>
        <el-button type="primary">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
    methods: {
      open() {
        this.$prompt('请输入邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            // message: '你的邮箱是: ' + value,
            message:"验证码已发送邮箱，请查收",
            callbck:console.log("来发送请求"+value)
            
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      }
    }
  }
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
                    a {
                      color:white;
                    }
                }
        }
    }
</style>
