import { useState, type FC } from "react";
import { Button } from "./Button";
import type { IUser } from "./User";

interface Props {
  onSubmit: (user: IUser) => void;
}

export const NewUser: FC<Props> = ({ onSubmit }) => {
  const [name, setName] = useState('')
  const [age, setAge] = useState<number | ''>('')
  const [role, setRole] = useState('User')

  const handleAddUser = () => {
    if (!name || ! age) return

    const newUser: IUser = {
      id: Date.now(),
      name,
      age: Number(age),
      role,
    }

    onSubmit(newUser)

    setName('')
    setAge('')
    setRole('User')
  }

  return (
    <div style={{ marginTop: '3rem', textAlign: 'left' }}>
      <h2>Add new user</h2>

      <div className="inputWrapper">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="inputWrapper">
        <label htmlFor="age">Age:</label>
        <input
          id="age"
          type="number"
          placeholder="Enter age"
          value={age}
          onChange={(e) => setAge(e.target.value === '' ? '' : Number(e.target.value))}
        />
      </div>

      <div className="inputWrapper">
        <label htmlFor="role">Role:</label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="User">User</option>
          <option value="Moderator">Moderator</option>
          <option value="System Administrator">System Administrator</option>
        </select>
      </div>

      <Button
        label="Add user"
        style={{ width: '100%' }}
        onClick={handleAddUser}
      />
    </div>
  )
}