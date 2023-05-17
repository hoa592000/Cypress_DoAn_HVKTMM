import { printf } from "extsprintf";
import loginPage from "../PageObjects/loginPage";
const loginpage = new loginPage()

describe('Kiểm tra quản lý định danh', () => {
    it('Định danh người dùng: email thanhhoa592000@gmail.com', () => {

        cy.visit('/login');

        loginpage.setClickCancel();

        loginpage.setEmail("thanhhoa592000@gmail.com");

        loginpage.setPassword("1234567");

        loginpage.clickSubmit();

        cy.wait(1000);

        cy.get('button#navbarAccount').click();

        cy.get('button[role="menuitem"]')
            .contains("thanhhoa592000@gmail.com").should('be.visible');

    })
    it('Kiểm tra quản lý định danh người dùng', () => {
        cy.visit('/login');
        loginpage.setClickCancel();

        loginpage.setEmail("kimsamule592000@gmail.com");

        loginpage.setPassword("Chaizo7^^");

        loginpage.clickSubmit();

        cy.wait(1000)

        cy.get('button#navbarAccount').click();

        cy.get('button[role="menuitem"]')
            .contains("kimsamule592000@gmail.com");

    })
})