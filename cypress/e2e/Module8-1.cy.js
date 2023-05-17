import { printf } from "extsprintf";
import loginPage from "../PageObjects/loginPage";
const loginpage = new loginPage()

beforeEach(() => {
    cy.visit('/login');

    loginpage.setClickCancel();

    loginpage.setEmail("thanhhoa592000@gmail.com");

    loginpage.setPassword("1234567");

    loginpage.clickSubmit();
})
describe('Kiểm tra xử lý lỗi', () => {
    let data = [
        ["coupon code"],
        ["coupon code"],
        ["coupon code"],
        ["coupon code"],
        ["coupon code"],
        ["coupon code"],
        ["coupon code"],
        ["coupon code"],
        ["coupon code"],
        ["coupon code"],
        ["coupon code"],
        ["coupon code"],
        ["coupon code"],
        ["coupon code"],
        ["coupon code"],
        ["coupon code"],
        ["coupon code"],
        ["coupon code"],
        ["coupon code"],
        ["coupon code"],
        ["coupon code"],
        ["coupon code"]

    ]
    it('Kiểm tra xử lý lỗi ', function() {
        cy.get('button[class="mat-focus-indicator mat-tooltip-trigger mat-button mat-button-base"]').click();

        cy.wait(1000)

        cy.get('body.mat-app-background.bluegrey-lightgreen-theme:nth-child(2) div.mat-typography mat-sidenav-container.mat-drawer-container.mat-sidenav-container.mat-drawer-transition.mat-drawer-container-has-open mat-sidenav.mat-drawer.mat-sidenav.ng-tns-c87-0.ng-trigger.ng-trigger-transform.mat-drawer-over.ng-star-inserted.mat-drawer-opened:nth-child(3) div.mat-drawer-inner-container.ng-tns-c87-0 sidenav.ng-tns-c87-0 mat-nav-list.mat-nav-list.mat-list-base a.mat-list-item.mat-focus-indicator.ng-star-inserted:nth-child(8) span.mat-list-item-content > i.material-icons').click();

        data.forEach(row => {

            if (row.length > 0) {

                cy.get('#message-input').type(row[0]).type('{enter}');


                cy.wait(700)
            }
        })
        cy.get('div[class="speech-bubble-left"]').contains(" Oooookay, if you promise to stop nagging me here's a 10% coupon code for you: o*I]qgC7sn ").should('not.exist');


    })
});