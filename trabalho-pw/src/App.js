
import './App.css';
function NewAba(){
  window.location.href = "src/App2.js";
}


function App() {
  return (
    <div className="App">
      <div className='main'>
        <div className='center'>
          <div className='menu'>
            <div className='logo'>
              <h2>My Everyday Songs</h2>
            </div>
          </div>
          <div className='text'>
            <h3>
            A música é o barulho que pensa.
            </h3>
            </div>


          <div className='form'>
          <h2>SEUS DADOS PARA CONHECER MINHA PLAYLIST!</h2>
            <form>
            <div className='itens-form'>
              <input type='text' placeholder='Digite seu nome'required/>
              <input type='text' placeholder='Digite seu e-mail' required/>
              <input type='text' placeholder='Digite sua idade' />
              <input type='text' placeholder='Gosta de ouvir música?' required/>
              <input type='submit' onClick={NewAba}/>
            </div>
            </form>
          </div>
        </div>
      </div>

      

    </div>

    
  );
}


export default App;
