// src/components/BurgerStack/BurgerStack.jsx

export default function BurgerStack(props) {
    // reverse the stack array so that the burger will stack from down to up
    // however there is an error in which 2 of the same ingredient is used, it will be unable to clear
    // not sure why
    // might be due to identifying the item to remove by name
    // so when filter by element.name, it could remove both items
    let reverseStack=[...props.stack].reverse();
    console.log('stack: ',props.stack)
    console.log('reversed: ',reverseStack);
  return (
    <>
      <ul>
      
        {reverseStack.map((item)=>(
            <li key={item.name} style={{backgroundColor: item.color}}>
                {item.name}
                <button onClick={() => props.handleRemove(item)}>X</button>
            </li>
        ))}
        </ul>
    </>
  );
}
