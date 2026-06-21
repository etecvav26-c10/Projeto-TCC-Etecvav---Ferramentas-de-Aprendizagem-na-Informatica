<script setup>
import { ref, onMounted } from 'vue'
import { withBase } from 'vitepress'

const stats = ref({
  projects: '0',
  users: '0',
  studios: '0'
})

function animateCount(refKey, target, suffix = '') {
  const duration = 2000
  const steps = 60
  const increment = target / steps

  let current = 0

  const interval = setInterval(() => {

    current += increment

    if (current >= target) {
      stats.value[refKey] =
        target.toLocaleString('pt-BR') + suffix

      clearInterval(interval)
    }

    else {

      stats.value[refKey] =
        Math.floor(current).toLocaleString('pt-BR') + suffix
    }

  }, duration / steps)
}

onMounted(() => {

  animateCount('projects', 130000000, '+')
  animateCount('users', 100000000, '+')
  animateCount('studios', 50000000, '+')

})
</script>

<template>

<div class="scratch-page">

<nav class="scratch-nav">

<div class="nav-logo">

<img
src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Scratchlogo.svg/3840px-Scratchlogo.svg.png"
style="height:45px"
>

</div>

<ul class="nav-links">

<li>
<a href="https://scratchbrasil.org.br/o-que-e-scratch/" target="_blank">
Site Oficial
</a>
</li>

<li>
<a :href="withBase('/Scratch_D')">
Documentação
</a>
</li>

<li>
<a href="https://www.scratchfoundation.org/home" target="_blank">
Fundação Scratch
</a>
</li>

<li>
<a :href="withBase('/')">
Hub Principal
</a>
</li>

</ul>

</nav>


<!-- HERO -->

<div class="scratch-hero">

<div class="scratch-hero-overlay"></div>

<div class="scratch-hero-content">

<img
class="scratch-logo"
src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Scratchlogo.svg/3840px-Scratchlogo.svg.png"
/>

<h1>
A ferramenta interativa de programação mais famosa do mundo
</h1>

<a
href="https://scratch.mit.edu"
target="_blank"
class="btn-primary">

Conheça o Scratch

</a>

</div>

</div>


<!-- ESTATÍSTICAS -->

<section class="scratch-stats">

<div class="stat-card">

<h1>{{ stats.projects }}</h1>

<p>Projetos Publicados</p>

</div>

<div class="stat-card">

<h1>{{ stats.users }}</h1>

<p>Usuários Registrados</p>

</div>

<div class="stat-card">

<h1>{{ stats.studios }}</h1>

<p>Studios Criados</p>

</div>

</section>

<footer class="scratch-footer">

<h2>Scratch</h2>

<p>
Todos os direitos reservados à Fundação Scratch
</p>

</footer>

</div>

</template>