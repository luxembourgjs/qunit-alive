(function($){

    var zFactory = window.zombieFactory;
    var $container = $('.zombies');

    var z1 = zFactory($container);
    var z2 = zFactory($container);
    var z3 = zFactory($container);

    z1.attack();
    z2.attack();
    z3.attack();

    setTimeout(function(){

        z1.die();
        z2.die();
        z3.die();

    }, 30000);    

}(jQuery));
