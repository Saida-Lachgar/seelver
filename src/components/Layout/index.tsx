import SideBar from "../Icon copy";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) : JSX.Element => {
  return (
    <>
      <SideBar />
      {children}
    </>
  );
};

export default Layout;