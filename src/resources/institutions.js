import useApi from 'hooks/useApi'

const useInstitutionsResource = {
  get: () => useApi('/v1/institutions')
}

export default useInstitutionsResource
