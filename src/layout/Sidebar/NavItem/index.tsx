import './index.scss';
import { NavLink } from 'react-router-dom';
import Icon from 'src/components/Icon';
type Props = {
  link: string,
  title: string,
  icon: string,
};

const NavItem = ({ link, title, icon }: Props) => {
  return (
    <NavLink 
      className={({ isActive }) => (isActive ? 'NavItem NavItem--active' : 'NavItem')}
      to={link} 
      end >
      <Icon name={icon} />
      <span>{title}</span>
    </NavLink>
  )
}

export default NavItem;
