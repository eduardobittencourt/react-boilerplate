import UserProvider from './User/Provider'

const BootstrapData = ({ children }) => {
  return children
}

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <BootstrapData>{children}</BootstrapData>
    </UserProvider>
  )
}

export default Providers
