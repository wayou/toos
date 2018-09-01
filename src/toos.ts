/*
 * @author: wayou
 * @date: 2018-08-28 12:12:54
 * @description: a simple toast
 */

import "./toos.scss";

export interface ToastOptions {
  style?: string;
  class?: string;
  duration?: number;
}

type messageType = string | number;

export default class Toast {
  /**
   * show the toast
   *
   * @static
   * @param {showOption} options
   * @memberof Toast
   */
  public static show(message: messageType, options: ToastOptions) {
    let _options = Object.assign({}, this.defaultOptions, options);

    let element = document.getElementById(`toast`);
    if (this.timer) {
      window.clearTimeout(this.timer);
      this.timer = null;
      this._hide(element);
    }
    if (!element) {
      element = this._create(message, _options);
    } else {
      this._applyOption(element, message, _options);
    }

    this._show(element);
    this.timer = window.setTimeout(() => {
      this._hide(element);
    }, _options.duration);
  }

  private static defaultOptions: ToastOptions = {
    class: "",
    duration: 3000,
    style: ""
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
    options: ToastOptions
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
    options: ToastOptions
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
