class ProductsPage
{
    getCheckOutButton(){
    return cy.contains('Checkout')
    }

}
export default ProductsPage;