var $fixture = $('#qunit-fixture');

module("ZombieFactory");

test("factory structure", function testStructure( assert ){
    
    assert.ok( window.zombieFactory, 'The zombieFactory is available globaly'); 
    assert.equal( (typeof window.zombieFactory), 'function', 'The zombieFactory is a function'); 

});

test("factory", function testStructure( assert ){
    var $container = $('#zombie-container', $fixture);
    var z1 = window.zombieFactory($container);
 
    assert.equal( (typeof z1) , 'object', 'The zombieFactory creates an object'); 
    assert.notDeepEqual(z1, window.zombieFactory($container), 'The factory creates different instances'); 

});


module("Zombehavior");

asyncTest("Test zombie attack", function( assert ){
    expect( 1 );

    var $container = $('#zombie-container', $fixture);
    var z1 = window.zombieFactory($container);

    z1.on('attack.zombie', function(){
        assert.ok(true, "z1 is started");          
        start();
    });
    z1.attack();
});
