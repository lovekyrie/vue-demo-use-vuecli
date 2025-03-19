<template>
  <div class="tabs">
    <div
      v-for="(tab, index) in tabs"
      :key="tab.id"
      class="tab"
      @mouseenter="handleMouseEnter(tab, index)"
    >
      <span>{{ tab.name }}</span>
      <el-dropdown
        v-if="tab.isHover"
        ref="dropdown"
        trigger="click"
      >
        <span class="el-dropdown-link">
          下拉菜单<i class="el-icon-arrow-down el-icon--right" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item disabled>
            双皮奶
          </el-dropdown-item>
          <el-dropdown-item divided>
            蚵仔煎
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TabsDropdown',
  data() {
    return {
      tabs: [{
        id: '123', name: '我的对标'
      }, {
        id: '124', name: '行业对标'
      }, {
        id: '125', name: '区域对标'
      }]
    }
  },
  methods: {
    handleMouseEnter(tab, i) {
      tab.isHover = true
      this.$set(this.tabs, i, tab)
    }
  }
}
</script>

<style scoped></style>
