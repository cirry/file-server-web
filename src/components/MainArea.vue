<script setup>

import FileTree from "@/components/FileTree.vue";

const data = [
  {
    name: "07akioni",
    index: "07",
    children: [
      {
        name: "08akioni",
        index: "08",
        children: [
          {
            name: "09akioni",
            index: "09"
          },
          {
            name: "10akioni",
            index: "10"
          }
        ]
      }
    ]
  },
  {
    name: "11akioni",
    index: "11"
  }
];
const columns = [
  {
    title: "name",
    key: "name"
  },
  {
    title: "index",
    key: "index"
  },
  {
    title: "index",
    key: "index"
  }
];
const rowKey = (row) => row.index
</script>

<template>

  <n-grid x-gap="12" :cols="5" item-responsive>
    <n-grid-item span="0 960:1">
      <FileTree></FileTree>
    </n-grid-item>
    <n-grid-item span="0:5 960:4 ">
      <n-space vertical>
        <n-breadcrumb>
          <n-breadcrumb-item>主目录</n-breadcrumb-item>
          <n-breadcrumb-item>测试目录</n-breadcrumb-item>
          <n-breadcrumb-item>啥也不是文件夹</n-breadcrumb-item>
        </n-breadcrumb>
        <n-data-table
          :columns="columns"
          :data="data"
          :row-key="rowKey"
          default-expand-all
        />
      </n-space>
    </n-grid-item>

  </n-grid>
</template>

<style scoped>

</style>
