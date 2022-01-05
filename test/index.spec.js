const expect=require('chai').expect;

const app=require('../index.js');

describe('App',function(){
  it("returns  total as Number",function(){
    expect(app.total()).to.be.a('number');
  })
  it("returns  saleTax as string",function(){
    expect(app.salesTax()).to.be.a("string");
  })
  it("returns  output as Object",function(){
    expect(app.output()).to.be.a("object");
  })
  it("returns  output as Object",function(){
    expect(app.output()).to.be.a("object");
  })
  it("returns  output as true",function(){
    expect(app.output().BookSS.imp).to.be.false;
  })
  it("returns  salestax as 4 length",function(){
    expect(app.salesTax()).to.have.lengthOf(4);
  })
  it("returns  total as 2 digit past decimal",function(){
    expect(app.salesTax().split("")).to.have.lengthOf(4);
  })
})