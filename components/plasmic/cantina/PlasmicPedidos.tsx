// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eVCRKWwcuK6xExRdUZxKpb
// Component: 9q-jmAlfABii

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

import { NavigationBar } from "@plasmicpkgs/plasmic-nav";
import { SupabaseFetcher } from "../../supabase/supabase"; // plasmic-import: jGc1XPhYG1oO/codeComponent
import { RichTable } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-table";
import { tableHelpers as RichTable_Helpers } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-table";
import { ReactPrint } from "../../../pages/plasmic-host"; // plasmic-import: X8Zc8pbRE2UR/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_cantina.module.css"; // plasmic-import: eVCRKWwcuK6xExRdUZxKpb/projectcss
import sty from "./PlasmicPedidos.module.css"; // plasmic-import: 9q-jmAlfABii/css

createPlasmicElementProxy;

export type PlasmicPedidos__VariantMembers = {};
export type PlasmicPedidos__VariantsArgs = {};
type VariantPropType = keyof PlasmicPedidos__VariantsArgs;
export const PlasmicPedidos__VariantProps = new Array<VariantPropType>();

export type PlasmicPedidos__ArgsType = {};
type ArgPropType = keyof PlasmicPedidos__ArgsType;
export const PlasmicPedidos__ArgProps = new Array<ArgPropType>();

export type PlasmicPedidos__OverridesType = {
  root?: Flex__<"div">;
  navigationBar?: Flex__<typeof NavigationBar>;
  text?: Flex__<"div">;
  supabaseFetcher?: Flex__<typeof SupabaseFetcher>;
  table?: Flex__<typeof RichTable>;
  reactPrint?: Flex__<typeof ReactPrint>;
};

