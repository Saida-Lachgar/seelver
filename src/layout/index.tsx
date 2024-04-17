import './index.scss';
import { useParams } from "react-router-dom";
import useFetch from "src/utils/useFetch";
import api, { FetchById } from 'src/api';
import SideBar from './Sidebar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) : JSX.Element => {
  const { id } = useParams();

  const { data } = useFetch<FetchById, Media>(
    { cacheKey: 'media', id },
    api.getMedia,
    { enabled: !!id },
  );

  return (
    <div className="Layout">
      <SideBar logo={data?.logo} />
      <main className="Main">
        { data?.background && <img className="Background" src={data.background} alt="" /> }
        {children}
      </main>
    </div>
  );
};

export default Layout;