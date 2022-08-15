import Header from "../components/Header";
import Container from "../components/Container";
import "./Login.css";

function App() {
  return (
    <div className="login">
      <Header connected={"6"} status="exit" />
      <div className="flex-col">
        <Container></Container>
      </div>
    </div>
  );
}

export default App;
