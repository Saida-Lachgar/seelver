// import axios from 'axios';
import './index.scss';
import Icon from 'src/components/Icon';
import MenuDuJourItem from './item';
import api, { FetchMenuDuJour } from 'src/api';
import useFetch from 'src/utils/useFetch';
import { useParams } from 'react-router-dom';

const MenuDuJour = (): JSX.Element => {
  const { id } = useParams();

  const { data, isLoading, error } = useFetch<FetchMenuDuJour, null>(
    { cacheKey: 'MenuDuJour', id },
    api.getMenuDuJour,
    { enabled: !!id },
  );

  console.log(data);
  
  return (
    <div className="MenuDuJour">
      {isLoading && "loading..."}
      {error && "has error..."}
      <p className="MenuDuJour__titre">
        <Icon name="dejeuner"></Icon>
        Menu du jour
      </p>

      <MenuDuJourItem
        repas="Petit déjeuner"
        icon="petit-dejeuner"
        details="Jus pomme, orange et cannelle Barres de céréales aux graines et chocolat"
      />
      <MenuDuJourItem
        repas="Déjeuner"
        icon="dejeuner"
        details="Boulettes d’agneau aux 4 épices Salade d’endives Boudin noir"
      />
      <MenuDuJourItem
        repas="Goûter"
        icon="gouter"
        details="Mini-cake pomme-carotte Gaufres aux fraises marinées citron vert"
      />
      <MenuDuJourItem
        repas="Dîner"
        icon="diner"
        details="Velouté de carottes Pâtes carbonara sans crème à l'italienne"
      />
    </div>
  )
}
export default MenuDuJour
