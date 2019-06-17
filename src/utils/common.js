export default {
    setCheckedAll: (val) => {
        this.checkModel = val ? this.orderList : [];
        if (this.checkAll) {
            this.orderList.forEach(res => {
                this.selectedGoods = this.orderList;
                this.getTotalPrice += res.productNumber * res.productPrice;
            });
        } else {
            this.getTotalPrice = 0;
        }

    }
}