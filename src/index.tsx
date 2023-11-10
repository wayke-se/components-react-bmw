import React from "react";
import { createRoot } from "react-dom/client";

import "@wayke-se/components-react/dist/assets/default.css";
import WaykeComposite, {
  WaykeCompositeWithProviderProps,
} from "@wayke-se/components-react";

const settings: WaykeCompositeWithProviderProps = {
  composite: {
    marketCode: "NO",
  },
  provider: {
    graphQlUrl: "https://gql.wayke.se/query",
    url: "https://api.wayke.se/vehicles",
    urlMlt: "https://api.wayke.se/vehicles-mlt-ext",
  },
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<WaykeComposite {...settings} />);