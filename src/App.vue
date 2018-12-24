<template>
  <div id="app">
    <!-- header -->
    <!-- <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <h1 class="mui-title">固定在头部</h1>
    </header> -->

    <!-- router-view  -->
      <router-view/>

    <!-- tabbar -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/" exact>
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/upkeep">
        <span class="mui-icon mui-icon-email">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">保养相关</span>
      </router-link>
      <router-link class="mui-tab-item" to="/eqList" exact>
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">我的设备</span>
      </router-link>
      <router-link class="mui-tab-item" to="/setting">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">设置</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      tabbar: "value"
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 16px;
}
ul,li{
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
