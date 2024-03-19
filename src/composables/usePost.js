// the "use" prefix on this file is a common convention for writing vue composables

import { ref } from "vue"

// this will fetch posts from the json placeholder api, and store the result
// in a reactive variable
export default function usePost() {
  const posts = ref([])
  const post = ref(null)
  const baseURL = "https://jsonplaceholder.typicode.com/posts"

  const fetchAll = async () => {
    // we'll use the browser native function "fetch" to make an ajax request
    // to the json placeholder api
    const response = await fetch(baseURL)
    posts.value = await response.json()
  }

  const fetchOne = async (id) => {
    const response = await fetch(`${baseURL}/${id}`)
    post.value = await response.json()
  }

  return {
    posts,
    fetchAll,
    post,
    fetchOne
  }

}