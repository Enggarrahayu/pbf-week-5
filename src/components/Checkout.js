import React, {Component} from 'react'

export class Checkout extends Component{
    render(){
        return(
            <div id="mainBody">
            <div className="container">
              <div className="row">
                {/* Sidebar ================================================== */}
                <div id="sidebar" className="span3">
                  <div className="well well-small"><a id="myCart" href="product_summary.html"><img src="themes/images/ico-cart.png" alt="cart" />3 Items in your cart  <span className="badge badge-warning pull-right">$155.00</span></a></div>
                  <ul id="sideManu" className="nav nav-tabs nav-stacked">
                    <li className="subMenu open"><a> ELECTRONICS [230]</a>
                      <ul>
                        <li><a className="active" href="products.html"><i className="icon-chevron-right" />Cameras (100) </a></li>
                        <li><a href="products.html"><i className="icon-chevron-right" />Computers, Tablets &amp; laptop (30)</a></li>
                        <li><a href="products.html"><i className="icon-chevron-right" />Mobile Phone (80)</a></li>
                        <li><a href="products.html"><i className="icon-chevron-right" />Sound &amp; Vision (15)</a></li>
                      </ul>
                    </li>
                    <li className="subMenu"><a> CLOTHES [840] </a>
                      <ul style={{display: 'none'}}>
                        <li><a href="products.html"><i className="icon-chevron-right" />Women's Clothing (45)</a></li>
                        <li><a href="products.html"><i className="icon-chevron-right" />Women's Shoes (8)</a></li>												
                        <li><a href="products.html"><i className="icon-chevron-right" />Women's Hand Bags (5)</a></li>	
                        <li><a href="products.html"><i className="icon-chevron-right" />Men's Clothings  (45)</a></li>
                        <li><a href="products.html"><i className="icon-chevron-right" />Men's Shoes (6)</a></li>												
                        <li><a href="products.html"><i className="icon-chevron-right" />Kids Clothing (5)</a></li>												
                        <li><a href="products.html"><i className="icon-chevron-right" />Kids Shoes (3)</a></li>												
                      </ul>
                    </li>
                    <li className="subMenu"><a>FOOD AND BEVERAGES [1000]</a>
                      <ul style={{display: 'none'}}>
                        <li><a href="products.html"><i className="icon-chevron-right" />Angoves  (35)</a></li>
                        <li><a href="products.html"><i className="icon-chevron-right" />Bouchard Aine &amp; Fils (8)</a></li>												
                        <li><a href="products.html"><i className="icon-chevron-right" />French Rabbit (5)</a></li>	
                        <li><a href="products.html"><i className="icon-chevron-right" />Louis Bernard  (45)</a></li>
                        <li><a href="products.html"><i className="icon-chevron-right" />BIB Wine (Bag in Box) (8)</a></li>												
                        <li><a href="products.html"><i className="icon-chevron-right" />Other Liquors &amp; Wine (5)</a></li>												
                        <li><a href="products.html"><i className="icon-chevron-right" />Garden (3)</a></li>												
                        <li><a href="products.html"><i className="icon-chevron-right" />Khao Shong (11)</a></li>												
                      </ul>
                    </li>
                    <li><a href="products.html">HEALTH &amp; BEAUTY [18]</a></li>
                    <li><a href="products.html">SPORTS &amp; LEISURE [58]</a></li>
                    <li><a href="products.html">BOOKS &amp; ENTERTAINMENTS [14]</a></li>
                  </ul>
                  <br />
                  <div className="thumbnail">
                    <img src="themes/images/products/panasonic.jpg" alt="Bootshop panasonoc New camera" />
                    <div className="caption">
                      <h5>Panasonic</h5>
                      <h4 style={{textAlign: 'center'}}><a className="btn" href="product_details.html"> <i className="icon-zoom-in" /></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart" /></a> <a className="btn btn-primary" href="#">$222.00</a></h4>
                    </div>
                  </div><br />
                  <div className="thumbnail">
                    <img src="themes/images/products/kindle.png" title="Bootshop New Kindel" alt="Bootshop Kindel" />
                    <div className="caption">
                      <h5>Kindle</h5>
                      <h4 style={{textAlign: 'center'}}><a className="btn" href="product_details.html"> <i className="icon-zoom-in" /></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart" /></a> <a className="btn btn-primary" href="#">$222.00</a></h4>
                    </div>
                  </div><br />
                  <div className="thumbnail">
                    <img src="themes/images/payment_methods.png" title="Bootshop Payment Methods" alt="Payments Methods" />
                    <div className="caption">
                      <h5>Payment Methods</h5>
                    </div>
                  </div>
                </div>
                {/* Sidebar end=============================================== */}
                <div className="span9">
                  <ul className="breadcrumb">
                    <li><a href="index.html">Home</a> <span className="divider">/</span></li>
                    <li className="active"> SHOPPING CART</li>
                  </ul>
                  <h3>  SHOPPING CART [ <small>3 Item(s) </small>]<a href="products.html" className="btn btn-large pull-right"><i className="icon-arrow-left" /> Continue Shopping </a></h3>	
                  <hr className="soft" />
                 
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Description</th>
                        <th>Quantity/Update</th>
                        <th>Price</th>
                        <th>Discount</th>
                        <th>Tax</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> <img width={60} src="themes/images/products/4.jpg" alt="" /></td>
                        <td>MASSA AST<br />Color : black, Material : metal</td>
                        <td>
                          <div className="input-append"><input className="span1" style={{maxWidth: '34px'}} placeholder={1} id="appendedInputButtons" size={16} type="text" /><button className="btn" type="button"><i className="icon-minus" /></button><button className="btn" type="button"><i className="icon-plus" /></button><button className="btn btn-danger" type="button"><i className="icon-remove icon-white" /></button>				</div>
                        </td>
                        <td>$120.00</td>
                        <td>$25.00</td>
                        <td>$15.00</td>
                        <td>$110.00</td>
                      </tr>
                      <tr>
                        <td> <img width={60} src="themes/images/products/8.jpg" alt="" /></td>
                        <td>MASSA AST<br />Color : black, Material : metal</td>
                        <td>
                          <div className="input-append"><input className="span1" style={{maxWidth: '34px'}} placeholder={1} size={16} type="text" /><button className="btn" type="button"><i className="icon-minus" /></button><button className="btn" type="button"><i className="icon-plus" /></button><button className="btn btn-danger" type="button"><i className="icon-remove icon-white" /></button>				</div>
                        </td>
                        <td>$7.00</td>
                        <td>--</td>
                        <td>$1.00</td>
                        <td>$8.00</td>
                      </tr>
                      <tr>
                        <td> <img width={60} src="themes/images/products/3.jpg" alt="" /></td>
                        <td>MASSA AST<br />Color : black, Material : metal</td>
                        <td>
                          <div className="input-append"><input className="span1" style={{maxWidth: '34px'}} placeholder={1} size={16} type="text" /><button className="btn" type="button"><i className="icon-minus" /></button><button className="btn" type="button"><i className="icon-plus" /></button><button className="btn btn-danger" type="button"><i className="icon-remove icon-white" /></button>				</div>
                        </td>
                        <td>$120.00</td>
                        <td>$25.00</td>
                        <td>$15.00</td>
                        <td>$110.00</td>
                      </tr>
                      <tr>
                        <td colSpan={6} style={{textAlign: 'right'}}>Total Price:	</td>
                        <td> $228.00</td>
                      </tr>
                      <tr>
                        <td colSpan={6} style={{textAlign: 'right'}}>Total Discount:	</td>
                        <td> $50.00</td>
                      </tr>
                      <tr>
                        <td colSpan={6} style={{textAlign: 'right'}}>Total Tax:	</td>
                        <td> $31.00</td>
                      </tr>
                      <tr>
                        <td colSpan={6} style={{textAlign: 'right'}}><strong>TOTAL ($228 - $50 + $31) =</strong></td>
                        <td className="label label-important" style={{display: 'block'}}> <strong> $155.00 </strong></td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td> 
                          <form className="form-horizontal">
                            <div className="control-group">
                              <label className="control-label"><strong> VOUCHERS CODE: </strong> </label>
                              <div className="controls">
                                <input type="text" className="input-medium" placeholder="CODE" />
                                <button type="submit" className="btn"> ADD </button>
                              </div>
                            </div>
                          </form>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="table table-bordered">
                    <tbody><tr><th>ESTIMATE YOUR SHIPPING </th></tr>
                      <tr> 
                        <td>
                          <form className="form-horizontal">
                            <div className="control-group">
                              <label className="control-label" htmlFor="inputCountry">Country </label>
                              <div className="controls">
                                <input type="text" id="inputCountry" placeholder="Country" />
                              </div>
                            </div>
                            <div className="control-group">
                              <label className="control-label" htmlFor="inputPost">Post Code/ Zipcode </label>
                              <div className="controls">
                                <input type="text" id="inputPost" placeholder="Postcode" />
                              </div>
                            </div>
                            <div className="control-group">
                              <div className="controls">
                                <button type="submit" className="btn">ESTIMATE </button>
                              </div>
                            </div>
                          </form>				  
                        </td>
                      </tr>
                    </tbody></table>		
                  <a href="products.html" className="btn btn-large"><i className="icon-arrow-left" /> Continue Shopping </a>
                  <a href="login.html" className="btn btn-large pull-right">Next <i className="icon-arrow-right" /></a>
                </div>
              </div></div>
          </div>
        )
    }
}

export default Checkout