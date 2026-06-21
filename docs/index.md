---
layout: false
---

<script setup>
import { onMounted } from 'vue'
import { withBase } from 'vitepress'

onMounted(() => {
  window.location.href = withBase('/Hub_Principal.html')
})
</script>