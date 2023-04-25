import { ToastContent, ToastOptions, ToastID, PluginOptions } from "../types";
import { TYPE } from "./constants";
export declare const buildInterface: (globalOptions?: PluginOptions, mountContainer?: boolean) => {
    (content: ToastContent, options?: ToastOptions | undefined): ToastID;
    /**
     * Clear all toasts
     */
    clear(): void;
    /**
     * Update Plugin Defaults
     */
    updateDefaults(update: PluginOptions): void;
    /**
     * Dismiss toast specified by an id
     */
    dismiss(id: ToastID): void;
    update: {
        (id: ToastID, { content, options }: {
            content?: ToastContent | undefined;
            options?: ToastOptions | undefined;
        }, create?: false | undefined): void;
        (id: ToastID, { content, options }: {
            content: ToastContent;
            options?: ToastOptions | undefined;
        }, create?: true | undefined): void;
    };
    /**
     * Display a success toast
     */
    success(content: ToastContent, options?: (ToastOptions & {
        type?: TYPE.SUCCESS | undefined;
    }) | undefined): ToastID;
    /**
     * Display an info toast
     */
    info(content: ToastContent, options?: (ToastOptions & {
        type?: TYPE.INFO | undefined;
    }) | undefined): ToastID;
    /**
     * Display an error toast
     */
    error(content: ToastContent, options?: (ToastOptions & {
        type?: TYPE.ERROR | undefined;
    }) | undefined): ToastID;
    /**
     * Display a warning toast
     */
    warning(content: ToastContent, options?: (ToastOptions & {
        type?: TYPE.WARNING | undefined;
    }) | undefined): ToastID;
};
export declare type ToastInterface = ReturnType<typeof buildInterface>;
