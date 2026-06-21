---
layout: false
---

<script setup>
import { onMounted } from 'vue'
import { withBase } from 'vitepress'

onMounted(() => {
  window.location.replace(withBase('/Hub_Principal.html'))
})
</script>

<template>
  <meta http-equiv="refresh" content="0; url=/Hub_Principal.html" />
</template>