/// <reference types="cypress"/>
import forgotPasswordPage from "../../pom/pom-login/forgot-password.cy";

describe("Forgot Password Feature", ()=>{
    it("User Enters a new Password", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode");
        forgotPasswordPage.inputUsername().type("Admin");
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('messages');
        forgotPasswordPage.buttonResetPassword().click();
        cy.wait('@messages');
    });
    
    it("User Reset Password with empty Username", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode");
        forgotPasswordPage.verifyForgotPasswordPage();
        forgotPasswordPage.buttonResetPassword().click();
        forgotPasswordPage.requiredErrorMessage(0).should("have.text", "Required");
    });
    it("User Click Cancel Button whitout Input Username", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode");
        forgotPasswordPage.verifyForgotPasswordPage();
        forgotPasswordPage.buttonCancel().click();
    });
});