import React from 'react';

import PageTemplate from './PageTemplate';
import {YellowSection, Paragraph, Heading} from '../components';

import {useTranslation} from 'react-i18next';

import AboutImg from '../assets/img/heroimage_contribute_1.png';

export default function About(props) {
  const {t} = useTranslation();

  const YELLOW_SECTIONS = [
    {heading: t('aboutText'), text: t('descriptionText')},
    {heading: t('cyeAbout'), text: t('cyeDescription')},
    {heading: t('acknowledgements'), text: t('fullAcknowledgements')},
  ];

  const yellowSections = YELLOW_SECTIONS.map((section, i) =>
    <YellowSection key={`section-${i}`}>
      <div className="tablet:grid-col-4">
        <Heading className="margin-top-0 tablet:margin-bottom-0">
          {section.heading}
        </Heading>
      </div>

      <Paragraph className="tablet:grid-col-8">
        {section.text}
      </Paragraph>

    </YellowSection>);

  return (
    <PageTemplate
      page="Contribute" mainBg="bg-white" hero={AboutImg}
      returnBg="bg-white">
      {yellowSections}
    </PageTemplate>
  );
}
