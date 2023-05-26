const Description = ({ show }) => {
  const style = {
    display: show ? 'flex' : 'none',
  }

  return (
    <section style={style} className="product-single__description">
      <div className="product-description-block">
        <h4>Description</h4>
        <p>A new product has been released. Make a reservation right now and get it faster than anyone else. <br/>You can see more products if you visit our website.</p>
      </div>
    </section>
  );
};
  
export default Description;
    