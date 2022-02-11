<template>
  <div class="home-container page-container">
    <el-row id="homeTag" :gutter="24">
      <el-col :span="10">
        <el-card shadow="hover">
          <div class="WelcomeBox">
            <img
              src="https://jack-img.oss-cn-hangzhou.aliyuncs.com/img/20210605145617.jpg"
              class="home-avatar"
            />
            <span class="welcomeTitle"
              >下午好， <span class="user-name">游客</span>！</span
            >
            <span class="poemContent"
              >{{ msgContent }} <span class="poemTitle">{{ msgAuthor }}</span></span
            >
          </div>
        </el-card>
      </el-col>
      <el-col :span="7">
        <el-card shadow="hover"
          ><span class="">{{ currentTime }}</span></el-card
        >
      </el-col>
      <el-col :span="7">
        <el-card shadow="hover"> Hover </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { load } from 'jinrishici/jinrishici'

export default defineComponent({
  name: 'homeIndex',
  data() {
    return {
      msgContent: '',
      msgAuthor: '',
      currentTime: '', // 获取当前时间
      timer: 0
    }
  },
  created() {
    const thisX = this
    this.timer = setInterval(function () {
      thisX.getTime()
    }, 1000)
  },
  mounted() {
    this.loadSentence()
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer) // 在Vue实例销毁前，清除我们的定时器
    }
  },
  methods: {
    loadSentence() {
      load(
        (result) => {
          this.msgContent = result.data.content
          this.msgAuthor = `  ——  ${result.data.origin.author}`
        },
        (err) => {
          console.log(err)
        }
      )
    },
    getTime() {
      const yy = new Date().getFullYear()
      const mm = new Date().getMonth() + 1
      const dd = new Date().getDate()
      const hh = new Date().getHours()
      const mf =
        new Date().getMinutes() < 10
          ? `0${new Date().getMinutes()}`
          : new Date().getMinutes()
      const ss =
        new Date().getSeconds() < 10
          ? `0${new Date().getSeconds()}`
          : new Date().getSeconds()
      this.currentTime = `${yy}-${mm}-${dd} ${hh}:${mf}:${ss}`
      console.log(this.currentTime)
    }
  }
})
</script>

<style scoped lang="stylus">
.home-container {

}
.WelcomeBox {
  width: 100vh;
  height: 140px;
  background-color: #fff;
  transition: all .2s;
  position: relative;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  flex: 2 1;
}
.home-avatar {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 110px;
  height: 110px;
  border-radius: 50%;
}
.poemContent, .welcomeTitle {
  position: absolute;
  left: 150px;
}
.poemContent {
  bottom: 24px;
  font-size: 18px;
}
.welcomeTitle {
  font-size: 36px;
  font-weight: 700;
  top: 24px;
}
</style>
