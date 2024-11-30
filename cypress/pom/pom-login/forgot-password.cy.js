export default class forgotPasswordPage{
    static inputUsername(){
        return cy.get('[name="username"]');
    }static buttonResetPassword(){
        return cy.get('[type="submit"]');
    }static requiredErrorMessage(index){
        return cy.get(".oxd-input-group__message").eq(index);
    }static buttonCancel(){
        return cy.get('[type="button"]');
    }
};