<template>
  <div class="login">
    <el-form class="demo-ruleForm">
      <el-form-item>
        <el-input v-model="name" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" v-model="pass" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm" class="login-btn">登陆</el-button>
        <!-- <el-button>重置</el-button> -->
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
      pass: "",
      logURL: "" //
    };
  },
  methods: {
    submitForm() {
      // alert("111")
      // this.axios.get(logURL).then(res=>{
      //   console.log(res);
      // })

      this.$router.push({ path: "HelloWorld" });
      // this.redirdect
    }
  }
};
</script>
<style scoped>
.login {
}
.login-btn {
  width: 100%;
}
.demo-ruleForm {
  width: 400px;
  margin: 200px auto;
}
</style>
