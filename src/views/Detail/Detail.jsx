import React, { Component } from 'react';
// import getUrlParamx from "../../utils/getUrlParam";
import { actGetNewsx } from "../../actions/news.action";
import { connect } from "react-redux";
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from "reactstrap";
import { formatMoney } from "../../utils/formatMoney";
export class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id
        }
    }
    componentDidMount() {
        this.props.getHome();
        console.log(this.props.getHome());
    }

    render() {
        const { id } = this.state;
        const { home } = this.props.dataReducer;
        const dataHome = home.data && home.data.filter((props) => {
            return props.id === id
        });
        // console.log(dataHome&&dataHome[0].detail.description);

        // console.log(data);

        return (
            <Card>
                <CardImg top width="100%" height="auto" src={dataHome && dataHome[0].detail.image ? dataHome && dataHome[0].detail.image : ""} alt={dataHome && dataHome[0].detail.name ? dataHome && dataHome[0].detail.name : ""} />
                <CardBody>
                    <CardTitle>{dataHome && dataHome[0].detail.name ? dataHome && dataHome[0].detail.name : ""}</CardTitle>
                    <CardText>{formatMoney(dataHome && dataHome[0].detail.price ? dataHome && dataHome[0].detail.price : "")}{dataHome && dataHome[0].detail.typePrice ? dataHome && dataHome[0].detail.typePrice : ""}</CardText>
                    <div dangerouslySetInnerHTML={ { __html: dataHome&&dataHome[0].detail.description?dataHome[0].detail.description:"" } }/>
                    
                    <Button>Add Cart</Button>
                </CardBody>
            </Card>
        );
    }
}

// mapStateToProps goi data từ reducer
const mapStateToProps = state => {
    return {
        dataReducer: state.newsReducer
    };

};
// actGetNews cho no chay
// mapDispatchToProps goi action
const mapDispatchToProps = dispatch => {
    return {
        getHome: () => {
            dispatch(actGetNewsx());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Detail);
