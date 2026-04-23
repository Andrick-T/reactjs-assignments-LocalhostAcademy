function ProfileCard() {
    const name = "John Doe";
    const role = "Software Engineer";
  return (
    <div className="profile-card">
      <img src="https://via.placeholder.com/150" alt="Profile" />
      <h2>{name}</h2>
      <p className="role">{role}</p>
      <span>{2026 -1998} years old </span>
    </div>
  );
}

export default ProfileCard;