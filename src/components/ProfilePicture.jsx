function ProfilePicture() {
  const imageUrl = "./monk.jpg";
  const handleClick = (e) => (e.target.style.display = "none");
  return <img onClick={(e) => handleClick(e)} src={imageUrl} />;
}
export default ProfilePicture;
