import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import * as S from "./styles";
import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [isSticky, setSticky] = useState(false);
  const stickyWrapperRef = useRef(null);

  const handleScroll = () => {
    if (stickyWrapperRef.current) {
      // size of element its position relative to viewport
      setSticky(stickyWrapperRef.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return (
    <S.Header>
      <div
        className={`sticky-wrapper${isSticky ? " sticky" : ""}`}
        ref={stickyWrapperRef}
      >
        <div className="header-items sticky-inner">
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
