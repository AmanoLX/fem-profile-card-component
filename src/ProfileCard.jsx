const ProfileCard = ({
  name,
  age,
  location,
  avater,
  followers,
  likes,
  photos,
}) => {
  return (
    <article className="profile-card">
      <div className="profile-card__header">
        <picture className="profile-card__avater">
          <img src={avater} alt={name} />
        </picture>
      </div>
      <div className="profile-card__body">
        <div className="profile-card__person">
          <h2 className="profile-card__name">{name}</h2>
          <span className="profile-card__age">{age}</span>
        </div>
        <p className="profile-card__location">{location}</p>
      </div>
      <div className="profile-card__footer">
        <div className="profile-card__socials">
          <h3 className="profile-card__socials-number">{followers}K</h3>
          <p className="profile-card__socials-text">Followers</p>
        </div>
        <div className="profile-card__socials">
          <h3 className="profile-card__socials-number">{likes}K</h3>
          <p className="profile-card__socials-text">Likes</p>
        </div>
        <div className="profile-card__socials">
          <h3 className="profile-card__socials-number">{photos}K</h3>
          <p className="profile-card__socials-text">Photos</p>
        </div>
      </div>
    </article>
  );
};
export default ProfileCard;
