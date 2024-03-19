import { reactive, computed } from "vue"

const activeRequests = reactive([])

export default function usePageRequests() {
  
  const isLoading = computed(() => activeRequests.length ? true : false)

  const makeRequest = async (url) => {
    // push the url to the activeRequests array

    const index = activeRequests.length
    activeRequests[index] = url

    const response = await fetch(url)
      .catch(error => alert(error))
    const data = await response.json()

    // remove the url from the activeRequests array
    // if the response wasn't successful, still remove it, but show alert message

    activeRequests.splice(index, 1)
    return data

  }

  return { isLoading, makeRequest }
}