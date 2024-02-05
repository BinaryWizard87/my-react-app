import List from "./components/List.jsx";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orage", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];
  const vegetable = [
    { id: 5, name: "potatos", calories: 110 },
    { id: 6, name: "celery", calories: 15 },
    { id: 7, name: "carrots", calories: 25 },
    { id: 8, name: "corn", calories: 63 },
    { id: 9, name: "broccoli", calories: 50 },
  ];

  return (
    <>
      <List items={fruits} category="Fruits" />;
      <List items={vegetable} category="vegetable" />;
    </>
  );
}

export default App;
