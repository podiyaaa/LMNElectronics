import React, { useContext, useEffect, useState } from "react";
import { Badge, Col, Input, ListGroup, ListGroupItem, Row } from "reactstrap";
import { SearchContext } from "../contexts/search/search-context";

async function fetchElectronicItemCategories() {
  const res = fetch("https://localhost:5001/api/electronicitemcategory", {
    method: "GET",
    headers: {},
  });
  return (await res).json();
}

function HomeSideMenu() {
  const [categories, setcCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState({ name: "All" });
  const { fetchProducts, queryObject } = useContext(SearchContext);

  useEffect(() => {
    fetchElectronicItemCategories().then((json) => {
      setcCategories(json);
    });
  }, [setcCategories]);

  useEffect(() => {
    fetchProducts({ ...queryObject, pmax: 5000 });
  }, [setcCategories]);

  const onClickedItem = (item) => {
    setActiveCategory(item);
    var qo = {};
    if (item.id) {
      qo = { ...queryObject, categoryId: item.id };
    } else {
      qo = { ...queryObject };
      delete qo.categoryId;
    }
    fetchProducts(qo);
  };

  const onChageSearchField = (event) => {
    const searchText = event.target.value;
    var qo = {};
    if (searchText != "") {
      qo = { ...queryObject, name: searchText };
    } else {
      qo = { ...queryObject };
      delete qo.name;
    }
    fetchProducts(qo);
  };

  const onChangePriceRange = (event) => {
    const range = parseInt(event.target.value);
    var qo = {};
    if (range != 0) {
      qo = { ...queryObject, pmax: range };
    } else {
      qo = { ...queryObject };
      delete qo.pmax;
    }
    fetchProducts(qo);
  };

  return (
    <div>
      <Row>
        <Col>
          <Input
            type="text"
            placeholder="Search product"
            onChange={onChageSearchField}
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Input
            type="range"
            onChange={onChangePriceRange}
            defaultValue={5000}
            min={0}
            max={5000}
            step={100}
          />
        </Col>
      </Row>
      <br />
      <ListGroup className="text-left">
        <ListGroupItem
          key={0}
          active={activeCategory.name === "All"}
          tag="button"
          className="text-left justify-content-between"
          onClick={() => onClickedItem({ name: "All", id: null })}
        >
          {/* Uncategorized <Badge pill>14</Badge> */}
          {"All"}
        </ListGroupItem>
        {categories.map((c) => {
          return (
            <ListGroupItem
              key={c.id}
              tag="button"
              active={activeCategory.name === c.name}
              className="text-left justify-content-between"
              onClick={() => onClickedItem(c)}
            >
              {c.name}
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </div>
  );
}

export default HomeSideMenu;

// export default class HomeSideMenu extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       categories: [],
//       activeCategory: "All",
//     };
//   }

//   componentDidMount() {
//     fetchElectronicItemCategories().then((json) => {
//       this.setState({ categories: json });
//     });
//   }

//   onClickCategory(category) {
//     this.setState({ activeCategory: category.name });
//   }

//   render() {
//     return (
//       <div>
//         <ListGroup className="text-left">
//           <ListGroupItem
//             active={this.state.activeCategory === "All"}
//             tag="button"
//             className="text-left justify-content-between"
//             onClick={() => this.onClickCategory({ name: "All" })}
//           >
//             {/* Uncategorized <Badge pill>14</Badge> */}
//             {"All"}
//           </ListGroupItem>
//           {this.state.categories.map((c) => {
//             return (
//               <ListGroupItem
//                 tag="button"
//                 active={this.state.activeCategory === c.name}
//                 className="text-left justify-content-between"
//                 onClick={() => this.onClickCategory(c)}
//               >
//                 {/* Uncategorized <Badge pill>14</Badge> */}
//                 {c.name}
//               </ListGroupItem>
//             );
//           })}
//         </ListGroup>
//       </div>
//     );
//   }
// }
