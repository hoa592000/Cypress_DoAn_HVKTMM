describe('POST', () => {
    it('XSS đăng kí', () => {
        cy.request({
            url: 'https://juice-shop.eliitme.xyz/#/register',
            method: 'POST',
            cache: 'no-cache',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email: '<iframe src="javascript:alert(`xss`)">',
                password: 'XSSed',
                passwordRepeat: 'XSSed',
                role: 'admin'
            })
        }).then((res) => {
            expect(res.status).to.eq(400);
            console.log('Success');
        })
    })
})