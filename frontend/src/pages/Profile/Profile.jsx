import React from "react";
import PostSide from "../../components/PostSide/PostSide";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft"; 
import "./Profile.css";
const Profile = () => {
  return (
    <div className="Profile">
      <div className="Profile-left">
      <ProfileLeft />
      </div>
      <div className="Profile-right">
        <ProfileCard location = 'profilePage'/>
      <PostSide/>
      </div> 
    </div>
  );
};

export default Profile;
