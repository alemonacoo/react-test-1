const App = () => {
  const x = true;

  return (
    <div className="App">
      <h1>Hello From React!</h1>
      <h2>Hello {x ? "John" : "Mike"}</h2>
    </div>
  );
};

export default App;
