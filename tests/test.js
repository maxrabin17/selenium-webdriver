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
    await driver.get("https://sso.zeachable.com/secure/123/identity/sign_up/with_email");
    await driver.findElement(By.id("user_name")).sendKeys(`${firstTest.username}`)
    await driver.findElement(By.id("user_email")).sendKeys(`${firstTest.email}`)
    await driver.findElement(By.id("password")).sendKeys(`${firstTest.pass}`, Key.RETURN)
    
    
    // SECOND TEST CHECKS TO SEE IF YOU CAN LOGIN WITH A **INVALID** EMAIL
    await driver.get("https://sso.zeachable.com/secure/123/identity/login"); // LOGIN PAGE
    await driver.findElement(By.id("email")).sendKeys(`${firstTest.email}`) // 
    await driver.findElement(By.id("password")).sendKeys(`${firstTest.pass}`, Key.RETURN)
    
    // THIRD TEST CHECKS TO SEE 
    await driver.get("https://sso.zeachable.com/secure/123/identity/sign_up/with_email");
    await driver.findElement(By.id("user_name")).sendKeys(`${secondTest.username}`)
    await driver.findElement(By.id("user_email")).sendKeys(`${email}`)
    await driver.findElement(By.id("password")).sendKeys(`${secondTest.pass}`, Key.RETURN)
    await driver.get("https://takehome.zeachable.com/sign_out")
    await driver.get("https://sso.zeachable.com/secure/123/identity/login");
    await driver.findElement(By.id("email")).sendKeys(`${email}`)
    await driver.findElement(By.id("password")).sendKeys(`${secondTest.pass}`, Key.RETURN)
}
tests()