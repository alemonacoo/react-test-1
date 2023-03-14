import Header from "./components/Header";

const App = () => {
  const x = true;

  return (
    <div className="container">
      <Header title="Hello From HEADER" />
      {/* <Header />  HEADER DI DEFAULT SENZA PROPS*/}
      <h1>Hello From React!</h1>
      <h2>Hello {x ? "John" : "Mike"}</h2>
    </div>
  );
};

export default App;
