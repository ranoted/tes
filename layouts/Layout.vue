<template>
  <section class="layout">
    <h3>Este es globallayout</h3>
  
    <list :class="{ 'cover-list': $cover, 'home-list': $isHome }"></list>
    <pagination />
  </section>
</template>

<script>
import Pagination from '@theme/components/Pagination.vue'

export default {
  name: 'Layout',
  components: {
    Pagination
  }
}
</script>

<style lang="stylus" scoped>
.layout
  .content
    padding 0
</style>
