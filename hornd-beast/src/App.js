import "./App.css";
import React from "react";
import Main from "./component/Main";
import Header from "./component/Header";
import Footer from "./component/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data.json";
// import HornedBeast from './HornedBeasts'
import SelectedBeast from "./component/SelectedBeast";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: data,
      name:data[1].title,
      description:data[1].description,
      image_url:data[1].image_url,

      liked: 0,
      show: false,

    };
  }
  increasingVotes = () => {
    this.setState({
      liked: this.state.liked + 1,
    });
    alert(`you liked ${this.state.data1[1].title} as ${this.state.liked}`);
  };
  handleClose =()=>{
    this.setState({
    show: !this.state.show
    })
  }
  render() {
    return (
      <div>
        <Header />

        {this.state.data1.map((element, index) => {
          return (
            <Main
              title={element.title}
              description={element.description}
              image_url={element.image_url}
              horns={element.horns}
              key={index}
              liked={this.state.liked}
              increasingVotes={this.increasingVotes} handleClose={this.handleClose} key={index}
            />
            );
          })}
          <SelectedBeast show={this.state.show } title={this.state.name}
                description={this.state.description}
                image_url={this.state.image_url}/>

        <Footer />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div>
//      <Header />
//      <Main />
//      <Footer />
//     </div>
//   );
// }

export default App;
