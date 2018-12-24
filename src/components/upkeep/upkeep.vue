<template>
  <div class="upkeep">
    <!-- <h1>保养相关</h1> -->
    <div class="mui-navbar-inner mui-bar mui-bar-nav">
      <button type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
        <span class="mui-icon mui-icon-left-nav"></span>
      </button>
      <h1 class="mui-center mui-title">保养相关</h1>
    </div>
    
    <div class="upkeep-tab">
      <table>
        <thead>
          <tr>
            <th>设备名称</th>
            <th>计划保养日期</th>
            <th>计划状态</th>
            <th>计划内容</th>
            <th>保养类型</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in eqList" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.uptime }}</td>
            <td>{{ item.upstats }}</td>
            <td>{{ item.upcontent }}</td>
            <td>{{ item.uptype }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "upkeep",
  data() {
    return {
      eqList: [
        {
          id: 1,
          name: "天然气脱固撬",
          zname: "脱固撬",
          uptime: new Date(),
          upstats: "保养中",
          upcontent: "SSSSSSSSS",
          uptype:"日常保养"
        },
        {
          id: 2,
          name: "三相分离器撬",
          zname: "分离器撬",
          uptime: new Date(),
          upstats: "保养中",
          upcontent: "SSSSSSSSS",
          uptype:"日常保养"
        },
        {
          id: 3,
          name: "增压站螺杆压缩机入口高效过滤分离撬",
          zname: "入口高效过滤分离撬",
          uptime: new Date(),
          upstats: "保养中",
          upcontent: "SSSSSSSSS",
          uptype:"日常保养"
        },
        {
          id: 4,
          name: "加热节流撬",
          zname: "节流撬",
          uptime: new Date(),
          upstats: "保养中",
          upcontent: "SSSSSSSSS",
          uptype:"日常保养"
        },
        {
          id: 5,
          name: "稠油管式分离多相计量装置",
          zname: "分离多相计量装置",
          uptime: new Date(),
          upstats: "保养中",
          upcontent: "SSSSSSSSS",
          uptype:"日常保养"
        },
        {
          id: 6,
          name: "热水撬",
          zname: "热水",
          uptime: new Date(),
          upstats: "保养中",
          upcontent: "SSSSSSSSS",
          uptype:"日常保养"
        }
      ]
    };
  },
  methods: {
   
  },
  created() {
    
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
</style>