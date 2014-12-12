# * Module dependencies.
request = require("supertest")
should = require("should")
app = require("../../server")
h = require('../helpers');
_ = require("underscore")

before (done) ->
  # clear db and other stuff
  debugger;
  done()

describe "routes", ->
  describe "existing pages", ->
    _.each h.pageArray, (page) ->
      it "should respond with 200 on " + page, (done) ->
        request(app)
        .get(page)
        .expect(200)
        .end (err,res) ->
          res.status.should.equal(200);
          done()

  describe "non existent page", ->
    it "should respond with 404", (done) ->
      request(app)
      .get('/page-not-found-aafasdfasdf')
      .expect(404)
      .end (err,res) ->
        res.status.should.equal(404);
        done()

after (done) ->
  done()
