<template>
  <div class="hello">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <el-row class="tac">
            <el-col>
              <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                  </template>
                  <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                  <i class="el-icon-document"></i>
                  <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-setting"></i>
                  <span slot="title">导航四</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>
          <div>
            <div class="block">
              <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
              <el-carousel height="200px">
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
        </el-main>
      </el-container>
    </el-container>

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
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
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
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: left;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  /* line-height: 160px; */
  height: 100%;
  height: 95vh;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
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