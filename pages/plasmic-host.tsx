import * as React from 'react';
import { PlasmicCanvasHost, registerComponent, registerGlobalContext, GlobalActionsProvider } from '@plasmicapp/react-web/lib/host';
import PrintOrder from '@/components/PrintOrder';
import { useReactToPrint } from 'react-to-print';
import { registerSupabase } from '@/components/supabase/supabase';

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// registerComponent(...)

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}

export interface ReactPrintRefActions {
  printOrder: () => void;
}

export const ReactPrint = React.forwardRef(function ReactPrint(props: React.PropsWithChildren<{
  lineItems: any,
  id: number
}>, ref: React.Ref<ReactPrintRefActions>) {
  const { children, ...rest } = props;
  const componentRef = React.useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef?.current
  });

  React.useImperativeHandle(
    ref,
    () => ({
      printOrder: () => {
        handlePrint();
      },
    }), [props.lineItems, props.id, handlePrint]
  );

  return <>
    <div style={{ display: "none "}}>
      <PrintOrder 
        {...rest}
        carrinho={rest.lineItems}
        ref={componentRef}
      />
    </div>
  </>
});

registerComponent(ReactPrint, {
  name: "React Print",
  props: {
    lineItems: "exprEditor",
    id: "number"
  },
  refActions: {
    printOrder: {
      displayName: "Print order",
      argTypes: []
    }
  },
  importName: "ReactPrint",
  importPath: "./pages/plasmic-host",
});

registerSupabase();