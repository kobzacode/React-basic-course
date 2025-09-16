import type { FC } from "react"
import { Button } from "./Button";

export interface IUser {
  name: string;
  age: number;
  role?: string;
}

interface Props {
  data: IUser;
  onGreet: (name: string) => void;
}

export const User: FC<Props> = ({ data: { name, age, role = 'User' }, onGreet }) => {
  return (
    <div style={{ borderBottom: '1px solid #CCC'}}>
      <h3>User name: {name}</h3>
      <p>Age: {age}</p>
      <p>Role: {role}</p>

      <Button
        onClick={() => onGreet(name)}
        label="Say hello"
        className="primary"
        type="button"
      />
    </div>
  )
}
