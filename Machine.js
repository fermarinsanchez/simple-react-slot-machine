class Machine extends React.Component {
    render() {
      const { s1, s2, s3 } = this.props;
      const winner = (s1 === s2) && (s2 === s3);
      const div = {
        display: "flex",
        justifyContent: "center",
        height: '300px',
        border: "10px solid red"
      }
  
      return (
        <div>
          <div style={div}><p style={{fontSize: '120px', alignItems: "space-between"}}>{s1} {s2} {s3}</p></div>
          
          <p>{winner 
           ?
           <div>
           <img style={{display:'block', margin:'auto'}} src='https://image.shutterstock.com/image-photo/nice-little-cat-cup-260nw-171497567.jpg'/>
            <h1 style={{textAlign:'center'}}>WINNER!!!</h1>
           </div>
           :
           <div>
            <img style={{display:'block', margin:'auto'}} src='https://res.cloudinary.com/teepublic/image/private/s--w4sLxT6n--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:38/co_ffffff,e_outline:inner_fill:38/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1528373025/production/designs/2764794_0.jpg'/>
           </div> 
           }</p>
        </div>
      )
    }
  }