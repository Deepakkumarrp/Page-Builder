// // ElementRenderer.jsx
// import React from 'react';

// const ElementRenderer = ( config ) => {
//   console.log(config);
//   const { type, x, y, fontSize, fontWeight, text } = config;

//   const elementStyle = {
//     position: 'absolute',
//     left: x + 'px',
//     top: y + 'px',
//     fontSize: fontSize + 'px',
//     fontWeight: fontWeight,
//     width: 'auto'
//   };

//   let element = null;

//   switch (type) {
//     case 'label':
//       element = <label style={elementStyle}>{text}</label>;
//       break;
//     case 'button':
//       element = <button style={elementStyle}>{text}</button>;
//       break;
//     case 'input':
//       element = <input type="text" style={elementStyle} value={text} readOnly />;
//       break;
//     default:
//       element = null;
//   }

//   return element;
// };

// export default ElementRenderer;
