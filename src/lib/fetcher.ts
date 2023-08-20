export const fetcher = (url:string) => fetch(url).then((res) => res.json());

export const swrOptions = {
  revalidateOnFocus: false,
  // revalidateOnMount:false,
  shouldRetryOnError: false,
  revalidateOnReconnect: false,
  refreshWhenOffline: false,
  refreshWhenHidden: false,
  refreshInterval: 0,
};

export const fetchCatchError = async (url:string) => {
    const res = await fetch(url)

    if (!res.ok) {
        const error = new Error('An error occurred while fetching the data.') as Error & { info: any; status: number }
        error.info = await res.json()
        error.status = res.status
        throw error
    }        

    return res.json()
}