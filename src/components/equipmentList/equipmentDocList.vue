<template>
  <div class="docList">

    <div class="seach">
      <input v-model="value" />
      <mt-button size='small' type='primary'>查找</mt-button>
    </div>
    <div class="list">
      <transition-group appear tag="ul">
        <li v-for="item in list" :key="item.id">
          <a href="#">{{ item.content }}</a>
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "docList",
  data() {
    return {
      value: "",
      list: [
        { id: 1, content: "试压方案" },
        { id: 2, content: "试压方案" },
        { id: 3, content: "试压方案" },
        { id: 4, content: "工艺管道及仪表自控流程图" },
        { id: 5, content: "工艺管道及仪表自控流程图" },
        { id: 6, content: "工艺管道及仪表自控流程图" },
        { id: 7, content: "工艺管道及仪表自控流程图" },
        { id: 8, content: "工艺管道及仪表自控流程图" },
        { id: 9, content: "中华人民共和国特种设备检验检测机构核标准" },
        { id: 10, content: "中华人民共和国特种设备检验检测机构核标准" },
        { id: 11, content: "中华人民共和国特种设备检验检测机构核标准" },
        { id: 12, content: "中华人民共和国特种设备检验检测机构核标准" },
        { id: 13, content: "中华人民共和国特种设备检验检测机构核标准" },
        { id: 14, content: "试压方案" }
      ]
    };
  },
  methods: {
  }
};
</script>

<style scoped>
input {
  border: none;
  padding: 6px;
  width: 70%;
  box-shadow: 0px 0px 1px #c1c1c1;
}
.list {
  text-align: left;
  padding: 10px 25px;
}
.list li {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  height: 35px;
  line-height: 35px;
  border-radius: 5px;
}
.list li::before {
  display: inline-block;
  content: "";
  width: 16px;
  height: 16px;
  background: url(./../../assets/image/dot.png) no-repeat;
  position: relative;
  top: 4px;
  background-size: 12px;
}
.list li:hover {
  background: #c1c1c1;
}


.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(80px);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.6s ease;
}

/*v-move 和 v-leave-active 配合使用，能够实现列表后续的元素，渐渐地漂上来的效果 */
.v-move {
  transition: all 0.6s ease;
}
.v-leave-active {
  position: absolute;
}
</style>