import React from 'react';
import NYC from '../assets/img/nyc.svg';

import {useTranslation} from 'react-i18next';
import i18n from '../i18n/config';
import { LANGUAGES } from '../i18n/config';

export default function GovBanner() {
  const {t} = useTranslation();

  const setLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="govbanner">
      <a className="usa-skipnav" href="#main-content">{t('skipContent')}</a>
      <section className="usa-banner bg-primary-darker banner-adjustment"
        aria-label="Official government website">
        <div className="usa-accordion">
          <header className="usa-banner__header" style={{paddingBottom: 15, paddingTop: 0}}>
            <div className="usa-banner__inner">
              <div className="grid-col-fill tablet:grid-col-auto">
                <p className="usa-banner__header-text text-white">
                  <a href="https://www1.nyc.gov/" className="usa-banner__nyc-logo">
                    <img src={NYC} alt="NYC City Logo" style={{paddingRight: 28}}/>
                  </a> 
                  <span className="display-none desktop:display-inline">{t('topNav')}</span>
                </p>
              </div>
              <div className='grid-col-fill'></div>
                <ul className='usa-list usa-list--unstyled grid-row'>
                  {
                    LANGUAGES.map((item) => (
                      <li><a href='#' className='grid-col text-white' style={{marginRight: 5}}
                        onClick={()=>{
                          setLanguage(item.lang)
                        }}
                      >{item.name}</a></li>
                    ))
                  }
                </ul>
            </div>
          </header>
        </div>
      </section>
    </div>
  );
}
