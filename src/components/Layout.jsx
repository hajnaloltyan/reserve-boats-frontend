import { Outlet } from 'react-router-dom';
import React from 'react';
import Header from './Header';

const Layout = () => (
  <>
    <header className="lg:fixed lg:left-0 lg:top-0 lg:bottom-0 lg:w-[18%] lg:border-r border-slate-200 p-4">
      <Header />
    </header>

    <main className="lg:pl-[18%]">
      <Outlet />
    </main>
  </>
);

export default Layout;
