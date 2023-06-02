import { before } from "lodash"
import registerPage from "../PageObjects/registerPage";
const registerpage = new registerPage();
import loginPage from "../PageObjects/loginPage";
const loginpage = new loginPage()

describe('Kiểm tra quản lý định danh', () => {
    const data = [
        { email: "test3@gmail.com", pass: "Chazio7^^" },
        { email: "test4@gmail.com", pass: "   " },
        { email: "   ", pass: "Chazio7^^" },
        { email: "thanhhoa", pass: "Chaizo7^^" },
        { email: "thanhhoa.gmail.com", pass: "Chaizo7^^" }
    ];

    data.forEach((row, index) => {
        if (index == 0) {
            it('Kiểm tra quản lý định danh: người dùng đăng kí', function () {

                cy.visit('/register');
                registerpage.setClickCancel();

                registerpage.setInputEmail(row.email);

                registerpage.setInputPassword(row.pass);

                registerpage.setInputRepeatPassword(row.pass);

                cy.get('span[class="mat-slide-toggle-bar"]').click();

                registerpage.setAnswerControl("test");

                cy.wait(1000);

                registerpage.setClickRegister();

                cy.wait(1000);

                cy.visit('/login');

                loginpage.setEmail(row.email);

                loginpage.setPassword(row.pass);

                loginpage.clickSubmit();

                cy.get('button#navbarAccount').click();

                cy.get('button[role="menuitem"]')
                    .contains(row.email);
            })

            it('Kiểm tra quản lý định danh: người dùng đã đăng kí nhiều lần', function () {
                if (index == 0) {
                    cy.visit('/register');
                    registerpage.setClickCancel();

                    registerpage.setInputEmail(row.email);

                    registerpage.setInputPassword(row.pass);

                    registerpage.setInputRepeatPassword(row.pass);

                    cy.get('span[class="mat-slide-toggle-bar"]').click();

                    registerpage.setAnswerControl("test");

                    cy.wait(1000);

                    registerpage.setClickRegister();

                    cy.wait(2000);

                    cy.get('div.error').contains("Email must be unique");

                }
            })
        }
        else if (index > 0) {
            it('Kiểm tra quản lý định danh: người dùng đăng kí nhập sai', function () {


                cy.visit('/register');
                registerpage.setClickCancel();

                registerpage.setInputEmail(row.email);

                registerpage.setInputPassword(row.pass);

                registerpage.setInputRepeatPassword(row.pass);

                cy.get('span[class="mat-slide-toggle-bar"]').click();

                registerpage.setAnswerControl("test");

                cy.wait(1000);

                cy.get('#registerButton').contains("Register").should('not.be.enabled');

            })
        }
    })
})
