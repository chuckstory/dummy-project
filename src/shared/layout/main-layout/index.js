import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div style={{padding: 100, backgroundColor: 'blue'}}>
      <Outlet />
    </div>
  );
};

export default MainLayout;
