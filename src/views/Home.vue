<template>
  <div>
    gdfgdfkj
    <i-checkbox v-model="aValue"></i-checkbox>
    <div v-for="item in navList" :key="item.link">
      <div>
        <router-link :to="item.link">{{ item.name }}</router-link>
      </div>
    </div>

  </div>
</template>

<script>
import iCheckbox from '@/components/checkbox.vue';
export default {
  name: 'HomeComp',
  components: { iCheckbox },
  data() {
    return {
      aValue: true,
      navList: [
        {
          link: '/tabs',
          name: 'tab切换'
        },
        {
          link: '/timeout',
          name: '定时器'
        },
        {
          link: '/scroll',
          name: '滚动'
        },
        {
          link: '/props',
          name: '透传属性'
        },
        {
          link: '/drag',
          name: '树控件拖动'
        }
      ],
    };
  },
};
</script>


<style scoped lang="less"></style>
