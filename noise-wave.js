new p5((sketch) => {
    let yoff = 0;

    sketch.setup = () => {
        const canvas = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.zIndex = '-1';
    };

    sketch.draw = () => {
        sketch.background(24, 51);

        sketch.fill(16, 16, 16);
        sketch.noStroke();

        sketch.beginShape();

        sketch.curveVertex(0, sketch.height);
        sketch.curveVertex(0, sketch.height);

        let xoff = 0;
        for (let x = 0; x <= sketch.width; x += 40) {
            const y = sketch.map(sketch.noise(xoff, yoff), 0, 1, sketch.height * 0.25, sketch.height * 0.9);
            sketch.curveVertex(x, y);
            xoff += 0.045; // Cuanto más pequeño, menos oscilaciones
        }

        sketch.curveVertex(sketch.width, sketch.height);
        sketch.curveVertex(sketch.width, sketch.height);

        sketch.endShape(sketch.CLOSE);

        yoff += 0.002;
    };

    sketch.windowResized = () => {
        sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);
    };
});
