import React, {Component} from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {      
      items: [],
      isLoaded: false
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/todos") // It is a Promise
    .then(result => result.json()) // It is a Promise
    .then(json => {
      console.log(json)
      this.setState({
        isLoaded: true,
        items:json
      })      
    })
  }

  render(){
    var {isLoaded, items} = this.state;
    if(!isLoaded){
      return <h2>No Data Found...</h2>
    }
    else{
      return (
        <div className="App">
          <h1> The Employee Data</h1>

          <table border="1">
          <tr><th>ID</th><th>Title</th></tr>

          <tbody>
            {items.map(item =>(
              
              <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
              </tr>
              ))}
          </tbody>
          </table>
        </div>
      );
    }
  }
}

export default App;
