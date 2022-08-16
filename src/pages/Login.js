import Header from "../containers/Header";
import GameForm from "../containers/GameForm";
import "./Login.css";

function App() {
  return (
    <div className="login">
      <Header connected={"6"} status="exit" />
      <div className="flex-col">
        <GameForm />
      </div>
    </div>
  );
}

export default App;
