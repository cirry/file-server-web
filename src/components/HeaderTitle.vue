<script setup>
function handleSearch(){
  console.log('search')
}
</script>

<template>
  <n-space justify="space-between" align="center" class="h-16 mb-4">
    <div class="text-2xl ">云</div>
    <n-input round size="large" placeholder="搜索">
      <template #suffix>
        <n-button @click="handleSearch" quaternary circle class="ri-search-line"></n-button>
      </template>
    </n-input>
    <div></div>
  </n-space>
</template>

<style scoped>

</style>
