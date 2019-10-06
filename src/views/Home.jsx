import React, { Component } from "react";
import { actGetNews } from "../actions/news.action";
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";
import { formatStringToDate } from "../utils/formatDate";
class Home extends Component {
  state = {};
  componentDidMount() {
    this.props.getNews();
  }
  render() {
    const { news } = this.props.dataReducer;
    return (
      <div className="views_home">
        <Row>
          {news.data &&
            news.data.length > 0 &&
            news.data.map((props, key) => {
              return (
                <Col md="4" xs="12" key={key}>
                  <div
                    style={{
                      backgroundColor: "gray",
                      color: "white",
                      padding: "10px",
                      border: "black solid 1px",
                      marginBottom: "10px"
                    }}
                  >
                    <p>Tên:{props.name}</p>
                    <p>Vị trí:{props.position}</p>
                    <p>Cổ Phần:{props.shares}</p>
                    <p>Ngày Tạo:{formatStringToDate(props.created_at)}</p>
                  </div>
                </Col>
              );
            })}
        </Row>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    dataReducer: state.newsReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNews: () => {
      dispatch(actGetNews());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
