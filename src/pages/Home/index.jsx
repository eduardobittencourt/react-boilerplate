import useUser from 'context/User'

const Home = () => {
  const {
    actions: { setUser }
  } = useUser()

  const onClick = () => {
    setUser({ id: 1, name: 'Eduardo' })
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={onClick}>Login</button>
    </div>
  )
}

export default Home
