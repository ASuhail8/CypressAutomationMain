/// <reference types="Cypress" />

describe("My first test suite", function(){

it("my first test case to hit url", function(){

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get('.search-keyword').type('ca')
cy.wait(2000)
cy.get('.products').as('productLocator')
cy.get('@productLocator').find('.product').should('have.length',4)

cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click().then(function(){
    console.log('Hello')

})


cy.get('@productLocator').find('.product').each(($el, index , $list ) =>{

    var textVeg = $el.find('h4.product-name').text()
    if(textVeg.includes('Cashews')){

        $el.find('button').click() 
    }


})

cy.get('.brand.greenLogo').should('have.text','GREENKART')
cy.get('.brand.greenLogo').then(function(ele){
    cy.log(ele.text())

})

})

})
