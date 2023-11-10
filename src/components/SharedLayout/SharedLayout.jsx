import { Link } from 'react-router-dom';

import css from './sharedLayout.module.css';

import { Search } from 'react-f7-icons';

const SharedLayout = () => {
  return (
    <>
      <header className={css.header}>
        <div className={css.headerWrapper}>
          <Link className={css.headerLinkLogo} to="/">
            Smart<span className={css.headerLinkLogoAccent}>Check</span>
          </Link>

          <div>
            <form action="submit">
              <label className={css.inputWrapper}>
                <Search size="25px" fill="white" className={css.searchIcon} />
                <input
                  className={css.headerInput}
                  type="text"
                  placeholder="Search"
                />
              </label>
            </form>
          </div>
        </div>

        <nav>
          <ul className={css.navigationList}>
            <li className={css.navigationListItem}>
              <Link className={css.headerLink}>Category</Link>
            </li>
            <li className={css.navigationListItem}>
              <Link className={css.headerLink}>Comparison</Link>
            </li>
            <li className={css.navigationListItem}>
              <Link className={css.headerLink}>Favorite</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default SharedLayout;
