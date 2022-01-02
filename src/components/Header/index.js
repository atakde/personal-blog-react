import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import * as S from "./styles";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <S.Header>
      <div>
        <div className="header-items">
          <div className="header-navigation">
            <div>
              <NavLink exact activeclassname="active" to="/">
                Homepage
              </NavLink>
            </div>
          </div>
          <div className="header-social">
            <div>
              <FiGithub />
            </div>
            <div>
              <FiLinkedin />
            </div>
            <div>
              <FiTwitter />
            </div>
          </div>
        </div>
      </div>
    </S.Header>
  );
};

export default Header;
