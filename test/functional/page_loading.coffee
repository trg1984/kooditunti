# Module dependencies.
test = require('selenium-webdriver/testing')
webdriver = require('selenium-webdriver')
assert = require('assert')
h = require('../helpers');
_ = require("underscore")

test.describe "Load each page", ->
  @timeout 15000

  driver = undefined
  test.before ->
    driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build()

  test.after ->
    driver.quit()

  _.each h.pageArray, (page) ->
    test.it page, ->
      driver.get "http://localhost:3000"+page
      # think of things you might want to test on each page...

  return

