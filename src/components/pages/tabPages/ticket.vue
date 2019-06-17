<template>
  <div>
    <!-- 领券中心页 -->
    <el-row class="ticket-list">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <div class="ticket-single">
            <div class="ticket-left">
              <div class="title">25元美国泰科品牌优惠券</div>
              <div class="content">
                <span class="money">
                  <i>￥</i>
                  <i>25</i>
                </span>
                <span class="quantity">
                  <i>不限金额</i>
                  <i>已领925</i>
                </span>
              </div>
            </div>
            <div class="get-ticket">
              <a href="#">
                <p>立即</p>
                <p>领取</p>
              </a>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <div class="ticket-single">
            <div class="ticket-left">
              <div class="title">25元美国泰科品牌优惠券</div>
              <div class="content">
                <span class="money">
                  <i>￥</i>
                  <i>25</i>
                </span>
                <span class="quantity">
                  <i>不限金额</i>
                  <i>已领925</i>
                </span>
              </div>
            </div>
            <div class="get-ticket">
              <a href="#">
                <p>立即</p>
                <p>领取</p>
              </a>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <div class="ticket-single">
            <div class="ticket-left">
              <div class="title">25元美国泰科品牌优惠券</div>
              <div class="content">
                <span class="money">
                  <i>￥</i>
                  <i>25</i>
                </span>
                <span class="quantity">
                  <i>不限金额</i>
                  <i>已领925</i>
                </span>
              </div>
            </div>
            <div class="get-ticket">
              <a href="#">
                <p>立即</p>
                <p>领取</p>
              </a>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <div class="ticket-single">
            <div class="ticket-left">
              <div class="title">25元美国泰科品牌优惠券</div>
              <div class="content">
                <span class="money">
                  <i>￥</i>
                  <i>25</i>
                </span>
                <span class="quantity">
                  <i>不限金额</i>
                  <i>已领925</i>
                </span>
              </div>
            </div>
            <div class="get-ticket">
              <a href="#">
                <p>立即</p>
                <p>领取</p>
              </a>
            </div>
          </div>
        </div>
      </el-col>
      
    </el-row>
    <!-- <ul class="ticket-list">
      <li class="ticket-single">
        <div class="ticket-left">
          <div class="title">25元美国泰科品牌优惠券</div>
          <div class="content">
            <span class="money">
              <i>￥</i>
              <i>25</i>
            </span>
            <span class="quantity">
              <i>不限金额</i>
              <i>已领925</i>
            </span>
          </div>
        </div>
        <div class="get-ticket">
          <a href="#">
            <p>立即</p>
            <p>领取</p>
          </a>
        </div>
      </li>
      <li class="ticket-single">
        <div class="ticket-left">
          <div class="title">25元美国泰科品牌优惠券</div>
          <div class="content">
            <span class="money">
              <i>￥</i>
              <i>25</i>
            </span>
            <span class="quantity">
              <i>不限金额</i>
              <i>已领925</i>
            </span>
          </div>
        </div>
        <div class="get-ticket">
          <a href="#">
            <p>立即</p>
            <p>领取</p>
          </a>
        </div>
      </li>
      <li class="ticket-single">
        <div class="ticket-left">
          <div class="title">25元美国泰科品牌优惠券</div>
          <div class="content">
            <span class="money">
              <i>￥</i>
              <i>25</i>
            </span>
            <span class="quantity">
              <i>不限金额</i>
              <i>已领925</i>
            </span>
          </div>
        </div>
        <div class="get-ticket">
          <a href="#">
            <p>立即</p>
            <p>领取</p>
          </a>
        </div>
      </li>
      <li class="ticket-single">
        <div class="ticket-left">
          <div class="title">25元美国泰科品牌优惠券</div>
          <div class="content">
            <span class="money">
              <i>￥</i>
              <i>25</i>
            </span>
            <span class="quantity">
              <i>不限金额</i>
              <i>已领925</i>
            </span>
          </div>
        </div>
        <div class="get-ticket">
          <a href="#">
            <p>立即</p>
            <p>领取</p>
          </a>
        </div>
      </li>
    </ul> -->
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scope>
@ticketBgc: #409eff;
.ticket-list {
  width: 100%;
  box-sizing: border-box;
  padding: 20px 10px;
  .ticket-single {
    width: 370px;
    height: 110px;
    background-color: #eee;
    display: flex;
    border-radius: 4px;
    margin: 20px;
    .ticket-left {
      width: 250px;
      height: 100%;
      box-sizing: border-box;
      padding: 15px;
      border: 1px dashed #ccc;
      border-radius: 4px 0 0 4px;
      .title {
        font-size: 14px;
        font-weight: bold;
      }
      .content {
        display: flex;
        margin-top: 16px;
        .money {
          i {
            &:nth-of-type(1) {
              color: @ticketBgc;
              font-size: 20px;
            }
            &:nth-of-type(2) {
              color: @ticketBgc;
              font-size: 55px;
              font-weight: bold;
            }
          }
        }

        .quantity {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-left: 5px;
          i {
            line-height: 22px;
            &:nth-of-type(1) {
              display: block;
              padding: 0 5px;
              color: @ticketBgc;
              border: 1px dashed @ticketBgc;
              border-radius: 4px;
            }
          }
        }
      }
    }

    .get-ticket {
      flex: 1;
      height: 100%;
      background-color: @ticketBgc;
      border-radius: 0 4px 4px 0;
      a {
        display: block;
        width: 100%;
        height: 100%;
        color: #fff;
        font-size: 16px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p {
          line-height: 20px;
        }
      }
    }
  }
}
</style>
