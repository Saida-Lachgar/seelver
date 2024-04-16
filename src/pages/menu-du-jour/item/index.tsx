import Icon from 'src/components/Icon';
import './index.scss';

type Props = {
  repas: string,
  icon: string,
  details?: string,
};

const MenuDuJourItem = ({ repas, icon, details }: Props): JSX.Element | null => {
  if(!details) {
    return null;
  }

  return (
    <div className='MenuDuJourItem'>
      <p className="MenuDuJourItem__repas">
        <Icon name={icon}></Icon>
        {repas}
      </p>
      <p className="MenuDuJourItem__details">{details}</p>
    </div>
  )
}
export default MenuDuJourItem
