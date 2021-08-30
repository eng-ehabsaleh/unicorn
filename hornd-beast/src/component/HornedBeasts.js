import React from 'react'

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
                <h2>{this.props.title} which has this number of {this.props.horns} horns</h2>
                <p>{this.props.disc}</p>
                <img src={this.props.image} alt={this.props.title} />
                <p>you gave it {this.state.votes}💓</p>
                <button onClick={this.increasingVotes}>click</button>
            </div>
        )
    }
}

export default HornedBeast;