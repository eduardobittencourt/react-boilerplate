import instance from 'providers/api'

const useAuthResource = {
  login: data => instance.post('/auth/sign_in', data)
}

export default useAuthResource
