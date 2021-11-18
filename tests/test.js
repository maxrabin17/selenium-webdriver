const { By, Key, Builder } = require("selenium-webdriver");
const {firstTest, secondTest} = require("./credentials.json");
require("chromedriver");

// EMAIL GENERATOR
let chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
let string = '';
for (let i = 0; i < 15; i++) {
    string += chars[Math.floor(Math.random() * chars.length)];
}
let email = string + '@gmail.com';

async function tests() {
    // BROWSER DRIVER
    let driver = await new Builder().forBrowser("chrome").build();
    
    // FIRST TEST CHECKS TO SEE IF YOU CAN CREATE AN ACCOUNT WITH A **INVALID** EMAIL
    await driver.get("https://sso.zeachable.com/secure/123/identity/sign_up/with_email"); // SIGN UP PAGE
    await driver.findElement(By.id("user_name")).sendKeys(`${firstTest.username}`) // FILLS SIGN IN INFO
    await driver.findElement(By.id("user_email")).sendKeys(`${firstTest.email}`) // FILLS SIGN IN INFO
    await driver.findElement(By.id("password")).sendKeys(`${firstTest.pass}`, Key.RETURN) // FILLS SIGN IN INFO AND SUBMITS FORM
    console.log("Incorrect email format - Test Complete")
    
    // SECOND TEST CHECKS TO SEE IF YOU CAN LOGIN WITH A **INVALID** EMAIL
    await driver.get("https://sso.zeachable.com/secure/123/identity/login"); // LOGIN PAGE
    await driver.findElement(By.id("email")).sendKeys(`${firstTest.email}`) // FILLS LOGIN INFO
    await driver.findElement(By.id("password")).sendKeys(`${firstTest.pass}`, Key.RETURN) // FILLS LOGIN INFO AND SUBMITS FORM
    console.log("Incorrect email format - Test Complete")

    // THIRD TEST CHECKS TO SEE IF USER CAN SIGN UP WITH A **VALID** EMAIL
    await driver.get("https://sso.zeachable.com/secure/123/identity/sign_up/with_email"); // SIGN UP PAGE
    await driver.findElement(By.id("user_name")).sendKeys(`${secondTest.username}`) //FILLS INFO
    await driver.findElement(By.id("user_email")).sendKeys(`${email}`) // FILLS INFO
    await driver.findElement(By.id("password")).sendKeys(`${secondTest.pass}`, Key.RETURN) // FILLS INFO
    await driver.get("https://takehome.zeachable.com/sign_out") // SIGNS USER OUT
    console.log("Account created - Test Complete")


    // FOURTH TEST CHECKS TO SEE IF USER CAN LOGIN WITH A **VALID** EMAIL
    await driver.get("https://sso.zeachable.com/secure/123/identity/login"); //SIGNS USER IN
    await driver.findElement(By.id("email")).sendKeys(`${email}`) // FILLS INFO
    await driver.findElement(By.id("password")).sendKeys(`${secondTest.pass}`, Key.RETURN) // FILLS INFO
    await driver.close() // CLOSES DRIVER
    console.log("Login Successful - Test Complete")
}

// TEST RUNNER
async function testRunner() {
    try {
        return await tests()
    } catch (e) {
        console.error(e)
    }
}
testRunner()