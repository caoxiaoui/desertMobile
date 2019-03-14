<template>
  <div class="eqList">
    <div class="content">
      <div id="tabbar-with-contact" class="control-content active">
        <ul class="table-view table-view-striped table-view-condensed" v-for="item in data" :key="item.id">
          <li class="table-view-cell">
            <div class="slider-cell">
              <div class="oa-contact-cell table">
                <div class="oa-contact-avatar table-cell">
                  <img src="~@/assets/logo.png" />
                </div>
                <div class="oa-contact-content table-cell">
                  <div class="clearfix">
                    <h4 class="oa-contact-name">
                      <a @click.prevent="eqmore(item.equipmentId)">{{item.equipmentName}}</a>
                    </h4>
                  </div>
                  <p class="h6">
                    <span class="oa-contact-position h6">编码:</span>
                    <span class="oa-contact-position h6">{{item.equipmentCode}}</span>
                  </p>
                  <p class="h6">
                    <span class="oa-contact-position h6">型号:</span>
                    <span class="oa-contact-position h6">{{item.equipmentModel}}</span>
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import data1 from "./eqList.json"; //引入本地json文件
export default {
  name: "eqList",
  data() {
    return {
      data: data1.result, //调用引入的本地json文件
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
      console.log("设备列表页面id：" + id);
      this.$router.push({ path: "eqInfo", params: { id: id } });
    },
    getData() {
      // this.axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
      // this.axios.get(this.data).then(response => {
      //   this.info = response.data.result;
      //   console.log(this.info);
      //   this.name = this.info.equipmentName;
      //   this.stats = this.info.equipmentStatusDes;
      //   this.eqCode = this.info.equipmentCode;
      //   this.eqModel = this.info.equipmentModel;
      //   this.category = this.info.equipmentCategory;
      //   this.specifications = this.info.equipmentSpecifications;
      // });
    }
  },
  mounted() {
    console.log(this.data);
    this.getData();
  }
};
</script>
<style scoped>
ul,
li {
  list-style: none;
}
div {
  display: inline;
}
.eqList {
  text-align: left;
}
.title {
  margin: 20px 15px 10px;
  color: #6d6d72;
  font-size: 15px;
}

.table-view-cell {
  -webkit-box-shadow: 0px 1px 4px #afafaf;
  box-shadow: 0px 1px 4px #afafaf;
}
.oa-contact-cell.table .table-cell {
  padding: 11px 0;
  vertical-align: middle;
  display: flex;
  flex-direction: column;
}

.oa-contact-cell {
  position: relative;
  margin: -11px 0;
  display: flex;
  justify-content: flex-start;
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
  margin: 0;
  margin-right: 20px;
}
.oa-contact-name a {
  color: rgb(24, 79, 197);
}
.h6 {
  padding: 0;
  margin: 0;
  font-size: 14px;
  color: #6d6d72;
}
</style>

