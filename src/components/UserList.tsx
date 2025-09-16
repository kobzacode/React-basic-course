import type { FC } from "react";
import { User, type IUser } from "./User";

interface Props {
  users: IUser[];
  onGreet: (name: string) => void;
}

export const UserList: FC<Props> = ({ users, onGreet }) => {
  return (
    <div>
      <h1>User list</h1>
      <div>
        {users.map((user, index) => (
          <User key={index} data={user} onGreet={onGreet} />
        ))}
      </div>
    </div>
  )
}