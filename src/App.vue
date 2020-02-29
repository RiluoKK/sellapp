<template>
  <div id="app">
    <div id="head">
      <div class="seller">
        <div class="sellerInfo">
          <img class="avatar" :src="seller.data.avatar" />
          <div class="infoContent">
            <p class="sellerName">
              <img class="brand" src="./assets/img/brand@2x.png" />
              <span>{{ seller.data.name }}</span>
            </p>
            <p class="discount">
              <span>{{ seller.data.description }}</span
              >/
              <span>{{ seller.data.deliveryTime }}分钟送达</span>
            </p>
            <p class="decrease">
              <img class="decreaseImg" src="./assets/img/decrease_2@2x.png" />
              <span>{{ seller.data.supports[0].description }}</span>
            </p>
          </div>
        </div>
        <div class="more">
          <p>
            5个
            <span>&gt;</span>
          </p>
        </div>
      </div>
      <div class="otherInfor">
        <span>公告</span>
        {{ seller.data.infos }}
      </div>
      <img class="bgImg" :src="seller.data.pics[0]" />
    </div>
    <div id="nav">
      <router-link to="/goods">商品</router-link>
      <router-link to="/commodity">评价</router-link>
      <router-link to="/seller">商家</router-link>
    </div>
    <div id="page">
      <router-view />
    </div>
    <div id="shopCar">
      <div class="allPriceInfo">
        <div class="shopCarIcon">
          <div>
            <Icon class="shopCar" size="34" type="md-cart" />
          </div>
        </div>
        <div class="allPrice">￥{{ allprice }}</div>
        <div class="otherPrice">
          另需配送费￥{{ seller.data.deliveryPrice }}
        </div>
      </div>
      <div v-if="allprice > seller.data.minPrice" class="lowerPrice">
        {{ allprice }}
      </div>
      <div v-if="allprice < seller.data.minPrice" class="lowerPrice">
        ￥{{ seller.data.minPrice }}起送
      </div>
    </div>
  </div>
</template>
<script>
import { getSeller } from "./api/apis";
export default {
  data() {
    return {
      seller: {
        data: {
          avatar: "",
          pics: [],
          id: 0,
          name: "",
          description: "",
          deliveryTime: 0,
          score: 0,
          serviceScore: 0,
          rankRate: 0,
          minPrice: 0,
          deliveryPrice: 0,
          ratingCount: 0,
          sellCount: 0,
          bulletin: "",
          supports: [
            {
              description: "",
              type: 0
            }
          ],
          infos: []
        }
      },
      allprice: 0
    };
  },
  mounted() {
    getSeller().then(res => {
      this.seller = JSON.parse(JSON.stringify(res.data));
    });
  }
};
</script>
<style lang="less">
body,
html {
  height: 100%;
  background: rgb(238, 238, 238);
}
#app {
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  display: flex;
  flex-direction: column;
  #head {
    height: 150px;
    width: 100%;
    background: salmon;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between;
    .seller {
      width: 100%;
      display: flex;
      justify-content: space-between;
      z-index: 2;
      margin: auto;
      padding: 4px;
      .sellerInfo {
        display: flex;
        flex: 9;
        .avatar {
          width: 80px;
          height: 80px;
        }
        .infoContent {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .sellerName {
            padding-left: 6px;
            display: flex;
            justify-content: space-between;
            .brand {
              margin: auto;
              height: 24px;
            }
            span {
              font-weight: bolder;
              font-size: 18px;
              color: white;
              display: inline-block;
              padding-left: 5px;
            }
          }
          .discount {
            padding-left: 6px;
            span {
              font-weight: lighter;
              font-size: 16px;
              color: white;
            }
          }
          .decrease {
            padding-left: 6px;
            display: flex;
            .decreaseImg {
              height: 20px;
            }
            span {
              padding-left: 6px;
              font-weight: lighter;
              color: white;
              font-size: 14px;
            }
          }
        }
      }

      .more {
        cursor: pointer;
        width: 50px;
        position: relative;
        p {
          padding: 4px;
          font-size: 12px;
          position: absolute;
          bottom: 0;
          text-align: center;
          border-radius: 30px;
          z-index: 3;
          color: white;
          background: rgba(0, 0, 0, 0.3);
          span {
            display: inline-block;
            padding-left: 4px;
          }
        }
      }
    }
    .otherInfor {
      width: 100%;
      padding: 2px;
      background: rgba(78, 78, 78, 0.8);
      color: white;
      font-size: 12px;
      font-weight: lighter;
      line-height: 28px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      z-index: 2;
      span {
        height: 18px;
        line-height: 18px;
        font-weight: bold;
        font-size: 12px;
        padding: 0 4px;
        display: inline-block;
        background: white;
        color: rgb(78, 78, 78);
      }
    }
    .bgImg {
      height: 150px;
      position: absolute;
      width: 100%;
      filter: blur(10px);
    }
  }
  #nav {
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    font-size: 14px;
    line-height: 40px;
    border-bottom: 1px solid rgb(184, 184, 184);
    a {
      color: black;
    }
    .router-link-active {
      color: red;
    }
  }
  #page {
    flex: 1;
    height: 100%;
    overflow: auto;
  }
  #shopCar {
    z-index: 99;
    width: 100%;
    height: 60px;
    background: rgb(15, 15, 15);
    display: flex;
    justify-content: space-between;
    line-height: 60px;
    .allPriceInfo {
      display: flex;
      flex: 7;
      position: relative;
      .shopCarIcon {
        z-index: 6;
        position: relative;
        top: -10px;
        bottom: 0;
        width: 70px;
        height: 70px;
        border-radius: 35px;
        margin-left: 10px;
        background: rgb(15, 15, 15);
        div {
          width: 55px;
          height: 55px;
          border-radius: 30px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          position: absolute;
          background: rgb(53, 53, 53);
          .shopCar {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: rgb(116, 116, 116);
          }
        }
      }
      .allPrice {
        height: 26px;
        margin: auto 10px;
        padding-right: 14px;
        line-height: 26px;
        font-size: 20px;
        font-weight: bolder;
        border-right: 1px solid rgb(117, 117, 117);
      }
      .otherPrice {
        margin-right: 10px;
      }
    }
    .lowerPrice {
      background: rgb(58, 58, 58);
      text-align: center;
      flex: 3;
      line-height: 60px;
      color: rgb(172, 172, 172);
      font-weight: bolder;
      height: 60px;
    }
  }
}
</style>
