import React from 'react'


class HornedBeast extends React.Component{

    render(){
        return(
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.desc}</p>
                <img src={this.props.img} alt={this.props.alt} />
            </div>
        )
    }
}

export default HornedBeast;