<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <RouterLink to="/">Home</RouterLink>
  <span>&nbsp;|&nbsp;</span>
  <RouterLink to="/about">About</RouterLink>

  <RouterView />
</template>

<style>
body {
  background-color: #f2f2f2;
}
</style>
