import "./Logo.css";
function Logo({
  width = "20rem",
  height = "20rem",
  otherStyles = {},
  imgSource,
  className = "",
}) {
  const styles = {
    width: width,
    height: height,
    ...otherStyles,
  };
  return (
    <div className={`logo ${className}`} style={styles}>
      <a href="#">
        <img
          src={
            imgSource ||
            "/img/man-looking-into-the-distance-on-top-of-the-mountain-free-image.webp"
          }
          alt={"Logo"}
        />
      </a>
    </div>
  );
}
export default Logo;
