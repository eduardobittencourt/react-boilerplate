import { useUser, userActions } from 'context/User'

const Routes = () => {
  const { control } = useUser()
  const { setUser } = userActions()

  const onClick = () => {
    setUser({ id: 1, name: 'Eduardo' }, control)
  }

  return (
    <div>
      <button onClick={onClick}>setUser</button>
    </div>
  )
}

export default Routes
