import type { PropType, ComponentObjectPropsOptions } from "vue";
import { EventBus } from "./eventBus";
import type { ToastContent, CommonOptions, PluginOptions, ToastID } from "../types";
import { TYPE, POSITION } from "./constants";
declare type CommonOptionsType = Required<CommonOptions>;
export declare type PluginOptionsType = Required<Omit<PluginOptions, keyof CommonOptionsType>>;
declare const _default: {
    CORE_TOAST: {
        position: {
            type: PropType<POSITION>;
            default: POSITION;
        };
        draggable: {
            type: PropType<boolean>;
            default: boolean;
        };
        draggablePercent: {
            type: PropType<number>;
            default: number;
        };
        pauseOnFocusLoss: {
            type: PropType<boolean>;
            default: boolean;
        };
        pauseOnHover: {
            type: PropType<boolean>;
            default: boolean;
        };
        closeOnClick: {
            type: PropType<boolean>;
            default: boolean;
        };
        timeout: {
            type: PropType<number | false>;
            default: number;
        };
        hideProgressBar: {
            type: BooleanConstructor;
            default: boolean;
        };
        toastClassName: {
            type: PropType<string | string[]>;
            default: () => never[];
        };
        bodyClassName: {
            type: PropType<string | string[]>;
            default: () => never[];
        };
        icon: {
            type: PropType<string | boolean | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions> | JSX.Element | {
                iconTag?: keyof HTMLElementTagNameMap | undefined;
                iconChildren?: string | undefined;
                iconClass?: string | undefined;
            }>;
            default: boolean;
        };
        closeButton: {
            type: PropType<false | keyof HTMLElementTagNameMap | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions> | JSX.Element>;
            default: keyof HTMLElementTagNameMap;
        };
        closeButtonClassName: {
            type: PropType<string | string[]>;
            default: () => never[];
        };
        showCloseButtonOnHover: {
            type: BooleanConstructor;
            default: boolean;
        };
        accessibility: {
            type: PropType<{
                toastRole?: string | undefined;
                closeButtonLabel?: string | undefined;
            }>;
            default: () => {
                toastRole: string;
                closeButtonLabel: string;
            };
        };
        rtl: {
            type: PropType<boolean>;
            default: boolean;
        };
        eventBus: {
            type: PropType<import("./eventBus").EventBusInterface>;
            required: boolean;
            default: () => EventBus;
        };
    };
    TOAST: {
        id: {
            type: PropType<ToastID>;
            required: boolean;
            default: number;
        };
        type: {
            type: PropType<TYPE>;
            default: TYPE;
        };
        content: {
            type: PropType<ToastContent>;
            required: boolean;
            default: string;
        };
        onClick: {
            type: PropType<((closeToast: Function) => void) | undefined>;
            default: undefined;
        };
        onClose: {
            type: PropType<(() => void) | undefined>;
            default: undefined;
        };
    };
    CONTAINER: ComponentObjectPropsOptions<Required<Omit<PluginOptions, keyof CommonOptions>>>;
    PROGRESS_BAR: {
        timeout: {
            type: PropType<number | false>;
            default: number;
        };
        hideProgressBar: {
            type: BooleanConstructor;
            default: boolean;
        };
        isRunning: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
    ICON: {
        type: {
            type: PropType<TYPE>;
            default: TYPE;
        };
        customIcon: {
            type: PropType<string | boolean | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions> | JSX.Element | {
                iconTag?: keyof HTMLElementTagNameMap | undefined;
                iconChildren?: string | undefined;
                iconClass?: string | undefined;
            }>;
            default: boolean;
        };
    };
    TRANSITION: {
        transition: {
            type: PropType<string | Record<"move" | "enter" | "leave", string>>;
            default: string;
        };
    };
    CLOSE_BUTTON: {
        component: {
            type: PropType<false | keyof HTMLElementTagNameMap | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions> | JSX.Element>;
            default: keyof HTMLElementTagNameMap;
        };
        classNames: {
            type: PropType<string | string[]>;
            default: () => never[];
        };
        showOnHover: {
            type: BooleanConstructor;
            default: boolean;
        };
        ariaLabel: {
            type: PropType<string>;
            default: string;
        };
    };
};
export default _default;
