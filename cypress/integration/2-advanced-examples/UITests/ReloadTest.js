describe("Reload ", function(){

it("Reload test" , function(){

    //url : https://rahulshettyacademy.com/seleniumPractise/#/
    cy.visit(Cypress.env('rahulUrl')+'/seleniumPractise/#/');
    cy.get('.search-keyword').type("Carrot");


    cy.reload();

    cy.get('.brand').should('have.text','GREENKART')


} )
})