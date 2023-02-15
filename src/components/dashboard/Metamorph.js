import '../../assets/css/dashboard/Metamorph.css';
import nft from '../../assets/img/nft1.png'

function Metamorph() {
  return(
    <div id="meta" className="content-meta row">
      <div className="col-lg-6 nft-img-part">
        <img className="nft-img" src={nft} />
      </div>
      <div className="col-lg-5">
        <div className="description-part">
          <p className="md-description">- MetaMorph</p>
          <p className="lg-description">Nibh mauris, nec et vel nisi. A <span style={{color:'#00e4d1'}}>eget</span> leoaliquet.</p>
          <p className="sm-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam augue habitant eros, pretium cum egestaseo lorem turpis.</p>
        </div>
      </div>
    </div>
  )
}

export default Metamorph;