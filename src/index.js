/* eslint-disable */
import embed from './configure';
import connect from './connect';

async function run() {
  const app = await connect({
    url: 'https://tsgltd.eu.qlikcloud.com',
    webIntegrationId: 'cvfzZ9y4HzsFAUpCUux2k_yMrm6k08nF',
    appId: '755f2d02-0d4b-48c9-9b6f-e53255d6ecc7',
  });

  //shared space: 634c86db-8daf-4f20-918a-e6183a2ae091
  //managed space: 755f2d02-0d4b-48c9-9b6f-e53255d6ecc7
  //personal space: 634c86db-8daf-4f20-918a-e6183a2ae091

  const n = embed(app);

  (await n.selections()).mount(document.querySelector('.toolbar'));

  // n.render({});
  
  n.render({
    element: document.querySelector('.object'),
    id: 'EAjjuyE',
  });
  

}
run();