export interface DefaultPedidosProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPedidos__RenderFunc(props: {
  variants: PlasmicPedidos__VariantsArgs;
  args: PlasmicPedidos__ArgsType;
  overrides: PlasmicPedidos__OverridesType;
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
      },
      {
        path: "table.selectedRowKey",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("selectedRowKey", RichTable_Helpers)
      },
      {
        path: "table.selectedRow",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("selectedRow", RichTable_Helpers)
      },
      {
        path: "table.selectedRows",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("selectedRows", RichTable_Helpers)
      },
      {
        path: "table.selectedRowKeys",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("selectedRowKeys", RichTable_Helpers)
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

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
              <div className={classNames(projectcss.all, sty.freeBox__f74Wr)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__bvHxH)}
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
                  data-plasmic-name={"text"}
                  data-plasmic-override={overrides.text}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text
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
                className={classNames(sty.img__uY85T)}
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
                    sty.link__alUf3
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
                    sty.link__nmln0
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
                className={classNames(sty.img__sxDn)}
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

          <div className={classNames(projectcss.all, sty.freeBox__kogut)}>
            <SupabaseFetcher
              data-plasmic-name={"supabaseFetcher"}
              data-plasmic-override={overrides.supabaseFetcher}
              className={classNames("__wab_instance", sty.supabaseFetcher)}
              table={"vendas"}
            >
              <DataCtxReader__>
                {$ctx =>
                  (() => {
                    const child$Props = {
                      className: classNames("__wab_instance", sty.table),
                      data: (() => {
                        try {
                          return {
                            data: $ctx.supabase
                          };
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return undefined;
                          }
                          throw e;
                        }
                      })(),
                      fields: (() => {
                        const __composite = [
                          { key: "id", fieldId: "id" },
                          { key: "name", fieldId: "name", title: null },
                          { title: null, expr: null },
                          {
                            key: "created_at",
                            fieldId: "created_at",
                            isHidden: null
                          },
                          {
                            key: "lineItems",
                            fieldId: "lineItems",
                            isHidden: null
                          },
                          {
                            key: "total",
                            fieldId: "total",
                            title: null,
                            dataType: null,
                            currency: null,
                            locale: null
                          },
                          { key: "method", fieldId: "method", isHidden: null },
                          { key: "status", fieldId: "status" }
                        ];
                        __composite["1"]["title"] = "Nome";
                        __composite["2"]["title"] = "Pedido";
                        __composite["2"]["expr"] = (
                          currentItem,
                          currentValue
                        ) => {
                          return currentItem.lineItems
                            ?.map(
                              lineItem =>
                                `${lineItem.qtt}x ${lineItem.name} ${
                                  lineItem.option
                                    ? ` - ${lineItem.option.name}`
                                    : ""
                                }`
                            )
                            .join("\n");
                        };
                        __composite["3"]["isHidden"] = true;
                        __composite["4"]["isHidden"] = true;
                        __composite["5"]["title"] = "Total";
                        __composite["5"]["dataType"] = "currency";
                        __composite["5"]["currency"] = "BRL";
                        __composite["5"]["locale"] = "pt-BR";
                        __composite["6"]["isHidden"] = true;
                        return __composite;
                      })(),

                      hideColumnPicker: true,
                      hideDensity: true,
                      hideExports: true,
                      hideSearch: false,
                      onRowSelectionChanged: async (...eventArgs: any) => {
                        generateStateOnChangePropForCodeComponents(
                          $state,
                          "selectedRowKey",
                          ["table", "selectedRowKey"],
                          RichTable_Helpers
                        ).apply(null, eventArgs);
                        generateStateOnChangePropForCodeComponents(
                          $state,
                          "selectedRow",
                          ["table", "selectedRow"],
                          RichTable_Helpers
                        ).apply(null, eventArgs);
                        generateStateOnChangePropForCodeComponents(
                          $state,
                          "selectedRows",
                          ["table", "selectedRows"],
                          RichTable_Helpers
                        ).apply(null, eventArgs);
                        generateStateOnChangePropForCodeComponents(
                          $state,
                          "selectedRowKeys",
                          ["table", "selectedRowKeys"],
                          RichTable_Helpers
                        ).apply(null, eventArgs);
                      },
                      pagination: true,
                      rowActions: (() => {
                        const __composite = [
                          { type: "item", label: null, onClick: null }
                        ];
                        __composite["0"]["label"] = "Imprimir";
                        __composite["0"]["onClick"] = async (rowKey, row) => {
                          const $steps = {};

                          $steps["updateSelectedLineItems"] = true
                            ? (() => {
                                const actionArgs = {
                                  variable: {
                                    objRoot: $state,
                                    variablePath: ["selectedLineItems"]
                                  },
                                  operation: 0,
                                  value: row.lineItems
                                };
                                return (({
                                  variable,
                                  value,
                                  startIndex,
                                  deleteCount
                                }) => {
                                  if (!variable) {
                                    return;
                                  }
                                  const { objRoot, variablePath } = variable;

                                  $stateSet(objRoot, variablePath, value);
                                  return value;
                                })?.apply(null, [actionArgs]);
                              })()
                            : undefined;
                          if (
                            $steps["updateSelectedLineItems"] != null &&
                            typeof $steps["updateSelectedLineItems"] ===
                              "object" &&
                            typeof $steps["updateSelectedLineItems"].then ===
                              "function"
                          ) {
                            $steps["updateSelectedLineItems"] = await $steps[
                              "updateSelectedLineItems"
                            ];
                          }

                          $steps["updateSelectedLineItems2"] = true
                            ? (() => {
                                const actionArgs = {
                                  variable: {
                                    objRoot: $state,
                                    variablePath: ["selectedOrderId"]
                                  },
                                  operation: 0,
                                  value: row.id
                                };
                                return (({
                                  variable,
                                  value,
                                  startIndex,
                                  deleteCount
                                }) => {
                                  if (!variable) {
                                    return;
                                  }
                                  const { objRoot, variablePath } = variable;

                                  $stateSet(objRoot, variablePath, value);
                                  return value;
                                })?.apply(null, [actionArgs]);
                              })()
                            : undefined;
                          if (
                            $steps["updateSelectedLineItems2"] != null &&
                            typeof $steps["updateSelectedLineItems2"] ===
                              "object" &&
                            typeof $steps["updateSelectedLineItems2"].then ===
                              "function"
                          ) {
                            $steps["updateSelectedLineItems2"] = await $steps[
                              "updateSelectedLineItems2"
                            ];
                          }

                          $steps["updateSelectedLineItems3"] = true
                            ? (() => {
                                const actionArgs = {
                                  customFunction: async () => {
                                    return (async () => {
                                      const sleep = ms =>
                                        new Promise(resolve =>
                                          setTimeout(resolve, ms)
                                        );
                                      await sleep(200);
                                    })();
                                  }
                                };
                                return (({ customFunction }) => {
                                  return customFunction();
                                })?.apply(null, [actionArgs]);
                              })()
                            : undefined;
                          if (
                            $steps["updateSelectedLineItems3"] != null &&
                            typeof $steps["updateSelectedLineItems3"] ===
                              "object" &&
                            typeof $steps["updateSelectedLineItems3"].then ===
                              "function"
                          ) {
                            $steps["updateSelectedLineItems3"] = await $steps[
                              "updateSelectedLineItems3"
                            ];
                          }

                          $steps["updateSelectedLineItems4"] = true
                            ? (() => {
                                const actionArgs = {
                                  tplRef: "reactPrint",
                                  action: "printOrder"
                                };
                                return (({ tplRef, action, args }) => {
                                  return $refs?.[tplRef]?.[action]?.(
                                    ...(args ?? [])
                                  );
                                })?.apply(null, [actionArgs]);
                              })()
                            : undefined;
                          if (
                            $steps["updateSelectedLineItems4"] != null &&
                            typeof $steps["updateSelectedLineItems4"] ===
                              "object" &&
                            typeof $steps["updateSelectedLineItems4"].then ===
                              "function"
                          ) {
                            $steps["updateSelectedLineItems4"] = await $steps[
                              "updateSelectedLineItems4"
                            ];
                          }
                        };
                        return __composite;
                      })(),

                      scopeClassName: sty["table__instance"],
                      selectedRowKey: generateStateValueProp($state, [
                        "table",
                        "selectedRowKey"
                      ]),
                      selectedRowKeys: generateStateValueProp($state, [
                        "table",
                        "selectedRowKeys"
                      ]),
                      themeResetClassName: classNames(
                        projectcss.root_reset,
                        projectcss.root_reset_tags,
                        projectcss.plasmic_default_styles,
                        projectcss.plasmic_mixins,
                        projectcss.plasmic_tokens,
                        plasmic_antd_5_hostless_css.plasmic_tokens,
                        plasmic_plasmic_rich_components_css.plasmic_tokens
                      )
                    };
                    initializeCodeComponentStates(
                      $state,
                      [
                        {
                          name: "selectedRowKey",
                          plasmicStateName: "table.selectedRowKey"
                        },
                        {
                          name: "selectedRow",
                          plasmicStateName: "table.selectedRow"
                        },
                        {
                          name: "selectedRows",
                          plasmicStateName: "table.selectedRows"
                        },
                        {
                          name: "selectedRowKeys",
                          plasmicStateName: "table.selectedRowKeys"
                        }
                      ],
                      [],
                      RichTable_Helpers ?? {},
                      child$Props
                    );

                    return (
                      <RichTable
                        data-plasmic-name={"table"}
                        data-plasmic-override={overrides.table}
                        {...child$Props}
                      />
                    );
                  })()
                }
              </DataCtxReader__>
            </SupabaseFetcher>
          </div>
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
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navigationBar",
    "text",
    "supabaseFetcher",
    "table",
    "reactPrint"
  ],
  navigationBar: ["navigationBar", "text"],
  text: ["text"],
  supabaseFetcher: ["supabaseFetcher", "table"],
  table: ["table"],
  reactPrint: ["reactPrint"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navigationBar: typeof NavigationBar;
  text: "div";
  supabaseFetcher: typeof SupabaseFetcher;
  table: typeof RichTable;
  reactPrint: typeof ReactPrint;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPedidos__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPedidos__VariantsArgs;
    args?: PlasmicPedidos__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPedidos__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPedidos__ArgsType,
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
          internalArgPropNames: PlasmicPedidos__ArgProps,
          internalVariantPropNames: PlasmicPedidos__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPedidos__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPedidos";
  } else {
    func.displayName = `PlasmicPedidos.${nodeName}`;
  }
  return func;
}

export const PlasmicPedidos = Object.assign(
  // Top-level PlasmicPedidos renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navigationBar: makeNodeComponent("navigationBar"),
    text: makeNodeComponent("text"),
    supabaseFetcher: makeNodeComponent("supabaseFetcher"),
    table: makeNodeComponent("table"),
    reactPrint: makeNodeComponent("reactPrint"),

    // Metadata about props expected for PlasmicPedidos
    internalVariantProps: PlasmicPedidos__VariantProps,
    internalArgProps: PlasmicPedidos__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicPedidos;
/* prettier-ignore-end */
