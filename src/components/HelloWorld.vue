<template>
  <div class="hello">
    <div class="mui-navbar-inner mui-bar mui-bar-nav">
      <button @click="hBack" type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
        <span class="mui-icon mui-icon-left-nav"></span>
      </button>
      <h1 class="mui-center mui-title">首页</h1>
    </div>
    <div>
      <div class="block">
        <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
        <el-carousel height="150px">
          <el-carousel-item v-for="item in sliders" :key="item.id">
            <h3>
              <img :src="item.img" alt="">
            </h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="mui-center">
      <el-button type="primary" @click="eqInfo" size="small">详细信息</el-button>
      <el-button type="primary" @click="docList" size="small">文档列表</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "upkeep",
  data() {
    return {
      currentIndex: 0,
      timer: "",
      sliders: [
        {
          id: 0,
          img: require("./../assets/logo.png")
        },
        {
          id: 1,
          img: require("./../assets/logo.1.png")
        },
        {
          id: 2,
          img: require("./../assets/logo.2.png")
        },
        {
          id: 3,
          img: require("./../assets/logo.3.png")
        }
      ]
    };
  },
  methods: {
    go() {
      this.timer = setInterval(() => {
        this.autoPlay();
      }, 4000);
    },
    stop() {
      clearInterval(this.timer);
      this.timer = null;
    },
    change(index) {
      this.currentIndex = index;
    },
    autoPlay() {
      this.currentIndex++;
      if (this.currentIndex > this.sliders.length - 1) {
        this.currentIndex = 0;
      }
    },
    eqInfo() {
      this.$router.push({ path: "eqList" });
    },
    docList() {
      this.$router.push({ path: "docList" });
    },
    hBack() {
      this.$router.back();
    }
  },
  created() {
    this.$nextTick(() => {
      this.timer = setInterval(() => {
        this.autoPlay();
      }, 4000);
    });
  }
};
</script>
<style scoped>
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel__container .el-carousel__indicator {
  display: inline-block;
  background-color: transparent;
  padding: 12px 2px;
  cursor: pointer;
}
</style>