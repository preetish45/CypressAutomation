import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../support/pageObjects/HomePage";

const homePage = new HomePage();
before(function () {
  cy.fixture('example').then(function (data) {
    this.data = data;
  })
})
Given("I visit the ecommerce application", () => {
  homePage.goTo(Cypress.env("url") + "/loginpagePractise/"); //
});

When("I log in to the application", function () {
  this.productPage = homePage.login(this.data.username, this.data.password); // after login, it will return the product page object, so in you see when we call home page then it will return product page
  this.productPage.pageValidations();
  this.productPage.getCardCount().should("have.length", 4);
});

When("I add items to Cart and checkout", function () {
  this.productPage.selectProduct(this.data.productName); //
  this.productPage.selectFirstProduct();
  this.cartPage = this.productPage.goToCart();
});

When("validate the total price limit", function () {
  this.cartPage.sumOfProducts().then(function (sum) {
    expect(sum).to.be.lessThan(200000);
  });
});

Then("select the country submit and verify",function () {
  const confirmationPage = this.cartPage.checkoutItems()
  confirmationPage.submitFormDetails();
  confirmationPage.getAlertMessage().should("contain", "Success");
});
