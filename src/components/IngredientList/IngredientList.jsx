// src/components/IngredientList/IngredientList.jsx


export default function IngredientList(props) {
  return (
    <>
      <ul>
        
        {props.availableIngredients.map((item)=>( 
            <li key={item.name} style={{backgroundColor: item.color}}>
                {item.name}
                <button onClick={() => props.handleAdd(item)} >+</button>
            </li>
            
            ))}
      </ul>
    </>
  );
}
