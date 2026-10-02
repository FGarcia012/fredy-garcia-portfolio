import { useState } from 'react'

// Circular photo with a glowing border. If /images/profile.jpg does not exist, it shows "FG".
export default function ProfilePhoto() {
  const [failed, setFailed] = useState(false)

  return failed ? (
    <div className="profile-photo profile-photo-placeholder" role="img" aria-label="Profile photo placeholder">
      FG
    </div>
  ) : (
    <img
      className="profile-photo"
      src="/images/profile.jpg"
      alt="Portrait of Fredy García"
      width="180"
      height="180"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}
