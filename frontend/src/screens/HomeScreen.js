import React, { useState, useEffect } from 'react';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Rating from '../components/Rating';
const HomeScreen = (props) => {

  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const category = props.match.params.id ? props.match.params.id : '';
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts(category));

    return () => {
      //
    };
  }, [category]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };
  const sortHandler = (e) => {
    setSortOrder(e.target.value);
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };
//   let catlist = [];
//   let unique = [];
//   let cats = () => {
//     {products.map((product) => (
//       catlist.push(product.category)
//     ))}
//     unique = [...new Set(catlist)];
//   }
// cats()
// console.log(unique)
// let history = useHistory() ;
// function handleChange(value) {
//   history.push(`/category/${value}`);
// }
    return (
        <>
           {category && <h2>{category}</h2>}

<ul className="filter">
{/* <li>
    Categories{' '}
    <select name="sortOrder" onChange={event => handleChange(event.target.value)}>
      {unique.map((cat) => (
         <option value={cat} key={cat}>{cat}</option>
    ))}
    </select>
  </li> */}
  <li>
    <form onSubmit={submitHandler}>
      <input
        name="searchKeyword"
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  </li>
  <li>
    Sort By{' '}
    <select name="sortOrder" onChange={sortHandler}>
      <option value="">Newest</option>
      <option value="lowest">Lowest</option>
      <option value="highest">Highest</option>
    </select>
  </li>
</ul>
{loading ? (
  <div>Loading...</div>
) : error ? (
  <div>{error}</div>
) : (
  <ul className="products">
    {products.map((product) => (
      <li key={product._id}>
        <div className="product">
          <Link to={'/product/' + product._id}>
            <img
              className="product-image"
              src={product.image}
              alt="product"
            />
          </Link>
          <div className="product-name">
            <Link to={'/product/' + product._id}>{product.name}</Link>
          </div>
          <div className="product-brand">{product.brand}</div>
          <div className="product-price">${product.price}</div>
          <div className="product-rating">
            <Rating
              value={product.rating}
              text={product.numReviews + ' reviews'}
            />
          </div>
        </div>
      </li>
    ))}
  </ul>
)}
        </>
    )
}

export default HomeScreen
