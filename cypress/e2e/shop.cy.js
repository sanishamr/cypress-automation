import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import CartPage from "../pages/CartPage";

function currencyToCents(text) {
  const match = text.match(/(\d+)(?:\.(\d{1,2}))?(?![\d.])/);
  expect(match, `Expected a currency amount in "${text}"`).not.to.be.null;
  return Number(match[1]) * 100 + Number((match[2] || "").padEnd(2, "0"));
}

describe("Shop Tests", () => {
  const home = new HomePage();
  const shop = new ShopPage();
  const cart = new CartPage();

  it("TC 3 - Cart page validations", () => {
    cy.visit("/");

    home.openShopPage();

    cy.fixture("products").then((products) => {
      products.forEach((product) => {
        shop.buyProduct(product.name, product.quantity);
      });

      shop.goToCart();

      let expectedGrandTotalCents = 0;

      cy.wrap(products)
        .each((product) => {
          return cart
            .getPrice(product.name)
            .invoke("text")
            .then((priceText) => {
              const unitPriceCents = currencyToCents(priceText);

              return cart
                .getSubtotal(product.name)
                .invoke("text")
                .then((subtotalText) => {
                  const subtotalCents = currencyToCents(subtotalText);
                  expect(subtotalCents).to.eq(
                    unitPriceCents * product.quantity,
                  );
                  expectedGrandTotalCents += subtotalCents;
                });
            });
        })
        .then(() => {
          return cart
            .getTotal()
            .invoke("text")
            .then((totalText) => {
              expect(currencyToCents(totalText)).to.eq(expectedGrandTotalCents);
            });
        });
    });
  });
});
