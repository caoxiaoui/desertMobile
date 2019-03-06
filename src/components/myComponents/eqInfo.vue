<template>
  <!-- <h1 @click="aa">{{tit}}</h1> -->
  <keep-alive>
  <el-table ref="multipleTable" :data="tableData" stripe tooltip-effect="dark" style="100%" @selection-change="handleSelectionChange">
    <el-table-column type="selection" width="55">
    </el-table-column>
    <el-table-column label="日期" width="120">
      <template slot-scope="scope">{{scope.row.date}}</template>
    </el-table-column>
    <el-table-column prop="name" label="姓名" width="120">
    </el-table-column>
    <el-table-column prop="address" label="地址" show-overflow-tooltip>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </keep-alive>
</template>
<script>
export default {
  data() {
    return {
      stripe:true,
      tableData: [
        {
          date: new Date(),
          name: "曹旺",
          address: "山东省菏泽市"
        },
        {
          date: new Date(),
          name: "曹王1",
          address: "北京市大兴区"
        },
        {
          date: new Date(),
          name: "曹王2",
          address: "北京市大兴区"
        },
        {
          date: new Date(),
          name: "曹王3",
          address: "北京市大兴区"
        },
        {
          date: new Date(),
          name: "曹王4",
          address: "北京市大兴区"
        },
        {
          date: new Date(),
          name: "曹王5",
          address: "北京市大兴区"
        },
        {
          date: new Date(),
          name: "曹王6",
          address: "北京市大兴区"
        },
        {
          date: new Date(),
          name: "曹王7",
          address: "北京市大兴区"
        }
      ],
      multipleSelection: []
    };
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(this.multipleSelection);
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.$confirm("即将删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.tableData.splice(index, 1);
          // row.splice(index, 1);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>

