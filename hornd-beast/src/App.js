import "./App.css";
import React from "react";
import Main from "./component/Main";
import Header from "./component/Header";
import Footer from "./component/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data.json";
import SelectedBeast from "./component/SelectedBeast";
import Form from "react-bootstrap/Form";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: data,
      name: data[1].title,
      description: data[1].description,
      image_url: data[1].image_url,

      liked: 0,
      show: false,
    };
  }
  // handlingDataOfForm=(data)=>{
  //   this.setState({
  //     data1:data
  //   })
  // }
  handleForm = (e) => {
    let newArr = [];
    data.filter((element) => {
      if (element.horns === e.target.value) {
        newArr.push(element);
      }
      return newArr;
    });
    this.setState({
      data1: newArr,
    });
  };
  increasingVotes = () => {
    this.setState({
      liked: this.state.liked + 1,
    });
    alert(`you liked ${this.state.data1[1].title} as ${this.state.liked}`);
  };
  handleClose = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    return (
      <div>
        <Header />
        <Form >
          <Form.Group controlId="filterBeasts">
            <Form.Label>Filter By Number Of Horns </Form.Label>
            <Form.Control as="select" onChange={this.handleForm} size="sm" custom>
              <option value="">All</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="100">Wow...</option>
            </Form.Control>
          </Form.Group>
        </Form>
        {this.state.data1.map((element, index) => {
          return (
            <Main
              title={element.title}
              description={element.description}
              image_url={element.image_url}
              horns={element.horns}
              key={index}
              liked={this.state.liked}
              increasingVotes1={this.increasingVotes}
              handleClose={this.handleClose}
              key={index}
            />
          );
        })}
        <SelectedBeast
          show={this.state.show}
          title={this.state.name}
          description={this.state.description}
          image_url={this.state.image_url}
        />

        <Footer />
      </div>
    );
  }
}

export default App;
