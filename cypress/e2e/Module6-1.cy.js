import { printf } from "extsprintf";
import loginPage from "../PageObjects/loginPage";
const loginpage = new loginPage()

describe('Kiểm tra quản lý phiên', () => {
    it('Kiểm tra chức năng đăng xuất của Admin', () => {
        cy.visit('/login');
        loginpage.setClickCancel();

        loginpage.setEmail("admin@juice-sh.op");

        loginpage.setPassword("admin123");

        loginpage.clickSubmit();

        cy.wait(1000)

        cy.get('button#navbarAccount').click();

        cy.get('button#navbarLogoutButton').click();

        cy.get('button#navbarAccount').click();

        // Kiểm tra đăng xuất thành công chưa
        cy.get('button#navbarLoginButton').should('be.visible');

    })


    it('Kiểm tra chức năng đăng xuất của User', () => {
        cy.visit('/login');
        loginpage.setClickCancel();

        loginpage.setEmail("thanhhoa592000@gmail.com");

        loginpage.setPassword("1234567");

        loginpage.clickSubmit();

        cy.wait(1000)

        cy.get('button#navbarAccount').click();

        cy.get('button#navbarLogoutButton').click();

        cy.get('button#navbarAccount').click();

        // Kiểm tra đăng xuất thành công chưa
        cy.get('button#navbarLoginButton').should('be.visible');;

    })
})