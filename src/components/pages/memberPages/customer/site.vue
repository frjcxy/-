<template>
  <div id="site">
    <!-- 管理收获地址 -->
    <div class="member-title">
      <h3>管理收获地址</h3>
      <div>
        <span @click="delSite">
          <i class="el-icon-delete"></i>
          删除所选
        </span>
        <span @click="addSiteFormVisible = true">
          <i class="el-icon-plus"></i>
          新增
        </span>
      </div>
    </div>
    <div class="del-site"></div>
    <div class="table">
      <el-table ref="multipleTable" tooltip-effect="dark" style="width: 100%" border>
        <el-table-column type="selection" width="100"></el-table-column>
        <el-table-column label="收件人" width="200"></el-table-column>
        <el-table-column prop="site" label="收货地址" width="300"></el-table-column>
        <el-table-column prop="phone" label="联系手机" width="200"></el-table-column>
        <el-table-column prop="operation" label="操作" show-overflow-tooltip></el-table-column>
      </el-table>
    </div>
    <!-- 弹框 -->
    <div class="add-site">
      <el-dialog title="新增/修改收货地址" :visible.sync="addSiteFormVisible">
        <el-form ref="form" label-width="100px" :model="ruleForm" :rules="rules">
          <el-form-item label="收货人 :" placeholder="姓名" prop="name">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="手机 :" placeholder="请填写正确的11位手机号码" prop="phone">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="所在地区：" prop="address">
            <!-- 饿了吗ui的级联选择器 -->
            <el-cascader
              expand-trigger="hover"
              v-model="ruleForm.address"
              :options="options"
              placeholder="请选择省 市 区"
            ></el-cascader>
          </el-form-item>
          <el-form-item label="详细地址 :" placeholder="街道小区楼牌号等，无需重复填写省市区" prop="detailedAddress">
            <el-input></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="addSiteFormVisible = false">确 定</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>
<script>
// 导入数据
import options from "../../../../lib/city_data2017_element";
export default {
  data() {
    return {
      addSiteFormVisible: false,
      options,
      selectedOptions2: [],
      ruleForm: {
        name: "",
        phone: "",
        address: [],
        detailedAddress: ""
      },
      rules: {
        name: [
          { required: true, message: "必填字段", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ],
        phone: [
          { required: true, message: "必填字段", trigger: "blur" },
          { min: 11, max: 11, message: "长度在 11 个字符", trigger: "blur" }
        ],
        address: [
          { required: true, message: "必填字段", trigger: "blur" },
        ],
        detailedAddress: [
          { required: true, message: "必填字段", trigger: "blur" },
        ],
      }
    };
  },
  methods: {
    delSite() {
      this.$confirm("此操作将永久删除该地址, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>
<style lang="less" scope>
#site {
  .member-title {
    span {
      cursor: pointer;
      padding-right: 20px;
      i {
        color: #ff7900;
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
  .add-site {
    .el-dialog {
      width: 544px;
      height: 262px;
      border: 4px solid #d9d9d9;
      .el-dialog__header {
        padding: 10px;
        .el-dialog__title {
          font-size: 12px;
          font-weight: bold;
          color: #444;
        }
      }
      .el-dialog__body {
        padding: 0px 60px;
        .el-form-item {
          margin-bottom: 0;
          .el-form-item__label {
            font-size: 10px;
          }
          .el-input__inner {
            width: 230px;
            height: 24px;
            line-height: 24px;
          }
        }
      }

      .el-button {
        width: 70px;
        padding: 6px 0;
      }
    }
  }

  .table {
    .el-table {
      th {
        text-align: center;
        font-weight: bold;
        color: #444;
      }
    }
  }

  //  弹框
  .add-site {
    .el-form-item__error {
      position: absolute;
      left: 240px;
      top: 10px;
    }
  }
}
</style>