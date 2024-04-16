import './index.scss';
import { Link } from 'react-router-dom';


const SideBar = (): JSX.Element => {

  return (
    <nav>
      <Link to="/">Menu du jour</Link>
      {" | "}
      <Link to="/blog">blog</Link>
    </nav>
  );
};

export default SideBar;
