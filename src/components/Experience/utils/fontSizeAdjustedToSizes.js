export default function fontSizeAdjustedToSizes(
  text,
  planeSize = { width: 1, height: 1 },
  textShapeMultiplier,
  textScaleMultiplier
  // textShapeMultiplier = 1.43,
  // textScaleMultiplier = 1.5
) {
  // text - text to pass, planeSize - size of plane which should contain text
  // textShapeMultiplier - multiplier, which contains differences between plain text and text 3D decorated with bevels etc.
  // textScaleMultiplier - text 3D after mouse hover is scaled up, plane must contain text even after scaling up
  const fontSizeStep = 0.01;
  let fontSize = 0.1;
  do {
    const sizes = calcTextSize(
      text,
      fontSize,
      textShapeMultiplier * textScaleMultiplier
    );
    if (sizes.width > planeSize.width || sizes.height > planeSize.height) {
      fontSize -= fontSizeStep;
      const newbla = calcTextSize(
        text,
        fontSize,
        textShapeMultiplier * textScaleMultiplier
      );
      break;
    }
    fontSize += fontSizeStep;
  } while (fontSize < 5);
  return fontSize;
}

function calcTextSize(text, fontSize, fontSizeMultiplier) {
  //https://stackoverflow.com/questions/20551534/size-to-fit-font-on-a-canvas
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  ctx.font = `${fontSize}px Helvetica Neue,Helvetica,Arial,sans-serif`;
  const measure = ctx.measureText(text);
  const sizes = {
    width: measure.width * fontSizeMultiplier,
    height:
      (measure.fontBoundingBoxAscent + measure.fontBoundingBoxDescent) *
      fontSizeMultiplier,
  };
  return sizes;
}
