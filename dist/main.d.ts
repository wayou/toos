import "./main.scss";
export interface ToastOptions {
    style?: string;
    class?: string;
    message: string | number;
    duration?: number;
    animationDuration?: number | string;
}
declare type showOption = string | number | ToastOptions;
export default class Toast {
    /**
     * show the toast
     *
     * @static
     * @param {ToastOptions} options
     * @memberof Toast
     */
    static show(messageOrOption: showOption): void;
    private static defaultOptions;
    private static timer;
    /**
     * the option may differ each time so apply it in every show
     * @param element the root element of the toast
     * @param toastOption options
     */
    private static _applyOption;
    /**
     * create the element wich holds the toast
     * @param toastOption options
     */
    private static _create;
    /**
     * set the `show` class name to show the toast
     * @param element the root element of the toast
     */
    private static _show;
    /**
     * remove the `show` class name to hide the toast
     * @param element the root element of the toast
     */
    private static _hide;
}
export {};
