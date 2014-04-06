(function($, _){

    var template = _.template('<div id="${id}" class="zombie"><img src="${src}" alt="${id}" /></div>');
    var zombies = 0;

    window.zombieFactory = function($container){

        var id = 'z' + zombies;

        //create the element
        var $elt = $(template({
           id  : id,
           src : 'img/zombie_' + _.random(1, 4) + '.png'
        }))
        .css({
            top: zombies * 200,
            left: 0
        })
        .appendTo($container);



        // the new zombie
        var zombie = {
    
            id : id,        

            //keep a ref to the node
            elt : $elt,
            
            //start to attack the hospital
            attack : function(){
               var self = this; 
               
               var moving = false;
               this._interval = setInterval(function loop(){        
                   var delay;
                   if(moving === false){
                    moving = true;
                    delay = _.random(500, 7500);
                    _.delay(function move(){
                        var srcPos = parseInt(self.elt.css('left'), 10) || 0;
                        var destPos = srcPos + 150;
                        
                        self.elt.animate({'left': destPos}, delay);

                        $container.trigger('move.zombie', [zombie, srcPos, destPos]);
 
                        moving = false;
                    }, delay);
                   }
               }, 100);

               $container.trigger('attack.zombie', [zombie]);
            },

            // zombie's dead  
            die : function(){
               var self = this; 
                if(this._interval){
                    clearInterval(this._interval);
                }
            
                this.elt.animate({'opacity': 0}, 600, function(){
                    self.elt.remove(); 
                });

                $container.trigger('dead.zombie', [zombie]);
            }
        };

        zombies++;
        $container.trigger('created.zombie', [zombie]);

        return zombie;
    };

}(jQuery, _));
