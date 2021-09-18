/// <reference types="Cypress" />


describe("My second test case", function(){

it("second test case", function(){

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get('input.search-keyword').type('ca')
cy.get('div.products').find('div.product').each(($el, index, $list) => {

    var textVeggies = $el.find('h4.product-name').text()

if(textVeggies.includes("Capsicum")){

    $el.find('button').click()


}



})

cy.get('a.cart-icon').click()
cy.contains('PROCEED TO CHECKOUT').click()

cy.get('.promocode').type("RAHULSHETTY")
cy.contains('Apply').click()

cy.get('span.promoInfo').should('have.text','Invalid code ..!')

cy.contains('Place Order').click()



})



})