
module("ZombieFactory");

test("factory structure", function testStructure( assert ){
    
    assert.ok( window.zombieFactory, 'The zombieFactory is available globaly'); 
    assert.equal( (typeof window.zombieFactory), 'function', 'The zombieFactory is a function'); 

});

module("Zombehavior");
