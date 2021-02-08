export default function RegionSelect({options}){
  return (
    <select className="input region-select">
      {options.map(option => <option>{option}</option>)}
    </select>
  )
}