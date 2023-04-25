import { Plugin, InjectionKey } from "vue";
import type { ToastInterface } from "./ts/interface";
import { POSITION, TYPE } from "./ts/constants";
import { EventBusInterface, EventBus } from "./ts/eventBus";
import type { PluginOptions } from "./types";
import "./scss/index.scss";
declare function createToastInterface(eventBus: EventBusInterface): ToastInterface;
declare function createToastInterface(options?: PluginOptions): ToastInterface;
declare const toastInjectionKey: InjectionKey<ToastInterface>;
declare const globalEventBus: EventBus;
declare const VueToastificationPlugin: Plugin;
declare const provideToast: (options?: PluginOptions | undefined) => void;
declare const useToast: (eventBus?: EventBus | undefined) => {
    (content: import("./types").ToastContent, options?: import("./types").ToastOptions | undefined): import("./types").ToastID;
    clear(): void;
    updateDefaults(update: PluginOptions): void;
    dismiss(id: import("./types").ToastID): void;
    update: {
        (id: import("./types").ToastID, { content, options }: {
            content?: import("./types").ToastContent | undefined;
            options?: import("./types").ToastOptions | undefined;
        }, create?: false | undefined): void;
        (id: import("./types").ToastID, { content, options }: {
            content: import("./types").ToastContent;
            options?: import("./types").ToastOptions | undefined;
        }, create?: true | undefined): void;
    };
    success(content: import("./types").ToastContent, options?: (import("./types").ToastOptions & {
        type?: TYPE.SUCCESS | undefined;
    }) | undefined): import("./types").ToastID;
    info(content: import("./types").ToastContent, options?: (import("./types").ToastOptions & {
        type?: TYPE.INFO | undefined;
    }) | undefined): import("./types").ToastID;
    error(content: import("./types").ToastContent, options?: (import("./types").ToastOptions & {
        type?: TYPE.ERROR | undefined;
    }) | undefined): import("./types").ToastID;
    warning(content: import("./types").ToastContent, options?: (import("./types").ToastOptions & {
        type?: TYPE.WARNING | undefined;
    }) | undefined): import("./types").ToastID;
};
export default VueToastificationPlugin;
export { ToastInterface, PluginOptions, POSITION, TYPE, toastInjectionKey, createToastInterface, useToast, provideToast, EventBus, globalEventBus, };
