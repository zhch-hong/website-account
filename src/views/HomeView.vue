<template>
  <div>logo</div>
  <img :src="`${assetsHost}/icon-waimai.png`" alt="外卖" />
  <img :src="logoSrc" style="width: 60px; height: 60px" alt="logo" />
  <img :src="`${assetsHost}/icon-ziti.png`" alt="外卖" />
</template>
<script lang="ts" setup>
import logoSrc from '@/assets/logo.svg';

const assetsHost = import.meta.env.VITE_APP_ASSETS_HOST;
</script>
