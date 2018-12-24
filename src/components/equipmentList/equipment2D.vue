<template>
  <div class="eq2D">
    <div class="mui-navbar-inner mui-bar mui-bar-nav">
      <button @click="hBack" type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
        <span class="mui-icon mui-icon-left-nav"></span>
      </button>
      <h1 class="mui-center mui-title">工艺流程图</h1>
    </div>
    <p>
      <img src="./../../assets/image/pic2d.jpg" data-preview-src="" data-preview-group="1" />
    </p>
  </div>
</template>

<script>
export default {
  name: "eq2D",
  data() {
    return {
      image: ""
    };
  },
  methods: {
    hBack() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
p img{
  width: 100%;
}
</style>