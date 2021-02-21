import useUser from 'context/User'
import useStudentsResource from 'resources/students'

const Authenticated = () => {
  const { data: students } = useStudentsResource.get()

  console.log(students)

  const {
    actions: { setUser }
  } = useUser()

  const onClick = () => {
    setUser(null)
  }

  return (
    <div>
      <h1>Authenticated</h1>
      <button onClick={onClick}>Logout</button>
    </div>
  )
}

export default Authenticated
