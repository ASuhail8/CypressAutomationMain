/// <reference types="Cypress" />


describe("Alerts", function(){

it("alert Tc", function(){

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

// AUtom handling pop ups
cy.get('#alertbtn').click()
cy.get('#confirmbtn').click()


// TO get text on pop up by firing events

cy.get('#alertbtn').click()

cy.on('window:alert', (str) => {

expect(str).to.equal('Hello , share this practice page and share your knowledge')

})

cy.get('#confirmbtn').click()


cy.on('window:confirm', (str) => {

    expect(str).to.equal('Hello , Are you sure you want to confirm?')
    
})

// To handle child pop up by opening in the same window and deleting the target attribute

cy.get('#opentab').invoke('removeAttr','target').click()

//TO get current url and verify

cy.url().should('include','rahulshettyacademy')

//Browser navigation

cy.go('back')

// To handle Webtables

cy.get('table[name="courses"] tr td:nth-child(2)').each(($el,index,$list) =>{
const course = $el.text()
if(course.includes("WebSecurity")) {
    cy.get('table[name="courses"] tr td:nth-child(2)').eq(index).next().then(function(price){

       const priceText = price.text(); 
       expect(priceText).to.equal('20')
    })
    

}


})


})
}) 