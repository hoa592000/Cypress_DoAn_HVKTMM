import { before } from "lodash"
import registerPage from "../PageObjects/registerPage";
const registerpage = new registerPage();
import loginPage from "../PageObjects/loginPage";
const loginpage = new loginPage()

describe('Kiểm tra quản lý định danh', () => {
    let data = [
        ["test3@gmail.com", "Chazio7^^"]
    ]

    data.forEach(row => {
        it('Kiểm tra quản lý định danh: người dùng đăng kí rôi đăng nhập', function() {
            if (row.length > 0) {
                cy.visit('/register');
                registerpage.setClickCancel();

                registerpage.setInputEmail(row[0]);

                registerpage.setInputPassword(row[1]);

                registerpage.setInputRepeatPassword(row[1]);

                cy.get('span[class="mat-slide-toggle-bar"]').click();

                registerpage.setAnswerControl("test");

                registerpage.setClickRegister();

                cy.wait(1000);

                cy.visit('/login');

                loginpage.setEmail(row[0]);

                loginpage.setPassword(row[1]);

                loginpage.clickSubmit();

                cy.get('button#navbarAccount').click();

                cy.get('button[role="menuitem"]')
                    .contains(row[0]);

            }
        })
        it('Kiểm tra quản lý định danh: người dùng đã đăng kí nhiều lần', function() {
            if (row.length > 0) {
                cy.visit('/register');
                registerpage.setClickCancel();

                registerpage.setInputEmail(row[0]);

                registerpage.setInputPassword(row[1]);

                registerpage.setInputRepeatPassword(row[1]);

                cy.get('span[class="mat-slide-toggle-bar"]').click();

                registerpage.setAnswerControl("test");

                registerpage.setClickRegister();

                cy.wait(1000);

                cy.get('div[class="error"]').contains("Email must be unique").should('be.visible');

            }
        })
    })
})