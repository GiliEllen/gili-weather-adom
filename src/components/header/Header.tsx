import ChevronLeft from "../../assets/chevronLeft.svg"
import RightTitle from "../../assets/rightTitle.svg"

const Header = () => {
  return (
    <div className="header_main">
      <div className="header_main_left">
        <img src={ChevronLeft} alt="go back" />
        <p className="header_main_left_header">Weather</p>
      </div>
      <div><img src={RightTitle} alt="right-menu" /></div>
    </div>
  );
};

export default Header;
