describe('Amazon', function(){
    before(function(){

        cy.fixture('amazon').then(function(data){
            this.data = data;
            cy.log(this.data.email)
        })

    })

    it.skip('Amazon sign in test', function() {

    cy.visit(Cypress.env('amazonUrl'))
    cy.get('#nav-link-accountList-nav-line-1').click()
    cy.get('#ap_email').type(this.data.email)
    cy.get('#continue').click()
    cy.get("div h4[class='a-alert-heading']").then(errorMsg => {
       var text =  errorMsg.text()
       cy.log(text)
       expect(text).equal('There was a problem')
    })

    
})

it("ArraysTest", ()=>{
    var array = ["suhail", "sana"]

    array.forEach((data)=>{
        cy.log(data)
    })

})

})