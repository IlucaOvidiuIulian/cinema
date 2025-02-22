import FacebookIcon from "../svgs/FacebookIcon";
import InstagramIcon from "../svgs/InstagramIcon";
import YoutubeIcon from "../svgs/YoutubeIcon";
import XIcon from "../svgs/XIcon";
import "./SocialLinks.css";
import TikTokIcon from "../svgs/TikTokIcon";

function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://facebook.com">
        <FacebookIcon className={"icon"} />
      </a>
      <a href="https://instagram.com">
        <InstagramIcon className={"icon"} />
      </a>
      <a href="https://youtube.com">
        <YoutubeIcon className={"icon"} />
      </a>
      <a href="https://twitter.com">
        <XIcon className={"icon"} />
      </a>
      <a href="https://tiktok.com">
        <TikTokIcon className={"icon"} />
      </a>
    </div>
  );
}
export default SocialLinks;
