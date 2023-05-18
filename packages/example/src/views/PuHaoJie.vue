<script lang="ts" setup>
import { XYDrawDevice, XYTable } from "@t-design/components";
import type { RefInstence, Itemtype } from "@t-design/components";
import { XYGaugeProgress } from "@t-design/charts";
import { reactive, ref } from "vue";
import { Space, Button, Row, Col, message } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
const options = {
  min: 0,
  max: 200,
  splitNumber: 5,
  data: [
    {
      value: 180
    }
  ]
};
const data = reactive({
  theme: "light",
  mode: "unit",
  unit: false,
  flag: false,
  thousands: true,
  num: 8459836
});
//复选框单行选中回调 e: record 当前行   selected是否选中  selectedRowKeys 所有选中key
const rowOnSelectChange = () => {
  // console.log(e, "sssssss");
};
//复选框全部选中回调 e: selected是否选中  selectedRows选中key 的数据  selectedRowKeys 所有选中key
const rowOnSelectAllChange = () => {
  // console.log(e, "sss222222");
};
//自定义数据结构
const onRequestSuccess = (e: Itemtype[]) => {
  return e;
};
const PTableRefs = ref<RefInstence>();
const PTableRefs1 = ref<RefInstence>();
// 刷新
const refresh = () => {
  PTableRefs.value?.refresh();
  message.success("刷新成功！");
};
const refresh1 = () => {
  PTableRefs1.value?.refresh();
  message.success("刷新成功！");
};
const columns: unknown[] = [
  {
    title: "序号",
    dataIndex: "ID",
    align: "center"
  },
  {
    title: "名称",
    dataIndex: "ModelName",
    align: "center"
  },
  {
    title: "编码",
    dataIndex: "ModelCode",
    align: "center",
    ellipsis: 5 //超出长度省略，全文Tooltip提示
  },
  {
    title: "状态",
    dataIndex: "IsEnable",
    align: "center"
  },
  {
    title: "操作",
    dataIndex: "action",
    align: "center"
  }
];
</script>

<template>
  <div class="container">
    <Row :gutter="[24, 20]" class="row">
      <Col :span="12">
        <XYGaugeProgress id="phj" :theme="data.theme" :options="options" />
      </Col>
      <Col :span="12">
        <XYGaugeProgress id="GaugeProgress" theme="dark" :options="options" />
      </Col>
      <Col :span="12">
        <XYDrawDevice
          :num="data.num"
          :mode="data.mode"
          thousands
          :unit="data.unit ? '万元' : ''"
          style="margin-bottom: 20px"
        />
      </Col>
      <Col :span="12">
        <XYDrawDevice
          :num="845982"
          theme="dark"
          thousands
          style="margin-bottom: 20px"
        />
      </Col>
      <Col :span="12">
        <XYDrawDevice
          :num="data.num"
          thousands
          theme="dark"
          mode="unit"
          unit="万、元"
        />
      </Col>
      <Col :span="12"> </Col>
      <Col :span="12">
        <XYTable
          ref="PTableRefs"
          url="/api/model/list"
          loading
          :columns="columns"
          row-key="ModelId"
          row-selection
          :on-request-success="onRequestSuccess"
          @row-on-select-change="rowOnSelectChange"
          @row-on-select-all-change="rowOnSelectAllChange"
        >
          <template #ID="{ index }">
            {{ index + 1 }}
          </template>
          <template #action>
            <Space>
              <Button size="small" type="link" @click="refresh()">
                刷新
              </Button>
            </Space>
          </template>
        </XYTable>
      </Col>
      <Col :span="12">
        <XYTable
          ref="PTableRefs1"
          url="/api/model/list"
          loading
          :columns="columns"
          :on-request-success="onRequestSuccess"
        >
          <template #ID="{ index }">
            {{ index + 1 }}
          </template>
          <template #action>
            <Space>
              <Button size="small" type="link" @click="refresh1()">
                刷新
              </Button>
            </Space>
          </template>
        </XYTable>
      </Col>
    </Row>
  </div>
</template>

<style lang="scss" scoped>
.container {
  .row {
    padding: 30px;
    display: flex;
    justify-content: center;
  }
}
</style>
