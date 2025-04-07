export class Animation {
    constructor(image, frameWidth, frameHeight, totalFrames, speed, loop) {
        this.image = image;
        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;
        this.totalFrames = totalFrames;
        this.speed = speed;
        this.loop = loop;
        this.scale = 1.5;

        this.currentFrame = 0;
        this.elapsedTime = 0;
    }

    update(deltaTime) {
        this.elapsedTime += deltaTime;

        if (this.elapsedTime > this.speed) {
            if (this.loop) {
                this.currentFrame = (this.currentFrame + 1) % this.totalFrames;
            } else {
                if (this.currentFrame < this.totalFrames - 1) {
                    this.currentFrame++;
                }
            }
            this.elapsedTime = 0;
        }
    }

    draw(x, y) {
        this.image.startx = this.currentFrame * this.frameWidth;
        this.image.starty = 0;
        
        this.image.endx = this.currentFrame * this.frameWidth + this.frameWidth;
        this.image.endy = this.frameHeight;
        
        this.image.width = this.frameWidth * this.scale;
        this.image.height = this.frameHeight * this.scale;
        
        this.image.draw(x, y);
    }
}
