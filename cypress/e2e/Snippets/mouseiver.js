///reference types=”Cypress” />
describe("My First Test Suite", function () {
  it("My FirstTest case", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);

    cy.get(".product:visible").should("have.length", 4);

    //to find element with parent child relationship
    cy.get(".products").as("productLocator"); //we are giving alias to the locator so that we can use it later
    cy.get("@productLocator").find(".product").should("have.length", 4);
    cy.get(":nth-child(3) > .product-action > button").click();
    cy.get("@productLocator")
      .find(".product")
      .eq(2)
      .contains("ADD TO CART")
      .click()
      .then(function () {
        console.log("sf"); //this is javascript command hence we need to resolve promise with then function
      });
    //To interate over the products
    cy.get("@productLocator")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find(".product-name").text();
        if (textVeg.includes("Cashews")) {
          cy.wrap($el).find("button").click(); //cy.warp is used to resolve the promise as in new version of cypress we can't use click directly
        }
      });

    //assert if logo text is correctly displayed
    cy.get(".brand").should("have.text", "GREENKART");

    cy.get(".brand").then(function (logoelement) {
      cy.log(logoelement.text());
    });
  });
});
