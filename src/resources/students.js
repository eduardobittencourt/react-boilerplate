import useApi from 'hooks/useApi'

const useStudentsResource = {
  get: () => useApi('/v1/coordinator/students?page=1&per=10')
}

export default useStudentsResource
