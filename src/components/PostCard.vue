<template>
  <div
    class="
      flex
      m-2
      gap-2
      items-center
      shadow-md
      w-1/4
      flex-grow
      rounded
      overflow-hidden
    "
    style="border: 1px solid #eee"
  >
    <img
      src="https://via.placeholder.com/150"
      style="background: #cccccc"
      width="150"
      height="150"
    />
    <router-link :to="{ name: 'Post', params: { id: post.id } }">
      {{ post.title }}
    </router-link>
  </div>
</template>

<script setup>

const props = defineProps({
  post: Object,
});

// we cloned the post prop into its own local post data
// it's always a good idea to clone props that are objects
// to avoid unintentionally mutating them from a child component
const post = { ...props.post };

</script>
