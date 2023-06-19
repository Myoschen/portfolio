import {type ReactNode} from 'react';

export const metadata = {
  title: 'Ryan Chen | Project',
};

function Layout({children}: {children: ReactNode}) {
  return <>{children}</>;
}

export default Layout;
