import useSWR from 'swr'

import instance from 'providers/api'

const useApi = path => {
  const { data, error } = useSWR(path, url =>
    instance.get(url).then(res => res.data)
  )

  return {
    data,
    error,
    loading: !error && !data
  }
}

export default useApi
