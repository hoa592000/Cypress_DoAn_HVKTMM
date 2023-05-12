import { printf } from "extsprintf";
import loginPage from "../PageObjects/loginPage";
const loginpage = new loginPage()

describe('Kiểm tra ủy quyền', () => {
    it('Kiểm tra xác thực phân quyền người dùng', () => {
        cy.visit('/login');

        loginpage.setClickCancel();

        loginpage.setEmail("thanhhoa592000@gmail.com");

        loginpage.setPassword("1234567");

        loginpage.clickSubmit();

        cy.wait(1000);

        cy.get('button#navbarAccount').click();

        cy.visit('/administration');

        cy.get('.mat-cell.mat-column-remove > button').should('not.exist');
    })
    it('Kiểm tra xác thực phân quyền quản trị viên', () => {
        cy.visit('/login');
        loginpage.setClickCancel();

        loginpage.setEmail("admin@juice-sh.op");

        loginpage.setPassword("admin123");

        loginpage.clickSubmit();

        cy.wait(1000)

        cy.get('button#navbarAccount').click();

        cy.visit('/administration');

        cy.get('.mat-cell.mat-column-remove > button').should('be.visible');

    })
})