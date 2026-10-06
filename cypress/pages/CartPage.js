class CartPage {
  getPrice(product) {
    return cy.contains("tr", product).find("td").eq(1);
  }

  getSubtotal(product) {
    return cy.contains("tr", product).find("td").eq(3);
  }

  getTotal() {
    return cy.get(".total");
  }
}

export default CartPage;
