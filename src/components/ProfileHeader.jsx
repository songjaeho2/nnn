function ProfileHeader() {
  return (
    <header className="profile-header">
      <div className="profile-header__image-wrap">
        <img
          className="profile-header__image"
          src="/images/profile.jpg"
          alt="아티스트 nnn 프로필"
        />
      </div>
      <h1>nnn</h1>
      <p className="profile-header__role">Singer · Bassist · Actor</p>
      <p className="profile-header__bio">
        nnn.
      </p>
    </header>
  )
}

export default ProfileHeader
