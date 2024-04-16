import './index.scss';
import { Link } from 'react-router-dom';
import Clock from '../Clock';
import Icon from '../Icon';
import Logo from '../Logo';

type Props = {
  logo?: string,
};

const SideBar = ({ logo }: Props): JSX.Element => {

  return (
    <header>
      <Logo url={logo} />
      <Clock />
      {/* <Events /> */}
      <nav>
        <Link to="/">
          <Icon name="menu-du-jour" />
          <span>Menu du jour</span>
        </Link>
        <Link to="/blog">
          <Icon name="actualites-de-la-residence" />
          <span>Actualités de la résidence</span>
        </Link>
        <Link to="/blog">
          <Icon name="meteo" />
          <span>Météo</span>
        </Link>
        <Link to="/blog">
          <Icon name="activite-du-jour" />
          <span>Activité du jour</span>
        </Link>
        <Link to="/blog">
          <Icon name="citation-du-jour" />
          <span>Citation du jour</span>
        </Link>
        <Link to="/blog">
          <Icon name="actualites" />
          <span>Actualités</span>
        </Link>
      </nav>
    </header>
  );
};

export default SideBar;
