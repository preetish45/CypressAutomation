///reference types=”Cypress” />
import HomePage from "../../support/pageObjects/HomePage"; // 
describe("End to end ecommerce test", function () {

  before(function(){
    cy.fixture('example').then(function (data) {
      this.data = data; //this.data is used to access the data in the test cases
      this.homePage=new HomePage(); // Create an instance of HomePage, since this will execute before the test cases we can intialize it here, since we are using this. the scope of the this available in the test cases 
    });
  })
  // Define the product name
  
  it("Submit order", function () {
    
    const productName = this.data.productName; 
 
    
    this.homePage.goTo(Cypress.env('url')+ "/loginpagePractise"); // 
    const productPage=this.homePage.login(this.data.username, this.data.password); // after login, it will return the product page object, so in you see when we call home page then it will return product page
    
    productPage.pageValidations(); 
    productPage.getCardCount().should('have.length', 4);
    productPage.verifyCardLimit(); 
    productPage.selectProduct(productName); //
    productPage.selectFirstProduct(); 
    const cartPage=productPage.goToCart(); 
   cartPage.sumOfProducts().then(function(sum){

    expect(sum).to.be.lessThan(200000);
   })
   const ConfirmationPage= cartPage.checkoutItems()
   ConfirmationPage.submitFormDetails()
   ConfirmationPage.getAlertMessage().should('contain', 'success');


   
  
  
    Cypress.config("defaultCommandTimeout", 10000); // Set default command timeout to 10 seconds
   
   
  });
});
