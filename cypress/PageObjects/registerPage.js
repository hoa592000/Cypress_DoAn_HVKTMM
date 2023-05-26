class registerPage {
    btnCancel = 'button[class="mat-focus-indicator mat-tooltip-trigger mat-raised-button mat-button-base mat-warn ng-star-inserted"';
    inputEmail = 'input[id="emailControl"][type="text"]';
    inputPassword = 'input[id="passwordControl"][type="password"]';
    repeatPassword = 'input[id="repeatPasswordControl"][type="password"]';
    showMore = 'div[class="mat-form-field-infix ng-tns-c21-10"]';
    selectQuestion = '#mat-option-0';
    inputAnswerControl = '#securityAnswerControl';
    buttonRegister = 'button[id="registerButton"][type="submit"]'

    setClickCancel() {

        cy.get(this.btnCancel).click();

    }
    setInputEmail(email){

        cy.get(this.inputEmail).type(email);

    }
    setInputPassword(password){

        cy.get(this.inputPassword).type(password)

    }
    setInputRepeatPassword(repeatpassword){

        cy.get(this.repeatPassword).type(repeatpassword)

    }
    setAnswerControl(answercontrol){

        cy.get(this.showMore).click();
        cy.get(this.selectQuestion).click();
        cy.get(this.inputAnswerControl).type(answercontrol);

    }
    setClickRegister(){

        cy.get(this.buttonRegister).click();

    }

}
export default registerPage;