import Comment from "@components/Comment";

const ProfilePage = () => {
  return (
    <div className="profile-container flex">
      <div className="w-full lg:w-1/2">
        {/* On mobile, take up full width. On large screens (lg), take up half the screen */}
        <Comment />
      </div>
      <div className="w-full lg:w-1/2">
        {/* On mobile, take up full width. On large screens (lg), take up half the screen */}
      </div>
    </div>
  );
};

export default ProfilePage;
