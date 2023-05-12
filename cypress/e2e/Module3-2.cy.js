import { before } from "lodash"
import registerPage from "../PageObjects/registerPage";
const registerpage = new registerPage();
import loginPage from "../PageObjects/loginPage";
const loginpage = new loginPage()


describe('Kiểm tra quản lý định danh', () => {

    it('Kiểm tra đăng kí', function() {
        cy.visit('/register');
        registerpage.setClickCancel();

        registerpage.setInputEmail("test8@gmail.com");

        registerpage.setInputPassword("Chazio7^^");

        registerpage.setInputRepeatPassword("Chazio7^^");

        cy.get('span[class="mat-slide-toggle-bar"]').click();

        registerpage.setAnswerControl("test");

        registerpage.setClickRegister();

        cy.wait(1000);
        
        })

    it('Kiểm tra đăng nhập ', function() {

        cy.wait(1000)

        cy.visit('/login');


        loginpage.setEmail("test8@gmail.com");

        loginpage.setPassword("Chazio7^^");

        loginpage.clickSubmit();

        cy.get('button#navbarAccount').click();

        cy.get('button[role="menuitem"]')
            .contains("test8@gmail.com");

        })
})
