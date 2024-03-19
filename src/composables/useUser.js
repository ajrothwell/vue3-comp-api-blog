// the "use" prefix on this file is a common convention for writing vue composables

import { ref } from "vue"

// this will fetch users from the json placeholder api, and store the result
// in a reactive variable
export default function useUser() {
  const users = ref([])
  const user = ref(null)
  const baseURL = "https://jsonplaceholder.typicode.com/users"

  const fetchAll = async () => {
    // we'll use the browser native function "fetch" to make an ajax request
    // to the json placeholder api
    const response = await fetch(baseURL)
    users.value = await response.json()
  }

  const fetchOne = async (id) => {
    const response = await fetch(`${baseURL}/${id}`)
    user.value = await response.json()
  }

  return {
    users,
    fetchAll,
    user,
    fetchOne
  }

}