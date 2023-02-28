describe("App page", () => {
  it("should visit App", () => {
    cy.visit("localhost:3000");
    cy.get("h1").should("exist");
  });

  it("should signup successfully", () => {
    cy.visit("localhost:3000");

    cy.get("h1").should("exist");

    cy.get("input[type='email']").should("exist");
    cy.get("input[type='email']").type("budi@gmail.com");

    cy.get("input[type='password']").should("exist");
    cy.get("input[type='password']").type("12345");

    cy.get("button[data-testid='submit']").click();

    cy.get("div[data-testid='user']").should("exist");
  });
});
