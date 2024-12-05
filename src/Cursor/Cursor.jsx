import React, { useEffect } from 'react';
import "./Style.css"
import {particlesCursor} from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'
function Cursor() {
    
  useEffect(() => {
  
      particlesCursor({
        // el: document.getElementById('app'),
        // gpgpuSize: 100,
        // colors: [0x00fffc, 0x0000ff], // Changed pink color to #00fffc and blue color
        // color: 0xff0000,
        // coordScale: 1.5,
        // noiseIntensity: 0.005,
        // noiseTimeCoef: 0.0001,
        // pointSize: 1, // Lighter particle thickness
        // pointDecay: 0.020005,
        // sleepRadiusX: 250,
        // sleepRadiusY: 250,
        // sleepTimeCoefX: 0.001,
        // sleepTimeCoefY: 0.002

        el: document.getElementById('app'), 
        gpgpuSize: 100,
        colors: [0x00fffc, 0x0000ff],
        color: 0xff0000,
        coordScale: 3.5,
        noiseIntensity: 0.005,
        noiseTimeCoef: 0.0001,
        pointSize: 1, 
        pointDecay: 0.0025,
        sleepRadiusX: 250,
        sleepRadiusY: 250,
        sleepTimeCoefX: 0.001,
        sleepTimeCoefY: 0.002
      });
    
  }, []);

  return (
    <div id="app">
      <canvas></canvas>
    </div>
  );
}

export default Cursor;



// // <!DOCTYPE html>
// // <html lang="en">
// // <head>
// //     <meta charset="UTF-8">
// //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
// //     <title>@Nayem</title>
// //     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">

// //     <style>
// //         body, html, #app {
// //             margin: 0;
// //             width: 100%;
// //             height: 100%;
// //         }
// //         #app {
// //           overflow: hidden;
// //         }
// //         #app canvas {
// //             display: block;
// //             position: fixed;
// //             z-index: -1;
// //             top: 0;
// //         }

// // /* -- YouTube Link Styles -- */

// // #source-link {
// //   top: 60px;
// // }

// // #source-link > i {
// //   color: rgb(94, 106, 210);
// // }

// // #yt-link {  
// //   top: 10px;
// // }

// // #yt-link > i {
// //   color: rgb(219, 31, 106); 

// // }

// // .meta-link {
// //   align-items: center;
// //   backdrop-filter: blur(3px);
// //   background-color: rgba(255, 255, 255, 0.05);
// //   border: 1px solid rgba(255, 255, 255, 0.1);
// //   border-radius: 6px;
// //   box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
// //   cursor: pointer;  
// //   display: inline-flex;
// //   gap: 5px;
// //   left: 10px;
// //   padding: 10px 20px;
// //   position: fixed;
// //   text-decoration: none;
// //   transition: background-color 600ms, border-color 600ms;
// //   z-index: 10000;
// // }

// // .meta-link:hover {
// //   background-color: rgba(255, 255, 255, 0.1);
// //   border: 1px solid rgba(255, 255, 255, 0.2);
// // }

// // .meta-link > i, .meta-link > span {
// //   height: 20px;
// //   line-height: 20px;
// // }

// // .meta-link > span {
// //   color: white;
// //   font-family: "Rubik", sans-serif;
// //   transition: color 600ms;
// // }


// //     </style>
// // </head>
// // <body>
// //     <div id="app">

// //             <canvas></canvas>
// //     </div>
      

    
// //   <!--Social Liks codings below-->
// //   <a id="source-link" class="meta-link" href="https://t.me/+7yc_oGHnLJhlOWVl" target="_blank">
// //     <i class="fas fa-link"></i>
// //     <span class="roboto-mono">Join my Telegram</span>
// // </a>

// // <a id="yt-link" class="meta-link" href="https://www.youtube.com/@codewith_muhilan?sub_confirmation=1" target="_blank">
// //   <i class="fab fa-youtube"></i>
// //   <span>Subscribe my channel..❤</span>
// // </a>


// //     <script type="module">
// //         //import the particle curser
// //         import { particlesCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'

// //         const pc = particlesCursor({
// //             el: document.getElementById('app'),
// //             gpgpuSize: 100,
// //             colors: [0x00fffc, 0x0000ff], // Changed pink color to #00fffc and blue color
// //             color: 0xff0000,
// //             coordScale: 0.5,
// //             noiseIntensity: 0.005,
// //             noiseTimeCoef: 0.0001,
// //             pointSize: 1, // Lighter particle thickness
// //             pointDecay: 0.0025,
// //             sleepRadiusX: 250,
// //             sleepRadiusY: 250,
// //             sleepTimeCoefX: 0.001,
// //             sleepTimeCoefY: 0.002
// //         });
// //     </script>
// // </body>
// // </html>

