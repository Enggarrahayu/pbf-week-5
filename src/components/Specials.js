import React, {Component} from 'react'

export class Specials extends Component{
    render(){
        return(
            <div id="mainBody">
            <div className="container">
              <div className="row">
                {/* Sidebar ================================================== */}
                <div id="sidebar" className="span3">
                  <div className="well well-small"><a id="myCart" href="/checkout"><img src="themes/images/ico-cart.png" alt="cart" />3 Items in your cart  <span className="badge badge-warning pull-right">$155.00</span></a></div>
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
                      <h4 style={{textAlign: 'center'}}><a className="btn" href="/details"> <i className="icon-zoom-in" /></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart" /></a> <a className="btn btn-primary" href="#">$222.00</a></h4>
                    </div>
                  </div><br />
                  <div className="thumbnail">
                    <img src="themes/images/products/kindle.png" title="Bootshop New Kindel" alt="Bootshop Kindel" />
                    <div className="caption">
                      <h5>Kindle</h5>
                      <h4 style={{textAlign: 'center'}}><a className="btn" href="/details"> <i className="icon-zoom-in" /></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart" /></a> <a className="btn btn-primary" href="#">$222.00</a></h4>
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
                    <li className="active">Special offers</li>
                  </ul>
                  <h4> 20% Discount Special offer<small className="pull-right"> 40 products are available </small></h4>	
                  <hr className="soft" />
                  <form className="form-horizontal span6">
                    <div className="control-group">
                      <label className="control-label alignL">Sort By </label>
                      <select>
                        <option>Priduct name A - Z</option>
                        <option>Priduct name Z - A</option>
                        <option>Priduct Stoke</option>
                        <option>Price Lowest first</option>
                      </select>
                    </div>
                  </form>
                  <div id="myTab" className="pull-right">
                    <a href="#listView" data-toggle="tab"><span className="btn btn-large"><i className="icon-list" /></span></a>
                    <a href="#blockView" data-toggle="tab"><span className="btn btn-large btn-primary"><i className="icon-th-large" /></span></a>
                  </div>
                  <br className="clr" />
                  <div className="tab-content">
                    <div className="tab-pane" id="listView">
                      <div className="row">	  
                        <div className="span2">
                          <img src="themes/images/products/b1.jpg" alt="" />
                        </div>
                        <div className="span4">
                          <h3>New | Available</h3>				
                          <hr className="soft" />
                          <h5>Product Name </h5>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ...
                          </p>
                          <a className="btn btn-small pull-right" href="/details">View Details</a>
                          <br className="clr" />
                        </div>
                        <div className="span3 alignR">
                          <form className="form-horizontal qtyFrm">
                            <h3> $110.00</h3>
                            <label className="checkbox">
                              <input type="checkbox" />  Adds product to compair
                            </label><br />
                            <a href="/details" className="btn btn-large btn-primary"> Add to <i className=" icon-shopping-cart" /></a>
                            <a href="/details" className="btn btn-large"><i className="icon-zoom-in" /></a>
                          </form>
                        </div>
                      </div>
                      <hr className="soft" />
                      <div className="row">	  
                        <div className="span2">
                          <img src="themes/images/products/b2.jpg" alt="" />
                        </div>
                        <div className="span4">
                          <h3>New | Available</h3>				
                          <hr className="soft" />
                          <h5>Product Name </h5>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ...
                          </p>
                          <a className="btn btn-small pull-right" href="/details">View Details</a>
                          <br className="clr" />
                        </div>
                        <div className="span3 alignR">
                          <form className="form-horizontal qtyFrm">
                            <h3> $110.00</h3>
                            <label className="checkbox">
                              <input type="checkbox" />  Adds product to compair
                            </label><br />
                            <a href="/details" className="btn btn-large btn-primary"> Add to <i className=" icon-shopping-cart" /></a>
                            <a href="/details" className="btn btn-large"><i className="icon-zoom-in" /></a>
                          </form>
                        </div>
                      </div>
                      <hr className="soft" />
                      <div className="row">	  
                        <div className="span2">
                          <img src="themes/images/products/b3.jpg" alt="" />
                        </div>
                        <div className="span4">
                          <h3>New | Available</h3>				
                          <hr className="soft" />
                          <h5>Product Name </h5>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ...
                          </p>
                          <a className="btn btn-small pull-right" href="/details">View Details</a>
                          <br className="clr" />
                        </div>
                        <div className="span3 alignR">
                          <form className="form-horizontal qtyFrm">
                            <h3> $110.00</h3>
                            <label className="checkbox">
                              <input type="checkbox" />  Adds product to compair
                            </label><br />
                            <a href="/details" className="btn btn-large btn-primary"> Add to <i className=" icon-shopping-cart" /></a>
                            <a href="/details" className="btn btn-large"><i className="icon-zoom-in" /></a>
                          </form>
                        </div>
                      </div>
                      <hr className="soft" />
                      <div className="row">	  
                        <div className="span2">
                          <img src="themes/images/products/b4.jpg" alt="" />
                        </div>
                        <div className="span4">
                          <h3>New | Available</h3>				
                          <hr className="soft" />
                          <h5>Product Name </h5>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ...
                          </p>
                          <a className="btn btn-small pull-right" href="/details">View Details</a>
                          <br className="clr" />
                        </div>
                        <div className="span3 alignR">
                          <form className="form-horizontal qtyFrm">
                            <h3> $110.00</h3>
                            <label className="checkbox">
                              <input type="checkbox" />  Adds product to compair
                            </label><br />
                            <a href="/details" className="btn btn-large btn-primary"> Add to <i className=" icon-shopping-cart" /></a>
                            <a href="/details" className="btn btn-large"><i className="icon-zoom-in" /></a>
                          </form>
                        </div>
                      </div>
                      <hr className="soft" />
                      <div className="row">	  
                        <div className="span2">
                          <img src="themes/images/products/6.jpg" alt="" />
                        </div>
                        <div className="span4">
                          <h3>New | Available</h3>				
                          <hr className="soft" />
                          <h5>Product Name </h5>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ...
                          </p>
                          <a className="btn btn-small pull-right" href="/details">View Details</a>
                          <br className="clr" />
                        </div>
                        <div className="span3 alignR">
                          <form className="form-horizontal qtyFrm">
                            <h3> $222.00</h3>
                            <label className="checkbox">
                              <input type="checkbox" />  Adds product to compair
                            </label><br />
                            <a href="/details" className="btn btn-large btn-primary"> Add to <i className=" icon-shopping-cart" /></a>
                            <a href="/details" className="btn btn-large"><i className="icon-zoom-in" /></a>
                          </form>
                        </div>
                      </div>
                      <hr className="soft" />
                      <div className="row">	  
                        <div className="span2">
                          <img src="themes/images/products/7.jpg" alt="" />
                        </div>
                        <div className="span4">
                          <h3>New | Available</h3>				
                          <hr className="soft" />
                          <h5>Product Name </h5>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ...
                          </p>
                          <a className="btn btn-small pull-right" href="/details">View Details</a>
                          <br className="clr" />
                        </div>
                        <div className="span3 alignR">
                          <form className="form-horizontal qtyFrm">
                            <h3> $222.00</h3>
                            <label className="checkbox">
                              <input type="checkbox" />  Adds product to compair
                            </label><br />
                            <a href="/details" className="btn btn-large btn-primary"> Add to <i className=" icon-shopping-cart" /></a>
                            <a href="/details" className="btn btn-large"><i className="icon-zoom-in" /></a>
                          </form>
                        </div>
                      </div>
                      <hr className="soft" />
                    </div>
                    <div className="tab-pane  active" id="blockView">
                      <ul className="thumbnails">
                        <li className="span3">
                          <div className="thumbnail">
                            <a href="/details"><img src="themes/images/products/b1.jpg" alt="" /></a>
                            <div className="caption">
                              <h5>Manicure &amp; Pedicure</h5>
                              <p> 
                                Lorem Ipsum is simply dummy text. 
                              </p>
                              <h4 style={{textAlign: 'center'}}><a className="btn" href="/details"> <i className="icon-zoom-in" /></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart" /></a> <a className="btn btn-primary" href="#">€110.00</a></h4>
                            </div>
                          </div>
                        </li>
                        <li className="span3">
                          <div className="thumbnail">
                            <a href="/details"><img src="themes/images/products/b2.jpg" alt="" /></a>
                            <div className="caption">
                              <h5>Manicure &amp; Pedicure</h5>
                              <p> 
                                Lorem Ipsum is simply dummy text. 
                              </p>
                              <h4 style={{textAlign: 'center'}}><a className="btn" href="/details"> <i className="icon-zoom-in" /></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart" /></a> <a className="btn btn-primary" href="#">€110.00</a></h4>
                            </div>
                          </div>
                        </li>
                        <li className="span3">
                          <div className="thumbnail">
                            <a href="/details"><img src="themes/images/products/b3.jpg" alt="" /></a>
                            <div className="caption">
                              <h5>Manicure &amp; Pedicure</h5>
                              <p> 
                                Lorem Ipsum is simply dummy text. 
                              </p>
                              <h4 style={{textAlign: 'center'}}><a className="btn" href="/details"> <i className="icon-zoom-in" /></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart" /></a> <a className="btn btn-primary" href="#">€110.00</a></h4>
                            </div>
                          </div>
                        </li>
                        <li className="span3">
                          <div className="thumbnail">
                            <a href="/details"><img src="themes/images/products/b4.jpg" alt="" /></a>
                            <div className="caption">
                              <h5>Manicure &amp; Pedicure</h5>
                              <p> 
                                Lorem Ipsum is simply dummy text. 
                              </p>
                              <h4 style={{textAlign: 'center'}}><a className="btn" href="/details"> <i className="icon-zoom-in" /></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart" /></a> <a className="btn btn-primary" href="#">€110.00</a></h4>
                            </div>
                          </div>
                        </li>
                        <li className="span3">
                          <div className="thumbnail">
                            <a href="/details"><img src="themes/images/products/9.jpg" alt="" /></a>
                            <div className="caption">
                              <h5>Manicure &amp; Pedicure</h5>
                              <p> 
                                Lorem Ipsum is simply dummy text. 
                              </p>
                              <h4 style={{textAlign: 'center'}}><a className="btn" href="/details"> <i className="icon-zoom-in" /></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart" /></a> <a className="btn btn-primary" href="#">€222.00</a></h4>
                            </div>
                          </div>
                        </li>
                        <li className="span3">
                          <div className="thumbnail">
                            <a href="/details"><img src="themes/images/products/4.jpg" alt="" /></a>
                            <div className="caption">
                              <h5>Manicure &amp; Pedicure</h5>
                              <p> 
                                Lorem Ipsum is simply dummy text. 
                              </p>
                              <h4 style={{textAlign: 'center'}}><a className="btn" href="/details"> <i className="icon-zoom-in" /></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart" /></a> <a className="btn btn-primary" href="#">€222.00</a></h4>
                            </div>
                          </div>
                        </li>
                        <li className="span3">
                          <div className="thumbnail">
                            <a href="/details"><img src="themes/images/products/6.jpg" alt="" /></a>
                            <div className="caption">
                              <h5>Manicure &amp; Pedicure</h5>
                              <p> 
                                Lorem Ipsum is simply dummy text. 
                              </p>
                              <h4 style={{textAlign: 'center'}}><a className="btn" href="/details"> <i className="icon-zoom-in" /></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart" /></a> <a className="btn btn-primary" href="#">€222.00</a></h4>
                            </div>
                          </div>
                        </li>
                        <li className="span3">
                          <div className="thumbnail">
                            <a href="/details"><img src="themes/images/products/7.jpg" alt="" /></a>
                            <div className="caption">
                              <h5>Manicure &amp; Pedicure</h5>
                              <p> 
                                Lorem Ipsum is simply dummy text. 
                              </p>
                              <h4 style={{textAlign: 'center'}}><a className="btn" href="/details"> <i className="icon-zoom-in" /></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart" /></a> <a className="btn btn-primary" href="#">€222.00</a></h4>
                            </div>
                          </div>
                        </li>
                        <li className="span3">
                          <div className="thumbnail">
                            <a href="/details"><img src="themes/images/products/8.jpg" alt="" /></a>
                            <div className="caption">
                              <h5>Manicure &amp; Pedicure</h5>
                              <p> 
                                Lorem Ipsum is simply dummy text. 
                              </p>
                              <h4 style={{textAlign: 'center'}}><a className="btn" href="/details"> <i className="icon-zoom-in" /></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart" /></a> <a className="btn btn-primary" href="#">€222.00</a></h4>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <hr className="soft" />
                    </div>
                  </div>
                  <a href="compair.html" className="btn btn-large pull-right">Compair Product</a>
                  <div className="pagination">
                    <ul>
                      <li><a href="#">‹</a></li>
                      <li><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">4</a></li>
                      <li><a href="#">...</a></li>
                      <li><a href="#">›</a></li>
                    </ul>
                  </div>
                  <br className="clr" />
                </div>
              </div></div>
          </div>
    
        )
    }
}

export default Specials