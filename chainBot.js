class ChainBot {
    // game is a passed gameEngine in main.
    //Here gameEngine passed in order to pull clockTick out of it
    constructor(game) {
        this.game = game;
        this.speed = 0;
        this.x = 150;
        this.y = 150;
        //constructor(spritesheet, xStart, yStart, width, height, paddingY, frameCount, frameDuration)
        
        this.animator = new Animator(ASSET_MANAGER.getAsset("./attack.png"), 41, 0, 83, 36, 4, 8, 0.3);
        };
        
    /* animations from different rows of the spriteSheet should go here, see Mario.js file. not here, but in animator */
    
    update() {
        this.x += this.speed * this.game.clockTick;
    };

    draw(ctx) {
        // this.crowAnimator.drawFrame(this.game.clockTick, ctx, 25, 150);
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
        // ctx.drawImage(ASSET_MANAGER.getAsset("./bird.png"), 0, 0);
    };
}