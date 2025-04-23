///reference types=”Cypress” />
describe("End to end ecommerce test", function () {
  // Define the product name
  const productName = "Nokia Edge";
  it("Submit order", function () {
    cy.visit("https://rahulshettyacademy.com/loginpagePractise");
    cy.get('input[name="username"]').type("rahulshettyacademy");
    cy.get('input[name="password"]').type("learning");
    cy.contains("Sign In").click();
    cy.contains("Shop Name").should("be.visible");
    cy.get("app-card").should("have.length", 4);

    cy.get("app-card")
      .filter(`:contains("${productName}")`)
      .then(($element) => {
        cy.wrap($element).should("have.length", 1);
        cy.wrap($element).contains("button", "ADD").click();
      });
    cy.get("app-card").eq(0).contains("button", "ADD").click();
    cy.contains("a", "Checkout").click();
    let sum = 0;

    cy.get("tr td:nth-child(4) strong")
      .each(($el) => {
        const amount = Number($el.text().split(" ")[1].trim());
        sum = sum + amount; //65000+100000
      })
      .then(() => {
        expect(sum).to.be.lessThan(200000);
      });
    cy.contains("button", "Checkout").click();
    cy.get("#country").type("India");
    cy.get(".suggestions > ul > li > a").click();
    cy.get(".btn-sucess").click();
    cy.get("alert-success").should("contain", "success");
  });
});
