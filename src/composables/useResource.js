// the "use" prefix on this file is a common convention for writing vue composables

import { ref } from "vue"

import usePageRequests from "./usePageRequests"

// this will fetch posts from the json placeholder api, and store the result
// in a reactive variable
export default function useResource(resource) {

  const { makeRequest } = usePageRequests()

  const items = ref([])
  const item = ref(null)
  const baseURL = `https://jsonplaceholder.typicode.com/${resource}`

  const fetchAll = async () => {
    // we'll use the browser native function "fetch" to make an ajax request
    // to the json placeholder api
    
    // const response = await fetch(baseURL)
    // items.value = await response.json()

    items.value = await makeRequest(baseURL)
  }

  const fetchOne = async (id) => {
    // const response = await fetch(`${baseURL}/${id}`)
    // item.value = await response.json()

    item.value = await makeRequest(`${baseURL}/${id}`)
  }

  return {
    items,
    fetchAll,
    item,
    fetchOne
  }

}