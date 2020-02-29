<template>
  <div id="goods">
    <div class="goodsItems" ref="goodsItems">
      <div class="goodsItems-container">
        <p
          @click="activeItem(i)"
          :class="selectId == i ? 'active' : ''"
          v-for="(v, i) in goodsItems.data"
          :key="i"
        >
          {{ v.name }}
        </p>
      </div>
    </div>
    <div class="goodsItem" ref="goodsItem">
      <div class="goodsItem-container">
        <div
          class="items"
          v-for="(v, i) in goodsItems.data"
          :type="v.name"
          :key="i"
        >
          <p class="item" :id="'item' + i">{{ v.name }}</p>
          <div class="item-content" v-for="(t, s) in v.foods" :key="s">
            <img :src="t.image" />
            <div>
              <p>{{ t.name }}</p>
              <p>{{ t.description }}</p>
              <p>
                <span>{{ t.sellCount }}</span>
                <span>好评率100%</span>
              </p>
              <p>
                <span>￥{{ t.price }}</span>
                <span v-show="t.oldPrice != ''">￥{{ t.oldPrice }}</span>
              </p>
            </div>
            <div>
              <div>-</div>
              <span></span>
              <div>-</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { getGoods } from "../api/apis";
export default {
  data() {
    return {
      goodsItems: {},
      selectId: 0
    };
  },
  created() {
    getGoods().then(res => {
      this.goodsItems = JSON.parse(JSON.stringify(res.data));
    });
  },
  mounted() {
    this.$nextTick(() => {
      let bscrollDom1 = this.$refs.goodsItems;
      this.aBScroll1 = new BScroll(bscrollDom1, {
        scrollY: true,
        click: true,
        momentum: true
      });
      let bscrollDom2 = this.$refs.goodsItem;
      this.aBScroll2 = new BScroll(bscrollDom2, {
        scrollY: true,
        click: true,
        momentum: true
      });
    });
  },
  methods: {
    activeItem(i) {
      this.selectId = i;
      console.log(this.selectId);
      let select = "item" + this.selectId;
      let selectDom = document.getElementById(select);
      console.log(selectDom);
      let bscrollDom2 = this.$refs.goodsItem;
      let aBScroll2 = new BScroll(bscrollDom2);
      console.log(bscrollDom2, aBScroll2);
      aBScroll2.scrollToElement(selectDom, 2000, true, false);
      // console.log(selectDom);
      // console.log(select);
    }
  }
};
</script>

<style lang="less" scoped>
#goods {
  display: flex;
  height: 100%;
  .goodsItems {
    height: 100%;
    background: rgb(250, 250, 250);
    width: 80px;
    overflow: hidden;
    .goodsItems-container {
      p {
        padding: 20px 10px 20px 10px;
        font-style: 16px;
      }
      .active {
        color: red;
        background: sandybrown;
      }
    }
  }
  .goodsItem {
    background: rgb(255, 255, 255);
    height: 100%;
    flex: 1;
    overflow: hidden;
    .items {
      .item {
        width: 100%;
        padding: 8px;
        background: rgb(252, 252, 252);
      }
      .item-content {
        img {
          width: 80px;
        }
      }
    }
  }
}
</style>
