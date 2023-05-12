import { before } from "lodash"
import registerPage from "../PageObjects/registerPage";
const registerpage = new registerPage();

describe('Kiểm tra quản lý định danh', () => {
    beforeEach(() => {
        cy.visit('/register');
    })

    it('Kiểm tra đăng kí người dùng mới', function() {

        registerpage.setClickCancel();
        registerpage.setInputEmail("thanhhoa592000@gmail.com");
        registerpage.setInputPassword("1234567");
        registerpage.setInputRepeatPassword("1234567");
        registerpage.setAnswerControl("test");
        registerpage.setClickRegister();
        cy.wait(1000)

        // cy.get('button[class="mat-focus-indicator mat-tooltip-trigger mat-raised-button mat-button-base mat-warn ng-star-inserted"').click();

        // //input email
        // cy.get('input[id="emailControl"][type="text"]').type('thanhhoa592000@gmail.com');
        
        // //input password
        // cy.get('input[id="passwordControl"][type="password"]').type('1234567');

        // //input repeat password
        // cy.get('input[id="repeatPasswordControl"][type="password"]').type('1234567');

        // // Click vào
        // cy.get('div[class="mat-form-field-infix ng-tns-c21-10"]').click();

        // // chọn câu hỏi security
        // cy.get('#mat-option-0').click();

        // // trả lời câu hỏi
        // cy.get('#securityAnswerControl').type('test');

        // //click đăng kí
        // cy.get('#registerButton').click();

    })
})












































































// describe('Test API', () => {
//     it('POST', () => {
//         // cy.getCookie('token').then((token) => {
//         cy.request({
//             url: 'https://juice-shop.eliitme.xyz/#/register',
//             method: 'POST',
//             cache: 'no-cache',
//             headers: {
//                 'Content-type': 'application/json'
//             },
//             body: JSON.stringify({
//                 email: '<iframe src="javascript:alert(`xss`)">',
//                 password: 'XSSed',
//                 passwordRepeat: 'XSSed',
//                 role: 'admin'
//             })
//         }).then((res) => {
//             expect(res.status).to.eq(200);
//         })
//     })
// })

// import { printf } from "extsprintf";
// import loginPage from "../PageObjects/loginPage";
// const loginpage = new loginPage()

// describe('GET', () => {
//     it('POST', () => {
//         // cy.getCookie('token').then((token) => {
//         cy.request({
//             url: 'https://juice-shop.eliitme.xyz/rest/user/login',
//             method: 'POST',
//             headers: { accept: 'application/json, text/plain, */*' },
//             body: {
//                 email: "' or 1=1--",
//                 password: "a"
//             }
//         })
//         if (Response.status === 200) {
//             console.log('thanh cong')
//         }
//     })

// // })
// import { printf } from "extsprintf";
// import loginPage from "../PageObjects/loginPage";
// const loginpage = new loginPage()

// describe('challenge login with Role', () => {
//     beforeEach(() => {
//         cy.visit('/login');
//         loginpage.setClickCancel();

//         loginpage.setEmail("' or 1=1--");

//         loginpage.setPassword("1234567");

//         loginpage.clickSubmit();

//         cy.wait(1000)

//     })
//     it('should log in Admin with role User', () => {
//         cy.visit('/administration');

//         cy.get('.mat-cell.mat-column-remove > button').should('be.visible');
//     })

// })
// describe('challenge login with Role', () => {
//     beforeEach(() => {
//         cy.visit('/login');
//         loginpage.setClickCancel();

//         loginpage.setEmail("long17@yopmail.com");

//         loginpage.setPassword("1234567");

//         loginpage.clickSubmit();

//         cy.wait(1000)

//     })
//     it('should log in Admin with role User', () => {
//         cy.visit('/administration');

//         cy.get('.mat-cell.mat-column-remove > button').should('be.visible');
//     })

// })