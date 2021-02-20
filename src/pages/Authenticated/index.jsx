import useUser from 'context/User'

const Authenticated = () => {
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
