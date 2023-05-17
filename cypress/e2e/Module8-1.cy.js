import { printf } from "extsprintf";
import loginPage from "../PageObjects/loginPage";
const loginpage = new loginPage()
import homePage from "../PageObjects/homePage";
const homepage = new homePage()
beforeEach(() => {
    cy.visit('/login');

    loginpage.setClickCancel();

    loginpage.setEmail("thanhhoa592000@gmail.com");

    loginpage.setPassword("1234567");

    loginpage.clickSubmit();
})
describe('Kiểm tra xử lý lỗi', () => {
    let data = [
        ["coupon code"],
        ["coupon code"],
        ["coupon code"],
        ["coupon code"],
        ["coupon code"],
        ["coupon code"],
        ["coupon code"],
        ["coupon code"],
        ["coupon code"],
        ["coupon code"],
        ["coupon code"],
        ["coupon code"],
        ["coupon code"],
        ["coupon code"],
        ["coupon code"],
        ["coupon code"],
        ["coupon code"],
        ["coupon code"],
        ["coupon code"],
        ["coupon code"],
        ["coupon code"],
        ["coupon code"]

    ]
    it('Kiểm tra xử lý lỗi ', function() {
        homepage.setClickMenu();
        cy.wait(1000)

        homepage.setClickSupportChat();
      
        data.forEach(row => {

            if (row.length > 0) {

                cy.get('#message-input').type(row[0]).type('{enter}');

                cy.wait(700)
            }
        })
       
        cy.get('div[class="speech-bubble-left"]').contains(" Oooookay, if you promise to stop nagging me here's a 10% coupon code for you: o*I]qgC7sn ").should('not.exist');

    })
});