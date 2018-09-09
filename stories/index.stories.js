import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Toos from "../dist/toos.esm";
import "./index.css";

storiesOf("Toos", module).add("show toast", () => (
  <div>
    <p>click the button to show toast.</p>
    <button
      onClick={() => {
        Toos.show(`Allo!`);
      }}
    >
      CLICK ME
    </button>
    <hr />
    <p>Toast with custom style</p>
    <button
      onClick={() => {
        Toos.show(`text with yellow color`, {
          style: "color: yellow;",
        });
      }}
    >
      CLICK ME
    </button>
    <hr />
    <p>Toast with custom class name</p>
    <button
      onClick={() => {
        Toos.show(`toast with custom class name`, {
          class: "my-toast",
        });
      }}
    >
      CLICK ME
    </button>
    <hr />
    <p>Toast with custom duration</p>
    <button
      onClick={() => {
        Toos.show(`you can't see me :)`, {
          duration: 50,
        });
      }}
    >
      CLICK ME
    </button>
  </div>
));
