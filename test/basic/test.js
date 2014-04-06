
test("Base asserts", function() {

    ok( true , "True is always true");

    equal( true , 1, "Truthy equality check");
    notEqual( true, 0, "Falsy equality check");

    strictEqual(0, 0, "Strict equality check");
    notStrictEqual(0, false, "Strict inequality check");
});

test("Object asserts", function() {

    deepEqual( { foo : { bar : true} },  { foo : { bar : true} }, "Recursive comparison");
    notDeepEqual( { foo : { bar : true} },  { foo : { bar : false} }, "Recursive comparison");

    propEqual(/^abc/, new RegExp('^abc'), "Object strict comparison made with different constructor or prototype");
});


test("Error asserts", function() {

    throws(function() { throw new Error(); }, "Check the function throws something");
    throws(function() { throw new Error(); }, Error, "Check the function throws an Error");
    throws(function() { throw "oh crap!"; }, "oh crap!", "Check the function error message thrown");
    throws(function() { throw "oh crap!"; }, /crap/, "Check the function error message thrown");
});


test("Asserts Namspace", function( assert ) {
    
    ok( true, "global");
    assert.ok( true, "function argument");
    QUnit.assert.ok( true, "namspaced");

});
