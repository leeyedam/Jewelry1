import { useState } from 'react';
import productsColors from '../../../utils/data/products-colors';
import productsSizes from '../../../utils/data/products-sizes';
import CheckboxColor from '../../products-filter/form-builder/checkbox-color';
import { useDispatch, useSelector } from 'react-redux';
import { some } from 'lodash';
import { addProduct } from '../../../store/actions/cartActions';
import { toggleFavProduct } from '../../../store/actions/userActions';

const Content = ({ product }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [color, setColor] = useState('');
  const [itemSize, setItemSize] = useState('');

  const onColorSet = (e) => setColor(e);
  const onSelectChange = new Date()

  const { favProducts } = useSelector(state => state.user);
  const isFavourite = some(favProducts, productId => productId === product.id);

  const toggleFav = () => {
    dispatch(toggleFavProduct(
      { 
        id: product.id,
      }
    ))
  }

  const addToCart = () => {
    dispatch(addProduct(
      { 
        id: product.id,
        name: product.name,
        thumb: product.images[0],
        price: product.currentPrice,
        count: count,
        color: color,
        size: itemSize,
        address:product.address
      }
    ))
    alert("Product has been added!")
  }

  return (
    <section className="product-content">
      <div className="product-content__intro">
        <h5 className="product__id">Product ID:<br></br>{product.id}</h5>
        <span className="product-on-sale">Sale</span>
        <h2 className="product__name">{product.name}</h2>

        <div className="product__prices">
          <h4>{product.address}</h4>
        </div>
      </div>
      <div className="product-content__filters">
        <div className="product-filter-item">
          <h4>New product launch</h4>
          <h5>A new product has been released. Make a reservation right now and get it faster than anyone else.</h5>
          <div className="quantity-buttons">
            <div className="quantity-button">
              <button type="button" onClick={() => setCount(count - 1)} className="quantity-button__btn">
                -
              </button>
              <span>{count}</span>
              <button type="button" onClick={() => setCount(count + 1)} className="quantity-button__btn">
                +
              </button>
            </div>
            
            <button type="submit" onClick={() => addToCart()} className="btn btn--rounded btn--yellow">reservation</button>
            <button type="button" onClick={toggleFav} className={`btn-heart ${isFavourite ? 'btn-heart--active' : ''}`}><i className="icon-heart"></i></button>
          </div>
        </div>
      </div>
    </section>
  );
};
  
export default Content;
    