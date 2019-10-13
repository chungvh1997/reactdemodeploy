import React, { Component } from "react";
import { actGetNewsx } from "../actions/news.action";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import Item from "../views/Item";
import { Select, Pagination } from 'antd';
const { Option } = Select;
class Home extends Component {
  state = {
    dataHome: [],
    dataHomeFilter: [],
    gender: "All",
    sort: "desc",
    current: 3,
  };

  // Select gender
  handleChange = (value) => {
    
    const { dataHome } = this.state;
    if (value === "All") {
      var filterData = dataHome && dataHome.filter((item) => {
        return item.type === "Nam" || item.type === "Nu"
      })
    } else {
      var filterData = dataHome && dataHome.filter((item) => {
        return item.type === value
      })
    }
 
    this.setState({
      gender: value,
      dataHomeFilter: filterData
    });
  }

  // Change page
  onChange = page => {
    this.setState({
      current: page,
    });
  };

  // Select price
  handleChangePrice = (value) => {
    
    const { dataHomeFilter } = this.state;
    if (value === "desc") {
      var sortData = dataHomeFilter.sort((a, b) => {
        return b.price - a.price
      })
    } else {
      var sortData = dataHomeFilter.sort((a, b) => {
        return a.price - b.price
      })
    }
    this.setState({
      dataHomeFilter: sortData
    });
  }

  itemRender = (current, type, originalElement) => {
    // console.log(current);
    if (type === 'prev') {
      return <a>Previous</a>;
    }
    if (type === 'next') {
      return <a>Next</a>;
    }
    return originalElement;
  }

  componentDidMount() {
    this.props.getHome();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.dataReducer.home) {
      this.setState({
        dataHome: nextProps.dataReducer.home.data,
        dataHomeFilter: nextProps.dataReducer.home.data,
      })
    }
  }
  render() {
    const { dataHomeFilter } = this.state;
    const totalPage = Math.ceil(dataHomeFilter.length / 5) * 10;
    // const { news } = this.props.dataReducer;
    return (
      <div className="views_home">
        <Container>
          <div className="form__select" >
            <label>Gender: </label>
            <Select defaultValue="All" style={{ width: 120 }} name="gender" onChange={this.handleChange}>
              <Option value="All">--All--</Option>
              <Option value="Nam">Nam</Option>
              <Option value="Nu">Nữ</Option>
            </Select>
            <label>Price: </label>
            <Select defaultValue="All" style={{ width: 120 }} name="price" onChange={this.handleChange}>
              <Option value="">--All--</Option>
              <Option value="desc">Giá cao</Option>
              <Option value="asc">Giá thấp</Option>
            </Select>
          </div>
          <Item dataHomeFilter={dataHomeFilter}></Item>
          <div>
          <Pagination current={this.state.current} onChange={this.onChange} total={totalPage} />
          </div>
        </Container>
      </div>
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
)(Home);
