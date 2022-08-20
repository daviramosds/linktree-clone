import { Card } from "./components/Card";
import "./styles/global.css";

function App() {
  return (
    <div className="bg-bg bg-cover bg-center p-12 h-screen w-screen">
      <main className="h-full mx-auto max-w-[600px] p-10 flex flex-col items-center relative backdrop-filter backdrop-blur-lg bg-semitransparent rounded">
        <img
          src="https://github.com/daviramosds.png"
          className="w-24 h-24 rounded-full"
          draggable={false}
        ></img>
        <h4 className="text-base my-4 font-medium">@davirds</h4>
        <Card title="Github" url={"hello"} />
      </main>
    </div>
  );
}

export default App;
