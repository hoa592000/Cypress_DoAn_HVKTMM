import { printf } from "extsprintf";
import loginPage from "../PageObjects/loginPage";
const loginpage = new loginPage()

describe('Kiểm tra quản lý định danh', () => {
    it('Kiểm tra quản lý định danh người dùng', () => {
        cy.visit('/login');

        loginpage.setClickCancel();

        loginpage.setEmail("thanhhoa592000@gmail.com");

        loginpage.setPassword("1234567");

        loginpage.clickSubmit();

        cy.wait(1000);

        cy.get('button#navbarAccount').click();

        cy.get('button[role="menuitem"]')
            .contains("thanhhoa592000@gmail.com");

    })
    it('Kiểm tra quản lý định danh quản trị viên', () => {
        cy.visit('/login');
        loginpage.setClickCancel();

        loginpage.setEmail("jim@juice-sh.op");

        loginpage.setPassword("Chaizo7^^");

        loginpage.clickSubmit();

        cy.wait(1000)

        cy.get('button#navbarAccount').click();

        cy.get('button[role="menuitem"]')
            .contains("jim@juice-sh.op");

    })
})