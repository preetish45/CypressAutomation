describe("Handling Child Windows by using invoke and also hadling to test navigating from one browser to another", () => {
  it("Should handle child window", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("#opentab").invoke("removeAttr", "target").click(); //invoke method is used to remove the target attribute from the element

    cy.origin("https://www.qaclickacademy.com", () =>
      //origin method is used to handle when navigating from one domain to another
      {
        cy.get("#navbarSupportedContent a[href*='about']").click();
        cy.get(".mt-50 h2").should("contain", "QAClick Academy");
      }
    );
  });
});

it("Another solution to handle child window opening in new tab with removing attribute", () => {
  cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

  cy.get("#opentab").then((el) => {
    const url = el.prop("href"); //.prop jquery  method is used to switch to the href attribute of the element
    cy.visit("https://www.qaclickacademy.com");

    cy.origin("https://www.qaclickacademy.com", () => {
      //origin method is used to handle when navigating from one domain to another
      cy.get("div.sub-menu-bar a[href*='about']").click();
    });
  });
});
