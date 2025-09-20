// import { Counter } from '@components/Counter'
import { NewUser } from '@components/NewUser'
import './App.css'
import { UserList } from '@components/UserList'
import { useState } from 'react'
import type { IUser } from '@components/User'

function App() {
  const [users, setUsers] = useState<IUser[]>([
    { id: 1, name: 'John', age: 30, role: 'System Administrator' },
    { id: 2, name: 'Emily', age: 25, role: 'Moderator' },
    { id: 3, name: 'Michael', age: 25 },
  ])

  const addUser = (newUser: IUser) => {
    setUsers((prev) => [...prev, newUser])
  }
  
  const updateUserRole = (id: number, newRole: string) => {
    setUsers((prev) => prev.map((user) => user.id === id ? { ...user, role: newRole } : user))
  }

  return (
   <div>
    {/* <Counter /> */}
    <UserList users={users} onUpdateRole={updateUserRole} />

    <NewUser onSubmit={addUser} />
   </div>
  )
}

export default App
