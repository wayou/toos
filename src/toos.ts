/*
 * @author: wayou
 * @date: 2018-08-28 12:12:54
 * @description: toos, a simple toast
 */

import "./toos.scss";

type messageType = string | number;

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
  public static show(message: messageType, options?: IToastOptions) {
    options = Object.assign({}, this.defaultOptions, options);

    let element = document.getElementById(`toast`);
    if (this.timer) {
      window.clearTimeout(this.timer);
      this.timer = null;
      this._hide(element);
    }
    if (!element) {
      element = this._create(message, options);
    } else {
      this._applyOption(element, message, options);
    }

    this._show(element);
    this.timer = window.setTimeout(() => {
      this._hide(element);
    }, options.duration);
  }

  private static defaultOptions: IToastOptions = {
    class: "",
    duration: 3000,
    style: "",
  };

  private static timer: number | null = null;

  /**
   * apply options for each show
   * @param element the root element of the toast
   * @param message message to show
   * @param options toast options
   */
  private static _applyOption(
    element: HTMLElement,
    message: messageType,
    options: IToastOptions,
  ) {
    element.className = `${options.class}`;
    if (options.style) {
      element.style.cssText = `${options.style};`;
    }
    element.innerHTML = `${message}`;
  }

  /**
   * create toast element and append to page
   * @param message message to show
   * @param options toast options
   */
  private static _create(
    message: messageType,
    options: IToastOptions,
  ): HTMLElement {
    const element = document.createElement("div");
    element.setAttribute("id", "toast");
    this._applyOption(element, message, options);
    document.body.appendChild(element);
    return element;
  }

  /**
   * set the `show` class name to show the toast
   * @param element the root element of the toast
   */
  private static _show(element: HTMLElement | null) {
    if (element) {
      element.className += "show";
    }
  }

  /**
   * remove the `show` class name to hide the toast
   * @param element the root element of the toast
   */
  private static _hide(element: HTMLElement | null) {
    if (element) {
      element.className = element.className.replace("show", "");
    }
  }
}
