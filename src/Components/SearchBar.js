import { Divider, Input } from 'antd';




function SearchBar({searchProp, setSearchProp}) {
    // const [filter, setFilter] = useState("");
    
    const handleSearchUpdate = (event) => {
        console.log(event.target.value);
        setSearchProp(event.target.value);
      };

    return (
      <>
        <Divider>Search</Divider>
  
        <label>Search</label>
        <Input value={searchProp} type="text" onChange={handleSearchUpdate} />
         
      </>
    );
  }
  
  export default SearchBar;