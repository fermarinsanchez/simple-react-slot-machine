
  let icons = ["🍎", "🍑", "🍓", "🍇", "🍌", "🍍"];
 
class App extends React.Component {

    render() {
      let random1 = Math.floor(Math.random() * 5); 
      let random2 = Math.floor(Math.random() * 5);
      let random3 = Math.floor(Math.random() * 5);
      return (
        <div>
          <h1>Slot Machines!</h1>
          <Machine
            s1={icons[random1]} 
            s2={icons[random2]}
            s3={icons[random3]}
          />
          
        </div>
      )
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('root'))