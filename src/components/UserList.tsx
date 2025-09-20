import type { FC } from "react";
import { User, type IUser } from "./User";

interface Props {
  users: IUser[];
  onUpdateRole: (id: number, newRole: string) => void;
}

export const UserList: FC<Props> = ({ users, onUpdateRole }) => {
  return (
    <div>
      <h1>User list</h1>
      <div>
        {users.map((user, index) => (
          <User key={index} data={user} onUpdateRole={onUpdateRole} />
        ))}
      </div>
    </div>
  )
}