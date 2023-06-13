
    it.only('POST - XSS đăng kí', () => {
        cy.request({
            url: 'https://juice-shop.oliveit.info/api/Users/',
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

    it.only('POST -  đăng nhập', () => {
        cy.request({
            url: 'https://juice-shop.oliveit.info/rest/user/login',
            method: 'POST',
            cache: 'no-cache',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email: 'thanhhoa592000@gmail.com',
                password: '1234567'
            })
        }).then((response) => {
            // expect(response.status).to.eq(200);
            cy.log(response.body.authentication.token);
            const access_token = response.body.authentication.token;

            cy.request({
                url: 'https://juice-shop.oliveit.info/user/whoami',
                method: 'GET',
                cache: 'no-cache',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': 'Bearer ' + access_token,
                    'Cookie': 'language=en; token=' + access_token
                },
            }).then((response1) => {
                expect(response1.status).to.eq(200);
                cy.log(JSON.stringify(response1.body.user));
            })
        })

    })
