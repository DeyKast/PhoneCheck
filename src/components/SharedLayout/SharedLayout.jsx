import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import css from './sharedLayout.module.css';

import HeaderInput from '../ui/HeaderInput/HeaderInput.jsx';
import Loader from 'components/ui/Loader/Loader';

const SharedLayout = () => {
  return (
    <>
      <header className={`section ${css.header}`}>
        <div className={`container ${css.headerContainer}`}>
          <div className={css.headerLogoWrapper}>
            <Link className={css.headerLinkLogo} to="/">
              Smart<span className={css.headerLinkLogoAccent}>Check</span>
            </Link>
          </div>

          <nav>
            <ul className={css.navigationList}>
              <li>
               
                  <HeaderInput />
             
              </li>
              <li className={css.navigationListItem}>
                <Link className={css.headerLink} to="/category">
                  Category
                </Link>
              </li>
              <li className={css.navigationListItem}>
                <Link className={css.headerLink} to="/comparison">
                  Comparison
                </Link>
              </li>
              <li className={css.navigationListItem}>
                <Link className={css.headerLink} to="/favorite">
                  Favorite
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
