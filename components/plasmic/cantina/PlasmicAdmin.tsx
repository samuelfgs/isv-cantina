// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eVCRKWwcuK6xExRdUZxKpb
// Component: ZNds0ptme1kZ

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { NavigationBar } from "@plasmicpkgs/plasmic-nav"; // plasmic-import: jGx9tiKJoex/codeComponent
import { RichTable } from "@plasmicpkgs/plasmic-rich-components"; // plasmic-import: k4RvFQUTZKCU/codeComponent
import { tableHelpers as RichTable_Helpers } from "@plasmicpkgs/plasmic-rich-components"; // plasmic-import: k4RvFQUTZKCU/codeComponentHelper
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources"; // plasmic-import: CBeuHHn1qQBJ/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_cantina.module.css"; // plasmic-import: eVCRKWwcuK6xExRdUZxKpb/projectcss
import sty from "./PlasmicAdmin.module.css"; // plasmic-import: ZNds0ptme1kZ/css

createPlasmicElementProxy;

export type PlasmicAdmin__VariantMembers = {};
export type PlasmicAdmin__VariantsArgs = {};
type VariantPropType = keyof PlasmicAdmin__VariantsArgs;
export const PlasmicAdmin__VariantProps = new Array<VariantPropType>();

export type PlasmicAdmin__ArgsType = {};
type ArgPropType = keyof PlasmicAdmin__ArgsType;
export const PlasmicAdmin__ArgProps = new Array<ArgPropType>();

export type PlasmicAdmin__OverridesType = {
  root?: p.Flex<"div">;
  navigationBar?: p.Flex<typeof NavigationBar>;
  freeBox?: p.Flex<"div">;
  text?: p.Flex<"div">;
  table?: p.Flex<typeof RichTable>;
};

