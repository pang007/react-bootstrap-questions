import React from 'react';
import cx from 'classnames';
import globalStyles from '../../assets/globalStyles/bootstrap.module.css';
import styles from './NavigationItems.module.css';

const NavigationItems = (props) => (
  <React.Fragment>
    <nav className={cx(globalStyles.navbar, globalStyles['navbar-expand-lg'], globalStyles['navbar-dark'], globalStyles['bg-primary'], styles.NavigationItems)}>
      <a className={globalStyles["navbar-brand"]} href="#">Social Media</a>
      <button className={globalStyles["navbar-toggler"]} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className={globalStyles["navbar-toggler-icon"]}></span>
      </button>
      <div className={cx(globalStyles.collapse, globalStyles['navbar-collapse'])} id="navbarNav">
        <ul className={globalStyles["navbar-nav"]}>
          <li class={globalStyles["nav-item"]}>
            <a class={globalStyles["nav-link"]} href='#'>test1</a>
          </li>
          <li class={globalStyles["nav-item"]}>
            <a class={globalStyles["nav-link"]} href='#'>test2</a>
          </li>
        </ul>
      </div>
    </nav>
  </React.Fragment>
);

export default NavigationItems;
