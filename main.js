import { Animation } from "./modulos/animation.js";

let run = new Animation(new Image("assets/goku01.png", RAM), 60, 60, 2, 110, true);

let time = Timer.new();
let lastTime = 0;

while(true) {
    let currentTime = Timer.getTime(time) / 1000;
    let deltaTime = currentTime - lastTime;
    lastTime = currentTime;
    
    Screen.clear();

    run.draw(180, 310);


    Screen.flip();
}
