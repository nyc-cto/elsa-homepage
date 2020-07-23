import React from 'react';
import Unity from './Unity';

import 'uswds/dist/js/uswds.js';
import './assets/style/uswds.css';

import {withTranslation} from './i18n/withTranslation';
import {LANGUAGES} from './i18n/config';

function App() {
  return <Unity/>;
}

export default withTranslation(App);
