import React from "react";
// import HornedBeast from "./HornedBeasts";
// import hornedData from '../data.json'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      // data:hornedData
      votes: 0,
    };
  }
  doSmthn = () => {
      this.setState({
        votes:this.state.votes+1
    })

    this.props.increasingVotes();
  };

  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            src={this.props.image_url}
            alt={this.props.title}
            onClick={this.doSmthn}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description} which has this number of{" "}
              {this.props.horns} horns
            </Card.Text>
            <Card.Text>you gave it {this.state.votes}💓</Card.Text>
            <Button variant="primary" onClick={this.props.handleClose}>
              Clik Me
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Main;
// {this.state.data.map((x, index)=>{
//     return(<HornedBeast title={x.title} image={x.image_url} disc={x.description} horns={x.horns} key={index}/>)
// })}

//  {this.state.data.forEach(x=>{
//     (<button>click</button>)
// })}

/* <main>
          <HornedBeast key="narwhal" desc="A unicorn and a narwhal nuzzling their horns" img="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" title="UniWhal" alt="unicorn picture"/>

          <HornedBeast key="rhino" desc="Mother (or father) rhino with two babies" img="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80" title="Rhino Family" alt="rihno picture"/>

          <HornedBeast key="unicorn" desc="Someone wearing a creepy unicorn head mask" img="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg" title="Unicorn Head" alt="another unicorn picture"/>

          
      </main> */
