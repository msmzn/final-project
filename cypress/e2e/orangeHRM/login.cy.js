/// <reference types="cypress" />
import loginPage from "../../pom/pom-login/login.cy";

describe("Login Feature", () => {
  it("User Login with valid credentials", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    loginPage.verifyLoginPage().should("contain", "Login");
    loginPage.inputUsername().type("Admin");
    loginPage.inputPassword().type("admin123");
    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/shortcuts').as('shortcuts');
    loginPage.buttonLogin().click();
    cy.wait('@shortcuts');
    cy.url().should("include", "/dashboard");
    loginPage.dashboardPage().should("contain", "Dashboard");
  });

  it("User Login fails with incorrect username", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    loginPage.verifyLoginPage().should("contain", "Login");
    loginPage.inputUsername().type("admin123");
    loginPage.inputPassword().type("admin123");
    loginPage.buttonLogin().click();
    loginPage.errorMessage().should("contain", "Invalid credentials");
  });

  it("User Login fails with incorrect password", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    loginPage.verifyLoginPage().should("contain", "Login");
    loginPage.inputUsername().type("Admin");
    loginPage.inputPassword().type("admin456");
    loginPage.buttonLogin().click();
    loginPage.errorMessage().should("contain", "Invalid credentials");
  });

  it("User Login fails with empty username and password", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    loginPage.verifyLoginPage().should("contain", "Login");
    loginPage.buttonLogin().click();
    loginPage.requiredErrorMessage(0).should("have.text", "Required");
    loginPage.requiredErrorMessage(1).should("have.text", "Required");
  });
});
