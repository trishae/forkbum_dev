import React from "react"
import Sketch from "react-p5"


export default (props) => {
    // https://www.openprocessing.org/sketch/783460
    let _animate = true;
    let _zoff = 0;
    let _angle = 0;

    let _animation_speed_constant = 9600;
    let _radius_constant = 48;
    let _noise_size = 1000;

    var _canvasDiv;
    var _containerWidth;
    var _containerHeight;

    const setup = (p5, canvasParentRef) => {
        // var canvasDiv = document.getElementById('sketch-container');
        // var containerWidth = canvasDiv.offsetWidth;
        _canvasDiv = document.getElementById('sketch-container');
        _containerWidth = _canvasDiv.offsetWidth;
        _containerHeight = p5.windowHeight*(4/5);

        p5.createCanvas(_containerWidth, _containerHeight).parent("sketch-container");
        p5.background(0);
        p5.strokeWeight(1.5);
        p5.colorMode(p5.colorMode, 360, 100, 100);
        p5.pixelDensity(1);//increase for better resolution images.
    };

    const draw = (p5) => {
        let size = _noise_size;
        let animationSpeed = p5.windowWidth/_animation_speed_constant; //20/100; //100
        let backgroundColor = '#343435';
        let mainColor = '#934838'; //'#934838'; #B51F07
        let radius = p5.windowWidth/_radius_constant; //40; //400

        _canvasDiv = document.getElementById('sketch-container');
        _containerWidth = _canvasDiv.offsetWidth;
        _containerHeight = p5.windowHeight*(4/5);

        p5.background(backgroundColor);
        p5.stroke(mainColor);
        p5.noFill();

        // let i = p5.i;
        // let j = p5.j;
        // let n = p5.n;

	    //max value of i will affect the density of vertical lines.
        for (p5.i = _containerWidth / 10; p5.i <= _containerWidth-(_containerWidth / 10); p5.i += 5) {
            p5.beginShape();
            for (p5.j = _containerHeight / 10; p5.j <= _containerHeight - (_containerHeight / 10); p5.j += 20) {
                let x =p5.i;
                let y =p5.j;
                let scale = 0.005;//using a scale vaiable, steps between i and j counters are too large
                
                //check if points are inside the slider size value.
                if (p5.dist(p5.i, p5.j, _containerWidth / 2, _containerHeight / 2) < size) {
                    p5.n = p5.map(p5.noise(p5.i * scale, p5.j * scale, _zoff), 0, 1, -1, 1);
                    x = p5.i +  p5.n*radius * p5.sin(_angle + p5.n * 10);
                    y = p5.j +  p5.n*radius * p5.cos(_angle + p5.n * 10);
                }
                //connect points.
                p5.curveVertex(x, y);
            }
            p5.endShape();
        }

        //Toogle animation with button.
        if (_animate === true) {
            _zoff += 0.01;
            _angle += animationSpeed;
        }
    };

    const windowResized = (p5, canvasParentRef) => {
        _canvasDiv = document.getElementById('sketch-container');
        _containerWidth = _canvasDiv.offsetWidth;
        _containerHeight = p5.windowHeight*(4/5);
        p5.resizeCanvas(_containerWidth, _containerHeight).parent(canvasParentRef);
    };

    return <Sketch setup={setup} draw={draw}/>
};
