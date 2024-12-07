import Animal from "./Animal";
import "./App.css";

function App(){
  return (
  <div className="app"> 
  <Animal icone="🦁" nome="leão" peso={190.0} emExtincao={true}/>
  <Animal icone="🦩" nome="flamingo" peso={12.0} emExtincao={true}/>
  <Animal icone="🦒" nome="girafa" peso={1200.0} emExtincao={true}/>
  <Animal icone="🦜" nome="papagaio" peso={0.4} emExtincao={false}/>
  </div>
  );
}

export default App;