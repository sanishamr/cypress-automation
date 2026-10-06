import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";

describe("Contact form", () => {
  const home = new HomePage();
  const contact = new ContactPage();

  const data = require("../fixtures/contact.json");

  it("TC1: shows required-field errors and clears them after valid input", () => {
    cy.visit("/");

    home.openContactPage();

    contact.submit();
    contact.feedbackHeading.should("be.visible");
    contact.feedbackInstruction.should("be.visible");
    contact.forenameError
      .should("be.visible")
      .and("contain.text", "Forename is required");
    contact.emailError
      .should("be.visible")
      .and("contain.text", "Email is required");
    contact.messageError
      .should("be.visible")
      .and("contain.text", "Message is required");

    contact.fillMandatoryFields({
      ...data,
      forename: data.forenames[0],
    });
    contact.forenameError.should("not.exist");
    contact.emailError.should("not.exist");
    contact.messageError.should("not.exist");
  });

  for (let i = 1; i <= 5; i++) {
    it(`TC2: submits valid contact details and displays the personalized success message (run ${i})`, () => {
      cy.visit("/");

      home.openContactPage();

      const forename = data.forenames[i - 1];
      contact.fillMandatoryFields({ ...data, forename });
      contact.submit();

      contact.successMsg.should("be.visible").should(($message) => {
        expect($message.text().trim()).to.eq(
          `Thanks ${forename}, we appreciate your feedback.`,
        );
      });
    });
  }
});
