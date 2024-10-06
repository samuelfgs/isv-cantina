// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eVCRKWwcuK6xExRdUZxKpb
// Component: tr3HWRTy7Qhj

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import { NavigationBar } from "@plasmicpkgs/plasmic-nav";
import { ReactPrint } from "../../../pages/plasmic-host"; // plasmic-import: X8Zc8pbRE2UR/codeComponent
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_cantina.module.css"; // plasmic-import: eVCRKWwcuK6xExRdUZxKpb/projectcss
import sty from "./PlasmicPedidos2.module.css"; // plasmic-import: tr3HWRTy7Qhj/css

createPlasmicElementProxy;

export type PlasmicPedidos2__VariantMembers = {};
export type PlasmicPedidos2__VariantsArgs = {};
type VariantPropType = keyof PlasmicPedidos2__VariantsArgs;
export const PlasmicPedidos2__VariantProps = new Array<VariantPropType>();

export type PlasmicPedidos2__ArgsType = {};
type ArgPropType = keyof PlasmicPedidos2__ArgsType;
export const PlasmicPedidos2__ArgProps = new Array<ArgPropType>();

export type PlasmicPedidos2__OverridesType = {
  root?: Flex__<"div">;
  navigationBar?: Flex__<typeof NavigationBar>;
  reactPrint?: Flex__<typeof ReactPrint>;
};

export interface DefaultPedidos2Props {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPedidos2__RenderFunc(props: {
  variants: PlasmicPedidos2__VariantsArgs;
  args: PlasmicPedidos2__ArgsType;
  overrides: PlasmicPedidos2__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});
  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "selectedLineItems",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => []
      },
      {
        path: "selectedOrderId",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => 0
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    vendas: usePlasmicDataOp(() => {
      return {
        sourceId: "hLw78H9DAdcctLTB5Q6jny",
        opId: "941e3615-8b19-4ad1-b50a-55a84ebff58f",
        userArgs: {},
        cacheKey: `plasmic.$.941e3615-8b19-4ad1-b50a-55a84ebff58f.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <NavigationBar
            data-plasmic-name={"navigationBar"}
            data-plasmic-override={overrides.navigationBar}
            brand={
              <div className={classNames(projectcss.all, sty.freeBox___2OMfW)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__sG052)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"80px"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/cantina/images/logo.png",
                    fullWidth: 1080,
                    fullHeight: 1080,
                    aspectRatio: undefined
                  }}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__paIy4
                  )}
                >
                  {"CANTINA"}
                </div>
              </div>
            }
            className={classNames("__wab_instance", sty.navigationBar)}
            closeButton={
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__vr0Rv)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                src={"https://static1.plasmic.app/close.svg"}
              />
            }
            itemsGap={8}
            menuItems={
              <React.Fragment>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__pLgxx
                  )}
                  component={Link}
                  href={"/"}
                  platform={"nextjs"}
                >
                  {"Novo pedido"}
                </PlasmicLink__>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__g22L9
                  )}
                  component={Link}
                  href={`/pedidos`}
                  platform={"nextjs"}
                >
                  {"Ver todos os pedidos"}
                </PlasmicLink__>
              </React.Fragment>
            }
            openButton={
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img___1IgU)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                src={"https://static1.plasmic.app/menu.svg"}
              />
            }
            responsiveBreakpoint={768}
          />

          <ReactPrint
            data-plasmic-name={"reactPrint"}
            data-plasmic-override={overrides.reactPrint}
            className={classNames("__wab_instance", sty.reactPrint)}
            id={(() => {
              try {
                return $state.selectedOrderId;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return undefined;
                }
                throw e;
              }
            })()}
            lineItems={$state.selectedLineItems}
            ref={ref => {
              $refs["reactPrint"] = ref;
            }}
          />

          <div className={classNames(projectcss.all, sty.freeBox__ezzTm)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__hj2En
              )}
            >
              {"X-BURGUER"}
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__vfNjI
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return $queries.vendas.data.reduce((acc, venda) => {
                      return (
                        acc +
                        venda.lineItems.reduce(
                          (acc2, lineItem) =>
                            acc2 +
                            (lineItem.option.id === 5 ? lineItem.qtt : 0),
                          0
                        )
                      );
                    }, 0);
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "X-BURGUER";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox___9BDau)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__eNCl
              )}
            >
              {"X-SALADA"}
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___583JE
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return $queries.vendas.data.reduce((acc, venda) => {
                      return (
                        acc +
                        venda.lineItems.reduce(
                          (acc2, lineItem) =>
                            acc2 +
                            (lineItem.option.id === 30 ? lineItem.qtt : 0),
                          0
                        )
                      );
                    }, 0);
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "X-BURGUER";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox___67Wo)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___22UYh
              )}
            >
              {"X-BACON"}
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__dc33J
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return $queries.vendas.data.reduce((acc, venda) => {
                      return (
                        acc +
                        venda.lineItems.reduce(
                          (acc2, lineItem) =>
                            acc2 +
                            (lineItem.option.id === 6 ? lineItem.qtt : 0),
                          0
                        )
                      );
                    }, 0);
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "X-BURGUER";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "navigationBar", "reactPrint"],
  navigationBar: ["navigationBar"],
  reactPrint: ["reactPrint"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navigationBar: typeof NavigationBar;
  reactPrint: typeof ReactPrint;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPedidos2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPedidos2__VariantsArgs;
    args?: PlasmicPedidos2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPedidos2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPedidos2__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicPedidos2__ArgProps,
          internalVariantPropNames: PlasmicPedidos2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPedidos2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPedidos2";
  } else {
    func.displayName = `PlasmicPedidos2.${nodeName}`;
  }
  return func;
}

export const PlasmicPedidos2 = Object.assign(
  // Top-level PlasmicPedidos2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navigationBar: makeNodeComponent("navigationBar"),
    reactPrint: makeNodeComponent("reactPrint"),

    // Metadata about props expected for PlasmicPedidos2
    internalVariantProps: PlasmicPedidos2__VariantProps,
    internalArgProps: PlasmicPedidos2__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicPedidos2;
/* prettier-ignore-end */
