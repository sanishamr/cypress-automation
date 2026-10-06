class ContactPage {
  get forename() {
    return cy.get("#forename");
  }
  get email() {
    return cy.get("#email");
  }
  get message() {
    return cy.get("#message");
  }
  get submitBtn() {
    return cy.get(".btn-contact");
  }

  get forenameError() {
    return cy.get("#forename-err");
  }
  get emailError() {
    return cy.get("#email-err");
  }
  get messageError() {
    return cy.get("#message-err");
  }

  get feedbackHeading() {
    return cy.contains("We welcome your feedback");
  }
  get feedbackInstruction() {
    return cy.contains(
      /but we won't get it unless you complete the form correctly\./i,
    );
  }
  get successMsg() {
    return cy.get(".alert-success");
  }

  fillMandatoryFields(data) {
    this.forename.type(data.forename);
    this.email.type(data.email);
    this.message.type(data.message);
  }

  submit() {
    this.submitBtn.click();
  }
}

export default ContactPage;
