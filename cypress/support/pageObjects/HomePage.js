import ProductPage from '../../support/pageObjects/ProductPage'; //

class HomePage
{

    goTo(url)
    {
        cy.visit(url)
    }
login(username,password)
{
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.contains("Sign In").click();
    return new ProductPage()
     
}
  
}
export default HomePage;