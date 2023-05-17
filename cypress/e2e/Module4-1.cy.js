import { printf } from "extsprintf";
import loginPage from "../PageObjects/loginPage";
const loginpage = new loginPage()

describe('Kiểm tra xác thực', () => {
    it('Kiểm tra người dùng không tồn tại', () => {
        cy.visit('/login');
        
        loginpage.setClickCancel();

        loginpage.setEmail("hoa.pham@eastgate-software.com");

        loginpage.setPassword("1234567");

        loginpage.clickSubmit();

        cy.wait(1000)

        cy.get('div.error.ng-star-inserted').should('be.visible');
    })

})