import { useForm } from 'react-hook-form'

import useUser from 'context/User'
import instance from 'providers/api'
import useInstitutionsResource from 'resources/institutions'
import useAuthResource from 'resources/auth'

const Home = () => {
  const {
    actions: { setUser }
  } = useUser()
  const { data: institutions, loading } = useInstitutionsResource.get()

  const { register, handleSubmit } = useForm()

  const onSubmit = handleSubmit(async values => {
    const { data, headers } = await useAuthResource.login(values)

    const user = {
      id: data.data.id,
      name: data.data.name,
      role: data.data.role
    }

    instance.defaults.headers.common['access-token'] = headers['access-token']
    instance.defaults.headers.common.client = headers.client
    instance.defaults.headers.common.uid = headers.uid

    setUser(user)
  })

  if (loading) {
    return 'carregando'
  }

  return (
    <div>
      <h1>Home</h1>
      <form onSubmit={onSubmit}>
        <select ref={register} name="institution_id">
          {institutions.map(institution => (
            <option key={institution.id} value={institution.id}>
              {institution.name}
            </option>
          ))}
        </select>

        <input type="text" name="username" ref={register} />
        <input type="password" name="password" ref={register} />

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Home
