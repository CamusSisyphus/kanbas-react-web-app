import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { BsFillInboxFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { FaNetworkWired } from "react-icons/fa6";
import { BiHelpCircle } from "react-icons/bi";
import "./index.css";
function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar","Inbox","History","Studio","Help"];

  const linkToIconMap = {
    Account: <BiUserCircle className="wd-icon" />,
    Dashboard: <RiDashboard3Fill className="wd-icon" />,
    Courses: <FaBook className="wd-icon" />,
    Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
    Inbox: <BsFillInboxFill className="wd-icon" />,
    History: <BiTimeFive className="wd-icon" />,
    Studio: <FaNetworkWired className="wd-icon" />,
    Help: <BiHelpCircle className="wd-icon" />,
  };

  const { pathname } = useLocation();
  return (

    <div className="list-group wd-kanbas-navigation sticky-top" style={{ width: 150 , height: "100%"}}>
      
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {linkToIconMap[link]}
          <br/>
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;