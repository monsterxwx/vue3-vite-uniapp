<template>
  <view class="content">
    <image
      class="logo"
      src="/static/logo.png"
    />
    <view class="text-area">
      <text class="title">
        {{ title }}
      </text>
    </view>

    <uni-card>
      <text>
        11这是一个基础卡片示例，内容较少，此示例展示了一个没有任何属性不带阴影的卡片。
      </text>
    </uni-card>
    <uni-card>
      <text>
        pinia的数据：{{ store.user }}
      </text>
    </uni-card>
    <uni-dateformat date="2020/12/12" />
    <button @click="goPage">
      跳转
    </button>
    <uni-link
      href="https://uniapp.dcloud.io/"
      text="https://uniapp.dcloud.io/"
    />
  </view>
</template>

<script setup>
import { ref } from 'vue'
import useStore from '@/store'
import { onLoad, onShow } from '@dcloudio/uni-app'

import uni from '@/utils/useUni'
const store = useStore()
const title = ref('Hello3')
const app = getApp()
onLoad(() => {
  console.log('ee')
  console.log(app)
})
onShow(() => {
  console.log('e')
})
// const select = ref('')
const goPage = () => {
  const test = uni.ZJSON({
    url: 'www.baidu.com/test?4==5'
  })
  uni.navigateTo({
    url: '/pages/test/index?test=' + test

  })
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .logo {
    margin: 0 auto;
    width: 200rpx;
    height: 200rpx;
  }
  .text-area {
    display: flex;
    justify-content: center;
  }
  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }
}

</style>
