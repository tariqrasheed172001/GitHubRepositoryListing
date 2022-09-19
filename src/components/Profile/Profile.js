import React from "react";
import "./profile.css";
import LinkIcon from '@mui/icons-material/Link';

function Profile({user}) {
  return (
    <div className="profile">
      <div className="image">
        <img
          className="avatar"
          src={`https://github.com/${user}.png`}
          alt="avatar_img"
        />
        <div className="user-name">UserName : {user}</div>
      </div>
      <a href={`https://github.com/${user}`} className="link">
        <LinkIcon /> {`https://github.com/${user}`}
      </a>

      <hr></hr>
      <div className="repos">Repositries</div>
    </div>
  );
}

export default Profile;
