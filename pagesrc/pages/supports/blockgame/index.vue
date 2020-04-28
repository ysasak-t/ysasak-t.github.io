<template>
  <div class="container">
    <div>
      <h1>サポート</h1>
      <p>アプリ開発者への問い合わせは、下記メールアドレスよりお願い致します。</p>
      <h2>連絡先</h2>
      <ul>
        <li>名前：Yuya Sasaki</li>
        <li>
          メール：yuyasvx[at]gmail.com <br />
          ※[at]はアットマークに変換してください。
        </li>
      </ul>
      <h2><nuxt-link to="./privacy-policy" exact>プライバシーポリシーはこちら</nuxt-link></h2>
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
      title: 'サポート - BLOCK BREAKER'
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
