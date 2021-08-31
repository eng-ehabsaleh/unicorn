import React from 'react'
import Card from 'react-bootstrap/Card'

class HornedBeast extends React.Component{
    constructor(){
        super()
        this.state={
            votes:0
        }
    }

    increasingVotes=()=>{
        this.setState({
            votes:this.state.votes+1
        })
    }
    
    render(){
        // console.log(this.props.pro);
        return(
            <div>
                {/* <h2>{this.props.title} which has this number of {this.props.horns} horns</h2>
                <p>{this.props.disc}</p>
                <img src={this.props.image} alt={this.props.title} onClick={this.increasingVotes} />
                <p>you gave it {this.state.votes}💓</p>
                <button onClick={this.increasingVotes}>click</button> */}

                <Card style={{ width: '18rem' }}>
  <Card.Img src={this.props.image} alt={this.props.title} onClick={this.increasingVotes} />
  <Card.Body>
    <Card.Title>{this.props.title} which has this number of {this.props.horns} horns</Card.Title>
    <Card.Text>
    you gave it {this.state.votes}💓
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
</Card>
            </div>
        )
    }
}

export default HornedBeast;