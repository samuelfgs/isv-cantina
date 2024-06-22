// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../components/plasmic/cantina/PlasmicGlobalContextsProvider";
import { PlasmicCardapio } from "../components/plasmic/cantina/PlasmicCardapio";
import { useRouter } from "next/router";

function Cardapio() {
  // Use PlasmicCardapio to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicCardapio are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicCardapio is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).
  const [isLoaded, setIsLoaded] = React.useState(true);
  // React.useEffect(() => {
  //   setIsLoaded(true);
  // }, [])
  return isLoaded ? (
    <GlobalContextsProvider>
      <ph.PageParamsProvider
        route={useRouter()?.pathname}
        params={useRouter()?.query}
        query={useRouter()?.query}
      >
        <PlasmicCardapio />
      </ph.PageParamsProvider>
    </GlobalContextsProvider>
  ) : null
}

export default Cardapio;
