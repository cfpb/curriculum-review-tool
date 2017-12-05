
var chai = require('chai');
var expect = require('chai').expect;

var app = require( '../satellite/js/app.js' );

describe( 'Satellite app', function() {

  it( 'should not throw any errors on load', function() {
    expect( app ).to.not.throw();
  });

});
