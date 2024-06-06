import ProfileCard from './ProfileCard';

const Profiles = ({ profiles }) => {
  return (
    <>
      {profiles.map((profile) => {
        return <ProfileCard key={profile.id} {...profile} />;
      })}
    </>
  );
};
export default Profiles;
