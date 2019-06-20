<template>
  <div id="password">
    <!-- 修改密码 -->
    <div class="member-title">
      <h2>
        修改密码
        <i class="el-icon-edit"></i>
      </h2>
    </div>
    <!-- <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
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
        <el-button type="primary">提交</el-button>
      </el-form-item>
    </el-form>-->
    <el-form
      :model="resetForm"
      status-icon
      :rules="resetFormRules"
      ref="resetForm"
      label-width="100px"
    >
    <el-form-item label="客户编码：">
      <span class="number">686868</span>
      </el-form-item>
      <el-form-item label="旧密码：" prop="oldpwd">
        <el-input auto-complete="off" v-model="resetForm.oldpwd"></el-input>
      </el-form-item>
      <el-form-item label="新密码：" prop="newpwd">
        <el-input type="password" v-model="resetForm.newpwd" auto-complete="off" placeholder="密码长度为6 - 18个字符"></el-input>
      </el-form-item>
      <el-form-item label="确认新密码:" prop="renewpwd">
        <el-input type="password" v-model="resetForm.renewpwd" auto-complete="off" placeholder="密码长度为6 - 18个字符"></el-input>
      </el-form-item>
      <el-form-item label="邮箱验证码：" prop="mailbox">
        <el-input  autocomplete="off" placeholder="请输入验证码" v-model="resetForm.mailbox"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="open">获取邮箱验证码</el-button>
        <el-button type="primary" >提交</el-button>
          <el-button type="primary" @click="reset('resetForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { deflate } from "zlib";
export default {
  data() {
    var validatePass1 = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入旧密码"));
      } else if (value.toString().length < 6 || value.toString().length > 18) {
        callback(new Error("密码长度为6 - 18个字符"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入新密码"));
      } else if (value.toString().length < 6 || value.toString().length > 18) {
        callback(new Error("密码长度为6 - 18个字符"));
      } else {
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.resetForm.newpwd) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var validatePass3 = (rule, value, callback) => {
      if (value === "123") {
        callback(new Error("请再次输入验证码"));
      // } else if (value !== this.resetForm.newpwd) {
      //   callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      //用来重置的
      resetForm: {
        oldpwd: "",
        newpwd: "",
        renewpwd: "",
        mialbox:""
      },
      resetFormRules: {//输入框的事件
        oldpwd: [{ required: true, validator: validatePass1, trigger: "blur" }],
        newpwd: [{ required: true, validator: validatePass, trigger: "blur" }],
        renewpwd: [
          { required: true, validator: validatePass2, trigger: "blur" }
        ],
        mialbox:[{required:true,validator:validatePass3,trigger:"blur"}]
      }
    };
  },
   methods: {
     reset(formName){//重置所有输入框的方法
       this.$refs[formName].resetFields();
     },
      open() {//邮箱输入验证的方法
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
};
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
        color: white;
      }
    }
  }
}
</style>
