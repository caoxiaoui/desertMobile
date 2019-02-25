<template>
  <div class="upkeep">
    <!-- <h1>保养相关</h1> -->
    <div class="upkeep-tab">
      <el-table :data="tableData5" border style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="设备名称：">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="所属单位：">
                <span>{{ props.row.shop }}</span>
              </el-form-item>
              <el-form-item label="设备 ID： ">
                <span>{{ props.row.id }}</span>
              </el-form-item>
              <el-form-item label="设备分类：">
                <span>{{ props.row.category }}</span>
              </el-form-item>
              <el-form-item label="安装地址：">
                <span>{{ props.row.address }}</span>
              </el-form-item>
              <el-form-item label="设备描述：">
                <span>{{ props.row.desc }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="日期" prop="date">
        </el-table-column>
        <el-table-column label="设备名称" prop="name">
        </el-table-column>
        <el-table-column label="描述" prop="desc">
        </el-table-column>
      </el-table>
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
          uptype: "日常保养"
        },
        {
          id: 2,
          name: "三相分离器撬",
          zname: "分离器撬",
          uptime: new Date(),
          upstats: "保养中",
          upcontent: "SSSSSSSSS",
          uptype: "日常保养"
        },
        {
          id: 3,
          name: "增压站螺杆压缩机入口高效过滤分离撬",
          zname: "入口高效过滤分离撬",
          uptime: new Date(),
          upstats: "保养中",
          upcontent: "SSSSSSSSS",
          uptype: "日常保养"
        },
        {
          id: 4,
          name: "加热节流撬",
          zname: "节流撬",
          uptime: new Date(),
          upstats: "保养中",
          upcontent: "SSSSSSSSS",
          uptype: "日常保养"
        },
        {
          id: 5,
          name: "稠油管式分离多相计量装置",
          zname: "分离多相计量装置",
          uptime: new Date(),
          upstats: "保养中",
          upcontent: "SSSSSSSSS",
          uptype: "日常保养"
        },
        {
          id: 6,
          name: "热水撬",
          zname: "热水",
          uptime: new Date(),
          upstats: "保养中",
          upcontent: "SSSSSSSSS",
          uptype: "日常保养"
        }
      ],
      tableData5: [
        {
          id: "12987122",
          name: "增压站螺杆压缩机入口高效过滤分离撬",
          category: "分离多相计量装置",
          desc: "保养中",
          address: "上海市普陀区真北路",
          shop: "北京大漠石油技术有限公司",
          shopId: "10333"
        },
        {
          id: "12987123",
          name: "增压站螺杆压缩机入口高效过滤分离撬",
          category: "分离多相计量装置",
          desc: "保养中",
          address: "上海市普陀区真北路",
          shop: "北京大漠石油技术有限公司",
          shopId: "10333"
        },
        {
          id: "12987125",
          name: "增压站螺杆压缩机入口高效过滤分离撬",
          category: "分离多相计量装置",
          desc: "保养中",
          address: "上海市普陀区真北路",
          shop: "北京大漠石油技术有限公司",
          shopId: "10333"
        },
        {
          id: "12987126",
          name: "增压站螺杆压缩机入口高效过滤分离撬",
          category: "分离多相计量装置",
          desc: "保养中",
          address: "上海市普陀区真北路",
          shop: "北京大漠石油技术有限公司",
          shopId: "10333"
        }
      ]
    };
  },
  methods: {
  },
  created() {}
};
</script>
<style scoped>
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>