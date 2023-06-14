const Description = ({ show }) => {
  const style = {
    display: show ? 'flex' : 'none',
  }

  return (
    <section style={style} className="product-single__description">
      <div className="product-description-block">
        <h4>THE LINE의 매력을 담은</h4>
        <p>아름다운 건축의 모습을 한눈에 바라볼 수 있는 객실과 높은 시선에서 아름다운 도시를 바라볼 수 있는 객실입니다.<br/>
선택을 하는 순간, 전혀 다른 장면이 펼쳐질 것입니다.</p>
      </div>
    </section>
  );
};
  
export default Description;
    