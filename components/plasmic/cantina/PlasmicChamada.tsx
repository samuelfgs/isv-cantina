// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eVCRKWwcuK6xExRdUZxKpb
// Component: 9nOT5Q-2dsrS

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

import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import { SupabaseFetcher } from "../../supabase/supabase"; // plasmic-import: jGc1XPhYG1oO/codeComponent
import { SideEffect } from "@plasmicpkgs/plasmic-basic-components";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_cantina.module.css"; // plasmic-import: eVCRKWwcuK6xExRdUZxKpb/projectcss
import sty from "./PlasmicChamada.module.css"; // plasmic-import: 9nOT5Q-2dsrS/css

createPlasmicElementProxy;

export type PlasmicChamada__VariantMembers = {};
export type PlasmicChamada__VariantsArgs = {};
type VariantPropType = keyof PlasmicChamada__VariantsArgs;
export const PlasmicChamada__VariantProps = new Array<VariantPropType>();

export type PlasmicChamada__ArgsType = {
  pronto?: any;
  preparando?: any;
};
type ArgPropType = keyof PlasmicChamada__ArgsType;
export const PlasmicChamada__ArgProps = new Array<ArgPropType>(
  "pronto",
  "preparando"
);

export type PlasmicChamada__OverridesType = {
  root?: Flex__<"div">;
  supabaseFetcher?: Flex__<typeof SupabaseFetcher>;
  img?: Flex__<typeof PlasmicImg__>;
  sideEffect?: Flex__<typeof SideEffect>;
};

