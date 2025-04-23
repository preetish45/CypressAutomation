/// <reference types="cypress-iframe" />

import "cypress-iframe";
describe("Frames Test Suite", function () {
  it("Demo case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.frameLoaded("#courses-iframe");
    cy.iframe().find("a[href*='mentorship']").eq(0).click();
  });
});
