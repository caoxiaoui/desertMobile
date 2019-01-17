<template>
  <div class="eqInfo">
    <!-- <router-view/> -->
    <div class="mui-navbar-inner mui-bar mui-bar-nav">
      <button @click="hBack" type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
        <span class="mui-icon mui-icon-left-nav"></span>
      </button>
      <h1 class="mui-center mui-title">设备详细信息</h1>
    </div>

    <div class="mui-page-content">
      <div class="mui-content-padded">
        <p>
          <img src="~@/assets/image/cbd.jpg" data-preview-src="" data-preview-group="1" />
        </p>

        <!-- 跳转按钮 -->
        <div>

          <router-link to='/eq2D'>
            <mt-button size="small">工艺流程图</mt-button>

          </router-link>

          <mt-button size="small">文档资料</mt-button>
          <mt-button size="small">日报数据</mt-button>
          <mt-button size="small">保养计划</mt-button>
        </div>
        <!-- 跳转按钮 -->

        <!-- 详细信息 -->
        <div>
          <h3 class="left">详细信息</h3>
          <!-- <button type="button" class="mui-btn" @click="getData">获取数据</button> -->
          <!-- <p>{{ info }}</p> -->
          <div class="info-list">
            <ul>
              <li>
                <span>名称：</span>
                <span>天然气脱固撬</span>
                <!-- {{ info.equipmentName }} -->
              </li>
              <li>
                <span>分类：</span>
                <span>生产分离器撬</span>
                <!-- {{ info.equipmentCategory }} -->
              </li>
              <li>
                <span>编码：</span>
                <span>DWG-2015-042</span>
                <!-- {{ info.equipmentCode }} -->
              </li>
              <li>
                <span>型号：</span>
                <span>Ⅰ</span>
                <!-- {{ info.equipmentModel }} -->
              </li>
              <li>
                <span>规格：</span>
                <span>60000Kg</span>
                <!-- {{ info.equipmentSpecifications }} -->
              </li>
              <li>
                <span>安装地址：</span>
                <span>新疆</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- 详细信息 -->

        <!-- 数据采集 -->
        <div>
          <h3 class="left">数据采集</h3>
          <!-- <button type="button" class="mui-btn" @click="getData">获取数据</button> -->
          <!-- <p>{{ info }}</p> -->
          <div class="info-list">
            <ul>
              <li>
                <span>城市：</span>
                <span>新疆</span>
                <!-- {{ info.equipmentName }} -->
              </li>
              <li>
                <span>上电状态：</span>
                <span>通电</span>
                <!-- {{ info.equipmentCategory }} -->
              </li>
              <li>
                <span>电伴热1状态：</span>
                <span>开</span>
                <!-- {{ info.equipmentCode }} -->
              </li>
              <li>
                <span>电伴热2状态：</span>
                <span>开</span>
                <!-- {{ info.equipmentModel }} -->
              </li>
              <li>
                <span>电机1运行状态：</span>
                <span>运行</span>
                <!-- {{ info.equipmentSpecifications }} -->
              </li>
              <li>
                <span>电机2运行状态：</span>
                <span>运行</span>
              </li>
              <li>
                <span>累计运行时间：</span>
                <span>47天23小时</span>
              </li>
            </ul>
          </div>
          <div id="myChart" :style="{height: '300px'}"></div>
        </div>
        <!-- 数据采集 -->
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "eqInfo",
  data() {
    return {
      info: "",
      flag: true,
      eqID: "",
      url: "http://datachn.com/ApiServlet?method=detail&id=170",
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
    huoqu() {
      this.eqID = this.$route.params.id;
      console.log("详细信息页面id：" + this.eqID);
      return this.eqID;
    },
    hBack() {
      this.$router.back();
    },
    getData() {
      // this.axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
      // this.axios.get("/api/ApiServlet?method=detail&id=170")
      // this.axios.get(this.url)
      this.axios.get(this.url).then(response => {
        this.info = response.data;
        // console.log(typeof(response))
      });
    },
    echarts() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: { text: "温度变化" },
        tooltip: {},
        xAxis: {
          data: ["12.15", "12.16", "12.17", "12.18", "12.19", "12.20"]
        },
        yAxis: {},
        series: [
          {
            name: "温度",
            type: "line",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    }
  },
  created() {
    this.huoqu();
  },
  mounted() {
    this.echarts();
  }
};
</script>
<style scoped>
ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}
.eqInfo {
  margin-bottom: 60px;
}
.eqInfo .left {
  text-align: left;
  font-size: 16px;
  border-bottom: 1px solid #9d9d9d;
  padding-bottom: 3px;
}
p img {
  max-width: 100%;
  height: auto;
}
.info-list {
  border-bottom: 1px solid #ccc;
  box-shadow: 0px 3px 6px #ccc;
  padding: 5px;
  padding-bottom: 6px;
  margin-bottom: 20px;
}
.info-list li {
  text-align: left;
  display: -webkit-flex;
  display: flex;
  justify-content: space-between;
}
.info-list li span:nth-child(1) {
  display: inline-block;
  width: 125px;
  color: #646464;
  font-size: 14px;
}
.info-list li span:nth-child(2) {
  display: inline-block;
  width: 270px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>

