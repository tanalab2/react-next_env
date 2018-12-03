import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import "@material/react-button/index.scss";

import { Welcome } from "@storybook/react/demo";
import { Button } from "@material/react-button";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button raised className="button-alternate" onClick={action("clicked")}>
      Click Me!
    </Button>
  ))
  .add("with some emoji", () => (
    <Button raised className="button-alternate" onClick={action("clicked")}>
      😀 😎 👍 💯
    </Button>
  ));
