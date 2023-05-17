import { before } from "lodash"
import registerPage from "../PageObjects/registerPage";
const registerpage = new registerPage();

describe('Register', () => {

    describe('Kiểm tra xác thực', () => {
        beforeEach(() => {
            cy.visit('/register');
        })

        it('Kiểm tra chính sách mật khẩu yếu (nhỏ hơn 5 kí tự )', function() {

            registerpage.setClickCancel();

            registerpage.setInputEmail("thanhhoa592000@gmail.com");

            registerpage.setInputPassword("123");

            registerpage.setInputRepeatPassword("123");

            cy.get('span[class="mat-slide-toggle-bar"]').click();

            registerpage.setAnswerControl("test");

            //Thông báo lỗi
            cy.get('#mat-error-7').contains('Password must be 5-40 characters long. ')
                .should('be.visible')

            cy.wait(100);
        })
        it('Kiểm tra chính sách mật khẩu yếu ( sai độ khó mật khẩu) ', function() {

            registerpage.setClickCancel();

            registerpage.setInputEmail("test1@gmail.com");

            registerpage.setInputPassword("1234567");

            registerpage.setInputRepeatPassword("1234567");

            cy.get('span[class="mat-slide-toggle-bar"]').click();

            registerpage.setAnswerControl("test");

            //button register not be visible
            cy.get('#registerButton').should('not.be.visible')

            cy.wait(100);
        })

    })
})