import { printf } from "extsprintf";
import loginPage from "../PageObjects/loginPage";
import { constants } from "buffer";
const loginpage = new loginPage()

describe('Kiểm tra xác thực', () => {
    it('Kiểm tra người dùng không tồn tại', () => {
        cy.visit('/login');
        
        loginpage.setClickCancel();

        loginpage.setEmail("hoa.pham@eastgate-software.com");

        loginpage.setPassword("1234567");

        loginpage.clickSubmit();

        cy.wait(1000)

        cy.get('div.error.ng-star-inserted').contains("Invalid email or password.").should('be.visible');
    })
    it('Kiểm tra người dùng đăng nhập sai mật khẩu', () => {
        cy.visit('/login');
        loginpage.setClickCancel();

        loginpage.setEmail("thanhhoa592000@gmail.com");

        loginpage.setPassword("1234569");

        loginpage.clickSubmit();

        cy.wait(1000)

        cy.get('div.error.ng-star-inserted').contains("Invalid email or password.").should('be.visible');
    })

})