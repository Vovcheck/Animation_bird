/**
 * Picks the frame and draws it into the proper location.
 */
class Animator{
    constructor(spritesheet, xStart, yStart, width, height, paddingY, frameCount, frameDuration) {
      Object.assign(this, {spritesheet, xStart, yStart, width, height, paddingY, frameCount, frameDuration});

    this.elapsedTime = 0;
    // this - means for this object. For other animation we gonna hava many animator objects.
    this.totalTime = this.frameCount * this.frameDuration;
    
    };

    drawFrame(tick, ctx, x, y) {
        this.elapsedTime += tick;
        let frame = this.currentFrame();
                
        //keeps running it over and over
        if(this.elapsedTime > this.totalTime) {
            this.elapsedTime -= this.totalTime; // this.elapsedTime = 0: also works
        }
        
        ctx.drawImage(this.spritesheet,
            this.xStart , this.yStart + frame * (this.height + this.paddingY), //source x and y (for example, use "0, 0" on call ofthis function)
            this.width, this.height, //source width and hight
            x, y, //destination x and y, where to draw this frame
            this.width*1.5, this.height*1.5  // 1.5 is scale
                        
            ); //destination width and hight
       
    };

// frame count starts from 0 (zero)
currentFrame(){
    return Math.floor(this.elapsedTime / this.frameDuration);
    };

    // for shooting, jumping. looping - to start loop again (walking)
isDone() {
    return (this.elapsedTime >= this.totalTime);
    };
}