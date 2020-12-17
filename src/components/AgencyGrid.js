import React from 'react';

import UnityLogo from '../assets/img/nyc_unity_logo.png';
import CYELogo from '../assets/img/NYCYE.png';
import MayorsFundLogo from '../assets/img/mayorsfund.png';
import MOCTOLogo from '../assets/img/MOCTO.png';

import {useTranslation} from 'react-i18next';

export default function AgencyGrid(props) {
  const {t} = useTranslation();

  return (
    <div className="usa-footer__secondary-section bg-base-dark text-white">
      <div className="grid-container bg-base-dark text-white">
        <div className="grid-row grid-gap">
          <div className="agency-grid footer-text grid-row grid-gap">
            <a className="mobile-lg:grid-col-4 desktop:grid-col-3"
              href="http://nyc.gov/unityproject">
              <img className="agency-item agency-adjustment-first" src={UnityLogo} alt=""/>
            </a>

            <div className=" mobile-lg:grid-col-4 desktop:grid-col-3">
              <p>{t('collaboration')}</p>
              <a href="http://nyc.gov/cye">
                <img src={CYELogo} alt="" style={{maxWidth: 200}} />
              </a>
            </div>

            <a className="mobile-lg:grid-col-4 desktop:grid-col-3"
              href="http://nyc.gov/fund">
              <img src={MayorsFundLogo} alt=""
                style={{maxWidth: 200, marginBottom: -2}} />
            </a>

            <div className="mobile-lg:grid-col-4 desktop:grid-col-3">
              <p style={{whiteSpace: 'nowrap'}}>{t('websiteSupport')}</p>
              <a href="http://nyc.gov/cto"><img src={MOCTOLogo} style={{maxWidth: 200}} alt=""/></a>
            </div>
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
