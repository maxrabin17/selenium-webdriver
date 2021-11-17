const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");
let {firstTest, secondTest} = require("./credentials.json");

// EMAIL GENERATOR
let chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
let string = '';
for (let i = 0; i < 15; i++) {
    string += chars[Math.floor(Math.random() * chars.length)];
}
let email = string + '@gmail.com';

async function signUpTests() {

    // BROWSER DRIVER
    let driver = await new Builder().forBrowser("chrome").build();

    // FIRST TEST CHECKS TO SEE IF YOU CAN CREATE AN ACCOUNT WITH A **INVALID** EMAIL
    
    await driver.get("https://sso.zeachable.com/secure/123/identity/sign_up/with_email");
    await driver.findElement(By.id("user_name")).sendKeys(`${firstTest.username}`)
    await driver.findElement(By.id("user_email")).sendKeys(`${firstTest.email}`)
    await driver.findElement(By.id("password")).sendKeys(`${firstTest.pass}`, Key.RETURN)
    setTimeout(() => {
        driver.close()
    }, 2000)
    

    // SECOND TEST CHECKS TO SEE IF YOU CAN CREATE AN ACCOUNT WITH A **VALID** EMAIL

    await driver.get("https://sso.zeachable.com/secure/123/identity/sign_up/with_email");
    await driver.findElement(By.id("user_name")).sendKeys(`${secondTest.username}`)
    await driver.findElement(By.id("user_email")).sendKeys(`${email}`)
    await driver.findElement(By.id("password")).sendKeys(`${secondTest.pass}`, Key.RETURN)
    setTimeout(() => {
        driver.close()
    }, 2000)


    // THIRD TEST CHECK TO SEE IF YOU CAN LOGIN WITH A **INVALID** EMAIL

    // await driver.get("https://sso.zeachable.com/secure/123/identity/login");
    // await driver.findElement(By.id("email")).sendKeys(`${firstTest.email}`)
    // await driver.findElement(By.id("password")).sendKeys(`${firstTest.pass}`)


    // FOURTH TEST

    // setTimeout(async () => {
    //     let driver = await new Builder().forBrowser("chrome").build();
    //     await driver.get("https://sso.zeachable.com/secure/123/identity/login");
    //     await driver.findElement(By.id("email")).sendKeys(`${firstTest.email}`)
    //     await driver.findElement(By.id("password")).sendKeys(`${firstTest.pass}`, Key.RETURN)
    //     // driver.close()
    // }, 5000)
    
}
signUpTests()

// async function loginTests() {
//     let driver = await new Builder().forBrowser("chrome").build();

//     let chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
//     let string = '';
//     for (let i = 0; i < 15; i++) {
//         string += chars[Math.floor(Math.random() * chars.length)];
//     }
//     let email = string + '@gmail.com';

//     await driver.get("https://sso.zeachable.com/secure/123/identity/sign_up/with_email");
//     setTimeout(async () => {
//         await driver.findElement(By.id("user_name")).sendKeys(`${secondTest.username}`)
//         await driver.findElement(By.id("user_email")).sendKeys(`${email}`)
//         await driver.findElement(By.id("password")).sendKeys(`${secondTest.pass}`)
//         await driver.findElement(By.id("password")).sendKeys(Key.RETURN)
//         driver.close()
//     }, 2000)
// }
// loginTests()

// THIRD TEST CHECK TO SEE IF YOU CAN LOGIN WITH A **INVALID** EMAIL
