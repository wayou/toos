/*
 * @author: wayou
 * @date: 2018-08-28 12:12:54
 * @description: a simple toast
 */

import "./main.scss";

export interface ToastOptions {
  style?: string;
  class?: string;
  message: string | number;
  duration?: number;
}

type showOption = string | number | ToastOptions;

export default class Toast {
  /**
   * show the toast
   *
   * @static
   * @param {showOption} options
   * @memberof Toast
   */
  public static show(messageOrOption: showOption) {
    const toastOption = Object.assign(
      {},
      this.defaultOptions,
      typeof messageOrOption !== "object"
        ? {
            message: messageOrOption
          }
        : messageOrOption
    );

    let element = document.getElementById(`toast`);
    if (this.timer) {
      window.clearTimeout(this.timer);
      this.timer = null;
      this._hide(element);
    }
    if (!element) {
      element = this._create(toastOption);
    } else {
      this._applyOption(element, toastOption);
    }

    this._show(element);
    this.timer = window.setTimeout(() => {
      this._hide(element);
    }, toastOption.duration);
  }

  private static defaultOptions: ToastOptions = {
    class: "",
    duration: 3000,
    message: "",
    style: ""
  };

  private static timer: number | null = null;

  /**
   * the option may differ each time so apply it in every show
   * @param element the root element of the toast
   * @param options 
   */
  private static _applyOption(element: HTMLElement, options: ToastOptions) {
    element.className = `${options.class}`;
    if (options.style) {
      element.style.cssText = `${options.style};`;
    }
    element.innerHTML = `
            ${options.message}
            `;
  }

  /**
   * create the element wich holds the toast
   * @param options
   */
  private static _create(options: ToastOptions): HTMLElement {
    const element = document.createElement("div");
    element.setAttribute("id", "toast");
    this._applyOption(element, options);
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
