<script lang="ts">
import { defineComponent, onMounted, ref, onBeforeMount } from "vue-demi";
import { XYDrawDeviceProps } from "./drawDevice";

export default defineComponent({
  name: "XYDrawDevice",
  props: XYDrawDeviceProps,
  emits: ["change"],
  setup(props) {
    const orderNum = ref<string[]>([]); // 默认订单总数 "0", "0", "0", "0", "0"
    onBeforeMount(() => {
      toOrderNum(String(props.num), props.thousands);
    });
    onMounted(() => {
      setNumberTransform();
    });
    const toOrderNum = (num: string, thousands: boolean) => {
      num = num.toString();
      const index = num.indexOf(".");
      let arr: string[] = [];
      let left = [];
      let right = [];
      let list: string[] = [];
      if (num.indexOf(".") > 0) {
        //有小数点
        left = num.slice(0, index).split("").reverse(); //小数点左边
        right = num.slice(index).split(""); //小数点右边
        left.forEach((i, index) => {
          if (index !== 0 && index % 3 == 0 && thousands) {
            list.push(",", i);
          } else {
            list.push(i);
          }
        });
        arr = [...list.reverse(), ...right];
      } else {
        //无小数点
        left = num.split("").reverse();
        left.forEach((i, index) => {
          if (index !== 0 && index % 3 == 0 && thousands) {
            list.push(",", i);
          } else {
            list.push(i);
          }
        });
        arr = [...list.reverse()];
      }
      orderNum.value.length = 0;
      orderNum.value.push(...arr);
    };
    const setNumberTransform = () => {
      // 结合css，让文字滚动起来
      divDomList.forEach((item: any) => {
        let dataset;
        if (item.dataset) {
          dataset = item?.dataset["id"];
        }
        if (dataset !== "." || dataset !== ",") {
          if (item.style) {
            item.style.transform = `translate(0, -${
              Number(dataset) * 60 //111
            }px)`;
          }
        }
      });
    };
    const divDomList = new Map([]);
    const getDivDom = (el: any) => {
      if (el) {
        divDomList.set(Symbol(el.dataset["id"]), el);
      }
    };
    return {
      orderNum,
      getDivDom
    };
  }
});
</script>

<template>
  <div class="t-draw-device">
    <div class="content">
      <template v-for="i in orderNum" :key="i">
        <div
          v-if="!isNaN(Number(i))"
          :ref="getDivDom"
          :data-id="i"
          :class="{
            'mode-unit-content-item': mode === 'unit',
            'card-content-item': mode !== 'unit'
          }"
        >
          <div
            v-for="s in '0123456789'.split('')"
            :key="s"
            :class="{
              'mode-unit-sum': mode === 'unit',
              'card-sum': mode !== 'unit',
              'card-boder': i === s && mode !== 'unit'
            }"
          >
            {{ s }}
          </div>
        </div>
        <div
          v-else
          :ref="getDivDom"
          :data-id="i"
          :class="{
            'mode-unit-content-item': mode === 'unit',
            'card-content-item': mode !== 'unit',
            tip: true
          }"
        >
          <div
            :class="{
              'mode-unit-sum': mode === 'unit',
              'card-sum': mode !== 'unit'
            }"
          >
            {{ i }}
          </div>
        </div>
      </template>
      <div v-if="mode === 'unit'" class="unit">
        <span>{{ unit }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.t-draw-device {
  .content {
    font-family: verdana, sans-serif;
    font-size: 40px;
    padding: 5px;
    background: #01041d;
    height: 60px;
    line-height: 60px;
    display: flex;
    overflow: hidden;
    .unit {
      color: #1890ff;
      align-self: stretch;
      line-height: 60px;
      min-width: 26px;
      span {
        font-size: 18px;
      }
    }
    .card-content-item {
      display: inline-block;
      width: 45px;
      margin: 0 5px;
      padding: 2px 5px;
      height: 60px;
      transition: transform 1s ease-in-out;
      &:first-child {
        margin: 0;
      }
      &:last-child {
        margin: 0;
      }
    }
    .card-sum {
      text-align: center;
      height: 60px;
      line-height: 60px;
      width: 100%;
      color: #ffff;
    }
    .tip {
      margin: 0;
      width: 30px;
    }
    .card-boder {
      position: relative;
      box-sizing: border-box;
      background: rgba(108, 128, 151, 0.1);
      border: 1px solid rgba(76, 195, 255, 0.14);
      &::after {
        content: "";
        position: absolute;
        top: 2%;
        right: 2%;
        border-color: red blue black green;
        border-top: 5px solid #4cc3ff;
        border-left: 5px solid transparent;
      }
      &::before {
        content: "";
        position: absolute;
        bottom: 2%;
        left: 2%;
        border-top: 5px solid transparent;
        border-left: 5px solid #4cc3ff;
      }
    }
    .mode-unit-content-item {
      display: inline-block;
      width: 26px;
      height: 60px;
      transition: transform 1s ease-in-out;
    }
    .mode-unit-sum {
      height: 60px;
      width: 30px;
      color: #ffff;
    }
  }
}
</style>
