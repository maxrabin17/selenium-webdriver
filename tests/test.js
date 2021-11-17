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
        console.log("test complete")
    }, 1000)
    
    
    // SECOND TEST CHECKS TO SEE IF YOU CAN CREATE AN ACCOUNT WITH A **VALID** EMAIL
    await driver.get("https://sso.zeachable.com/secure/123/identity/sign_up/with_email");
    await driver.findElement(By.id("user_name")).sendKeys(`${secondTest.username}`)
    await driver.findElement(By.id("user_email")).sendKeys(`${email}`)
    await driver.findElement(By.id("password")).sendKeys(`${secondTest.pass}`, Key.RETURN)
    setTimeout(() => {
        driver.close()
        console.log("test complete")
    }, 1000)
}
signUpTests()


async function loginTests() {
    // BROWSER DRIVER
    let driver = await new Builder().forBrowser("chrome").build();
    

    // THIRD TEST CHECK TO SEE IF YOU CAN LOGIN WITH A **INVALID** EMAIL
    await driver.get("https://sso.zeachable.com/secure/123/identity/login");
    await driver.findElement(By.id("email")).sendKeys(`${firstTest.email}`)
    await driver.findElement(By.id("password")).sendKeys(`${firstTest.pass}`, Key.RETURN)
    setTimeout(() => {
        driver.close()
        console.log("test complete")
    }, 1000)
    

    // FOURTH TEST CHECKS TO SEE IF YOU CAN LOGIN WITH A **VALID** EMAIL
    await driver.get("https://sso.zeachable.com/secure/123/identity/login");
    await driver.findElement(By.id("email")).sendKeys(`${email}`)
    await driver.findElement(By.id("password")).sendKeys(`${secondTest.pass}`, Key.RETURN)
    setTimeout(() => {
        driver.close()
        console.log("test complete")
    }, 1000)
}
// loginTests()
setTimeout(loginTests, 6000)
        
        
        /* ----------------------------------------------------- .THEN WAY?????*/
        
// let browser = new Builder();
// let webpage = browser.forBrowser("chrome").build();
// let webpageToOpen = webpage.get("https://sso.zeachable.com/secure/123/identity/sign_up/with_email")

// webpageToOpen
//     .then(function () {
//         webpage.findElement(By.id("user_name")).sendKeys(`${firstTest.username}`)
//         webpage.findElement(By.id("user_email")).sendKeys(`${firstTest.email}`)
//         webpage.findElement(By.id("password")).sendKeys(`${firstTest.pass}`, Key.RETURN)
//         setTimeout(() => {
//             webpage.close()
//         }, 1000)

        
//     })
//     .then(function () {
//         webpage.findElement(By.id("user_name")).sendKeys(`${secondTest.username}`)
//         webpage.findElement(By.id("user_email")).sendKeys(`${email}`)
//         webpage.findElement(By.id("password")).sendKeys(`${secondTest.pass}`, Key.RETURN)
//         setTimeout(() => {
//             webpage.close()
//         }, 1000)
//     }) 
                        
