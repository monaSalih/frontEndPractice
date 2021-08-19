import React from 'react'
import axios from 'axios'
// import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Row,Button } from 'react-bootstrap';
class App extends React.Component {

constructor(props){
  super(props)
this.state={
apiBackendArr:[]
}
}
  
componentDidMount=async()=>{
let url=`${process.env.REACT_APP_BACKEND_URL}/charTest`

let axiosData=await axios.get(url)
console.log(axiosData.data);
this.setState({
apiBackendArr:axiosData.data
})
}


  render() {
    
    const renderResult=this.state.apiBackendArr.map(item=>{
return (     <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={item.imgUrl} />
  <Card.Body>
    <Card.Title>{item.nameUser}</Card.Title>
    <Card.Text>
      user Gender:{item.userGender}
       user power name:{item.power}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
)
      
    })
    return (
      <Row  >{renderResult}</Row>
    )
  }
}

export default App
