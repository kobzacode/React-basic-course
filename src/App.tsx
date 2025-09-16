import './App.css'
import { UserList } from '@components/UserList'

function greetUser(name: string) {
  alert(`Hello, ${name}!`)
}

function App() {
  const users = [
    { name: 'John', age: 30, role: 'System Administrator' },
    { name: 'Emily', age: 25, role: 'Moderator' },
    { name: 'Michael', age: 25 },
  ]
  return (
   <div>
    <UserList users={users} onGreet={greetUser} />
   </div>
  )
}

export default App
