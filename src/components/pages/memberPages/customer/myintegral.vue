<template>
  <div id="myintegral">
    <!-- 我的积分 -->
    <div class="my-integral">
      <div>
        <h3>
          我的积分:
          <i>0</i>
        </h3>
      </div>
      <div class="store">
        <a href="#">进入积分商城>></a>
      </div>
    </div>
    <div class="member-title">
      <h3>我的优惠券</h3>
    </div>

    <div class="type-box">
      <span class="type">
        <i>变更类型：</i>
        <el-select placeholder="请选择"></el-select>
      </span>
      <span class="time">
        <i>时间：</i>
        <el-input placeholder="请选择日期" suffix-icon="el-icon-date"></el-input>
        <i>至</i>
        <el-input placeholder="请选择日期" suffix-icon="el-icon-date"></el-input>
        <el-button type="primary">查询</el-button>
      </span>
    </div>
    <el-table style="width: 100%">
      <el-table-column  label="日期" width="280"></el-table-column>
      <el-table-column  label="变更类型" width="180"></el-table-column>
      <el-table-column  label="积分数量" width="180"></el-table-column>
      <el-table-column  label="积分账户" width="180"></el-table-column>
      <el-table-column  label="备注"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scope>
#myintegral {
  .my-integral {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 20px;
    margin-bottom: 10px;
    border: 1px solid #f3d5ba;
    background: #fdf3e9;
    i {
      color: red;
      font-weight: bold;
    }

    .store {
      a {
        color: #0093e6;
      }
    }
  }

  .type-box {
      line-height: 80px;
    .type {
      .el-input__inner {
        width: 120px;
        height: 30px;
        line-height: 30px;
      }
    }
    .el-input__icon {
      height: 30px;
      line-height: 30px;
    }
    .time {
      margin-left: 80px;
      .el-input {
        width: 200px;
        height: 30px;
        .el-input__inner {
          width: 100%;
          height: 100%;
          line-height: 30px;
        }
      }
      .el-button {
        padding: 5px 12px;
        margin-left: 10px;
      }
    }
  }

}
</style>