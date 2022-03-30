import { Divider, Input } from 'antd';
import { useState} from 'react'

    function AddFoodForm( {allFoodsList, setAllFoods} ) {
        const [formState, setFormState] = useState({name: "", image: "", calories: 0, servings: 0,});

        const handleFormState = (event) => {
            console.log(event.target.value)
            setFormState({...formState,[event.target.name]:event.target.value});
        };

        const handleSubmit = (event) =>{
            event.preventDefault();
            console.log(formState)
            console.log(allFoodsList)
            allFoodsList.push(formState)
            setAllFoods([...allFoodsList])
        };

        return (
          <form onSubmit={handleSubmit}>
            <Divider>Add Food Entry</Divider>
      
            <label>Name</label>
            <Input name="name" value={formState.name} type="text" onChange={handleFormState} />
      
            <label>Image</label>
            <Input name="image" value={formState.image} type="text" onChange={handleFormState} />
      
            <label>Calories</label>
            <Input name="calories" value={formState.calories} type="number" onChange={handleFormState} />
      
            <label>Servings</label>
            <Input name="servings" value={formState.servings} type="number" onChange={handleFormState} />
      
            <button type="submit">Create</button>
          </form>
        );
      }
      
      export default AddFoodForm;
      