export interface DefaultChamadaProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicChamada__RenderFunc(props: {
  variants: PlasmicChamada__VariantsArgs;
  args: PlasmicChamada__ArgsType;
  overrides: PlasmicChamada__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          pronto: [1, 2, 3, 4, 5],
          preparando: [6, 7, 8, 9, 10]
        },
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
        path: "counter",
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
    $queries: {},
    $refs
  });
  const dataSourcesCtx = usePlasmicDataSourceContext();
  const plasmicInvalidate = usePlasmicInvalidate();

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
          <SupabaseFetcher
            data-plasmic-name={"supabaseFetcher"}
            data-plasmic-override={overrides.supabaseFetcher}
            className={classNames("__wab_instance", sty.supabaseFetcher)}
            filters={[{ column: "status", operator: "eq", value: "pronto" }]}
            table={"vendas"}
          >
            <DataCtxReader__>
              {$ctx => (
                <div className={classNames(projectcss.all, sty.freeBox__ed4ZA)}>
                  <PlasmicImg__
                    data-plasmic-name={"img"}
                    data-plasmic-override={overrides.img}
                    alt={""}
                    className={classNames(sty.img)}
                    displayHeight={"100%"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"100%"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/cantina/images/logo.png",
                      fullWidth: 1080,
                      fullHeight: 1080,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(projectcss.all, sty.freeBox__ux5O3)}
                  >
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___3Pbc5
                      )}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___6VOvX
                        )}
                      >
                        {"RETIRE SEU PEDIDO"}
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__tD8N8
                        )}
                      >
                        {(_par =>
                          !_par ? [] : Array.isArray(_par) ? _par : [_par])(
                          (() => {
                            try {
                              return $ctx.supabase;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return [];
                              }
                              throw e;
                            }
                          })()
                        ).map((__plasmic_item_0, __plasmic_idx_0) => {
                          const currentItem = __plasmic_item_0;
                          const currentIndex = __plasmic_idx_0;
                          return (
                            <div
                              className={classNames(
                                projectcss.all,
                                sty.freeBox__ixTfa
                              )}
                              key={currentIndex}
                            >
                              <div
                                className={classNames(
                                  projectcss.all,
                                  sty.freeBox__sF5NM
                                )}
                              >
                                <div
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.__wab_text,
                                    sty.text__z0H5V
                                  )}
                                >
                                  <React.Fragment>
                                    {(() => {
                                      try {
                                        return currentItem.id;
                                      } catch (e) {
                                        if (
                                          e instanceof TypeError ||
                                          e?.plasmicType ===
                                            "PlasmicUndefinedDataError"
                                        ) {
                                          return "";
                                        }
                                        throw e;
                                      }
                                    })()}
                                  </React.Fragment>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </Stack__>
                    <div
                      className={classNames(projectcss.all, sty.freeBox__ix8Va)}
                    />
                  </div>
                </div>
              )}
            </DataCtxReader__>
          </SupabaseFetcher>
          <SideEffect
            data-plasmic-name={"sideEffect"}
            data-plasmic-override={overrides.sideEffect}
            className={classNames("__wab_instance", sty.sideEffect)}
            deps={(() => {
              try {
                return [$state.counter];
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
            onMount={async () => {
              const $steps = {};

              $steps["runCode"] = true
                ? (() => {
                    const actionArgs = {
                      customFunction: async () => {
                        return (async () => {
                          const sleep = ms =>
                            new Promise(resolve => setTimeout(resolve, ms));
                          await sleep(10000);
                        })();
                      }
                    };
                    return (({ customFunction }) => {
                      return customFunction();
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["runCode"] != null &&
                typeof $steps["runCode"] === "object" &&
                typeof $steps["runCode"].then === "function"
              ) {
                $steps["runCode"] = await $steps["runCode"];
              }

              $steps["refreshData"] = true
                ? (() => {
                    const actionArgs = {
                      queryInvalidation: ["plasmic_refresh_all"]
                    };
                    return (async ({ queryInvalidation }) => {
                      if (!queryInvalidation) {
                        return;
                      }
                      await plasmicInvalidate(queryInvalidation);
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["refreshData"] != null &&
                typeof $steps["refreshData"] === "object" &&
                typeof $steps["refreshData"].then === "function"
              ) {
                $steps["refreshData"] = await $steps["refreshData"];
              }

              $steps["updateCounter"] = true
                ? (() => {
                    const actionArgs = {
                      variable: {
                        objRoot: $state,
                        variablePath: ["counter"]
                      },
                      operation: 2
                    };
                    return (({ variable, value, startIndex, deleteCount }) => {
                      if (!variable) {
                        return;
                      }
                      const { objRoot, variablePath } = variable;

                      const oldValue = $stateGet(objRoot, variablePath);
                      $stateSet(objRoot, variablePath, oldValue + 1);
                      return oldValue + 1;
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["updateCounter"] != null &&
                typeof $steps["updateCounter"] === "object" &&
                typeof $steps["updateCounter"].then === "function"
              ) {
                $steps["updateCounter"] = await $steps["updateCounter"];
              }
            }}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "supabaseFetcher", "img", "sideEffect"],
  supabaseFetcher: ["supabaseFetcher", "img"],
  img: ["img"],
  sideEffect: ["sideEffect"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  supabaseFetcher: typeof SupabaseFetcher;
  img: typeof PlasmicImg__;
  sideEffect: typeof SideEffect;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicChamada__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicChamada__VariantsArgs;
    args?: PlasmicChamada__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicChamada__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicChamada__ArgsType,
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
          internalArgPropNames: PlasmicChamada__ArgProps,
          internalVariantPropNames: PlasmicChamada__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicChamada__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicChamada";
  } else {
    func.displayName = `PlasmicChamada.${nodeName}`;
  }
  return func;
}

export const PlasmicChamada = Object.assign(
  // Top-level PlasmicChamada renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    supabaseFetcher: makeNodeComponent("supabaseFetcher"),
    img: makeNodeComponent("img"),
    sideEffect: makeNodeComponent("sideEffect"),

    // Metadata about props expected for PlasmicChamada
    internalVariantProps: PlasmicChamada__VariantProps,
    internalArgProps: PlasmicChamada__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicChamada;
/* prettier-ignore-end */
