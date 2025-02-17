import "./App.css"

/**
 * @param {{ breeds: string[] }} props
 */
export const BreedsSelect = ({ breeds, selectBreeds, onChange}) => {
  return (<div>犬種を選んでください。
    <select id="Item4" value={selectBreeds} onChange={onChange}>
      {breeds.map((breed) => (
        <option>
          {breed}
        </option>
      ))}
    </select>
    </div>
  );
};

export default BreedsSelect;
