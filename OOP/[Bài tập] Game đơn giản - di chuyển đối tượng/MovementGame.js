class Hero {
    constructor(image, top, left, size, speed) {
        this.image = image;
        this.top = top;
        this.left = left;
        this.size = size;
        this.speed = speed;

        this.getHeroElement = function () {
            return `<img width="${this.size}px"
                 height="${this.size+100}px"
                 src="${this.image}"
                 style="top:${this.top}px; left:${this.left}px;position:absolute;" />`;
        };

        this.moveRight = function () {
            this.left += this.speed;
            console.log('ok: ' + this.left);
        };
        this.moveLeft = function () {
            this.left -= this.speed;
        }
        this.moveBottom = function() {
            this.top += this.speed;
        }
    }
}

  let hero = new Hero('Screenshot 2022-03-14 161932.png', 20, 30, 200, 60);
  
  function start(){
    if (hero.left < window.innerWidth - hero.size && hero.top < window.innerHeight - hero.size){
      hero.moveRight();
    } 
    else if(hero.top < window.innerHeight - hero.size){
      hero.moveBottom();
    }
    else if (hero.top = window.innerHeight - hero.size){
        hero.moveLeft();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
  }
  
  start();