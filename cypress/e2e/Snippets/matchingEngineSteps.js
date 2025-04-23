///reference types=”Cypress” />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { EnginePage } from "../page-objects/EnginePage";

const enginePage = new EnginePage();
Given("User logs in to the portal", () => {
  cy.visit("https://www.matchingengine.com/");
});

Then("goes to Repertoiremanagementmodule", () => {
  enginePage.gotoRepertoireManagementModule();
});

When("they scroll to additional feature", () => {
  enginePage.scrollToAdditonalFeature();
});

Then("click on products supported", () => {
  enginePage.clickProductsSupported();
});

Then("List of products should be displayed", () => {
  cy.get(enginePage.element.CUE_SHEET).should(
    "have.text",
    "Cue Sheet / AV Work"
  );
  cy.get(enginePage.element.RECORDING).should("have.text", "Recording");
  cy.get(enginePage.element.BUNDLE).should("have.text", "Bundle");
  cy.get(enginePage.element.ADVERTISMENT).contains("Advertisement");
});
