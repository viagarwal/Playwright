import test, { APIRequestContext, request, expect } from '@playwright/test';



test.describe('API testomat requests', () => {
    const USER = {
        email: "jolir86609@ikanid.com",
        pwd: "password",
        token: "",
        prj_token: ""
    }
    const PRJ = "second-project-cd17c";

    test('API Post Request', async ({request}) => {
        const res = await request.post('https://app.testomat.io/api/login',{
            data:{
                "email": USER.email,
                "password": USER.pwd
            }
        });
        expect(res.status()).toBe(200)
        const body = await res.json();
        USER.token = body.jwt;
        console.log("TOKEN", USER.token);
    });

});