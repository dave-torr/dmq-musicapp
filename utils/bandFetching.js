import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function useBands(){
  const { data, error } = useSWR(`/api/bandFetch`, fetcher, { refreshInterval: 1000 })
  return {
    ListadoDeBandas: data,
    isLoading: !error && !data,
    isError: error
  }
}