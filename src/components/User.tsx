import { useState, type FC } from "react"
import { Button } from "./Button";

export interface IUser {
  id: number;
  name: string;
  age: number;
  role?: string;
}

interface Props {
  data: IUser;
  onUpdateRole: (id: number, newRole: string) => void;
}

export const User: FC<Props> = ({ data: { id, name, age, role = 'User' }, onUpdateRole }) => {
  const [isEditMode, setIsEditMode] = useState(false)
  const [newRole, setNewRole] = useState(role)

  const handleSave = () => {
    onUpdateRole(id, newRole)
    setIsEditMode(false)
  }

  const handleCancel = () => {
    setNewRole(role)
    setIsEditMode(false)
  }

  return (
    <div style={{ borderBottom: '1px solid #CCC', paddingBottom: '1rem'}}>
      <h3>User name: {name}</h3>
      <p>Age: {age}</p>

      {isEditMode ? (
        <div style={{ display: 'inline-block' }}>
          <div className="inputWrapper">
            <select value={newRole} onChange={(e) => setNewRole(e.target.value)}>
              <option value="User">User</option>
              <option value="Moderator">Moderator</option>
              <option value="System Administrator">System Administrator</option>
            </select>
          </div>

          <Button label="Save" onClick={handleSave} />
          <Button label="Cancel" onClick={handleCancel} />
        </div>
      ) : (
        <>
          <p>Role: {role}</p>
          <Button label="Edit role" onClick={() => setIsEditMode(true)} />
        </>
      )}
    </div>
  )
}
