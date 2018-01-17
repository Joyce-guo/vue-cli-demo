<template>
  <div id="linka">
    <p @click="toPage" class="toNext"> 去往下一层 >></p>
    <p>{{msg}}</p>
    <img src="../assets/32232.jpg" alt="">
  </div>
</template>

<script>
  export default {
    name: 'linka',
    data () {
      return {
        msg: '这是第一个'
      }
    },
    methods: {
      toPage() {
        this.$router.push('link2');
      }
    }
  }
</script>
<style scoped="scoped">
  .toNext {
    cursor: pointer;
  }
</style>
