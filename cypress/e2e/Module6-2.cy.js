import { printf } from "extsprintf";
import loginPage from "../PageObjects/loginPage";
const loginpage = new loginPage()

describe('Kiểm tra quản lý phiên', () => {
    beforeEach(() => {
        cy.visit('/login');
        loginpage.setClickCancel();

        loginpage.setEmail("admin@juice-sh.op");

        loginpage.setPassword("admin123");

        loginpage.clickSubmit();

        cy.wait(1000);

    })
    it('Kiểm tra thời gian chờ của phiên', () => {

        cy.visit('/administration');

        cy.wait(60000);

        //trong thời gian 60000ms mong muốn trang admin sẽ reload lại trang

        cy.get('.mat-cell.mat-column-remove > button').should('not.be.visible');
    })
})