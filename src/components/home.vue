<template>
  <div>
    gdfgdfkj
    <div v-for="item in navList" :key="item.link">
      <div>
        <router-link :to="item.link">{{ item.name }}</router-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HomeComp',
  data() {
    return {
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
