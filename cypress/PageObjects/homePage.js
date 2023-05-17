class homePage {
    btnMenu='button[class="mat-focus-indicator mat-tooltip-trigger mat-button mat-button-base"]';
    btnSupportChat='body.mat-app-background.bluegrey-lightgreen-theme:nth-child(2) div.mat-typography mat-sidenav-container.mat-drawer-container.mat-sidenav-container.mat-drawer-transition.mat-drawer-container-has-open mat-sidenav.mat-drawer.mat-sidenav.ng-tns-c87-0.ng-trigger.ng-trigger-transform.mat-drawer-over.ng-star-inserted.mat-drawer-opened:nth-child(3) div.mat-drawer-inner-container.ng-tns-c87-0 sidenav.ng-tns-c87-0 mat-nav-list.mat-nav-list.mat-list-base a.mat-list-item.mat-focus-indicator.ng-star-inserted:nth-child(8) span.mat-list-item-content > i.material-icons';
    textMessageInput='#message-input';
    textMessageSupportChat='div[class="speech-bubble-left"]';
    
    setClickMenu()
    {

        cy.get(this.btnMenu).click();

    }
    setClickSupportChat()
    {

        cy.get(this.btnSupportChat).click();

    }
    setInputMessage(message)
    {

        cy.get(this.textMessageInput).type(message)

    }
    setGetMessageSupportChat()
    {

        cy.get(this.textMessageSupportChat);

    }
}
export default homePage;