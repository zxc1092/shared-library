import "./lit-home";
import { fixture } from "@open-wc/testing-helpers";

describe("lit-home", () => {

  beforeEach(async () => {
    await fixture(`<lit-home name="World"></lit-home>`);
  });

  it("has a greeting", async () => {
    const greeting =
      window.document.body.getElementsByTagName("lit-home")[0].shadowRoot
        ?.textContent;
    expect(greeting.indexOf("Hello, World!")).not.toBe(-1);
  });
});
