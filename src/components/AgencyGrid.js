import React from 'react';

import MOIALogo from '../assets/img/moia-logo.png';
import MOCTOLogo from '../assets/img/MOCTO.png';

import {useTranslation} from 'react-i18next';

export default function AgencyGrid(props) {
  const {t} = useTranslation();

  return (
    <div className="usa-footer__secondary-section bg-base-dark text-white">
      <div className="grid-container bg-base-dark text-white">
        <div className="grid-row grid-gap">
          <div className="agency-grid footer-text grid-row grid-gap" style={{"align-items": "flex-start"}}>
            <a className="mobile-lg:grid-col-4 desktop:grid-col-8"
              href="http://nyc.gov/cto" style={{marginTop: 20}}>
              <a href="http://nyc.gov/cto"><img src={MOCTOLogo} style={{maxWidth: 300}} alt=""/></a>
            </a>

            <div className=" mobile-lg:grid-col-4 desktop:grid-col-4">
              <p>{t('collaboration')}</p>
              <a href="https://www1.nyc.gov/site/immigrants/index.page">
                <img src={MOIALogo} alt="" style={{maxWidth: 100}} />
              </a>
            </div>

            {/* <a className="mobile-lg:grid-col-4 desktop:grid-col-3"
              href="http://nyc.gov/fund">
              <img src={MayorsFundLogo} alt=""
                style={{maxWidth: 200, marginBottom: -2}} />
            </a> */}

            {/* <div className="mobile-lg:grid-col-4 desktop:grid-col-3">
              <p style={{whiteSpace: 'nowrap'}}>{t('websiteSupport')}</p>
            </div> */}
          </div>
          <p className="footer-text">
            {t('allRightsReserved')}
            <br/>
            {t('tradeMark')}
          </p>
        </div>
      </div>
    </div>

  );
}
