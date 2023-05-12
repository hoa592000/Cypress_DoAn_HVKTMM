import { printf } from "extsprintf";
import loginPage from "../PageObjects/loginPage";
const loginpage = new loginPage()

beforeEach(() => {
    cy.visit('/login');
})
describe('Kiểm tra xác thực đầu vào', () => {
    let data = [
        ["coupon code"],
        ["coupon code"],
        ["coupon code"],
        ["coupon code"],
        ["coupon code"]
    ]

    data.forEach(row => {
        it('Kiểm tra xử lý lỗi ', function() {
            loginpage.setClickCancel();
            if (row.length > 0) {
                //print console
                console.log(row[0]);


        
                cy.clearAllCookies()

                cy.reload()

            }
        })
    })
});