<template>
  <div class="hello">
    <div class="mui-navbar-inner mui-bar mui-bar-nav">
      <button @click="hBack" type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
        <span class="mui-icon mui-icon-left-nav"></span>
      </button>
      <h1 class="mui-center mui-title">首页</h1>
    </div>
    <div id="slider carousel" class="carousel-wrap">
      <transition-group tag="ul" class='slide-ul' name="list">
        <li v-for="item in sliders" :key="item.id" v-show="item.id===currentIndex" @mouseenter="stop" @mouseleave="go">
          <!-- {{ item.img }} -->
          <img :src="item.img" alt="altText" />
        </li>
      </transition-group>
      <div class="carousel-items">
        <span v-for="(item,index) in sliders.length" :key="index" :class="{'active':index===currentIndex}"></span>
      </div>
    </div>
    <div class="mui-center">
      <button type="button" class="mui-btn" @click='eqInfo'>详细信息</button>
      <router-link to="/docList" class="mui-btn">文档列表</router-link>
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
        },
        {
          id: 4,
          img: require("./../assets/logo.4.png")
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
    eqInfo(){
      this.$router.push({ name: "eqList"});
    },
    hBack(){
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
.carousel-wrap {
  position: relative;
  height: 220px;
  width: 200px;
  overflow: hidden;
  margin: 0 auto;
  background-color: #fff;
}

.slide-ul {
  width: 100%;
  height: 100%;
}
li {
  position: absolute;
  width: 100%;
  height: 100%;
}
img {
  width: 200px;
  height: 200px;
}
.carousel-items {
  position: absolute;
  z-index: 10;
  top: 205px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 0;
}
.carousel-items span {
  display: inline-block;
  height: 6px;
  width: 30px;
  margin: 0 3px;
  background-color: #b2b2b2;
  cursor: pointer;
  border-radius: 10px;
}
.carousel-items .active {
  background-color: #a50b0b;
}
.list-enter-to {
  transition: all 1s ease;
  transform: translateX(0);
}

.list-leave-active {
  transition: all 1s ease;
  transform: translateX(-100%);
}

.list-enter {
  transform: translateX(100%);
}

.list-leave {
  transform: translateX(0);
}
</style>