
  let icons = ["🍎", "🍑", "🍓", "🍇", "🍌", "7️⃣" ];
 
class App extends React.Component {

    render() {
      let random1 = Math.floor(Math.random() * 6); 
      let random2 = Math.floor(Math.random() * 6);
      let random3 = Math.floor(Math.random() * 6);
      return (
        <div>
          <h1 style={{textAlign: "center", backgroundColor: "yellow"}}>Slot Machines!</h1>
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