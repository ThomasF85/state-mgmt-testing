import React from "react";
import Counter from "./Counter";

describe("<Counter />", () => {
  beforeEach(() => {
    cy.mount(<Counter />);
  });

  it("has correct default count v1 (should syntax)", () => {
    cy.get('[data-cy="value"]').should("have.text", "Value: 0");
  });

  it("has correct default count v2 (expect syntax)", () => {
    cy.get('[data-cy="value"]').then((element) => {
      expect(element.text()).to.be.eq("Value: 0");
    });
  });

  it("increments correctly", () => {
    cy.get('[data-cy="incbutton5"]').click();
    cy.get('[data-cy="value"]').should("have.text", "Value: 5");
  });
});
