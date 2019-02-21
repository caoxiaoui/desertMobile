<template>
  <div class="eqList">
    <div class="mui-content">
      <div class="mui-navbar-inner mui-bar mui-bar-nav">
        <button type="button" @click="hBack" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
          <span class="mui-icon mui-icon-left-nav"></span>
        </button>
        <h1 class="mui-center mui-title">设备列表</h1>
      </div>
      <div id="tabbar-with-contact" class="mui-control-content mui-active">
        <ul class="mui-table-view mui-table-view-striped mui-table-view-condensed" v-for="item in eqList" :key="item.id">
          <li class="mui-table-view-cell">
            <div class="mui-slider-cell">
              <div class="oa-contact-cell mui-table">
                <div class="oa-contact-avatar mui-table-cell">
                  <img src="~@/assets/logo.png" />
                </div>
                <div class="oa-contact-content mui-table-cell">
                  <div class="mui-clearfix">
                    <h4 class="oa-contact-name"><a @click.prevent="eqmore(item.id)">{{item.name}}</a></h4>
                  </div>
                  <p class="mui-h6">
                    <span class="oa-contact-position mui-h6">型号:</span>
                    <span class="oa-contact-position mui-h6">{{item.eqCode}}</span>
                  </p>
                  <p class="mui-h6">
                    <span class="oa-contact-position mui-h6">编号:</span>
                    <span class="oa-contact-position mui-h6">{{item.eqModel}}</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="test" v-if="flag">
              <h1>sssssssssssssssssssssssss</h1>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "eqList",
  data() {
    return {
      flag:false,
      eqList: [
        {
          id: 1,
          name: "天然气脱固撬",
          stats: "运行中",
          eqCode: "XXXXXXXXX",
          eqModel: "SSSSSSSSS"
        },
        {
          id: 2,
          name: "三相分离器撬",
          stats: "运行中",
          eqCode: "XXXXXXXXX",
          eqModel: "SSSSSSSSS"
        },
        {
          id: 3,
          name: "增压站螺杆压缩机入口高效过滤分离撬",
          stats: "运行中",
          eqCode: "XXXXXXXXX",
          eqModel: "SSSSSSSSS"
        },
        {
          id: 4,
          name: "加热节流撬",
          stats: "运行中",
          eqCode: "XXXXXXXXX",
          eqModel: "SSSSSSSSS"
        },
        {
          id: 5,
          name: "稠油管式分离多相计量装置",
          stats: "运行中",
          eqCode: "XXXXXXXXX",
          eqModel: "SSSSSSSSS"
        },
        {
          id: 6,
          name: "热水撬",
          stats: "未运行",
          eqCode: "XXXXXXXXX",
          eqModel: "SSSSSSSSS"
        }
      ]
    };
  },
  methods: {
    eqmore(id) {
      //根据设备的 id 渲染信息
      console.log("设备列表页面id："+id);
      this.$router.push({ path: "eqInfo", params: { id: id } });
    },
    hBack(){
      this.$router.back()
    }
  }
};
</script>
<style scoped>
.eqList {
  text-align: left;
}
.title {
  margin: 20px 15px 10px;
  color: #6d6d72;
  font-size: 15px;
}

.oa-contact-cell.mui-table .mui-table-cell {
  padding: 11px 0;
  vertical-align: middle;
}

.oa-contact-cell {
  position: relative;
  margin: -11px 0;
}

.oa-contact-avatar {
  width: 75px;
}
.oa-contact-avatar img {
  border-radius: 50%;
  width: 60px;
  height: 60px;
}
.oa-contact-content {
  width: 100%;
}
.oa-contact-name {
  margin-right: 20px;
}
.oa-contact-name,
oa-contact-position {
  float: left;
}
</style>

