import randomColor from 'randomcolor'

const generateRandomColor = (luminosity: 'light' | 'dark') => {
  let color = randomColor({ luminosity, format: 'hsl' });
  const [hue, saturation, lightness] = color.substring(4,color.length-1).split(',').map(v => v.replace('%', '')).map(v => parseFloat(v));
  console.log(color, hue, saturation, lightness);
  // fix for yellow being too bright on white backgrounds
  if(luminosity === 'dark' && lightness > 35) color = `hsl(${hue}, ${saturation}%, ${lightness - 20}%)`;
  return color;
}

export { generateRandomColor }