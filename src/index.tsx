import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import '@wayke-se/components-react/dist/assets/default.css';
import WaykeComposite, {
  WaykeCompositeWithProviderProps,
  WaykePubSub,
} from '@wayke-se/components-react';

const settings: WaykeCompositeWithProviderProps = {
  composite: {
    marketCode: 'NO',
    filterList: [
      {
        filterName: 'manufacturer',
        displayName: 'Produsent',
      },
      {
        filterName: 'modelSeries',
        displayName: 'Modell',
      },
      {
        filterName: 'fuelType',
        displayName: 'Drivmiddel',
      },
      {
        filterName: 'gearboxType',
        displayName: 'Girkasse',
      },
      {
        filterName: 'branch',
        displayName: 'Forhandler',
      },
      {
        filterName: 'color',
        displayName: 'Farge',
      },
      {
        filterName: 'environmentClass',
        displayName: 'Miljøklasse',
      },
      {
        filterName: 'properties.segment',
        displayName: 'Biltype',
      },
      {
        filterName: 'drivingWheel',
        displayName: 'Drivhjul',
      },
      {
        filterName: 'price',
        displayName: 'Pris',
      },
      {
        filterName: 'businessLeasingPrice',
        displayName: 'Business leasing',
      },
      {
        filterName: 'odometerValueAsKm',
        displayName: 'Måleravlesning',
      },
      {
        filterName: 'modelYear',
        displayName: 'Modellår',
      },
    ],
  },
  provider: {
    graphQlUrl: 'https://gql.wayke.se/query',
    url: 'https://api.wayke.se/vehicles',
    urlMlt: 'https://api.wayke.se/vehicles-mlt-ext',
  },
};

WaykePubSub.subscribe({
  eventName: 'All',
  callback: (eventType, data) => console.log(eventType, data),
});

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<WaykeComposite {...settings} />);
