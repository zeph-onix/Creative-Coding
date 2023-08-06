// #v1  - rectangle witth circle and circle stroke
// const canvasSketch = require('canvas-sketch');

// const settings = {
//   dimensions: [ 2048, 2048 ],
//   // units: 'in',
//   // orientation: 'landscape',
//   pixelsPerInch: 300
// };

// const sketch = () => {
//   return ({ context, width, height }) => {
//     context.fillStyle = '#a2d2ff';
//     context.fillRect(0, 0, width, height);


//     context.beginPath()
//     context.arc(width / 2, height / 2, width * 0.2, 200, 0, Math.PI * 2,false)
//     context.fillStyle = 'magenta';
//     context.fill()
//     context.lineWidth = width * 0.05
//     context.strokeStyle = 'violet'
//     context.stroke()
//   };
// };

// canvasSketch(sketch, settings);
// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
// #v2  - generating a grid
// const canvasSketch = require('canvas-sketch');
// const { lerp } = require('canvas-sketch-util/math')

// const settings = {
//   dimensions: [ 2048, 2048 ],
  
// };

// const sketch = () => {

//   const createGrid = () => {
//     const points = [] // list of points on the grid
//     const count = 5
//     for(let x=0; x < count; x++){
//       for(let y=0; y < count; y++){
//         const u = x/ (count - 1)
//         const v = y/ (count - 1)
//         points.push([u,v])
//       }
//     }
//     return points
//   }

//   const points= createGrid()
//   const margin = 200
//   return ({ context, width, height }) => {
//     context.fillStyle = 'white'
//     context.fillRect(0,0,width,height)

//     points.forEach(([ u, v ]) => {
//       const x = lerp(margin, width-margin, u)
//       const y = lerp(margin, height-margin, v)

//       context.beginPath()
//       context.arc(x, y , 100, 0, Math.PI * 2 , false)
//       context.lineWidth = 40
//       context.strokeStyle = 'black'
//       context.stroke()  
//     })

    
//   };
// };

// canvasSketch(sketch, settings);

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
// #v3 - adding randomness to the grid 
// const canvasSketch = require('canvas-sketch');
// const { lerp } = require('canvas-sketch-util/math')
// const random = require('canvas-sketch-util/random')
// const settings = {
//   dimensions: [ 2048, 2048 ],
  
// };

// const sketch = () => {

//   const createGrid = () => {
//     const points = [] // list of points on the grid
//     const count = 40
//     for(let x=0; x < count; x++){
//       for(let y=0; y < count; y++){
//         const u = x/ (count - 1)
//         const v = y/ (count - 1)
//         points.push([u,v])
//       }
//     }
//     return points
//   }


//   random.setSeed(512)
//   const points= createGrid().filter(() => random.value() > 0.5 )
//   const margin = 200



//   return ({ context, width, height }) => {
//     context.fillStyle = 'white'
//     context.fillRect(0,0,width,height)

//     points.forEach(([ u, v ]) => {
//       const x = lerp(margin, width-margin, u)
//       const y = lerp(margin, height-margin, v)

//       context.beginPath()
//       context.arc(x, y , 5, 0, Math.PI * 2 , false)
//       context.lineWidth = 10
//       context.strokeStyle = 'black'
//       context.stroke()  
//     })

    
//   };
// };

// canvasSketch(sketch, settings);