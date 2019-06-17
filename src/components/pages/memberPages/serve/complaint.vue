<template>
  <div id="complaint">
    <!-- 我的投诉 -->
    <div class="member-title">
      <h3>我的投诉</h3>
    </div>
    <el-table class="table" border style="width: 100%">
      <el-table-column prop="name" label="投诉主题" width="137"></el-table-column>
      <el-table-column prop="name" label="投诉对象" width="137"></el-table-column>
      <el-table-column prop="name" label="投诉类别" width="137"></el-table-column>
      <el-table-column prop="name" label="投诉内容" width="137"></el-table-column>
      <el-table-column prop="name" label="涉及订单" width="137"></el-table-column>
      <el-table-column prop="name" label="投诉时间" width="137"></el-table-column>
      <el-table-column prop="name" label="立创回复"></el-table-column>
    </el-table>
    <div class="complaint-content">
      <div class="submit">
        <h4>提交我的投诉</h4>
        <a href="#">下载品质异常模板</a>
        <span>(涉及品质问题请填写品质异常报告表)</span>
      </div>
      <div class="complain_form">
        <el-row class="first">
          <el-col :span="10">
            <div class="grid-content bg-purple">
              <ul>
                <li>
                  <span>投诉对象：</span>
                  <el-select placeholder="请选择">
                    <el-option></el-option>
                  </el-select>
                </li>
                <li>
                  <span>涉及订单：</span>
                  <el-input></el-input>
                  <a href="#">选择订单</a>
                </li>
                <li>
                  <span>投诉主题：</span>
                  <el-input></el-input>
                </li>
              </ul>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content bg-purple-light">
              <ul>
                <li>
                  <span>投诉类别：</span>
                  <el-select placeholder="请选择">
                    <el-option></el-option>
                  </el-select>
                </li>
                <li>
                  <span>涉及商品：</span>
                  <el-input></el-input>
                  <i></i>
                </li>
                <li>
                  <span>联系手机：</span>
                  <el-input></el-input>
                </li>
              </ul>
            </div>
          </el-col>
        </el-row>
        <el-row class="second">
          <el-col :span="20">
            <div class="grid-content bg-purple">
              <ul>
                <li>
                  <span>投诉内容：</span>
                  <el-input type="textarea" placeholder="请输入内容"></el-input>
                </li>
                <li>
                  <span>联系邮箱：</span>
                  <el-input></el-input>
                </li>
                <li>
                  <span>附件：</span>
                  <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    multiple
                    :limit="3"
                    :on-exceed="handleExceed"
                    :file-list="fileList"
                  >
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只支持压缩包形式，如zip,rar,文件大小不能大于5M</div>
                  </el-upload>
                </li>
              </ul>
            </div>
          </el-col>
        </el-row>
        <el-button type="primary">我要投诉</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scope>
#complaint {
  .table {
    margin: 20px 0;
    .cell {
      font-weight: bold;
      color: #444;
    }
    .is-leaf {
      text-align: center;
    }
  }

  .complaint-content {
    .submit {
      line-height: 40px;
      background-color: #efeeee;
      font-size: 14px;
      h4 {
        color: #444;
        font-weight: bold;
        display: inline-block;
      }
      a {
        color: #0093e6;
        margin: 0 6px;
      }
      span {
        color: #f30;
      }
    }
  }
  .complain_form {
    border-bottom: 1px solid #eee;
    padding-bottom: 40px;
    .first {
      ul {
        li {
          margin: 20px 0;
          &:nth-of-type(1) {
            .el-input {
              width: 100px;
              .el-input__inner,
              .el-input__icon {
                height: 30px;
                line-height: 30px;
              }
            }
          }
          &:nth-of-type(2),
          &:nth-of-type(3) {
            a {
              color: #0093e6;
            }
            .el-input {
              width: 220px;
              .el-input__inner,
              .el-input__icon {
                height: 30px;
                line-height: 30px;
              }
            }
          }
        }
      }
    }

    .second {
      ul {
        li {
          margin: 20px 0;
          &:nth-of-type(1) {
            span {
              line-height: 94px;
            }
            .el-textarea {
              width: 620px;
              height: 94px;
              .el-textarea__inner {
                width: 100%;
                height: 100%;
              }
            }
          }
          &:nth-of-type(2) {
            .el-input {
              width: 400px;
              .el-input__inner,
              .el-input__icon {
                height: 30px;
                line-height: 30px;
              }
            }
          }
          &:nth-of-type(3) {
           &>span {
             margin-left: 24px;
           }
           .upload-demo {
             margin-left: 60px;
             width: 300px;
             .el-button {
               padding: 4px 10px;
             }
             .el-upload__tip {
               display: inline-block;
             }
           }
          }
        }
      }
    }

    &>.el-button {
      padding: 6px 12px;
      margin: 20px 0 0 300px;
    }
  }
}
</style>