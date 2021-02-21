import useUser from 'context/User'
import useStudentsResource from 'resources/students'

const Authenticated = () => {
  const { data: students, loading } = useStudentsResource.get()

  const {
    store: user,
    actions: { setUser }
  } = useUser()

  const onClick = () => {
    setUser(null)
  }

  if (loading) {
    return 'carregando alunos'
  }

  return (
    <div>
      <span>Bem vindo(a) {user.name}</span>
      <h1>Alunos</h1>
      {students.map(student => (
        <p key={student.id}>{student.name}</p>
      ))}
      <button onClick={onClick}>Logout</button>
    </div>
  )
}

export default Authenticated
