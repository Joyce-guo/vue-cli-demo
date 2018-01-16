<template>
  <div id="app">
    <header>
      <div class="comp">
        <img src="./assets/demo_logo.png" alt="">
        <p>成都艾薇尼尔信息技术有限公司</p>
      </div>
      <ul>
        <li><a href="#/link1">代理商管理</a></li>
        <li><a href="#/">商户管理</a></li>
        <li>审核管理</li>
        <li>背景图管理</li>
        <li>账户中心</li>
        <li>官网配置</li>
      </ul>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {}
  },
  methods: {
  }
}
</script>

<style>
  html, body, #app {
    width: 100%;
    height: 100%;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  #app header {
    width: 13%;
    height: 100%;
    background: rgb(40, 41, 50);
    color: #fff;
    float: left;
  }
  #app header div.comp {
    width: 100%;
    height: 100px;
    text-align: center;
    font-size: 12px;
  }
  #app header div.comp > img {
    width: 45px;
    margin-top: 22px;
  }
  #app ul li {
    text-align: center;
    line-height: 50px;
    height: 50px;
  }
  #app ul li a {
    display: inline-block;
    width: 100%;
  }
  #app main {
    float: left;
    width: 87%;
    text-align: center;
    margin-top: 60px;
  }

</style>


