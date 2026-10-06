class ShopPage {
  buyProduct(product, qty) {
    for (let i = 0; i < qty; i++) {
      cy.contains("li", product).contains("Buy").click();
    }
  }

  goToCart() {
    cy.get("#nav-cart").click();
  }
}

export default ShopPage;
