// @ts-check
import "./App.css"
/**
 * @param {{ imageUrl: string }} props
 */
export const DogImage = ({ imageUrl }) => {
  return <img id="Item2" width="300px" height="200px" src={imageUrl} alt="A random dog" />;
};

export default DogImage;