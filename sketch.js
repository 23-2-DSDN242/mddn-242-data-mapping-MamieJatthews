let sourceImg=null;
let maskImg=null;
let renderCounter=0;
let curLayer = 0;

// change these three lines as appropiate
let sourceFile = "input_1.jpg";
let maskFile   = "mask_1.png";
let outputFile = "output_6.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(1920, 1080);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(0, 0, 128);
  sourceImg.loadPixels();
  maskImg.loadPixels();
  colorMode(HSB);
}

//let X_STOP = 640;
//let Y_STOP = 480;
let X_STOP = 1920;
let Y_STOP = 1080;
let OFFSET = 20;

function draw () {
  let num_lines_to_draw = 40;
  if (curLayer == 0) {

      angleMode(DEGREES);
      let num_lines_to_draw = 40;
      // get one scanline
      for(let j=renderCounter; j<renderCounter+num_lines_to_draw && j<Y_STOP; j++) {
        for(let i=0; i<X_STOP; i++) {
          colorMode(RGB);
          let mask = maskImg.get(i, j);
          if (mask[1] > 128) { 
            pix = sourceImg.get(i, j);
            pix[0] = map(30, 0, 100, pix[0], 255)
            pix[1] = map(30, 0, 100, pix[1], 255)
            set(i, j-90, pix);
          }
          else {  
              let wave = sin(j*8);
            let slip = map(wave, -1, 1, -OFFSET, OFFSET);
            pix = sourceImg.get(i+slip, j);
          set(i, j, pix);
          }

        }
      }
    }
    else if (curLayer == 1) {

      angleMode(DEGREES);
      let num_lines_to_draw = 40;
      // get one scanline
      for(let j=renderCounter; j<renderCounter+num_lines_to_draw && j<Y_STOP; j++) {
        for(let i=0; i<X_STOP; i++) {
          colorMode(RGB);
          let mask = maskImg.get(i, j);
          if (mask[1] > 128) { 
            pix = sourceImg.get(i, j);
            pix[0] = map(60, 0, 100, pix[0], 255)
            pix[1] = map(60, 0, 100, pix[1], 255)
            set(i, j-60, pix);
          }
          else {  
          //   let wave = sin(j*8);
          //   let slip = map(wave, -1, 1, -OFFSET, OFFSET);
          //   pix = sourceImg.get(i+slip, j);
          // set(i, j, pix);
          }

        }
      }
    }

    else if (curLayer == 2) {

      angleMode(DEGREES);
      let num_lines_to_draw = 40;
      // get one scanline
      for(let j=renderCounter; j<renderCounter+num_lines_to_draw && j<Y_STOP; j++) {
        for(let i=0; i<X_STOP; i++) {
          colorMode(RGB);
          let mask = maskImg.get(i, j);
          if (mask[1] > 128) { 
            pix = sourceImg.get(i, j);
            pix[0] = map(90, 0, 100, pix[0], 255)
            pix[1] = map(90, 0, 100, pix[1], 255)
            set(i, j-30, pix);
          }
          else {  
          //   let wave = sin(j*8);
          //   let slip = map(wave, -1, 1, -OFFSET, OFFSET);
          //   pix = sourceImg.get(i+slip, j);
          // set(i, j, pix);
          }

        }
      }
    }

    else {

      angleMode(DEGREES);
      let num_lines_to_draw = 40;
      // get one scanline
      for(let j=renderCounter; j<renderCounter+num_lines_to_draw && j<Y_STOP; j++) {
        for(let i=0; i<X_STOP; i++) {
          colorMode(RGB);
          let mask = maskImg.get(i, j);
          if (mask[1] > 128) { 
            pix = sourceImg.get(i, j);
            pix[0] = map(0, 0, 100, pix[0], 255)
            pix[1] = map(0, 0, 100, pix[1], 255)
            set(i, j, pix);
          }
          else {  
          //   let wave = sin(j*8);
          //   let slip = map(wave, -1, 1, -OFFSET, OFFSET);
          //   pix = sourceImg.get(i+slip, j);
          // set(i, j, pix);
          }

        }
      }
    }
  renderCounter = renderCounter + num_lines_to_draw;
  updatePixels();

  if(curLayer == 0 && renderCounter > 1080) {
    curLayer = 1;
    renderCounter = 0;
  }
  if(curLayer == 1 && renderCounter > 1080) {
    curLayer = 2;
    renderCounter = 0;
  }
  if(curLayer == 2 && renderCounter > 1080) {
    curLayer = 3;
    renderCounter = 0;
  }

  // print(renderCounter);
  if(renderCounter > Y_STOP) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    // saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}