<template>
  <n-page-header subtitle="让你的听觉更懂视觉" @back="handleBack" class="container">
    <n-grid :cols="5">
      <n-gi>
        <n-statistic label="参考链接" value="2,346 个" />
      </n-gi>
    </n-grid>
    <template #title>
    </template>
    <template #header>
      <n-breadcrumb>
        <n-breadcrumb-item>播客</n-breadcrumb-item>
        <n-breadcrumb-item>精选</n-breadcrumb-item>
        <n-breadcrumb-item>超级精选</n-breadcrumb-item>
        <n-breadcrumb-item>Anyway.FM</n-breadcrumb-item>
      </n-breadcrumb>
    </template>
    <template #extra>
      <n-space>
        <n-button>催更</n-button>
        <n-dropdown :options="options" placement="bottom-start">
          <n-button :bordered="false" style="padding: 0 4px">
            ···
          </n-button>
        </n-dropdown>
      </n-space>
    </template>
    <template #footer>
      截止到 2021 年 4 月 3 日
    </template>
  </n-page-header>
</template>

<script>
import { defineComponent } from "vue";
import { useMessage } from "naive-ui";

export default defineComponent({
  setup() {
    const message = useMessage();
    return {
      handleBack() {
        message.info("[onBack]");
      },
      options: [
        {
          label: "催更",
          key: "1"
        },
        {
          label: "催更",
          key: "2"
        },
        {
          label: "催更",
          key: "3"
        }
      ]
    };
  }
});
</script>
