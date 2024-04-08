import Icon1 from '../assets/images/navLeft/icon-1.svg';
import Icon2 from '../assets/images/navLeft/icon-2.svg';
import Icon3 from '../assets/images/navLeft/icon-3.svg';
import Icon4 from '../assets/images/navLeft/icon-4.svg';

function SideNav () {
  return (
    <nav className="side-nav">
      <ul>
        <li>
          <a href="#">
            <img src={Icon1} alt="logo" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Icon2} alt="logo" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Icon3} alt="logo" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Icon4} alt="logo" />
          </a>
        </li>
      </ul>
      <div className="copyright">
        Copyright, SportSee 2020
      </div>
    </nav>
  )
}

export default SideNav;