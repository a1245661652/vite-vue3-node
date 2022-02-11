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
          ><span class="">{{ currentTimeTrue }}</span></el-card
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
      currentTime: Date.now(), // 获取当前时间
      currentTimeTrue: ''
    }
  },
  created() {
    const thisX = this // 声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(
      (thisX.currentTimeTrue = thisX.getTime(thisX.currentTime)),
      1000
    )
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
    getTime(time) {
      const date = new Date(time)
      const y = date.getFullYear()
      const m =
        date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
      const d = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
      console.log(`${y}-${m}-${d}`)
      return `${y}-${m}-${d}`
    },
    timer() {}
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
