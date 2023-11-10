import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  //propsin çalışma mantığı conpenentler arası data taşıma constructoru sildik

  state = {
    categories: [],
  }; //state kullanımı

  componentDidMount() {
    this.getCategories(); //compenent yerleşti kategorilerle doldu
  }
  // bunu gerçekleştirmeden de direkt propsu çalıştırabiliyoruz constructor dan bahsediyoruz
  // datayı  apiden getirmek için
  getCategories = () => {
    //apiye ulaşırız fetch ile //gelen response ı json a çeviriyoruz //json a dönen datayı statin kategory değerini data yapıyorum
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        {/* props için aktarımı sağladık */}
        <ListGroup>
          {this.state.categories.map(
            (
              category //categoryi döndür ve her category için listgrupitem oluştur mapin içinceki catogroy kısmı için
            ) => (
              <ListGroupItem
                active={
                  category.categoryName === this.props.currentCategory
                    ? true
                    : false
                }
                onClick={() => this.props.changeCategory(category)}
                key={category.id}
              >
                {category.categoryName}
              </ListGroupItem>
            )
          )}
        </ListGroup>
        {/* <h4>{this.props.currentCategory}</h4> */}
      </div>
    );
  }
}
//key= herbir elemanı diğerinden ayıracak ve eşsiz olucak bir ıd ver böyle değişikler olduğunda sanal dom da hızlıca erişim yapayım demek
