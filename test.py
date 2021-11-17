from selenium.webdriver import Chrome

browser = Chrome()
browser.get('https://www.browserstack.com')
print(browser.title)
browser.close()