
var chai = require('chai');
var expect = require('chai').expect;

var module = require( '../../js/module1.js' );

describe( 'Some module that does somthing', function() {

  it( 'should not throw any errors on init', function() {
    expect( () => module.init() ).to.not.throw();
  });

});
