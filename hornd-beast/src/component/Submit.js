import React from "react";
import Form from "react-bootstrap/Form";
import arr from "../data.json";

class FormSubmit extends React.Component {
  
  handleForm = (e) => {

    const newArr = [];
    arr.filter((element) => {
      if (element.horns === e.target.value) {
        newArr.push(element);
      }
      return newArr
    })
    ;
    this.props.function(newArr)
  };
  // newArr.map((element, i) => {
  //   return (
  //     <App
  //       title={element.title}
  //       image_url={element.image_url}
  //       description={element.description}
  //       horns={element.horns}
  //       key={i}
      // />
  //   );
  // });

  render() {
    return (
        <div>
        {/* <FloatingLabel controlId="floatingSelect" label="Works with selects"> */}
        <Form.Select onChange={this.handleForm} aria-label="Floating label select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3</FloatingLabel>">Three</option>

        </Form.Select>    
        </div>
    );
  }
}
// </FloatingLabel>
export default FormSubmit;
