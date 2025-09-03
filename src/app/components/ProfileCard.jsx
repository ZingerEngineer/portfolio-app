export default function ProfileCard({ name, title, image, description }) {
  return (
    <div className="profile-card">
      <img src={image} alt={`${name}'s profile`} />
      <h2>{name}</h2>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
}
