<script lang="ts">
import { defineComponent } from "vue-demi";
import type { PropType } from "vue-demi";

interface IRankData {
  name: string;
  unit: number;
}
interface IOptions {
  topTitle: Array<string>;
  rankData: Array<IRankData>;
  isDark: boolean;
}
export default defineComponent({
  name: "Leaderboard",
  props: {
    options: {
      type: Object as PropType<IOptions>,
      default: () => ({
        topTitle: ["排名", "名称", "单位"],
        isDark: true
      })
    }
  },
  setup() {
    return {};
  }
});
</script>

<template>
  <div class="leaderboard" :class="options.isDark ? 'dark' : 'no-dark'">
    <ul class="rank-ul">
      <li class="top-li">
        <div
          v-for="(item, index) in options.topTitle"
          :key="item"
          :class="index === 1 ? 'top-li-name' : 'top-li-other'"
        >
          {{ item }}
        </div>
      </li>
      <li
        v-for="(item, index) in options.rankData"
        :key="index"
        :class="
          index === 0
            ? 'first'
            : index === 1
            ? 'second'
            : index === 2
            ? 'three'
            : ''
        "
      >
        <div class="rank">
          <template v-if="index < 3">
            <img v-if="index === 0" src="../imgs/first.png" alt="" />
            <img v-if="index === 1" src="../imgs/second.png" alt="" />
            <img v-if="index === 2" src="../imgs/three.png" alt="" />
          </template>
          <span v-else>{{ index + 1 }}</span>
        </div>
        <div class="name">{{ item.name }}</div>
        <div class="unit">{{ item.unit }}</div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.leaderboard {
  width: 318px;
  padding: 34px 45px;
  .rank-ul {
    .top-li {
      .top-li-name {
        width: 140px;
        margin-right: 6px;
      }
      .top-li-other {
        flex: 1;
        margin-left: 18px;
      }
    }
    li {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 42px;
      border-radius: 8px;
      margin-bottom: 8px;
      > div {
        font-size: 12px;
      }
      .rank {
        font-weight: 500;
        font-size: 12px;
        flex: 1;
        margin-left: 18px;
        img {
          width: 32px;
          height: 26px;
        }
        span {
          width: 32px;
          display: block;
          text-align: center;
        }
      }
      .name {
        font-size: 12px;
        font-weight: 400;
        width: 140px;
        margin-right: 24px;
      }
      .unit {
        font-size: 14px;
        font-weight: 600;
        flex: 1;
      }
    }
    .first {
      background: linear-gradient(
        90deg,
        #fff3be 0%,
        rgba(255, 243, 190, 0) 100%
      );
      border-radius: 8px;
    }
    .second {
      background: linear-gradient(
        90deg,
        #f0f0f0 0%,
        rgba(237, 237, 237, 0) 100%
      );
      border-radius: 8px;
    }
    .three {
      background: linear-gradient(
        90deg,
        #ffe8cf 0%,
        rgba(255, 232, 207, 0) 100%
      );
      border-radius: 8px;
    }
  }
}
.dark {
  background: #01041d;
  .rank-ul {
    li {
      > div {
        color: #ffffff;
      }
    }
  }
}
.no-dark {
  background: #fff;
  .top-li {
    > div {
      color: rgba(0, 0, 0, 0.45) !important;
    }
  }
  .rank-ul {
    li {
      > div {
        color: rgba(0, 0, 0, 0.85);
      }
    }
  }
}
</style>
