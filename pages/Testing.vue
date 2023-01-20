<template>
    <div>
      <li v-for="post of posts" :key="post.name">
        <NuxtLink :to="post.name">{{ post.name }}</NuxtLink>
      </li>
    </div>
  </template>
  
  <script>
  export default {
    mounted(){
      this.asyncData()
    },
     data(){
      return{
        posts:""
      }
     },
     methods:{
      async asyncData({ $content }) {
        this.posts = await $content("blog").fetch();
    
        // return {
        //   posts,
        // };
      },
     }
  };
  </script>