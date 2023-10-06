const PRODUCTS = [
  {
    name: "Sac",
  },
  {
    name: "Bijou",
  },
  {
    name: "Livre",
  },
];

function App() {
  return (
    <>
      {PRODUCTS.map((item, index) => {
        return <div key={index}>{item.name}</div>;
      })}
    </>
  );
}

export default App;
