import { embed } from '@nebula.js/stardust';

import barchart from '@nebula.js/sn-bar-chart';
import kpi from '@nebula.js/sn-kpi';


const n = embed.createConfiguration({
  context: {
    theme: 'light',
    language: 'en-US',
  },
  types: [
    {
      name: 'barchart',
      load: () => Promise.resolve(barchart),
    },
    {
      name: 'kpi',
      load: () => Promise.resolve(kpi),
    },
  ],
});

export default n;
