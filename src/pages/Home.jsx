
import UserResults from "../components/users/UserResults"
import UserSearch from "../components/users/UserSearch"
import Alert from "../components/layout/Alert"
function Home() {
  return (
    <div>
      <Alert />
      <UserSearch />
      <UserResults />
    </div>
  )
}

export default Home
