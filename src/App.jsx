import './App.css'
import './components/FeedIdentity'
import { FeedIdentity } from './components/FeedIdentity'

function App() {
  const userData = {
    userName: "David Sáez Slimming",
    userTitle: "Co-founder of MyBoya!",
    userBackground: "hola",
    userPicture: "chao",
  }

  return (
    <>
      <FeedIdentity
        userName={userData.userName}
        userTitle={userData.userTitle}
        userBackground={userData.userBackground}
        userPicture={userData.userPicture}
      />
    </>
  )
}

export default App
