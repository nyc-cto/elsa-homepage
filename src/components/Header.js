import React from 'react';
import { Link } from 'react-router-dom';
import {useTranslation} from 'react-i18next';

import NavLink from './NavLink';

import CloseImg from '../assets/img/close.svg';

export default function Header(props) {
  const {t} = useTranslation();

  const NAV_LINKS = [
    {link: '/', label: t('home')},
    {link: '/about', label: t('about')},
    {link: '/contact', label: t('contact')},
  ];

  const navItems = NAV_LINKS.map((item) =>
    <NavLink
      key={`link-${item.label}`}
      isActive = {`${props.currentPage}` === `${item.label}`}
      link={item.link}
      label={item.label}
    />,
  );

  return (
    <div>
      <div className="usa-overlay"></div>
      <header className="usa-header usa-header--extended bg-unity-blue wrap-header">
        <div className="usa-navbar wrap-header" style={{borderBottom: "none", display: "flex", alignItems: "center"}}>
          <div className="usa-logo" id="extended-logo">
            <em className="usa-logo__text nowrap">
              <Link to="/" title="Home" aria-label="Home"
                className="text-primary-darker text-barlow-logo" style={{textAlign: "left", marginLeft: -3, alignSelf: "center"}}>
                {t('fullTitle')}
              </Link>
            </em>
          </div>
          <button className="usa-menu-btn">{t('menu')}</button>
        </div>
        <nav aria-label="Primary navigation" className="usa-nav bg-white">
          <div className="usa-nav__inner">
            <button className="usa-nav__close mocto-button">
              <img src={CloseImg} alt="close"/>
            </button>
            <ul className="usa-nav__primary usa-accordion">
              {navItems}
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
