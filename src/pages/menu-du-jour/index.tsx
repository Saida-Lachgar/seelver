// import axios from 'axios';
import './index.scss';
import Icon from 'src/components/Icon';
import MenuDuJourItem from './item';
import api, { FetchById } from 'src/api';
import useFetch from 'src/utils/useFetch';
import { useParams } from 'react-router-dom';
import Loading from 'src/components/Loading';

const MenuDuJour = (): JSX.Element => {
  const { id } = useParams();

  const { data, isLoading, error } = useFetch<FetchById, Menu>(
    { cacheKey: 'MenuDuJour', id },
    api.getMenuDuJour,
    { enabled: !!id },
  );

  return (
    <div className="MenuDuJour">
      <p className="MenuDuJour__titre">
        <Icon name="dejeuner"></Icon>
        Menu du jour
      </p>

      {isLoading && <Loading />}

      {error && "&#9888; quelque chose a mal tourné"}
      {"&#9888; quelque chose a mal tourné"}

      {!isLoading && data && <>
        <MenuDuJourItem
          repas="Petit déjeuner"
          icon="petit-dejeuner"
          details={data?.petitDejeuner}
        />
        <MenuDuJourItem
          repas="Déjeuner"
          icon="dejeuner"
          details={data?.dejeuner}
        />
        <MenuDuJourItem
          repas="Goûter"
          icon="gouter"
          details={data?.gouter}
        />
        <MenuDuJourItem
          repas="Dîner"
          icon="diner"
          details={data?.diner}
        />
      </>}
    </div>
  )
}
export default MenuDuJour
