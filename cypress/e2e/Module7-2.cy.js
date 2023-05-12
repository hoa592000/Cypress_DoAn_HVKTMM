import loginPage from "../PageObjects/loginPage";
const loginpage = new loginPage();

beforeEach('Đăng nhập', () => {
    cy.visit('/');

    loginpage.setClickCancel();

    // loginpage.setEmail("admin@juice-sh.op");

    // loginpage.setPassword("admin123");

    // loginpage.clickSubmit();

})

describe('Kiểm tra xác thực đầu vào', () => {
    let data = [
        ['<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/771984076&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>'],
        ['</script><svg onload=alert(1)>'],
        ['<svg/onload=location=name>']
    ]
    data.forEach(row => {
        it('Kiểm tra Cross Site Scripting (XSS)', function() {
            if (row.length > 0) {
                //print console
                console.log(row[0]);


                cy.window().then((win) => {
                    cy.stub(win, 'confirm').returns(true)
                })
                cy.window().document()
                    .then(function(doc) {
                        doc.addEventListener("load", () => {      setTimeout(function() {       doc.location.reload();      }, 4000);     });    
                        // cy.get('body > app-root > div > mat-sidenav-container > mat-sidenav-content > app-navbar > mat-toolbar > mat-toolbar-row > button:nth-child(2)').click()
                        cy.reload()
                        cy.get('#searchQuery').click()
                        cy.get('#mat-input-0')
                            // .click()
                            .type(row[0])
                            .type('{enter}')
                    });
                cy.wait(10000)
                    // cy.on('window:confirm', () => true)
                cy.get('mat-card[class="mat-card mat-focus-indicator accent-notification ng-star-inserted"]').should('be.visible');

                cy.clearAllCookies()
                cy.reload()
            }
        })
    })

})