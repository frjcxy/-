<template>
  <div id="apply">
    <!-- 重新开票申请记录 -->
    <div class="member-title">
      <h3>重新开票申请记录</h3>
    </div>
    <div class="invoice-form">
      <div class="invoice-number">
        <span>发票号：</span>
        <el-input></el-input>
      </div>
      <div class="anew">
        <span>是否已重新开发票：</span>
        <el-select placeholder="请选择"></el-select>
      </div>
      <el-button type="primary">查询</el-button>
    </div>
    <!-- 表格 -->
    <el-table class="table" border highlight-current-row style="width: 100%">
      <el-table-column property="number" label="发票号" width="140"></el-table-column>
      <el-table-column property="whether" label="是否已重开" width="140"></el-table-column>
      <el-table-column property="expressage " label="快递方式" width="140"></el-table-column>
      <el-table-column property="expressageNum" label="快递号" width="140"></el-table-column>
      <el-table-column property="time" label="申请时间" width="140"></el-table-column>
      <el-table-column property="reason" label="原因备注"></el-table-column>
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
#apply {
  .invoice-form {
    display: flex;
    margin-top: 20px;
    .el-input {
      width: 200px;
      height: 30px;
      .el-input__inner {
        width: 100%;
        height: 100%;
        line-height: 30px;
      }
    }

    .anew {
      margin: 0 10px 0 60px;
      .el-input {
        width: 100px;
        height: 30px;
        .el-input__icon {
          height: 30px;
          line-height: 30px;
        }
      }
    }

    .el-button {
      padding: 2px 15px;
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