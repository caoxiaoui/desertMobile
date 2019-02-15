<template>
  <div class="login">
    <el-form label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名">
        <el-input v-model="name" placeholder="1111"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="pass"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>


<script>
export default {
  name: "login",
  data() {
    return {
      name: "",
      pass: ""
    };
  },
  methods: {
    submitForm() {
      alert("111")
    }
  }
};
</script>