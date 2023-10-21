const Toolbar = (props) => {
    const {
      date,
    } = props;
  
    const navigate = (action) => {
      props.onNavigate(action);
    };
  
    return (
      <div className="rbc-toolbar" 
           style={{
            flexDirection: 'row',
            margin:"10px",
            alignItems:"flex-start",
            width: "300px",
           }}>
        <span className="rbc-btn-group" 
              style={{
                display: "flex",
                alignItems: "center",
               }}>
                
          <button type="button"
                  onClick={navigate.bind(null, 'PREV')}
                  style={{ 
                    display: "flex",
                    alignItems: "center",
                    border:"0",
                    borderRadius:"50%",
                    backgroundColor:"greenyellow",
                    fontSize:"50px",
                    color:"green",
                    width:"50px",
                    height:"50px",
                    marginLeft:"20px",
                    marginRight:"20px",
                    padding:"0px 0px 10px 5px",
                  }}>
            {'<'}
          </button>

          <span className="rbc-toolbar-label"
                style={{
                    border:"1px solid greenyellow",
                    borderRadius:"10px",
                    backgroundColor:"greenyellow",
                    fontSize:"30px",
                    fontWeight:"bold",
                    color:"green",
                    padding:"5px 10px",
                }}>
            {`${date.getFullYear()}년 ${date.getMonth() + 1}월`}
          </span>
         
          <button type="button"
                  onClick={navigate.bind(null, 'NEXT')}
                  style={{ 
                    display: "flex",
                    alignItems: "center",
                    border:"0",
                    borderRadius:"50%",
                    backgroundColor:"greenyellow",
                    fontSize:"50px",
                    color:"green",
                    width:"50px",
                    height:"50px",
                    marginLeft:"20px",
                    marginRight:"20px",
                    padding:"0px 0px 10px 10px",
                  }}>
            {'>'}
          </button>
        </span>
      </div>
    );
  }

  export default Toolbar;