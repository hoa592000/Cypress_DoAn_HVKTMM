class forgotPassword{

    btnCancel1="button[class='mat-focus-indicator mat-tooltip-trigger mat-raised-button mat-button-base mat-warn ng-star-inserted']";
    btnCancel2="button[id='cancelButton'][title='Cancel the tutorial']";
    txtEmail="#email";
    txtSecurityQuestion="#securityAnswer";
    txtNewPassword="#newPassword";
    txtRepeatNewPassword="#newPasswordRepeat"
    btnResetButton="#resetButton"
    txtConfirmSuccesseful = ".confirmation"

    setClickCancel()
    {

        cy.get(this.btnCancel1).click();

        cy.get(this.btnCancel2).click();
    }

    setEmail(email)
    {
        cy.get(this.txtEmail).type(email);
    }

    setSecurityQuestion(securityQuestion)
    {

        cy.get(this.txtSecurityQuestion).type(securityQuestion);
    }

    setNewPassword(newPasword)
    {
        cy.get(this.txtNewPassword).type(newPasword);
    }

    setRepeatNewPassword(repeatNewPassword)
    {
        cy.get(this.txtRepeatNewPassword).type(repeatNewPassword)
    }

    clickResetButton()
    {

        cy.get(this.btnResetButton).click();
    }
    
    verfyConfirmSuccesseful(){
        cy.get(this.txtConfirmSuccesseful).should('not.be.hidden');
    }
}
export default forgotPassword;