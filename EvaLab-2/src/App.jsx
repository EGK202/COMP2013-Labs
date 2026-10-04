import "./app.css";
import listings from "./data/data";
import Container from "./components/container";

function App() {
  return (
    <div>
      <h1>Resort Listings</h1>

      <Container listings={listings} />
    </div>
  );
}

export default App;