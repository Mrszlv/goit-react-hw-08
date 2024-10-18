import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={s.wrapp}>
      <img
        className={s.img}
        src="https://www.artzstudio.com/content/images/wordpress/2020/05/404-error-not-found-page-lost.png"
        alt="Not found page"
      />
      <div className={s.linkWrapp}>
        <h2>Your page is not found!</h2>
        <Link to="/" className={s.link}>
          Go to home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
