class Bird {
    // game is a passed gameEngine in main.
    //Here gameEngine passed in order to pull clockTick out of it
    constructor(game) {
        this.game = game;
        this.speed = -120;
        this.x = 1024;
        this.y = 50;
        //constructor(spritesheet, xStart, yStart, width, height, "maybe PADDING in here?" frameCount, frameDuration)
        // this.crowAnimator = new Animator(ASSET_MANAGER.getAsset("./crow.png"), 0, 0, 205, 210, 24, 0.3);
        this.birdAnimator = new Animator(ASSET_MANAGER.getAsset("./bird.png"), 0, 0, 240, 315, 20, 0.2);
        };
        
    /* animations from different rows of the spriteSheet should go here, see Mario.js file. not here, but in animator */
    
    update() {
        this.x += this.speed * this.game.clockTick;

        if(this.x < -240){
            this.y = Math.floor((Math.random() * 200) + 50);
            this.x = 1024;
        }

    };

    draw(ctx) {
        // this.crowAnimator.drawFrame(this.game.clockTick, ctx, 25, 150);
        this.birdAnimator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
        // ctx.drawImage(ASSET_MANAGER.getAsset("./bird.png"), 0, 0);
    };
}