

  beforeEach(()=>{
    cy.fixture('example').then(function (data) {
      this.data = data; //this.data is used to access the data in the test cases
          });
  })