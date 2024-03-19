<template>
  <div v-if="post && user">

    <h1 class="text-3xl">{{ post.title }}</h1>
    <div class="text-gray-500 mb-10">by {{ user.name }}</div>
    <div>{{ post.body }}</div>

  </div>
</template>

<script setup>

// vue router provides its own composables that we can use
import { useRoute } from 'vue-router'
// import usePost from '../composables/usePost.js'
// import useUser from '../composables/useUser.js'
import useResource from '../composables/useResource.js'

import { watch } from 'vue'

const route = useRoute()

// Post
const { item: post, fetchOne: fetchPost } = useResource('posts')
fetchPost(route.params.id)

// User
const { item: user, fetchOne: fetchUser } = useResource('users')
watch(
  () => ({...post.value}),
  () => fetchUser(post.value.userId)
)

// (async () => {
//   await 
//   fetchUser(post.value.userId)
// })()

// fetchPost(route.params.id).then(() => {
//   fetchUser(post.value.userId)
// })


// const post = {
//   title:
//     "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//   body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
// };

// const user = {
//   name: "Leanne Graham",
// };

</script>
