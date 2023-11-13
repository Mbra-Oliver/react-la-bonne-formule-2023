import React from "react";
import classes from "./Userlist.module.css";
import Card from "../ui/Card";

export default function UserList({ users }) {
  return (
    <Card className={classes.users}>
      <ul>
        {users.map((user, index) => {
          return (
            <li key={index}>
              {user.name} ({user.age}) years
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
