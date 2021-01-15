import React from 'react';
import Button from './Button';
import {logEvent} from '../utils/GoogleAnalytics';

import {useTranslation} from 'react-i18next';

export default function Hero(props) {
  const {t} = useTranslation();

  return (
    <div className="usa-hero" aria-label="Introduction"
      style={{backgroundImage: `url('${props.bgImg}')`}}>
      <div className="grid-container">
        <div className="usa-hero__callout">
          <h1 className="usa-hero__heading">
            <span className="usa-hero__heading--alt
            text-barlow-logo text-unity-blue">
              {t('workItNYC')}<br/>
              <span className="text-accent-cool">
                {t('inclusivityGuide')}
              </span>
            </span>
          </h1>
          <Button link="https://github.com/nyc-cto/tms"
          onClick={()=> logEvent("Button Click", "User downloaded report")}>
            {t('downloadReport')}
          </Button>
        </div>
      </div>
    </div>
  );
}
