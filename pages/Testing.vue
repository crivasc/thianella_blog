<template>
    <div>
      <li v-for="post of posts" :key="post.name">
        <NuxtLink :to="post.name">{{ post.name }}</NuxtLink>
      </li>
    </div>
  </template>
  
  <script>
  export default {
     async asyncData({ $content }) {
      const posts = await $content("blog").fetch();
  
      return {
        posts,
      };
    },
  };
  </script>