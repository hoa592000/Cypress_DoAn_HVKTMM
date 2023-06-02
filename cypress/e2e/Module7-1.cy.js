import { printf } from "extsprintf";
import loginPage from "../PageObjects/loginPage";
const loginpage = new loginPage()

beforeEach(() => {
    cy.visit('/login');
})
describe('Kiểm tra xác thực đầu vào', () => {
    let data = [
        ["' or 1=1--", "' or 1=1--"],
        ['or 1=1-', 'or 1=1-'],
        ['or 1=1/*', 'or 1=1/*'],
        ['" or "a"="a', '" or "a"="a'],
        [' OR 1=1',' OR 1=1']
    ]

    data.forEach(row => {
        it('Kiểm tra SQL Injection', function() {
            loginpage.setClickCancel();
            if (row.length > 0) {
                //print console
                console.log(row[0]);
                console.log(row[1]);

                loginpage.clearEmail();
                loginpage.clearPassword();

                loginpage.setEmail(row[0]);

                loginpage.setPassword(row[1]);

                loginpage.clickSubmit();

                cy.wait(1000)

                cy.get(loginpage.btnSubmit).should('be.visible')

                cy.clearAllCookies()

                cy.reload()

            }
        })
    })
});