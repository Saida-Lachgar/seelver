// import axios from 'axios';
import { useParams } from 'react-router-dom';
import api, { FetchById } from 'src/api';
import useFetch from 'src/utils/useFetch';
import './index.scss';

const ActualitesDeLaResidence = (): JSX.Element => {
  const { id } = useParams();

  const { data, isLoading, error } = useFetch<FetchById, Menu>(
    { cacheKey: 'ActualitesDeLaResidence', id },
    api.getActualitesDeLaResidence,
    { enabled: !!id },
  );

  console.log(data, isLoading, error);

  return (
    <div className="Section ActualitesDeLaResidence">
    </div>
  )
}
export default ActualitesDeLaResidence
