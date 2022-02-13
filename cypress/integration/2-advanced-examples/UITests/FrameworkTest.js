import HomePage from '../PageObjects/HomePage'
import ProductsPage from '../PageObjects/ProductsPage'
import CheckoutPage from '../PageObjects/CheckoutPage'
describe("Data Driven test using fiXtures", function () {

    before(function () {

        cy.fixture('form').then(function (data) {
            this.data = data;
        })

    })

    it("Driving data", function () {
        const homePage = new HomePage();
        const productsPage = new ProductsPage();
        const checkOutPage = new CheckoutPage();
        //url : https://rahulshettyacademy.com/angularpractice/
        cy.visit(Cypress.env('rahulUrlProd') + '/angularpractice/')
        homePage.getName().type(this.data.name)
        homePage.getName().should('have.value', this.data.name)
        homePage.getName().should('have.attr', 'minlength', '2')

        homePage.getName().then(function (element) {
            var len = element.attr('minlength')
            expect(len).to.equal('2')
        })


        homePage.getEntrprenaurRadio().should('be.disabled')
        homePage.getEmail().type(this.data.email)
        homePage.getEmail().should('have.value', this.data.email)



        homePage.getCheckBox().check().should('be.checked')
        homePage.selectGender().select(this.data.gender)

        //Click on Shop

        homePage.getShopButton().click()
        this.data.productName.forEach(function (element) {
            cy.productSelector(element)
        })

        //click on Checkout

        productsPage.getCheckOutButton().click()



        var sum = 0;
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            var res = $el.text().split(" ")[1].trim()
            cy.log(res)
            sum = Number(sum) + Number(res);
        }).then(function () {

            cy.log(sum)
        })

        //Validate the sum 
        cy.get('h3 strong').then(function (totalSum) {
            var total = totalSum.text().split(" ")[1].trim()
            expect(sum).to.equal(Number(total))
        })

        cy.contains('Checkout').click()

        //Enter COuntry

        checkOutPage.getCountry().type(this.data.Country)
        Cypress.config('defaultCommandTimeout', 8000)
        cy.get('div.suggestions ul li a').click()
        checkOutPage.getCheckbox().click({ force: true })
        checkOutPage.getPurchaseButton().click()
        checkOutPage.getSuccessMessage().then(function (element) {
            cy.log(element.text())
            expect(element.text().includes("Success")).to.be.true
        })

    })
})