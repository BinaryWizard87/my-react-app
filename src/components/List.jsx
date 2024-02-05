function List(props) {
  //fruits.sort((a, b) => a.name.localeCompare(b.name)); //ALPHABETICAL
  //fruits.sort((a, b) => b.name.localeCompare(a.name)); //Reverse Alphabetical
  // fruits.sort((a, b) => a.calories - b.calories); //Numeric
  //fruits.sort((a, b) => b.calories - a.calories); //Reverse Numberic

  //const lowCalFruit = fruits.filter((fruit) => fruit.calories < 100);
  // const heighCalFruits = fruits.filter((fruit) => fruit.calories >= 100);
  const category = props.category;
  const itemList = props.items;

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp;
      <b>{item.calories}</b>
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems} </ol>
    </>
  );
}

export default List;
