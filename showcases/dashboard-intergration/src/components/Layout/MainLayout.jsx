import Sidebar from "../Sidebar/Sidebar";

export function MainContent({ children, ...props }) {
  return <div className="main-content-intergration">{children}</div>;
}

function MainLayout({ children, ...props }) {
  return (
    <div {...props} className="main-layout-intergration">
      <Sidebar />
      <MainContent>{children}</MainContent>
    </div>
  );
}

export default MainLayout;
