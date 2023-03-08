import React from "react";
import { TextE2 } from "../../common/TextE2";
import PageLIst from "./PageList";
import { Toolbar } from "./toolbar/Toolbar";

export const Pages = () => {
  return (
    <div>
      <section>
        <h1>Pages</h1>
      </section>
      {/* <TextE2 /> */}
      <section>
        <PageLIst />
      </section>
    </div>
  );
};
