<template>
  <div id="schedule">
    <!-- 开票进度查询 -->
    <div class="member-title">
      <h3>开票进度查询</h3>
    </div>

    <table class="invoice-table">
      <tr>
        <th>
          <img src="https://static.szlcsc.com/order/resources/images/tzfp_bt.png" alt>
        </th>
        <th>未开增值税专用发票</th>
      </tr>
      <tr>
        <td>累积总货款</td>
        <td>0.00</td>
      </tr>
    </table>

    <!-- 说明 -->
    <div class="txt-introduce">
      <strong class="color333">重要注意事项：</strong>
      <p>一、根据国税规定，从2016年1月16日起，立创商城发票开具将作相应调整。</p>
      <p class="mt30">二、立创商城可以开两种类型的增值税发票：</p>
      <p>
        <strong>1、增值税专用发票，</strong>可以抵扣，不能随订单发出：
      </p>
      <p>具体说明：</p>
      <p>
        1）
        <strong>开票时间：</strong>每月8日至25日统一开出
      </p>
      <p>
        2）
        <strong>开票规则：</strong>开票时间内开具开票日期之前所有已发货的订单累计总金额对应的发票（累计超过200元才会开具发票），每月每个客户统一开具一次发票，当月已开票后产生的已发货订单货款金额顺延累计到下个月统一开票。（当月仅有在8-25号发货需开票的订单，顺延至下月开出）
      </p>
      <p>
        <span class="red">注意：</span>立创商城将在每月开票时间内统一开具发票并单独寄出（即发票不能长时间无限制积累再开票）
      </p>
      <p>
        3）
        <strong>发票运费：</strong>单独寄出，运费我司付
      </p>
      <p>
        4）
        <strong>其余事项：</strong>开票累计总货款金额在200元以下的，本月暂不开出（自动累计到次月超200元再开出，建议您预计长时间发票累计不超过200元时，在下单选择普通发票随货发类型，另需提前开出可联系我司工作人员QQ：4000800709，运费需到付，有特殊情况开票需求的，统一安排在每月25日-27日开出）
      </p>
      <p>
        <strong>2、增值税普通发票</strong>，不能抵扣，随订单发出：
      </p>
      <p>具体说明：普通发票会随您的订单一起发货，绑定一起发货的订单发票统一开在一起，如果有特殊的开票方式（分开开票），请务必在订单中备注。</p>
      <p
        class="mt30"
      >三、需要增值税专用发票的客户，除了原有的增值税开票资料外，还需要上传相应的证明文件：加盖公章的 ①一般纳税人资格证书或认定文件复印件 ②税务登记证副本复印件【三证合一的公司请提供营业执照复印件，正副本均可】</p>
    </div>

    <div class="member-title">
      <h3>增票订单</h3>
    </div>

    <!-- 订单查询 -->
    <div class="order-inquiry">
      <el-select placeholder="显示全部订单">
        <el-option></el-option>
      </el-select>
      <el-select placeholder="显示全部订单">
        <el-option></el-option>
      </el-select>

      <span>订单号：</span>
      <el-input placeholder="请输入订单号"></el-input>

      <el-button type="primary">查询</el-button>
      <el-button type="primary">重新开票</el-button>
      <el-button type="primary">导出开票明细</el-button>
    </div>
    <!-- 开票时间 -->
    <div class="time">
      <span>购买时间：</span>
      <el-date-picker
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      ></el-date-picker>
    </div>
    <!-- 表格 -->
    <el-table class="table" border highlight-current-row style="width: 100%">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column property="name" label="订单编号" width="125"></el-table-column>
      <el-table-column property="time" label="下单时间" width="125"></el-table-column>
      <el-table-column property="time" label="开票金额" width="125"></el-table-column>
      <el-table-column property="time" label="开票类型" width="125"></el-table-column>
      <el-table-column property="time" label="是否已开票" width="125"></el-table-column>
      <el-table-column property="time" label="开票时间" width="125"></el-table-column>
      <el-table-column property="operation" label="快递方式/快递单号"></el-table-column>
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
#schedule {
  .invoice-table {
    margin: 15px 0;
    tr {
      &:nth-of-type(1) {
        height: 60px;
      }
      &:nth-of-type(2) {
        height: 40px;
        line-height: 40px;
        text-align: center;
      }
      td {
        border: 1px solid #e6e6e6;
      }

      th {
        color: #444;
        font-weight: bold;
        border: 1px solid #e6e6e6;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
        &:nth-last-of-type(1) {
          width: 632px;
          vertical-align: middle;
        }
      }
    }
  }
  .txt-introduce {
    line-height: 24px;
    padding: 20px;
    margin-bottom: 20px;
    border: 1px solid #e6e6e6;
    .color333 {
      color: #333;
    }
    strong {
      font-weight: bold;
    }
    .mt30 {
      margin-top: 30px;
    }
    .red {
      color: #f00;
    }
  }

  .order-inquiry {
    margin: 10px 0 20px;
    .el-input {
      width: 150px;
      height: 30px;
      line-height: 30px;
    }
    .el-input__icon {
      height: 30px;
      line-height: 30px;
    }
    .el-button {
      padding: 5px 10px;
    }

    .el-select,
    .el-input {
      margin-right: 20px;
    }
  }

  .el-input__inner {
    width: 150px;
    height: 30px;
    line-height: 30px;
    .el-range-separator {
      height: 30px;
      line-height: 30px;
    }
    .el-input__icon {
      height: 30px;
      line-height: 30px;
    }
  }

  .time {
    .el-input__inner {
      width: 280px;
    }
  }

  .table {
    margin: 10px 0;
    th {
      text-align: center;
      color: #444;
      font-weight: bold;
    }
  }
  .pages {
    text-align: right;
    .el-select {
      .el-input {
        .el-input__inner {
          width: 120px;
        }
      }
    }

    .el-pagination__jump {
      .el-input__inner {
          width:80px;
        }
    }
  }
}
</style>