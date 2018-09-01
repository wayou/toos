import "./toos.scss";
declare type messageType = string | number;
export interface IToastOptions {
    /**
     * inline style for the toast
     */
    style?: string;
    /**
     * class name for the toast
     */
    class?: string;
    /**
     * duration for the toast, in ms
     */
    duration?: number;
}
export default class Toos {
    /**
     * show the toast
     * @param message the content to show
     * @param options options to customize the toas
     */
    static show(message: messageType, options?: IToastOptions): void;
    private static defaultOptions;
    private static timer;
    /**
     * apply options for each show
     * @param element the root element of the toast
     * @param message message to show
     * @param options toast options
     */
    private static _applyOption;
    /**
     * create toast element and append to page
     * @param message message to show
     * @param options toast options
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
