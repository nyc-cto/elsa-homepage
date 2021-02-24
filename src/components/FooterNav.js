import React from 'react';
import FooterNavLink from './FooterNavLink';

import {useTranslation} from 'react-i18next';

export default function FooterNav(props) {
  const {t} = useTranslation();

  const FOOTER_LINKS = [
    {link: '/', label: t('home')},
    {link: '/contribute', label: t('about')},
    {link: '/contact', label: t('contact')},
    {link: 'https://www1.nyc.gov/home/privacy-policy.page', label: t('privacyPolicy')},
    {link: 'https://www1.nyc.gov/home/terms-of-use.page', label: t('termsOfUse')},
  ];

  const footerNavLinks = FOOTER_LINKS.map((item) =>
    <FooterNavLink key={`footer-link-${item.label}`} {...item} />);

  return (
    <div className="usa-footer__primary-section">
      <nav className="usa-footer__nav" aria-label="Footer navigation">
        <ul className="grid-row grid-gap">
          {footerNavLinks}
        </ul>
      </nav>
    </div>
  );
}
