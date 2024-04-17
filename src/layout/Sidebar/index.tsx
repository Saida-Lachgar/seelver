import './index.scss';
import { useParams } from 'react-router-dom';
import NavItem from './NavItem';
import Logo from 'src/components/Logo';
import Clock from 'src/components/Clock';
import Events from 'src/components/Events';

type Props = {
  logo?: string,
};

const SideBar = ({ logo }: Props): JSX.Element => {
  const { id } = useParams();

  return (
    <header className='SideBar'>
      <Logo url={logo} />
      <Clock />
      <Events />
      <hr />
      <nav>
        <NavItem link={`/${id}`} title='Menu du jour' icon='menu-du-jour' />
        <NavItem link={`/${id}/actualites-de-la-residence`} title='Actualités de la résidence' icon='actualites-de-la-residence' />
        <NavItem link={`/${id}/meteo`} title='Météo' icon='meteo' />
        <NavItem link={`/${id}/activite-du-jour`} title='Activité du jour' icon='activite-du-jour' />
        <NavItem link={`/${id}/citation-du-jour`} title='Citation du jour' icon='citation-du-jour' />
        <NavItem link={`/${id}/actualites`} title='Actualités' icon='actualites' />
      </nav>
    </header>
  );
};

export default SideBar;
