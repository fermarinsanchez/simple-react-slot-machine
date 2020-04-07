class Machine extends React.Component {
    render() {
      const { s1, s2, s3 } = this.props;
      const winner = (s1 === s2) && (s2 === s3);
      const div = {
        display: "flex",
        justifyContent: "center",
        border: "3px solid red"
      }
  
      return (
        <div>
          <div Style={div}><p style={{fontSize: '80px'}}>{s1} {s2} {s3}</p></div>
          
          <p>{winner ? 'Winner!' : 'Loser!'}</p>
        </div>
      )
    }
  }