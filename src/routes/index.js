import { useUser, userActions } from 'context/User'

const Routes = () => {
    const {store, control} = useUser()
    const {setUser} = userActions()

    const onClick = () => {
        setUser({id: 1, name: 'Eduardo'}, control)
    }

    console.log(store)

    return <div>
        <button onClick={onClick}>setUser</button>
    </div>
}

export default Routes