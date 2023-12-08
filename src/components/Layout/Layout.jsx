import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Layout = () => (
  <>
    <header>
      <Header />
    </header>

    <main>
      <Outlet />
    </main>
  </>
);

export default Layout;
