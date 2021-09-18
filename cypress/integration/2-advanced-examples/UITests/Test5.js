/// <reference types="Cypress" />


describe("Web Tables", function(){

it("web table Tc", function(){

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

cy.get('div.tableFixHead tr td:nth-child(1)').each(($el,index,$list) => {

const name = $el.text()
if(name.includes("Alex")){

    cy.get('div.tableFixHead tr td:nth-child(1)').eq(index).next().next().next().then(function(amt){

       const amttext = amt.text() 
        expect(amttext).to.equal('28')
    })
}
})

})
}) 