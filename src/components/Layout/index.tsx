import { useParams } from "react-router-dom";
import SideBar from "../Icon copy";
import useFetch from "src/utils/useFetch";
import api, { FetchById } from 'src/api';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) : JSX.Element => {
  const { id } = useParams();

  const { data } = useFetch<FetchById, Media>(
    { cacheKey: 'media', id },
    api.getMedia,
    { enabled: !!id },
  );

  return (
    <>
      <SideBar logo={data?.logo} />
      <main 
        className="Main"
        style={{ backgroundImage: `url(${data?.background})` }}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;