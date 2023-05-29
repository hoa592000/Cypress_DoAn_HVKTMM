import { printf } from "extsprintf";
import loginPage from "../PageObjects/loginPage";
const loginpage = new loginPage()

describe('Kiểm tra quản lý định danh', () => {
    const data = [
        { email: "thanhhoa592000@gmail.com", pass: "1234567" },
        { email: "kimsamule592000@gmail.com", pass: "Chaizo7^^" },
        { email: "kimsamule@gmail.com", pass: "Chazio7^^" },
        { email: "kimsamule59200@gmail.com", pass: "chazio7^^" },
        { email: "kimsamule", pass: "Chaizo7^^" },
        { email: "kimsamule.gmail.com", pass: "Chaizo7^^" },
    ];

    data.forEach((row, index) => {
        if (index <= 1) {
            it('Định danh người dùng', () => {
    
                cy.visit('/login');
        
                loginpage.setClickCancel();
        
                loginpage.setEmail(row.email);
        
                loginpage.setPassword(row.pass);
        
                loginpage.clickSubmit();
        
                cy.wait(1000);
        
                cy.get('button#navbarAccount').click();
        
                cy.get('button[role="menuitem"]')
                    .contains(row.email).should('be.visible');
        
            })
        }
        else if (index > 1) {
            it('Kiểm tra quản lý định danh: người dùng nhập sai', function () {

                cy.visit('/login');
        
                loginpage.setClickCancel();
        
                loginpage.setEmail(row.email);
        
                loginpage.setPassword(row.pass);
        
                loginpage.clickSubmit();
        
                cy.wait(1000);
        
                cy.get('button#navbarAccount').click();

                cy.wait(1000);

                loginpage.getErrorMessage()

            })
        }
    })
})