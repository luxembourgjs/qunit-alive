
module("ZombieFactory");

test("factory structure", function testStructure( assert ){
    
    assert.ok( window.zombieFactory, 'The zombieFactory is available globaly'); 
    assert.equal( (typeof window.zombieFactory), 'function', 'The zombieFactory is a function'); 

});

test("factory", function testStructure( assert ){
    var $container = $('#zombie-container');
    var z1 = window.zombieFactory($container);
 
    assert.equal( (typeof z1) , 'object', 'The zombieFactory creates an object'); 
    assert.notDeepEqual(z1, window.zombieFactory($container), 'The factory creates different instances'); 

});


module("Zombehavior");

asyncTest("Test zombie attack", function( assert ){
    expect( 2 );

    var $container = $('#zombie-container');
    var z1 = window.zombieFactory($container);
    
    z1.on('attack.zombie', function(){
        
        assert.ok( true,  "z1 attack has began, run man, run!");
        assert.equal( z1.elt.length, 1, "z1 invades our DOM");

        start();
    });

    z1.attack();
});


asyncTest("Test zombie's moving", function( assert ){
    expect( 4 );

    var $container = $('#zombie-container');
    var z1 = window.zombieFactory($container);
    
    z1.on('move.zombie', function(src, dest){        

        assert.ok( true,  "z1 is alive!");
        assert.equal( (typeof src), 'number', 'the source position is a numer');
        assert.equal( (typeof dest), 'number', 'the destination position is a numer');
        assert.ok( dest > src, 'z1 goes forward');
      
        z1.die();
        
        start();
    });

    z1.attack();
});
