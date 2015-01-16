# Module dependencies.
test = require('selenium-webdriver/testing')
webdriver = require('selenium-webdriver')
assert = require('assert')
_ = require("underscore")

test.describe "Load each page", ->
  @timeout 15000

  driver = undefined
  test.before ->
    #driver = new webdriver.Builder()
    #chrome = webdriver.Capabilities.chrome()
    #chrome.set('loggingPreferences', {
      #browser: 'ALL'
    #});
    ##chrome = webdriver.Capabilities.chrome(); # = new chrome.Options();
    ##opts = new chrome.Options();
    ##chrome.setLoggingPreferences({ browser: 'ALL' });
    ##driver.setLoggingPreferencess({ browser: 'ALL' });
    #driver.withCapabilities(chrome)
    #driver = driver.build()
    driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build()
    return

  test.after ->
    driver.quit()

  test.it "TEST", ->
    req = driver.get "http://localhost:3000/harjoitukset"

    driver.manage().logs().get('browser').then (logs) ->
      console.log logs
    #debugger;

  return

