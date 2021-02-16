import React from 'react';

import PageTemplate from './PageTemplate';
import {BlueSection, Heading, Paragraph} from '../components';

import ContactImg from '../assets/img/heroimage_contact_1.png';

import {useTranslation} from 'react-i18next';

export default function Contact(props) {
  const {t} = useTranslation();

  return (
    <PageTemplate page="Contact" mainBg="bg-unity-blue" hero={ContactImg} returnBg="bg-unity-blue">
      <BlueSection>
        <Heading className="margin-y-0">
          {t('contactUs')}
        </Heading>
        <br/>
        <Paragraph className="usa-intro">
          {t('feedback')}

          <br/><br/><b>NYC Mayor's Office of the Chief Technology Officer</b>
          <br/><a href="http://nyc.gov/cto">http://nyc.gov/cto</a>
          <br/>Twitter: <a href="https://twitter.com/nyc_cto">@nyc_cto</a>
        </Paragraph>
      </BlueSection>
    </PageTemplate>
  );
}


