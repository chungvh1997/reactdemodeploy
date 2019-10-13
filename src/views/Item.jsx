import React, { Component } from "react";
import {  Row, Card, CardImg, CardText, CardBody,CardTitle, Button,
} from "reactstrap";
import {Link} from "react-router-dom";

import { formatMoney } from "../utils/formatMoney";

class Item extends Component {

  render() {
      const {dataHomeFilter} = this.props;
    return (
          <Row>
            { dataHomeFilter 
              && dataHomeFilter.length > 0
              && dataHomeFilter.map((props, key) => {
              return (
                <div key={key}>
                <Link to={"detail/"+props.id}>
                  <Card>
                    <CardImg top width="100%" height="auto" src={props.image?props.image:""} alt={props.name?props.name:""} />
                    <CardBody>
                      <CardTitle>{props.name?props.name:""}</CardTitle>
                      <CardText>{formatMoney(props.price?props.price:"")}{props.typePrice?props.typePrice:""}</CardText>
                      <Button>Add Cart</Button>
                    </CardBody>
                  </Card>
                  </Link>
                </div>
              )
            })}
          </Row>
    );
  }
}

export default Item;
