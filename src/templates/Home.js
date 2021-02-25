import React from 'react';
import { logEvent } from '../utils/GoogleAnalytics';

import PageTemplate from './PageTemplate';
import {YellowSection, Grid, BlueSection,
  Button, Heading, Paragraph, GridSquare} from '../components';

import HomeImg from '../assets/img/heroimage_home_1.png';
import CircleImg1 from '../assets/img/content.png';
import CircleImg2 from '../assets/img/continuous.png';
import CircleImg3 from '../assets/img/intelligent.png';
import CircleImg4 from '../assets/img/workflow.png';

import {useTranslation} from 'react-i18next';

export default function Home(props) {
  const {t} = useTranslation();

  return (
    <PageTemplate page="Home" mainBg="bg-white"
      hero={HomeImg} returnBg="bg-white">
      <YellowSection>
        <div className="tablet:grid-col-4">
          <Heading className="margin-top-0 tablet:margin-bottom-0">
            {t('introText')}
          </Heading>
        </div>

        <Paragraph className="tablet:grid-col-8">
          {t('introTextDescription')}
        </Paragraph>
      </YellowSection>

      <Grid>
        <div className="usa-graphic-list__row grid-row grid-gap">
          <GridSquare img={CircleImg1} altText={t('conceptsAlt')}
            heading={t('conceptsHeading')}>
            {t('conceptsAndVocab')}
          </GridSquare>

          <GridSquare img={CircleImg2} alt={t('obligationsAlt')}
            heading={t('obligationsHeading')}>
            {t('obligations')}
          </GridSquare>
        </div>

        <div className="usa-graphic-list__row grid-row grid-gap">
          <GridSquare img={CircleImg3} alt={t('safeSpaceAlt')}
            heading={t('safeSpaceHeading')}>
            {t('safeSpace')}
          </GridSquare>

          <GridSquare img={CircleImg4} alt={t('checkSafetyAlt')}
            heading={t('checkSafetyHeading')}>
            {t('checkSafety')}
          </GridSquare>
        </div>
      </Grid>

      <BlueSection>
        <Heading className="margin-y-0">
          {t('fullReport')}
        </Heading>
        <br/>
        <Paragraph className="usa-intro">
          {t('fullReportDescription')}
        </Paragraph>
        <br/>
        <Button link="https://github.com/nyc-cto/tms"
          onClick={()=> logEvent("Button Click", "User downloaded report")}>
            {t('downloadReport')}
        </Button>
      </BlueSection>

    </PageTemplate>
  );
}
