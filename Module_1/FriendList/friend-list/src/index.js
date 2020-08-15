import React from "react";
import ReacDom from "react-dom";

import friends from "./firends.json";
import style from './index.module.css';

const App = ({ friends }) => {

  const listStyle = [style.friend_list];
  const itemStyle = [style.friend_item];
  const onlineStatusStyle = [style.status, style.online];
  const offlineStatusStyle = [style.status, style.offline];
  const avatarStyle = [style.friend_avatar];
  const nameStyle = [style.friend_name];

  return (
    <ul className={listStyle.join(" ")}>
      {friends.map((item) => (
        <li className={itemStyle.join(" ")} key={item.id}>
          {item.isOnline ? (
            <span className={onlineStatusStyle.join(" ")}></span>
          ) : (
            <span className={offlineStatusStyle.join(" ")}></span>
          )}
          <img
            className={avatarStyle.join(" ")}
            src={item.avatar}
            alt={item.name}
            width="90"
          />
          <p className={nameStyle.join(" ")}>{item.name}</p>
        </li>
      ))}
    </ul>
  );
};

ReacDom.render(<App friends={friends} />, document.getElementById("root"));
