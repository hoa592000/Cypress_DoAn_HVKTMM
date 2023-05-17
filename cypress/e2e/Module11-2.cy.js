//Kiểm tra html injection
import loginPage from "../PageObjects/loginPage";
const loginpage = new loginPage()
import homePage from "../PageObjects/homePage";
const homepage = new homePage()

beforeEach('Đăng nhập', () => {
    cy.visit('/login');

    loginpage.setClickCancel();

    loginpage.setEmail("admin@juice-sh.op");

    loginpage.setPassword("admin123");

    loginpage.clickSubmit();

})

it('html injection', () => {

    cy.get('button#navbarAccount').click();

    cy.wait(1000)

    cy.get('button[role="menuitem"]')
        .contains("admin@juice-sh.op")
        .click();

    cy.get('#username').clear();

    cy.get('#username').type('<b>1</b>');
    cy.wait(1000)

    cy.get('#submit').click();

    cy.get('i[class="material-icons"]').click();

    cy.wait(1000)

    homepage.setClickMenu();

    homepage.setClickSupportChat();

    cy.get('div[class="speech-bubble-left"]').contains(" Nice to meet you <b>1</b>, I'm Juicy ").should('not.exist');

    cy.wait(1000)

})