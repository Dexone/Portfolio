<template>
  <header style="height: 10px; max-width: 970px; margin-left: auto; margin-right: auto;">
    <img src="./assets/biglogo.png" style="float: left;">
    <RouterLink style="float: right; font-size: 20px; margin-top: 3px;" :to="{ name: 'projects' }"><b>Projects</b>
    </RouterLink>
  </header>
  <div style="background-color: #e5e7eb;max-width: 10000px; height: 1px; margin-left: -100px; margin-top: 30px;"></div>



  <div style="max-width: 970px;height: auto; margin-left: auto; margin-right: auto;">
    <router-view>
    </router-view>
  </div>





  <div style=" margin-left: auto; margin-right: auto;max-width:600px; margin-top: 160px; text-align: center;">
    <a href="https://github.com/Dexone"><img src="/public/github.png" width="35px" height="30px"></a>
    <a href="https://vk.com/id291002761" style="margin-left: 20px;"><img src="/public/vk.png" width="35px"
        height="30px"></a>
    <a href="https://t.me/real_martynov" style="margin-left: 20px;"><img src="/public/telegram.png" width="35px"
        height="30px"></a>
  </div>


  <div
    style=" margin-left: auto; margin-right: auto;max-width:600px; font-size: 20px;margin-top: 10px; text-align: center;">
    Made with <a style="color: red">❤</a> using <a href="https://vuejs.org/">Vue.js</a>, hosted on <a
      href="https://pages.github.com/">Github Pages</a>.
  </div>


  <div
    style=" margin-left: auto; margin-right: auto;max-width:600px; font-size: 20px;margin-top: 10px; text-align: center;">
    ©2023 — Dima 'Dexone' Martynov.
  </div>
</template>

<script setup>

</script>



