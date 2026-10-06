class HomePage {
  openContactPage() {
    cy.contains("Contact").click();
  }

  openShopPage() {
    cy.contains("Shop").click();
  }
}

export default HomePage;
