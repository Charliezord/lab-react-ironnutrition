import { Divider, Input } from 'antd';
import { useState } from "react";




function SearchBar({filterProp, setFilterProp}) {
    // const [filter, setFilter] = useState("");
    
    const handleFilterUpdate = (event) => {
        console.log(event.target.value);
        setFilterProp(event.target.value);
      };

    return (
      <>
        <Divider>Search</Divider>
  
        <label>Search</label>
        <Input value={filterProp} type="text" onChange={handleFilterUpdate} />
         
      </>
    );
  }
  
  export default SearchBar;
  
// export function SearchBar () {
//     return (
//         <div className="App">
//         Search: <input value={filter} onChange={handleFilterUpdate} />
//         <div className="harry-potter-characters">
//           {filter === ""
//             ? characters.map(toCharacterComponent)
//             : characters
//                 .filter((character) => {
//                   const lowerFilter = filter.toLowerCase();
//                   return (
//                     character.name.toLowerCase().includes(lowerFilter) ||
//                     character.house.toLowerCase().includes(lowerFilter) ||
//                     character.patronus.toLowerCase().includes(lowerFilter)
//                   );
//                 })
//                 .map(toCharacterComponent)}
//         </div>
//       </div>
//     )
// }
