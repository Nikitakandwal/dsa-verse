import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import Logo from '../LogoSearch/Logo'
import ProfileCard from '../ProfileCard/ProfileCard'
import './ProfileSide.css'
const ProfileSide = () => {
  return (
    <div className="ProfileSide">
        <Logo/>
        <ProfileCard location = 'homepage'/>
        <FollowersCard/>
    </div>
    )
}

export default ProfileSide