export interface DefaultAdminProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAdmin__RenderFunc(props: {
  variants: PlasmicAdmin__VariantsArgs;
  args: PlasmicAdmin__ArgsType;
  overrides: PlasmicAdmin__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});
  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "table.selectedRowKey",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: p.generateOnMutateForSpec("selectedRowKey", RichTable_Helpers)
      },
      {
        path: "table.selectedRow",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: p.generateOnMutateForSpec("selectedRow", RichTable_Helpers)
      },
      {
        path: "table.selectedRows",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: p.generateOnMutateForSpec("selectedRows", RichTable_Helpers)
      },
      {
        path: "table.selectedRowKeys",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: p.generateOnMutateForSpec(
          "selectedRowKeys",
          RichTable_Helpers
        )
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });
  const dataSourcesCtx = usePlasmicDataSourceContext();
  const plasmicInvalidate = usePlasmicInvalidate();

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    query: usePlasmicDataOp(() => {
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
            sty.root
          )}
        >
          <NavigationBar
            data-plasmic-name={"navigationBar"}
            data-plasmic-override={overrides.navigationBar}
            brand={
              <div
                data-plasmic-name={"freeBox"}
                data-plasmic-override={overrides.freeBox}
                className={classNames(projectcss.all, sty.freeBox)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__laDrD)}
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
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__lI9RM)}
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
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__qzg6P
                  )}
                  component={Link}
                  href={"/"}
                  platform={"nextjs"}
                >
                  {"Novo pedido"}
                </p.PlasmicLink>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__cVy4
                  )}
                  component={Link}
                  href={`/pedidos`}
                  platform={"nextjs"}
                >
                  {"Ver todos os pedidos"}
                </p.PlasmicLink>
              </React.Fragment>
            }
            openButton={
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__vo2Ge)}
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

          {(() => {
            const child$Props = {
              className: classNames("__wab_instance", sty.table),
              data: (() => {
                try {
                  return $queries.query;
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
                  { key: "id", fieldId: "id", title: null },
                  { key: "method", fieldId: "method", isHidden: null },
                  { key: "name", fieldId: "name", dataType: null },
                  { key: "created_at", fieldId: "created_at", isHidden: null },
                  {
                    key: "lineItems",
                    fieldId: "lineItems",
                    title: null,
                    expr: null
                  },
                  {
                    key: "total",
                    fieldId: "total",
                    title: null,
                    dataType: null,
                    currency: null,
                    locale: null
                  },
                  { key: "status", fieldId: "status" }
                ];
                __composite["0"]["title"] = "Pedido";
                __composite["1"]["isHidden"] = true;
                __composite["2"]["dataType"] = "string";
                __composite["3"]["isHidden"] = true;
                __composite["4"]["title"] = "Itens";
                __composite["4"]["expr"] = (currentItem, currentValue) => {
                  return currentValue
                    .map(
                      lineItem =>
                        `${lineItem.qtt}x\t${lineItem.name}${
                          !lineItem.isSingle ? ` - ${lineItem.option.name}` : ""
                        }`
                    )
                    .join("\n");
                };
                __composite["5"]["title"] = "Total";
                __composite["5"]["dataType"] = "currency";
                __composite["5"]["currency"] = "BRL";
                __composite["5"]["locale"] = "pt-BR";
                return __composite;
              })(),
              onRowSelectionChanged: async (...eventArgs: any) => {
                p.generateStateOnChangePropForCodeComponents(
                  $state,
                  "selectedRowKey",
                  ["table", "selectedRowKey"],
                  RichTable_Helpers
                ).apply(null, eventArgs);
                p.generateStateOnChangePropForCodeComponents(
                  $state,
                  "selectedRow",
                  ["table", "selectedRow"],
                  RichTable_Helpers
                ).apply(null, eventArgs);
                p.generateStateOnChangePropForCodeComponents(
                  $state,
                  "selectedRows",
                  ["table", "selectedRows"],
                  RichTable_Helpers
                ).apply(null, eventArgs);
                p.generateStateOnChangePropForCodeComponents(
                  $state,
                  "selectedRowKeys",
                  ["table", "selectedRowKeys"],
                  RichTable_Helpers
                ).apply(null, eventArgs);
              },
              rowActions: (() => {
                const __composite = [
                  { type: null, label: null, children: null }
                ];
                __composite["0"]["type"] = "menu";
                __composite["0"]["label"] = "Alterar status";
                __composite["0"]["children"] = (() => {
                  const __composite = [
                    { label: null, onClick: null },
                    { label: null, onClick: null },
                    { label: null, onClick: null }
                  ];
                  __composite["0"]["label"] = "Preparando";
                  __composite["0"]["onClick"] = async (rowKey, row) => {
                    const $steps = {};

                    $steps["postgresUpdateById"] = true
                      ? (() => {
                          const actionArgs = {
                            dataOp: {
                              sourceId: "hLw78H9DAdcctLTB5Q6jny",
                              opId: "e9fbef0a-55ab-4397-bf0a-fb390e045620",
                              userArgs: {
                                keys: [row.id]
                              },
                              cacheKey: `plasmic.$.e9fbef0a-55ab-4397-bf0a-fb390e045620.$.`,
                              invalidatedKeys: ["plasmic_refresh_all"],
                              roleId: null
                            }
                          };
                          return (async ({ dataOp, continueOnError }) => {
                            try {
                              const response = await executePlasmicDataOp(
                                dataOp,
                                {
                                  userAuthToken: dataSourcesCtx?.userAuthToken,
                                  user: dataSourcesCtx?.user
                                }
                              );
                              await plasmicInvalidate(dataOp.invalidatedKeys);
                              return response;
                            } catch (e) {
                              if (!continueOnError) {
                                throw e;
                              }
                              return e;
                            }
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      typeof $steps["postgresUpdateById"] === "object" &&
                      typeof $steps["postgresUpdateById"].then === "function"
                    ) {
                      $steps["postgresUpdateById"] = await $steps[
                        "postgresUpdateById"
                      ];
                    }
                  };
                  __composite["1"]["label"] = "Pronto";
                  __composite["1"]["onClick"] = async (rowKey, row) => {
                    const $steps = {};

                    $steps["postgresUpdateById"] = true
                      ? (() => {
                          const actionArgs = {
                            dataOp: {
                              sourceId: "hLw78H9DAdcctLTB5Q6jny",
                              opId: "8fab87d7-e3df-47dc-84ec-285e32d52644",
                              userArgs: {
                                keys: [row.id]
                              },
                              cacheKey: `plasmic.$.8fab87d7-e3df-47dc-84ec-285e32d52644.$.`,
                              invalidatedKeys: ["plasmic_refresh_all"],
                              roleId: null
                            }
                          };
                          return (async ({ dataOp, continueOnError }) => {
                            try {
                              const response = await executePlasmicDataOp(
                                dataOp,
                                {
                                  userAuthToken: dataSourcesCtx?.userAuthToken,
                                  user: dataSourcesCtx?.user
                                }
                              );
                              await plasmicInvalidate(dataOp.invalidatedKeys);
                              return response;
                            } catch (e) {
                              if (!continueOnError) {
                                throw e;
                              }
                              return e;
                            }
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      typeof $steps["postgresUpdateById"] === "object" &&
                      typeof $steps["postgresUpdateById"].then === "function"
                    ) {
                      $steps["postgresUpdateById"] = await $steps[
                        "postgresUpdateById"
                      ];
                    }
                  };
                  __composite["2"]["label"] = "Entregue";
                  __composite["2"]["onClick"] = async (rowKey, row) => {
                    const $steps = {};

                    $steps["postgresUpdateById"] = true
                      ? (() => {
                          const actionArgs = {
                            dataOp: {
                              sourceId: "hLw78H9DAdcctLTB5Q6jny",
                              opId: "b5e6bab0-8e8b-40d6-b40c-f2d270ef8cd9",
                              userArgs: {
                                keys: [row.id]
                              },
                              cacheKey: `plasmic.$.b5e6bab0-8e8b-40d6-b40c-f2d270ef8cd9.$.`,
                              invalidatedKeys: ["plasmic_refresh_all"],
                              roleId: null
                            }
                          };
                          return (async ({ dataOp, continueOnError }) => {
                            try {
                              const response = await executePlasmicDataOp(
                                dataOp,
                                {
                                  userAuthToken: dataSourcesCtx?.userAuthToken,
                                  user: dataSourcesCtx?.user
                                }
                              );
                              await plasmicInvalidate(dataOp.invalidatedKeys);
                              return response;
                            } catch (e) {
                              if (!continueOnError) {
                                throw e;
                              }
                              return e;
                            }
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      typeof $steps["postgresUpdateById"] === "object" &&
                      typeof $steps["postgresUpdateById"].then === "function"
                    ) {
                      $steps["postgresUpdateById"] = await $steps[
                        "postgresUpdateById"
                      ];
                    }
                  };
                  return __composite;
                })();
                return __composite;
              })(),
              scopeClassName: sty["table__instance"],
              selectedRowKey: p.generateStateValueProp($state, [
                "table",
                "selectedRowKey"
              ]),
              selectedRowKeys: p.generateStateValueProp($state, [
                "table",
                "selectedRowKeys"
              ]),
              themeResetClassName: classNames(
                projectcss.root_reset,
                projectcss.root_reset_tags,
                projectcss.plasmic_default_styles,
                projectcss.plasmic_mixins,
                projectcss.plasmic_tokens,
                plasmic_antd_5_hostless_css.plasmic_tokens
              )
            };
            p.initializeCodeComponentStates(
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
          })()}
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "navigationBar", "freeBox", "text", "table"],
  navigationBar: ["navigationBar", "freeBox", "text"],
  freeBox: ["freeBox", "text"],
  text: ["text"],
  table: ["table"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navigationBar: typeof NavigationBar;
  freeBox: "div";
  text: "div";
  table: typeof RichTable;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAdmin__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAdmin__VariantsArgs;
    args?: PlasmicAdmin__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAdmin__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAdmin__ArgsType,
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
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicAdmin__ArgProps,
          internalVariantPropNames: PlasmicAdmin__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAdmin__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAdmin";
  } else {
    func.displayName = `PlasmicAdmin.${nodeName}`;
  }
  return func;
}

export const PlasmicAdmin = Object.assign(
  // Top-level PlasmicAdmin renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navigationBar: makeNodeComponent("navigationBar"),
    freeBox: makeNodeComponent("freeBox"),
    text: makeNodeComponent("text"),
    table: makeNodeComponent("table"),

    // Metadata about props expected for PlasmicAdmin
    internalVariantProps: PlasmicAdmin__VariantProps,
    internalArgProps: PlasmicAdmin__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicAdmin;
/* prettier-ignore-end */