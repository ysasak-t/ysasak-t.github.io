<template>
  <div class="container">
    <div>
      <h1>プライバシーポリシー</h1>
      <p style="text-align: right">制定日：2020年4月28日</p>
      <p>
        BLOCK
        BREAKER（以下「本アプリ」という）の利用者に関する情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」という）を定めます。
      </p>
      <h2>情報を取得するアプリ提供者</h2>
      <p>Yuya Sasaki</p>
      <h2>取得する情報と目的について</h2>
      本アプリでは利便性向上のため、細心の注意を払い、匿名で個人を特定できない範囲で次のような情報を取得し、アクセス解析をしております。
      <ul>
        <li>本アプリの起動回数・使用率</li>
        <li>本アプリのクラッシュ数</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class PagesIndex extends Vue {
  /**
   * head
   */
  public head() {
    return {
      title: 'プライバシーポリシー - BLOCK BREAKER'
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}
</style>
