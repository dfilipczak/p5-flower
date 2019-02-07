import * as p5 from 'p5';

const sketch = (p5: p5) => {
    p5.setup = () => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight);
        p5.frameRate(24)
        // p5.colorMode('hsb');
    }

    p5.draw = () => {
        const noise = p5.noise(p5.frameCount / 100)
        // draw a background using noise
        p5.background(noise * 255, noise * 205, 255, 10);

        // draw the title at the top
        // p5.textSize(69);
        // p5.textAlign('center', 'top');
        // p5.textFont('monospace')
        // p5.text('queer.code()', p5.width / 2, 20);

        // translate to the middle of the screen
        p5.translate(p5.width / 2, p5.height / 2)
        // set the colors
        p5.fill('yellow')
        p5.stroke('orange');
        p5.strokeWeight(30);
        const numPetals = 12;
        for(let i = 0; i<numPetals; i++) {
            p5.strokeWeight(noise*20)
            p5.rotate(p5.TWO_PI / numPetals + noise);
            p5.ellipse(0, 0, 100, 300 + (noise * 400))
        }
        p5.stroke('black');
        p5.point(0, 0)
    }
    
    p5.windowResized = () => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    }
}

var instance = new p5(sketch);
