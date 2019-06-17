<template>
  <div id="deposit">
    <!-- 余额转出记录 -->
    <div class="member-title">
      <h3>余额转出记录</h3>
    </div>

    <div class="search">
      <div class="list">
        <span>余额转出金额：</span>
        <el-input></el-input>
        <span>操作类型：</span>
        <el-select placeholder="请选择">
          <el-option></el-option>
        </el-select>
      </div>
      <div class="time">
        <span>余额转出起始日期：</span>
        <el-date-picker
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </div>&nbsp;&nbsp;&nbsp;
      <el-button type="primary">查询</el-button>
    </div>

    <!-- 表格 -->
    <el-table class="table" border highlight-current-row style="width: 100%">
      <el-table-column label="序号" width="60"></el-table-column>
      <el-table-column property="sum" label="金额" width="60"></el-table-column>
      <el-table-column property="status" label="审核状态" width="80"></el-table-column>
      <el-table-column property="gathering" label="收款开户人" width="100"></el-table-column>
      <el-table-column property="accountNumber" label="银行账号" width="110"></el-table-column>
      <el-table-column property="dueBank " label="收款银行" width="110"></el-table-column>
      <el-table-column property="bankOfDeposit" label="开户行支行" width="110"></el-table-column>
      <el-table-column property=" verification" label="验证手机" width="80"></el-table-column>
      <el-table-column property="time" label="转出时间" width="80"></el-table-column>
      <el-table-column property="result" label="审核结果" width="80"></el-table-column>
      <el-table-column property="operation" label="操作"></el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      class="pages"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage1"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    ></el-pagination>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scope>
#deposit {
  .search {
    margin: 20px 0;
    .list {
      display: inline-block;
      .el-input {
        width: 120px;
        .el-input__inner {
          width: 100%;
          height: 30px;
          line-height: 30px;
        }
        .el-input__icon {
          height: 30px;
          line-height: 30px;
        }
      }
    }

    .time {
      display: inline-block;
      margin-left: 50px;
      .el-input__inner {
        width: 300px;
        height: 30px;
        line-height: 30px;
        .el-input__icon {
          height: 30px;
          line-height: 30px;
        }
        .el-range-separator {
          height: 30px;
          line-height: 30px;
        }
      }
    }

    .el-button {
      padding: 5px 10px;
    }
  }

  .table {
    margin-top: 20px;
    border: 1px solid #eee;
    .is-leaf {
      text-align: center;

      .cell {
        font-weight: bold;
        color: #444;
      }
    }
  }
  .pages {
    margin-top: 20px;
    text-align: right;
  }
}
</style>