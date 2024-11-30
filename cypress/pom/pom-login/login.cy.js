export default class loginPage{
    static verifyLoginPage(){
        return cy.get("h5").should("contain", "Login");
    }
    static inputUsername(){
        return cy.get('[name="username"]');
    }
    static inputPassword(){
        return cy.get('[name="password"]');
    }
    static buttonLogin(){
        return cy.get('[type="submit"]');
    }
    static dashboardPage (){
        return cy.get("h6").should("contain", "Dashboard");
    }
    static errorMessage(){
        return cy.get(".oxd-alert-content-text").should("contain", "Invalid credentials");
    }
    static requiredErrorMessage(index){
        return cy.get(".oxd-input-group__message").eq(index);
    }
}