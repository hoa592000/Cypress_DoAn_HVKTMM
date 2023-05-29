import loginPage from "../PageObjects/loginPage";
const loginpage = new loginPage();

beforeEach('Đăng nhập', () => {
    cy.visit('/login');

    loginpage.setClickCancel();

    loginpage.setEmail("admin@juice-sh.op");

    loginpage.setPassword("admin123");

    loginpage.clickSubmit();

})

describe('Kiểm tra xác thực đầu vào', () => {
    let data1 = [
        ['<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/771984076&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" id = "BugXSS"></iframe>'],
        ['<body onafterprint=alert(1)>']
    ]
    const data2 = [
        { data: "Green Smoothie"},
        { data: "Lemon Juice" },
        { data: "Apple"},
    ]

    data1.forEach(row => {
        it('Search: Kiểm tra Cross Site Scripting (XSS)', function() {
            if (row.length > 0) {
                cy.get('#searchQuery').click()
                cy.get('#mat-input-0')
                    .type(row[0])
                    .type('{enter}')

                cy.wait(1000);

                cy.get('#BugXSS').should('not.exist');

                cy.clearAllCookies();
            }
        })
    })
    data2.forEach((row, index) => {
        if (index <= 1) {
            it('Search: Kiểm tra với kết quả đúng', function () {
                cy.get('#searchQuery').click()
                cy.get('#mat-input-0')
                    .type(row.data)
                    .type('{enter}')

                cy.wait(1000); 
                cy.get('div[class="item-name"]').contains(row.data);             
            })

        }
        else if (index > 0) {
            it('Search: Kiểm tra với nhiều kết quả đúng', function () {
                cy.get('#searchQuery').click()
                cy.get('#mat-input-0')
                    .type(row.data)
                    .type('{enter}')

                cy.wait(1000); 
                cy.get('div[class="item-name"]').contains(row.data);            
            })
        }
    })
})