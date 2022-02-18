import React from "react";

const Display = () => {
  return (
    <>
      <div className="col-xl-6 box-col-12 des-xl-100 invoice-sec">
        <div className="card">
          <div className="card-header">
            <div className="header-top d-sm-flex justify-content-between align-items-center">
              <h5>Invoice Overview </h5>
              <div className="center-content">
                <p className="d-sm-flex align-items-center">
                  <span className="m-r-10">$5,56548k</span>
                  <i className="toprightarrow-primary fa fa-arrow-up m-r-10" />
                  94% More Than Last Year
                </p>
              </div>
              <div className="setting-list">
                <ul className="list-unstyled setting-option">
                  <li>
                    <div className="setting-primary">
                      <i className="icon-settings" />
                    </div>
                  </li>
                  <li>
                    <i className="view-html fa fa-code font-primary" />
                  </li>
                  <li>
                    <i className="icofont icofont-maximize full-card font-primary" />
                  </li>
                  <li>
                    <i className="icofont icofont-minus minimize-card font-primary" />
                  </li>
                  <li>
                    <i className="icofont icofont-refresh reload-card font-primary" />
                  </li>
                  <li>
                    <i className="icofont icofont-error close-card font-primary">
                      {" "}
                    </i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card-body p-0">
            <div id="timeline-chart" />
            <div className="code-box-copy">
              <button
                className="code-box-copy__btn btn-clipboard"
                data-clipboard-target="#invoice-overview"
                title="Copy"
              >
                <i className="icofont icofont-copy-alt" />
              </button>
              <pre>
                <code className="language-html" id="invoice-overview">
                  &lt;div class="card"&gt;{"\n"} &lt;div class="card-header"&gt;
                  {"\n"}
                  {"   "}&lt;div class="header-top d-sm-flex
                  justify-content-between align-items-center"&gt;
                  {"\n"}
                  {"     "}&lt;h5&gt;Invoice Overview &lt;/h5&gt;
                  {"\n"}
                  {"     "}&lt;div class="center-content"&gt;{"\n"}
                  {"       "}&lt;p class="d-sm-flex align-items-center"&gt;
                  {"\n"}
                  {"         "}&lt;span class="m-r-10"&gt;$5,56548k&lt;/span&gt;
                  {"\n"}
                  {"           "}&lt;i class="toprightarrow-primary fa
                  fa-arrow-up m-r-10"&gt;&lt;/i&gt;94% More Than Last Year{"\n"}
                  {"       "}&lt;/p&gt;{"\n"}
                  {"     "}&lt;/div&gt;{"\n"}
                  {"     "}&lt;div class="setting-list"&gt;{"\n"}
                  {"       "}&lt;ul class="list-unstyled setting-option"&gt;
                  {"\n"}
                  {"         "}&lt;li&gt;{"\n"}
                  {"           "}&lt;div class="setting-primary"&gt;&lt;i
                  class="icon-settings"&gt;&lt;/i&gt;&lt;/div&gt;
                  {"\n"}
                  {"         "}&lt;/li&gt;{"\n"}
                  {"         "}&lt;li&gt;&lt;i class="view-html fa fa-code
                  font-primary"&gt;&lt;/i&gt;&lt;/li&gt;
                  {"\n"}
                  {"         "}&lt;li&gt;&lt;i class="icofont icofont-maximize
                  full-card font-primary"&gt;&lt;/i&gt;&lt;/li&gt;{"\n"}
                  {"         "}&lt;li&gt;&lt;i class="icofont icofont-minus
                  minimize-card font-primary"&gt;&lt;/i&gt;&lt;/li&gt;{"\n"}
                  {"         "}&lt;li&gt;&lt;i class="icofont icofont-refresh
                  reload-card font-primary"&gt;&lt;/i&gt;&lt;/li&gt;{"\n"}
                  {"         "}&lt;li&gt;&lt;i class="icofont icofont-error
                  close-card font-primary"&gt; &lt;/i&gt;&lt;/li&gt;{"\n"}
                  {"       "}&lt;/ul&gt;{"\n"}
                  {"     "}&lt;/div&gt;{"\n"}
                  {"   "}&lt;/div&gt;{"\n"} &lt;/div&gt;{"\n"} &lt;div
                  class="card-body p-0"&gt;{"\n"}
                  {"   "}&lt;div id="timeline-chart"&gt;&lt;/div&gt;
                  {"\n"} &lt;/div&gt;{"\n"}&lt;/div&gt;
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6 box-col-12 des-xl-100 top-dealer-sec">
        <div className="card">
          <div className="card-header pb-0">
            <div className="header-top d-sm-flex justify-content-between align-items-center">
              <h5>Top Dealer</h5>
              <div className="center-content">
                <p className="d-sm-flex align-items-center">
                  <span className="m-r-10">845 Dealer</span>
                  <i className="toprightarrow-primary fa fa-arrow-up m-r-10" />
                  86% More Than Last Year
                </p>
              </div>
              <div className="setting-list">
                <ul className="list-unstyled setting-option">
                  <li>
                    <div className="setting-primary">
                      <i className="icon-settings" />
                    </div>
                  </li>
                  <li>
                    <i className="view-html fa fa-code font-primary" />
                  </li>
                  <li>
                    <i className="icofont icofont-maximize full-card font-primary" />
                  </li>
                  <li>
                    <i className="icofont icofont-minus minimize-card font-primary" />
                  </li>
                  <li>
                    <i className="icofont icofont-refresh reload-card font-primary" />
                  </li>
                  <li>
                    <i className="icofont icofont-error close-card font-primary">
                      {" "}
                    </i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="owl-carousel owl-theme" id="owl-carousel-14">
              <div className="item">
                <div className="row">
                  <div className="col-12">
                    <div className="owl-carousel-16 owl-carousel owl-theme">
                      <div className="item">
                        <div className="card">
                          <div className="top-dealerbox text-center">
                            <img
                              className="card-img-top"
                              src="../assets/images/dashboard-2/1.png"
                              alt="..."
                            />
                            <h6>Thompson lee</h6>
                            <p>Malasiya</p>
                            <a
                              className="btn btn-rounded"
                              href="social-app.html"
                            >
                              View More
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="card">
                          <div className="top-dealerbox text-center">
                            <img
                              className="card-img-top"
                              src="../assets/images/dashboard-2/8.png"
                              alt="..."
                            />
                            <h6>Johnson allon</h6>
                            <p>Bangladesh</p>
                            <a
                              className="btn btn-rounded"
                              href="social-app.html"
                            >
                              View More
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="card">
                          <div className="top-dealerbox text-center">
                            <img
                              className="card-img-top"
                              src="../assets/images/dashboard-2/3.png"
                              alt="..."
                            />
                            <h6>williams reed</h6>
                            <p>Belgium</p>
                            <a
                              className="btn btn-rounded"
                              href="social-app.html"
                            >
                              View More
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="card">
                          <div className="top-dealerbox text-center">
                            <img
                              className="card-img-top"
                              src="../assets/images/dashboard-2/4.png"
                              alt="..."
                            />
                            <h6> Jones king</h6>
                            <p>Canada</p>
                            <a
                              className="btn btn-rounded"
                              href="social-app.html"
                            >
                              View More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="owl-carousel-16 owl-carousel owl-theme">
                      <div className="item">
                        <div className="card">
                          <div className="top-dealerbox text-center">
                            <img
                              className="card-img-top"
                              src="../assets/images/dashboard-2/5.png"
                              alt="..."
                            />
                            <h6>Brown davis</h6>
                            <p>China</p>
                            <a
                              className="btn btn-rounded"
                              href="social-app.html"
                            >
                              View More
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="card">
                          <div className="top-dealerbox text-center">
                            <img
                              className="card-img-top"
                              src="../assets/images/dashboard-2/6.png"
                              alt="..."
                            />
                            <h6>Wilson Hill</h6>
                            <p>Denmark</p>
                            <a
                              className="btn btn-rounded"
                              href="social-app.html"
                            >
                              View More
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="card">
                          <div className="top-dealerbox text-center">
                            <img
                              className="card-img-top"
                              src="../assets/images/dashboard-2/7.png"
                              alt="..."
                            />
                            <h6>Anderson ban</h6>
                            <p>Japan</p>
                            <a
                              className="btn btn-rounded"
                              href="social-app.html"
                            >
                              View More
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="card">
                          <div className="top-dealerbox text-center">
                            <img
                              className="card-img-top"
                              src="../assets/images/dashboard-2/8.png"
                              alt="..."
                            />
                            <h6>Thompson lee</h6>
                            <p>Malasiya</p>
                            <a
                              className="btn btn-rounded"
                              href="social-app.html"
                            >
                              View More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="row">
                  <div className="col-12">
                    <div className="owl-carousel-16 owl-carousel owl-theme">
                      <div className="item">
                        <div className="card">
                          <div className="top-dealerbox text-center">
                            <img
                              className="card-img-top"
                              src="../assets/images/dashboard-2/1.png"
                              alt="..."
                            />
                            <h6>Thompson lee</h6>
                            <p>Malasiya</p>
                            <a
                              className="btn btn-rounded"
                              href="social-app.html"
                            >
                              View More
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="card">
                          <div className="top-dealerbox text-center">
                            <img
                              className="card-img-top"
                              src="../assets/images/dashboard-2/8.png"
                              alt="..."
                            />
                            <h6>Johnson allon</h6>
                            <p>Bangladesh</p>
                            <a
                              className="btn btn-rounded"
                              href="social-app.html"
                            >
                              View More
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="card">
                          <div className="top-dealerbox text-center">
                            <img
                              className="card-img-top"
                              src="../assets/images/dashboard-2/3.png"
                              alt="..."
                            />
                            <h6>williams reed</h6>
                            <p>Belgium</p>
                            <a
                              className="btn btn-rounded"
                              href="social-app.html"
                            >
                              View More
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="card">
                          <div className="top-dealerbox text-center">
                            <img
                              className="card-img-top"
                              src="../assets/images/dashboard-2/4.png"
                              alt="..."
                            />
                            <h6> Jones king</h6>
                            <p>Canada</p>
                            <a
                              className="btn btn-rounded"
                              href="social-app.html"
                            >
                              View More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="owl-carousel-16 owl-carousel owl-theme">
                      <div className="item">
                        <div className="card">
                          <div className="top-dealerbox text-center">
                            <img
                              className="card-img-top"
                              src="../assets/images/dashboard-2/5.png"
                              alt="..."
                            />
                            <h6>Brown davis</h6>
                            <p>China</p>
                            <a
                              className="btn btn-rounded"
                              href="social-app.html"
                            >
                              View More
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="card">
                          <div className="top-dealerbox text-center">
                            <img
                              className="card-img-top"
                              src="../assets/images/dashboard-2/6.png"
                              alt="..."
                            />
                            <h6>Wilson Hill</h6>
                            <p>Denmark</p>
                            <a
                              className="btn btn-rounded"
                              href="social-app.html"
                            >
                              View More
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="card">
                          <div className="top-dealerbox text-center">
                            <img
                              className="card-img-top"
                              src="../assets/images/dashboard-2/7.png"
                              alt="..."
                            />
                            <h6>Anderson ban</h6>
                            <p>Japan</p>
                            <a
                              className="btn btn-rounded"
                              href="social-app.html"
                            >
                              View More
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="card">
                          <div className="top-dealerbox text-center">
                            <img
                              className="card-img-top"
                              src="../assets/images/dashboard-2/8.png"
                              alt="..."
                            />
                            <h6>Thompson lee</h6>
                            <p>Malasiya</p>
                            <a
                              className="btn btn-rounded"
                              href="social-app.html"
                            >
                              View More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="row">
                  <div className="col-12">
                    <div className="owl-carousel-16 owl-carousel owl-theme">
                      <div className="item">
                        <div className="card">
                          <div className="top-dealerbox text-center">
                            <img
                              className="card-img-top"
                              src="../assets/images/dashboard-2/1.png"
                              alt="..."
                            />
                            <h6>Thompson lee</h6>
                            <p>Malasiya</p>
                            <a
                              className="btn btn-rounded"
                              href="social-app.html"
                            >
                              View More
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="card">
                          <div className="top-dealerbox text-center">
                            <img
                              className="card-img-top"
                              src="../assets/images/dashboard-2/8.png"
                              alt="..."
                            />
                            <h6>Johnson allon</h6>
                            <p>Bangladesh</p>
                            <a
                              className="btn btn-rounded"
                              href="social-app.html"
                            >
                              View More
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="card">
                          <div className="top-dealerbox text-center">
                            <img
                              className="card-img-top"
                              src="../assets/images/dashboard-2/3.png"
                              alt="..."
                            />
                            <h6>williams reed</h6>
                            <p>Belgium</p>
                            <a
                              className="btn btn-rounded"
                              href="social-app.html"
                            >
                              View More
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="card">
                          <div className="top-dealerbox text-center">
                            <img
                              className="card-img-top"
                              src="../assets/images/dashboard-2/4.png"
                              alt="..."
                            />
                            <h6> Jones king</h6>
                            <p>Canada</p>
                            <a
                              className="btn btn-rounded"
                              href="social-app.html"
                            >
                              View More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="owl-carousel-16 owl-carousel owl-theme">
                      <div className="item">
                        <div className="card">
                          <div className="top-dealerbox text-center">
                            <img
                              className="card-img-top"
                              src="../assets/images/dashboard-2/5.png"
                              alt="..."
                            />
                            <h6>Brown davis</h6>
                            <p>China</p>
                            <a
                              className="btn btn-rounded"
                              href="social-app.html"
                            >
                              View More
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="card">
                          <div className="top-dealerbox text-center">
                            <img
                              className="card-img-top"
                              src="../assets/images/dashboard-2/6.png"
                              alt="..."
                            />
                            <h6>Wilson Hill</h6>
                            <p>Denmark</p>
                            <a
                              className="btn btn-rounded"
                              href="social-app.html"
                            >
                              View More
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="card">
                          <div className="top-dealerbox text-center">
                            <img
                              className="card-img-top"
                              src="../assets/images/dashboard-2/7.png"
                              alt="..."
                            />
                            <h6>Anderson ban</h6>
                            <p>Japan</p>
                            <a
                              className="btn btn-rounded"
                              href="social-app.html"
                            >
                              View More
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="card">
                          <div className="top-dealerbox text-center">
                            <img
                              className="card-img-top"
                              src="../assets/images/dashboard-2/8.png"
                              alt="..."
                            />
                            <h6>Thompson lee</h6>
                            <p>Malasiya</p>
                            <a
                              className="btn btn-rounded"
                              href="social-app.html"
                            >
                              View More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="row">
                  <div className="col-12">
                    <div className="owl-carousel-16 owl-carousel owl-theme">
                      <div className="item">
                        <div className="card">
                          <div className="top-dealerbox text-center">
                            <img
                              className="card-img-top"
                              src="../assets/images/dashboard-2/1.png"
                              alt="..."
                            />
                            <h6>Thompson lee</h6>
                            <p>Malasiya</p>
                            <a
                              className="btn btn-rounded"
                              href="social-app.html"
                            >
                              View More
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="card">
                          <div className="top-dealerbox text-center">
                            <img
                              className="card-img-top"
                              src="../assets/images/dashboard-2/8.png"
                              alt="..."
                            />
                            <h6>Johnson allon</h6>
                            <p>Bangladesh</p>
                            <a
                              className="btn btn-rounded"
                              href="social-app.html"
                            >
                              View More
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="card">
                          <div className="top-dealerbox text-center">
                            <img
                              className="card-img-top"
                              src="../assets/images/dashboard-2/3.png"
                              alt="..."
                            />
                            <h6>williams reed</h6>
                            <p>Belgium</p>
                            <a
                              className="btn btn-rounded"
                              href="social-app.html"
                            >
                              View More
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="card">
                          <div className="top-dealerbox text-center">
                            <img
                              className="card-img-top"
                              src="../assets/images/dashboard-2/4.png"
                              alt="..."
                            />
                            <h6> Jones king</h6>
                            <p>Canada</p>
                            <a
                              className="btn btn-rounded"
                              href="social-app.html"
                            >
                              View More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="owl-carousel-16 owl-carousel owl-theme">
                      <div className="item">
                        <div className="card">
                          <div className="top-dealerbox text-center">
                            <img
                              className="card-img-top"
                              src="../assets/images/dashboard-2/5.png"
                              alt="..."
                            />
                            <h6>Brown davis</h6>
                            <p>China</p>
                            <a
                              className="btn btn-rounded"
                              href="social-app.html"
                            >
                              View More
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="card">
                          <div className="top-dealerbox text-center">
                            <img
                              className="card-img-top"
                              src="../assets/images/dashboard-2/6.png"
                              alt="..."
                            />
                            <h6>Wilson Hill</h6>
                            <p>Denmark</p>
                            <a
                              className="btn btn-rounded"
                              href="social-app.html"
                            >
                              View More
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="card">
                          <div className="top-dealerbox text-center">
                            <img
                              className="card-img-top"
                              src="../assets/images/dashboard-2/7.png"
                              alt="..."
                            />
                            <h6>Anderson ban</h6>
                            <p>Japan</p>
                            <a
                              className="btn btn-rounded"
                              href="social-app.html"
                            >
                              View More
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="card">
                          <div className="top-dealerbox text-center">
                            <img
                              className="card-img-top"
                              src="../assets/images/dashboard-2/8.png"
                              alt="..."
                            />
                            <h6>Thompson lee</h6>
                            <p>Malasiya</p>
                            <a
                              className="btn btn-rounded"
                              href="social-app.html"
                            >
                              View More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="code-box-copy">
              <button
                className="code-box-copy__btn btn-clipboard"
                data-clipboard-target="#top-dealer"
                title="Copy"
              >
                <i className="icofont icofont-copy-alt" />
              </button>
              <pre>
                <code className="language-html" id="top-dealer">
                  &lt;div class="card"&gt;{"\n"} &lt;div class="card-header
                  pb-0"&gt;{"\n"}
                  {"   "}&lt;div class="header-top d-sm-flex
                  justify-content-between align-items-center"&gt;
                  {"\n"}
                  {"       "}&lt;h5&gt;Top Dealer&lt;/h5&gt;{"\n"}
                  {"       "}&lt;div class="center-content"&gt; {"\n"}
                  {"         "}&lt;p class="d-sm-flex
                  align-items-center"&gt;&lt;span class="m-r-10"&gt;845
                  Dealer&lt;/span&gt;&lt;i class="toprightarrow-primary fa
                  fa-arrow-up m-r-10"&gt;&lt;/i&gt;86% More Than Last
                  Year&lt;/p&gt;{"\n"}
                  {"       "}&lt;/div&gt;{"\n"}
                  {"       "}&lt;div class="setting-list"&gt;{"\n"}
                  {"           "}&lt;ul class="list-unstyled setting-option"&gt;
                  {"\n"}
                  {"             "}&lt;li&gt;{"\n"}
                  {"               "}&lt;div class="setting-primary"&gt;&lt;i
                  class="icon-settings"&gt;&lt;/i&gt;&lt;/div&gt;
                  {"\n"}
                  {"             "}&lt;/li&gt;{"\n"}
                  {"             "}&lt;li&gt;&lt;i class="view-html fa fa-code
                  font-primary"&gt;&lt;/i&gt;&lt;/li&gt;
                  {"\n"}
                  {"             "}&lt;li&gt;&lt;i class="icofont
                  icofont-maximize full-card
                  font-primary"&gt;&lt;/i&gt;&lt;/li&gt;{"\n"}
                  {"             "}&lt;li&gt;&lt;i class="icofont icofont-minus
                  minimize-card font-primary"&gt;&lt;/i&gt;&lt;/li&gt;{"\n"}
                  {"             "}&lt;li&gt;&lt;i class="icofont
                  icofont-refresh reload-card
                  font-primary"&gt;&lt;/i&gt;&lt;/li&gt;{"\n"}
                  {"             "}&lt;li&gt;&lt;i class="icofont icofont-error
                  close-card font-primary"&gt; &lt;/i&gt;&lt;/li&gt;{"\n"}
                  {"            "}&lt;/ul&gt;{"\n"}
                  {"       "}&lt;/div&gt;{"\n"}
                  {"   "}&lt;/div&gt;{"\n"} &lt;/div&gt;{"\n"} &lt;div
                  class="card-body"&gt;{"\n"}
                  {"     "}&lt;div id="owl-carousel-14" class="owl-carousel
                  owl-theme"&gt;{"\n"}
                  {"       "}&lt;div class="item"&gt;{"\n"}
                  {"         "}&lt;div class="row"&gt;{"\n"}
                  {"           "}&lt;div class="col-sm-3"&gt;{"\n"}
                  {"               "}&lt;div class="card"&gt;{"\n"}
                  {"                 "}&lt;div class="top-dealerbox
                  text-center"&gt;&lt;img class="card-img-top"
                  src="../assets/images/dashboard-2/1.png" alt="..."&gt;{"\n"}
                  {"                   "}&lt;h6&gt;Thompson lee&lt;/h6&gt;{"\n"}
                  {"                   "}
                  &lt;p&gt;Malasiya&lt;/p&gt;&lt;a class="btn btn-rounded"
                  href="javascript:void(0)"&gt;View More&lt;/a&gt;{"\n"}
                  {"                 "}&lt;/div&gt;{"\n"}
                  {"               "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;div class="col-sm-3"&gt;{"\n"}
                  {"               "}&lt;div class="card"&gt;{"\n"}
                  {"                 "}&lt;div class="top-dealerbox
                  text-center"&gt;&lt;img class="card-img-top"
                  src="../assets/images/dashboard-2/8.png" alt="..."&gt;{"\n"}
                  {"                   "}&lt;h6&gt;johnson allon&lt;/h6&gt;
                  {"\n"}
                  {"                   "}
                  &lt;p&gt;bangladeshlt&lt;/p&gt;&lt;a class="btn btn-rounded"
                  href="javascript:void(0)"&gt;View More&lt;/a&gt;{"\n"}
                  {"                 "}&lt;/div&gt;{"\n"}
                  {"               "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;div class="col-sm-3"&gt;{"\n"}
                  {"               "}&lt;div class="card"&gt;{"\n"}
                  {"                 "}&lt;div class="top-dealerbox
                  text-center"&gt;&lt;img class="card-img-top"
                  src="../assets/images/dashboard-2/3.png" alt="..."&gt;{"\n"}
                  {"                   "}&lt;h6&gt;williams reed&lt;/h6&gt;
                  {"\n"}
                  {"                   "}
                  &lt;p&gt;Belgium&lt;/p&gt;&lt;a class="btn btn-rounded"
                  href="javascript:void(0)"&gt;View More&lt;/a&gt;{"\n"}
                  {"                 "}&lt;/div&gt;{"\n"}
                  {"               "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;div class="col-sm-3"&gt;{"\n"}
                  {"               "}&lt;div class="card"&gt;{"\n"}
                  {"                 "}&lt;div class="top-dealerbox
                  text-center"&gt;&lt;img class="card-img-top"
                  src="../assets/images/dashboard-2/3.png" alt="..."&gt;{"\n"}
                  {"                   "}&lt;h6&gt; Jones king&lt;/h6&gt;{"\n"}
                  {"                   "}
                  &lt;p&gt;Canada&lt;/p&gt;&lt;a class="btn btn-rounded"
                  href="javascript:void(0)"&gt;View More&lt;/a&gt;{"\n"}
                  {"                 "}&lt;/div&gt;{"\n"}
                  {"               "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;div class="col-sm-3"&gt;{"\n"}
                  {"               "}&lt;div class="card"&gt;{"\n"}
                  {"                 "}&lt;div class="top-dealerbox
                  text-center"&gt;&lt;img class="card-img-top"
                  src="../assets/images/dashboard-2/5.png" alt="..."&gt;{"\n"}
                  {"                   "}&lt;h6&gt;Brown davis&lt;/h6&gt;{"\n"}
                  {"                   "}
                  &lt;p&gt;China&lt;/p&gt;&lt;a class="btn btn-rounded"
                  href="javascript:void(0)"&gt;View More&lt;/a&gt;{"\n"}
                  {"                 "}&lt;/div&gt;{"\n"}
                  {"               "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;div class="col-sm-3"&gt;{"\n"}
                  {"               "}&lt;div class="card"&gt;{"\n"}
                  {"                 "}&lt;div class="top-dealerbox
                  text-center"&gt;&lt;img class="card-img-top"
                  src="../assets/images/dashboard-2/6.png" alt="..."&gt;{"\n"}
                  {"                   "}&lt;h6&gt;Wilson Hill&lt;/h6&gt;{"\n"}
                  {"                   "}
                  &lt;p&gt;Denmark&lt;/p&gt;&lt;a class="btn btn-rounded"
                  href="javascript:void(0)"&gt;View More&lt;/a&gt;{"\n"}
                  {"                 "}&lt;/div&gt;{"\n"}
                  {"               "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;div class="col-sm-3"&gt;{"\n"}
                  {"               "}&lt;div class="card"&gt;{"\n"}
                  {"                 "}&lt;div class="top-dealerbox
                  text-center"&gt;&lt;img class="card-img-top"
                  src="../assets/images/dashboard-2/7.png" alt="..."&gt;{"\n"}
                  {"                   "}&lt;h6&gt;Anderson ban&lt;/h6&gt;{"\n"}
                  {"                   "}
                  &lt;p&gt;Japan&lt;/p&gt;&lt;a class="btn btn-rounded"
                  href="javascript:void(0)"&gt;View More&lt;/a&gt;{"\n"}
                  {"                 "}&lt;/div&gt;{"\n"}
                  {"               "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;div class="col-sm-3"&gt;{"\n"}
                  {"               "}&lt;div class="card"&gt;{"\n"}
                  {"                 "}&lt;div class="top-dealerbox
                  text-center"&gt;&lt;img class="card-img-top"
                  src="../assets/images/dashboard-2/8.png" alt="..."&gt;{"\n"}
                  {"                   "}&lt;h6&gt;Thompson lee&lt;/h6&gt;{"\n"}
                  {"                   "}
                  &lt;p&gt;Malasiya&lt;/p&gt;&lt;a class="btn btn-rounded"
                  href="javascript:void(0)"&gt;View More&lt;/a&gt;{"\n"}
                  {"                 "}&lt;/div&gt;{"\n"}
                  {"               "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;/div&gt;{"\n"}
                  {"         "}&lt;/div&gt;{"\n"}
                  {"       "}&lt;/div&gt;{"\n"}
                  {"       "}&lt;div class="item"&gt;{"\n"}
                  {"         "}&lt;div class="row"&gt;{"\n"}
                  {"           "}&lt;div class="col-sm-3"&gt;{"\n"}
                  {"               "}&lt;div class="card"&gt;{"\n"}
                  {"                 "}&lt;div class="top-dealerbox
                  text-center"&gt;&lt;img class="card-img-top"
                  src="../assets/images/dashboard-2/1.png" alt="..."&gt;{"\n"}
                  {"                   "}&lt;h6&gt;Thompson lee&lt;/h6&gt;{"\n"}
                  {"                   "}
                  &lt;p&gt;Malasiya&lt;/p&gt;&lt;a class="btn btn-rounded"
                  href="javascript:void(0)"&gt;View More&lt;/a&gt;{"\n"}
                  {"                 "}&lt;/div&gt;{"\n"}
                  {"               "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;div class="col-sm-3"&gt;{"\n"}
                  {"               "}&lt;div class="card"&gt;{"\n"}
                  {"                 "}&lt;div class="top-dealerbox
                  text-center"&gt;&lt;img class="card-img-top"
                  src="../assets/images/dashboard-2/8.png" alt="..."&gt;{"\n"}
                  {"                   "}&lt;h6&gt;johnson allon&lt;/h6&gt;
                  {"\n"}
                  {"                   "}
                  &lt;p&gt;bangladeshlt&lt;/p&gt;&lt;a class="btn btn-rounded"
                  href="javascript:void(0)"&gt;View More&lt;/a&gt;{"\n"}
                  {"                 "}&lt;/div&gt;{"\n"}
                  {"               "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;div class="col-sm-3"&gt;{"\n"}
                  {"               "}&lt;div class="card"&gt;{"\n"}
                  {"                 "}&lt;div class="top-dealerbox
                  text-center"&gt;&lt;img class="card-img-top"
                  src="../assets/images/dashboard-2/3.png" alt="..."&gt;{"\n"}
                  {"                   "}&lt;h6&gt;williams reed&lt;/h6&gt;
                  {"\n"}
                  {"                   "}
                  &lt;p&gt;Belgium&lt;/p&gt;&lt;a class="btn btn-rounded"
                  href="javascript:void(0)"&gt;View More&lt;/a&gt;{"\n"}
                  {"                 "}&lt;/div&gt;{"\n"}
                  {"               "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;div class="col-sm-3"&gt;{"\n"}
                  {"               "}&lt;div class="card"&gt;{"\n"}
                  {"                 "}&lt;div class="top-dealerbox
                  text-center"&gt;&lt;img class="card-img-top"
                  src="../assets/images/dashboard-2/3.png" alt="..."&gt;{"\n"}
                  {"                   "}&lt;h6&gt; Jones king&lt;/h6&gt;{"\n"}
                  {"                   "}
                  &lt;p&gt;Canada&lt;/p&gt;&lt;a class="btn btn-rounded"
                  href="javascript:void(0)"&gt;View More&lt;/a&gt;{"\n"}
                  {"                 "}&lt;/div&gt;{"\n"}
                  {"               "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;div class="col-sm-3"&gt;{"\n"}
                  {"               "}&lt;div class="card"&gt;{"\n"}
                  {"                 "}&lt;div class="top-dealerbox
                  text-center"&gt;&lt;img class="card-img-top"
                  src="../assets/images/dashboard-2/5.png" alt="..."&gt;{"\n"}
                  {"                   "}&lt;h6&gt;Brown davis&lt;/h6&gt;{"\n"}
                  {"                   "}
                  &lt;p&gt;China&lt;/p&gt;&lt;a class="btn btn-rounded"
                  href="javascript:void(0)"&gt;View More&lt;/a&gt;{"\n"}
                  {"                 "}&lt;/div&gt;{"\n"}
                  {"               "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;div class="col-sm-3"&gt;{"\n"}
                  {"               "}&lt;div class="card"&gt;{"\n"}
                  {"                 "}&lt;div class="top-dealerbox
                  text-center"&gt;&lt;img class="card-img-top"
                  src="../assets/images/dashboard-2/6.png" alt="..."&gt;{"\n"}
                  {"                   "}&lt;h6&gt;Wilson Hill&lt;/h6&gt;{"\n"}
                  {"                   "}
                  &lt;p&gt;Denmark&lt;/p&gt;&lt;a class="btn btn-rounded"
                  href="javascript:void(0)"&gt;View More&lt;/a&gt;{"\n"}
                  {"                 "}&lt;/div&gt;{"\n"}
                  {"               "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;div class="col-sm-3"&gt;{"\n"}
                  {"               "}&lt;div class="card"&gt;{"\n"}
                  {"                 "}&lt;div class="top-dealerbox
                  text-center"&gt;&lt;img class="card-img-top"
                  src="../assets/images/dashboard-2/7.png" alt="..."&gt;{"\n"}
                  {"                   "}&lt;h6&gt;Anderson ban&lt;/h6&gt;{"\n"}
                  {"                   "}
                  &lt;p&gt;Japan&lt;/p&gt;&lt;a class="btn btn-rounded"
                  href="javascript:void(0)"&gt;View More&lt;/a&gt;{"\n"}
                  {"                 "}&lt;/div&gt;{"\n"}
                  {"               "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;div class="col-sm-3"&gt;{"\n"}
                  {"               "}&lt;div class="card"&gt;{"\n"}
                  {"                 "}&lt;div class="top-dealerbox
                  text-center"&gt;&lt;img class="card-img-top"
                  src="../assets/images/dashboard-2/8.png" alt="..."&gt;{"\n"}
                  {"                   "}&lt;h6&gt;Thompson lee&lt;/h6&gt;{"\n"}
                  {"                   "}
                  &lt;p&gt;Malasiya&lt;/p&gt;&lt;a class="btn btn-rounded"
                  href="javascript:void(0)"&gt;View More&lt;/a&gt;{"\n"}
                  {"                 "}&lt;/div&gt;{"\n"}
                  {"               "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;/div&gt;{"\n"}
                  {"         "}&lt;/div&gt;{"\n"}
                  {"       "}&lt;/div&gt;{"\n"}
                  {"       "}&lt;div class="item"&gt;{"\n"}
                  {"         "}&lt;div class="row"&gt;{"\n"}
                  {"           "}&lt;div class="col-sm-3"&gt;{"\n"}
                  {"               "}&lt;div class="card"&gt;{"\n"}
                  {"                 "}&lt;div class="top-dealerbox
                  text-center"&gt;&lt;img class="card-img-top"
                  src="../assets/images/dashboard-2/1.png" alt="..."&gt;{"\n"}
                  {"                   "}&lt;h6&gt;Thompson lee&lt;/h6&gt;{"\n"}
                  {"                   "}
                  &lt;p&gt;Malasiya&lt;/p&gt;&lt;a class="btn btn-rounded"
                  href="javascript:void(0)"&gt;View More&lt;/a&gt;{"\n"}
                  {"                 "}&lt;/div&gt;{"\n"}
                  {"               "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;div class="col-sm-3"&gt;{"\n"}
                  {"               "}&lt;div class="card"&gt;{"\n"}
                  {"                 "}&lt;div class="top-dealerbox
                  text-center"&gt;&lt;img class="card-img-top"
                  src="../assets/images/dashboard-2/8.png" alt="..."&gt;{"\n"}
                  {"                   "}&lt;h6&gt;johnson allon&lt;/h6&gt;
                  {"\n"}
                  {"                   "}
                  &lt;p&gt;bangladeshlt&lt;/p&gt;&lt;a class="btn btn-rounded"
                  href="javascript:void(0)"&gt;View More&lt;/a&gt;{"\n"}
                  {"                 "}&lt;/div&gt;{"\n"}
                  {"               "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;div class="col-sm-3"&gt;{"\n"}
                  {"               "}&lt;div class="card"&gt;{"\n"}
                  {"                 "}&lt;div class="top-dealerbox
                  text-center"&gt;&lt;img class="card-img-top"
                  src="../assets/images/dashboard-2/3.png" alt="..."&gt;{"\n"}
                  {"                   "}&lt;h6&gt;williams reed&lt;/h6&gt;
                  {"\n"}
                  {"                   "}
                  &lt;p&gt;Belgium&lt;/p&gt;&lt;a class="btn btn-rounded"
                  href="javascript:void(0)"&gt;View More&lt;/a&gt;{"\n"}
                  {"                 "}&lt;/div&gt;{"\n"}
                  {"               "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;div class="col-sm-3"&gt;{"\n"}
                  {"               "}&lt;div class="card"&gt;{"\n"}
                  {"                 "}&lt;div class="top-dealerbox
                  text-center"&gt;&lt;img class="card-img-top"
                  src="../assets/images/dashboard-2/3.png" alt="..."&gt;{"\n"}
                  {"                   "}&lt;h6&gt; Jones king&lt;/h6&gt;{"\n"}
                  {"                   "}
                  &lt;p&gt;Canada&lt;/p&gt;&lt;a class="btn btn-rounded"
                  href="javascript:void(0)"&gt;View More&lt;/a&gt;{"\n"}
                  {"                 "}&lt;/div&gt;{"\n"}
                  {"               "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;div class="col-sm-3"&gt;{"\n"}
                  {"               "}&lt;div class="card"&gt;{"\n"}
                  {"                 "}&lt;div class="top-dealerbox
                  text-center"&gt;&lt;img class="card-img-top"
                  src="../assets/images/dashboard-2/5.png" alt="..."&gt;{"\n"}
                  {"                   "}&lt;h6&gt;Brown davis&lt;/h6&gt;{"\n"}
                  {"                   "}
                  &lt;p&gt;China&lt;/p&gt;&lt;a class="btn btn-rounded"
                  href="javascript:void(0)"&gt;View More&lt;/a&gt;{"\n"}
                  {"                 "}&lt;/div&gt;{"\n"}
                  {"               "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;div class="col-sm-3"&gt;{"\n"}
                  {"               "}&lt;div class="card"&gt;{"\n"}
                  {"                 "}&lt;div class="top-dealerbox
                  text-center"&gt;&lt;img class="card-img-top"
                  src="../assets/images/dashboard-2/6.png" alt="..."&gt;{"\n"}
                  {"                   "}&lt;h6&gt;Wilson Hill&lt;/h6&gt;{"\n"}
                  {"                   "}
                  &lt;p&gt;Denmark&lt;/p&gt;&lt;a class="btn btn-rounded"
                  href="javascript:void(0)"&gt;View More&lt;/a&gt;{"\n"}
                  {"                 "}&lt;/div&gt;{"\n"}
                  {"               "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;div class="col-sm-3"&gt;{"\n"}
                  {"               "}&lt;div class="card"&gt;{"\n"}
                  {"                 "}&lt;div class="top-dealerbox
                  text-center"&gt;&lt;img class="card-img-top"
                  src="../assets/images/dashboard-2/7.png" alt="..."&gt;{"\n"}
                  {"                   "}&lt;h6&gt;Anderson ban&lt;/h6&gt;{"\n"}
                  {"                   "}
                  &lt;p&gt;Japan&lt;/p&gt;&lt;a class="btn btn-rounded"
                  href="javascript:void(0)"&gt;View More&lt;/a&gt;{"\n"}
                  {"                 "}&lt;/div&gt;{"\n"}
                  {"               "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;div class="col-sm-3"&gt;{"\n"}
                  {"               "}&lt;div class="card"&gt;{"\n"}
                  {"                 "}&lt;div class="top-dealerbox
                  text-center"&gt;&lt;img class="card-img-top"
                  src="../assets/images/dashboard-2/8.png" alt="..."&gt;{"\n"}
                  {"                   "}&lt;h6&gt;Thompson lee&lt;/h6&gt;{"\n"}
                  {"                   "}
                  &lt;p&gt;Malasiya&lt;/p&gt;&lt;a class="btn btn-rounded"
                  href="javascript:void(0)"&gt;View More&lt;/a&gt;{"\n"}
                  {"                 "}&lt;/div&gt;{"\n"}
                  {"               "}&lt;/div&gt;{"\n"}
                  {"           "}&lt;/div&gt;{"\n"}
                  {"         "}&lt;/div&gt;{"\n"}
                  {"       "}&lt;/div&gt;{"\n"}
                  {"     "}&lt;/div&gt;{"\n"}
                  {"   "}&lt;/div&gt;{"\n"}&lt;/div&gt;
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-8 col-md- des-xl-100 box-col-12">
        <div className="row">
          <div className="col-xl-3 col-sm-6 box-col-3 chart_data_right">
            <div className="card income-card card-secondary">
              <div className="card-body align-items-center">
                <div className="round-progress knob-block text-center">
                  <div className="progress-circle">
                    <input
                      className="knob1"
                      data-width={10}
                      data-height={70}
                      data-thickness=".3"
                      data-angleoffset={0}
                      data-linecap="round"
                      data-fgcolor="#ba895d"
                      data-bgcolor="#e0e9ea"
                      defaultValue={60}
                    />
                  </div>
                  <h5>$9,84,235</h5>
                  <p>Our Annual Income</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 box-col-3 chart_data_right second">
            <div className="card income-card card-primary">
              <div className="card-body">
                <div className="round-progress knob-block text-center">
                  <div className="progress-circle">
                    <input
                      className="knob1"
                      data-width={50}
                      data-height={70}
                      data-thickness=".3"
                      data-fgcolor="#24695c"
                      data-linecap="round"
                      data-angleoffset={0}
                      defaultValue={60}
                    />
                  </div>
                  <h5>$4,55,462</h5>
                  <p>Our Annual Income</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 box-col-6 top-sell-sec">
            <div className="card">
              <div className="card-header pb-0">
                <div className="header-top d-sm-flex justify-content-between align-items-center">
                  <h5>Top Selling Product</h5>
                  <div className="center-content">
                    <ul className="week-date">
                      <li className="font-primary">Today</li>
                      <li>Month</li>
                    </ul>
                  </div>
                  <div className="setting-list">
                    <ul className="list-unstyled setting-option">
                      <li>
                        <div className="setting-primary">
                          <i className="icon-settings" />
                        </div>
                      </li>
                      <li>
                        <i className="view-html fa fa-code font-primary" />
                      </li>
                      <li>
                        <i className="icofont icofont-maximize full-card font-primary" />
                      </li>
                      <li>
                        <i className="icofont icofont-minus minimize-card font-primary" />
                      </li>
                      <li>
                        <i className="icofont icofont-refresh reload-card font-primary" />
                      </li>
                      <li>
                        <i className="icofont icofont-error close-card font-primary" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="media">
                  <img
                    className="img-fluid"
                    src="../assets/images/dashboard-2/9.png"
                    alt
                  />
                  <div className="media-body">
                    <a href="product-page.html">
                      <h6>Trending Nike shoes</h6>
                    </a>
                    <p>New Offer Only $126.00</p>
                    <ul className="rating-star">
                      <li>
                        {" "}
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        {" "}
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        {" "}
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        {" "}
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        {" "}
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <a className="btn btn-iconsolid" href="cart.html">
                    <i className="icon-bag" />
                  </a>
                </div>
                <div className="code-box-copy">
                  <button
                    className="code-box-copy__btn btn-clipboard"
                    data-clipboard-target="#top-selling-product"
                    title="Copy"
                  >
                    <i className="icofont icofont-copy-alt" />
                  </button>
                  <pre>
                    <code className="language-html" id="top-selling-product">
                      &lt;div class="card"&gt;{"\n"}
                      {"   "}&lt;div class="card-header pb-0"&gt;
                      {"\n"}
                      {"     "}&lt;div class="header-top d-sm-flex
                      justify-content-between align-items-center"&gt;{"\n"}
                      {"       "}&lt;h5&gt;Top Selling Product&lt;/h5&gt;{"\n"}
                      {"       "}&lt;div class="center-content"&gt;
                      {"\n"}
                      {"         "}&lt;ul class="week-date"&gt;
                      {"\n"}
                      {"           "}&lt;li
                      class="font-primary"&gt;Today&lt;/li&gt;{"\n"}
                      {"           "}&lt;li&gt;Month&lt;/li&gt;
                      {"\n"}
                      {"         "}&lt;/ul&gt;{"\n"}
                      {"       "}&lt;/div&gt;{"\n"}
                      {"     "}&lt;div class="setting-list"&gt;
                      {"\n"}
                      {"       "}&lt;ul class="list-unstyled setting-option"&gt;
                      {"\n"}
                      {"         "}&lt;li&gt;{"\n"}
                      {"           "}&lt;div class="setting-primary"&gt;&lt;i
                      class="icon-settings"&gt;&lt;/i&gt;&lt;/div&gt;
                      {"\n"}
                      {"         "}&lt;/li&gt;{"\n"}
                      {"         "}&lt;li&gt;&lt;i class="view-html fa fa-code
                      font-primary"&gt;&lt;/i&gt;&lt;/li&gt;{"\n"}
                      {"         "}&lt;li&gt;&lt;i class="icofont
                      icofont-maximize full-card
                      font-primary"&gt;&lt;/i&gt;&lt;/li&gt;{"\n"}
                      {"         "}&lt;li&gt;&lt;i class="icofont icofont-minus
                      minimize-card font-primary"&gt;&lt;/i&gt;&lt;/li&gt;{"\n"}
                      {"         "}&lt;li&gt;&lt;i class="icofont
                      icofont-refresh reload-card
                      font-primary"&gt;&lt;/i&gt;&lt;/li&gt;{"\n"}
                      {"         "}&lt;li&gt;&lt;i class="icofont icofont-error
                      close-card font-primary"&gt;&lt;/i&gt;&lt;/li&gt;{"\n"}
                      {"       "}&lt;/ul&gt;{"\n"}
                      {"     "}&lt;/div&gt;{"\n"}
                      {"   "}&lt;/div&gt;{"\n"}
                      {"   "}&lt;/div&gt;{"\n"}
                      {"   "}&lt;div class="card-body"&gt;{"\n"}
                      {"     "}&lt;div class="media"&gt;&lt;img
                      class="img-fluid" alt=""
                      src="../assets/images/dashboard-2/9.png"&gt;
                      {"\n"}
                      {"       "}&lt;div class="media-body"&gt;
                      {"\n"}
                      {"         "}&lt;h6&gt;Trending Nike shoes&lt;/h6&gt;
                      {"\n"}
                      {"         "}&lt;p&gt;New Offer Only $126.00&lt;/p&gt;
                      {"\n"}
                      {"         "}&lt;ul class="rating-star"&gt;
                      {"\n"}
                      {"           "}&lt;li&gt; &lt;i class="fa
                      fa-star"&gt;&lt;/i&gt;&lt;/li&gt;{"\n"}
                      {"           "}&lt;li&gt; &lt;i class="fa
                      fa-star"&gt;&lt;/i&gt;&lt;/li&gt;{"\n"}
                      {"           "}&lt;li&gt; &lt;i class="fa
                      fa-star"&gt;&lt;/i&gt;&lt;/li&gt;{"\n"}
                      {"           "}&lt;li&gt; &lt;i class="fa
                      fa-star"&gt;&lt;/i&gt;&lt;/li&gt;{"\n"}
                      {"           "}&lt;li&gt; &lt;i class="fa
                      fa-star"&gt;&lt;/i&gt;&lt;/li&gt;{"\n"}
                      {"         "}&lt;/ul&gt;{"\n"}
                      {"       "}&lt;/div&gt;{"\n"}
                      {"       "}&lt;a class="btn btn-iconsolid"
                      href="javascript:void(0)"&gt;&lt;i
                      class="icon-bag"&gt;&lt;/i&gt;&lt;/a&gt;{"\n"}
                      {"     "}&lt;/div&gt; {"\n"}&lt;/div&gt;
                      {"                                                "}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 box-col-6">
            <div className="card">
              <div className="card-header">
                <div className="header-top d-sm-flex justify-content-between align-items-center">
                  <h5>Total Selling</h5>
                  <div className="center-content">
                    <ul className="week-date">
                      <li className="font-primary">Today</li>
                      <li>Month </li>
                    </ul>
                  </div>
                  <div className="setting-list">
                    <ul className="list-unstyled setting-option">
                      <li>
                        <div className="setting-primary">
                          <i className="icon-settings" />
                        </div>
                      </li>
                      <li>
                        <i className="view-html fa fa-code font-primary" />
                      </li>
                      <li>
                        <i className="icofont icofont-maximize full-card font-primary" />
                      </li>
                      <li>
                        <i className="icofont icofont-minus minimize-card font-primary" />
                      </li>
                      <li>
                        <i className="icofont icofont-refresh reload-card font-primary" />
                      </li>
                      <li>
                        <i className="icofont icofont-error close-card font-primary" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body chart-block p-0">
                <div id="chart-dash-2-line" />
                <div className="code-box-copy">
                  <button
                    className="code-box-copy__btn btn-clipboard"
                    data-clipboard-target="#total-selling"
                    title="Copy"
                  >
                    <i className="icofont icofont-copy-alt" />
                  </button>
                  <pre>
                    <code className="language-html" id="total-selling">
                      {"  "}&lt;div class="card"&gt;{"\n"}
                      {"   "}&lt;div class="card-header pb-0"&gt;
                      {"\n"}
                      {"     "}&lt;div class="header-top d-sm-flex
                      justify-content-between align-items-center"&gt;{"\n"}
                      {"       "}&lt;h5&gt;Total Selling&lt;/h5&gt;
                      {"\n"}
                      {"       "}&lt;div class="center-content"&gt;
                      {"\n"}
                      {"         "}&lt;ul class="week-date"&gt;
                      {"\n"}
                      {"           "}&lt;li
                      class="font-primary"&gt;Today&lt;/li&gt;{"\n"}
                      {"           "}&lt;li&gt;Month&lt;/li&gt;
                      {"\n"}
                      {"         "}&lt;/ul&gt;{"\n"}
                      {"       "}&lt;/div&gt;{"\n"}
                      {"     "}&lt;div class="setting-list"&gt;
                      {"\n"}
                      {"       "}&lt;ul class="list-unstyled setting-option"&gt;
                      {"\n"}
                      {"         "}&lt;li&gt;{"\n"}
                      {"           "}&lt;div class="setting-primary"&gt;&lt;i
                      class="icon-settings"&gt;&lt;/i&gt;&lt;/div&gt;
                      {"\n"}
                      {"         "}&lt;/li&gt;{"\n"}
                      {"         "}&lt;li&gt;&lt;i class="view-html fa fa-code
                      font-primary"&gt;&lt;/i&gt;&lt;/li&gt;{"\n"}
                      {"         "}&lt;li&gt;&lt;i class="icofont
                      icofont-maximize full-card
                      font-primary"&gt;&lt;/i&gt;&lt;/li&gt;{"\n"}
                      {"         "}&lt;li&gt;&lt;i class="icofont icofont-minus
                      minimize-card font-primary"&gt;&lt;/i&gt;&lt;/li&gt;{"\n"}
                      {"         "}&lt;li&gt;&lt;i class="icofont
                      icofont-refresh reload-card
                      font-primary"&gt;&lt;/i&gt;&lt;/li&gt;{"\n"}
                      {"         "}&lt;li&gt;&lt;i class="icofont icofont-error
                      close-card font-primary"&gt;&lt;/i&gt;&lt;/li&gt;{"\n"}
                      {"       "}&lt;/ul&gt;{"\n"}
                      {"     "}&lt;/div&gt;{"\n"}
                      {"   "}&lt;/div&gt;{"\n"}
                      {"   "}&lt;/div&gt;{"\n"}
                      {"   "}&lt;div class="card-body"&gt;{"\n"}
                      {"      "}&lt;div id="chart-dash-2-line"&gt;
                      {"\n"}
                      {"      "}&lt;/div&gt;{"\n"}
                      {"   "}&lt;/div&gt; {"\n"}&lt;/div&gt;
                      {"        "}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 box-col-6">
            <div className="card target-sec">
              <div className="card-header pb-0">
                <ul className="target-list">
                  <li>
                    <h6>Our Target</h6>
                    <p>Completed</p>
                    <span>$687.780</span>
                  </li>
                  <li className="bg-primary">
                    <h6>We Archieve</h6>
                    <p>Completed in After 3 Hours</p>
                    <span>$687.780k </span>
                  </li>
                </ul>
              </div>
              <div className="card-body p-0">
                <div className="traget-img-sec" />
                <div className="animat-block">
                  <i className="fa fa-times close1" />
                  <i className="fa fa-times close2" />
                  <i className="fa fa-times close3" />
                  <div className="circle1" />
                  <div className="circle2" />
                  <div className="circle3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 des-xl-50 box-col-12 activity-sec chart_data_left">
        <div className="card">
          <div className="card-header">
            <div className="header-top d-sm-flex justify-content-between align-items-center">
              <h5 className="m-0">Activity Timeline</h5>
              <div className="center-content">
                <p>Yearly User 24.65k</p>
              </div>
              <div className="setting-list">
                <ul className="list-unstyled setting-option">
                  <li>
                    <div className="setting-primary">
                      <i className="icon-settings" />
                    </div>
                  </li>
                  <li>
                    <i className="view-html fa fa-code font-primary" />
                  </li>
                  <li>
                    <i className="icofont icofont-maximize full-card font-primary" />
                  </li>
                  <li>
                    <i className="icofont icofont-minus minimize-card font-primary" />
                  </li>
                  <li>
                    <i className="icofont icofont-refresh reload-card font-primary" />
                  </li>
                  <li>
                    <i className="icofont icofont-error close-card font-primary" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="chart-main activity-timeline update-line">
              <div className="media">
                <div className="activity-line" />
                <div className="activity-dot-primary" />
                <div className="media-body d-block">
                  <h6>
                    {" "}
                    <span className="font-primary">20-04-2021</span>
                    Today{" "}
                  </h6>
                  <h5>
                    Updated Product
                    <i className="fa fa-circle circle-dot-primary pull-right" />
                  </h5>
                  <p>Quisque a consequat ante Sit amet magna at volutapt.</p>
                </div>
              </div>
              <div className="media">
                <div className="activity-dot-primary" />
                <div className="media-body d-block">
                  <h6>
                    {" "}
                    <span className="font-primary">20-04-20121</span>
                    Today
                    <span className="badge pill-badge-primary m-l-10">
                      new{" "}
                    </span>
                  </h6>
                  <h5>
                    James just like your product{" "}
                    <i className="fa fa-circle circle-dot-primary pull-right" />
                  </h5>
                  <p>Quisque a consequat ante Sit amet magna at volutapt.</p>
                  <ul className="timeline-pro">
                    <li>
                      {" "}
                      <img
                        className="img-fluid"
                        src="../assets/images/dashboard-2/11.png"
                        alt="Product-1"
                      />
                    </li>
                    <li>
                      {" "}
                      <img
                        className="img-fluid"
                        src="../assets/images/dashboard-2/10.png"
                        alt="Product-2"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="media">
                <div className="activity-dot-primary" />
                <div className="media-body d-block">
                  <h6>
                    {" "}
                    <span className="font-primary">20-04-20121</span>
                    Today
                  </h6>
                  <h5>
                    Jihan Doe just like your product
                    <i className="fa fa-circle circle-dot-primary pull-right" />
                  </h5>
                  <p>Vestibulum nec mi suscipit, dapibus purus ane.</p>
                </div>
              </div>
              <div className="media">
                <div className="media-body d-block">
                  <div className="tomorrow-sec">
                    <p>Tomorrow</p>
                  </div>
                </div>
              </div>
              <div className="media">
                <div className="activity-dot-primary" />
                <div className="media-body d-block">
                  <h6>
                    {" "}
                    <span className="font-primary">20-04-20121</span>
                    Tomorrow
                  </h6>
                  <h5>
                    Today Total Revenue
                    <i className="fa fa-circle circle-dot-primary pull-right" />
                  </h5>
                  <p>Quisque a consequat ante Sit amet magna at volutapt.</p>
                </div>
              </div>
              <div className="media">
                <div className="activity-dot-primary" />
                <div className="media-body d-block">
                  <div className="hospital-small-chart">
                    <div id="column-chart"> </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="code-box-copy">
              <button
                className="code-box-copy__btn btn-clipboard"
                data-clipboard-target="#activity-timeline"
                title="Copy"
              >
                <i className="icofont icofont-copy-alt" />
              </button>
              <pre>
                <code className="language-html" id="activity-timeline">
                  {"   "}&lt;div class="card"&gt;{"\n"} &lt;div
                  class="card-header"&gt;{"\n"}
                  {"   "}&lt;div class="header-top d-sm-flex
                  justify-content-between align-items-center"&gt;
                  {"\n"}
                  {"     "}&lt;h5 class="m-0"&gt;Activity Timeline&lt;/h5&gt;
                  {"\n"}
                  {"     "}&lt;div class="center-content"&gt;{"\n"}
                  {"       "}&lt;p&gt;Yearly User 24.65k&lt;/p&gt;
                  {"\n"}
                  {"     "}&lt;/div&gt;{"\n"}
                  {"     "}&lt;div class="setting-list"&gt;{"\n"}
                  {"       "}&lt;ul class="list-unstyled setting-option"&gt;
                  {"\n"}
                  {"           "}&lt;li&gt;{"\n"}
                  {"             "}&lt;div class="setting-primary"&gt;&lt;i
                  class="icon-settings"&gt;&lt;/i&gt;&lt;/div&gt;
                  {"\n"}
                  {"           "}&lt;/li&gt;{"\n"}
                  {"           "}&lt;li&gt;&lt;i class="view-html fa fa-code
                  font-primary"&gt;&lt;/i&gt;&lt;/li&gt;
                  {"\n"}
                  {"           "}&lt;li&gt;&lt;i class="icofont icofont-maximize
                  full-card font-primary"&gt;&lt;/i&gt;&lt;/li&gt;{"\n"}
                  {"           "}&lt;li&gt;&lt;i class="icofont icofont-minus
                  minimize-card font-primary"&gt;&lt;/i&gt;&lt;/li&gt;{"\n"}
                  {"           "}&lt;li&gt;&lt;i class="icofont icofont-refresh
                  reload-card font-primary"&gt;&lt;/i&gt;&lt;/li&gt;{"\n"}
                  {"           "}&lt;li&gt;&lt;i class="icofont icofont-error
                  close-card font-primary"&gt;&lt;/i&gt;&lt;/li&gt;{"\n"}
                  {"       "}&lt;/ul&gt;{"\n"}
                  {"     "}&lt;/div&gt;{"\n"}
                  {"   "}&lt;/div&gt;{"\n"} &lt;/div&gt;{"\n"} &lt;div
                  class="card-body"&gt;{"\n"}
                  {"   "}&lt;div class="chart-main activity-timeline
                  update-line"&gt;{"\n"}
                  {"     "}&lt;div class="media"&gt;{"\n"}
                  {"       "}&lt;div class="activity-line"&gt;&lt;/div&gt;{"\n"}
                  {"       "}&lt;div
                  class="activity-dot-primary"&gt;&lt;/div&gt;{"\n"}
                  {"       "}&lt;div class="media-body d-block"&gt;
                  {"\n"}
                  {"         "}&lt;h6&gt; &lt;span
                  class="font-primary"&gt;20-04-2021&lt;/span&gt;Today
                  &lt;/h6&gt;{"\n"}
                  {"         "}&lt;h5&gt;Updated Product&lt;i class="fa
                  fa-circle circle-dot-primary
                  pull-right"&gt;&lt;/i&gt;&lt;/h5&gt;{"\n"}
                  {"         "}&lt;p&gt;Quisque a consequat ante Sit amet magna
                  at volutapt.&lt;/p&gt;{"\n"}
                  {"       "}&lt;/div&gt;{"\n"}
                  {"     "}&lt;/div&gt;{"\n"}
                  {"     "}&lt;div class="media"&gt;{"\n"}
                  {"       "}&lt;div
                  class="activity-dot-primary"&gt;&lt;/div&gt;{"\n"}
                  {"         "}&lt;div class="media-body d-block"&gt;{"\n"}
                  {"           "}&lt;h6&gt; &lt;span
                  class="font-primary"&gt;20-04-20121&lt;/span&gt;Today&lt;span
                  class="badge pill-badge-primary m-l-10"&gt;new
                  &lt;/span&gt;&lt;/h6&gt;{"\n"}
                  {"           "}&lt;h5&gt;James just like your product &lt;i
                  class="fa fa-circle circle-dot-primary
                  pull-right"&gt;&lt;/i&gt;&lt;/h5&gt;{"\n"}
                  {"           "}&lt;p&gt;Quisque a consequat ante Sit amet
                  magna at volutapt.&lt;/p&gt;{"\n"}
                  {"           "}&lt;ul class="timeline-pro"&gt;
                  {"\n"}
                  {"             "}&lt;li&gt; &lt;img class="img-fluid"
                  src="../assets/images/dashboard-2/11.png"
                  alt="Product-1"&gt;&lt;/li&gt;{"\n"}
                  {"             "}&lt;li&gt; &lt;img class="img-fluid"
                  src="../assets/images/dashboard-2/10.png"
                  alt="Product-2"&gt;&lt;/li&gt;{"\n"}
                  {"           "}&lt;/ul&gt;{"\n"}
                  {"         "}&lt;/div&gt;{"\n"}
                  {"     "}&lt;/div&gt;{"\n"}
                  {"     "}&lt;div class="media"&gt;{"\n"}
                  {"         "}&lt;div
                  class="activity-dot-primary"&gt;&lt;/div&gt;{"\n"}
                  {"           "}&lt;div class="media-body d-block"&gt;{"\n"}
                  {"             "}&lt;h6&gt; &lt;span
                  class="font-primary"&gt;20-04-20121&lt;/span&gt;Today&lt;/h6&gt;
                  {"\n"}
                  {"             "}&lt;h5&gt;Jihan Doe just like your
                  product&lt;i class="fa fa-circle circle-dot-primary
                  pull-right"&gt;&lt;/i&gt;&lt;/h5&gt;{"\n"}
                  {"             "}&lt;p&gt;Vestibulum nec mi suscipit, dapibus
                  purus ane.&lt;/p&gt;{"\n"}
                  {"           "}&lt;/div&gt;{"\n"}
                  {"         "}&lt;/div&gt;{"\n"}
                  {"         "}&lt;div class="media"&gt;{"\n"}
                  {"             "}&lt;div class="media-body d-block"&gt;{"\n"}
                  {"               "}&lt;div class="tomorrow-sec"&gt;{"\n"}
                  {"                 "}&lt;p&gt;Tomorrow&lt;/p&gt;
                  {"\n"}
                  {"               "}&lt;/div&gt;{"\n"}
                  {"             "}&lt;/div&gt;{"\n"}
                  {"         "}&lt;/div&gt;{"\n"}
                  {"         "}&lt;div class="media"&gt;{"\n"}
                  {"           "}&lt;div
                  class="activity-dot-primary"&gt;&lt;/div&gt;{"\n"}
                  {"           "}&lt;div class="media-body d-block"&gt;{"\n"}
                  {"             "}&lt;h6&gt; &lt;span
                  class="font-primary"&gt;20-04-20121&lt;/span&gt;Tomorrow&lt;/h6&gt;
                  {"\n"}
                  {"             "}&lt;h5&gt;Today Total Revenue&lt;i class="fa
                  fa-circle circle-dot-primary
                  pull-right"&gt;&lt;/i&gt;&lt;/h5&gt;{"\n"}
                  {"             "}&lt;p&gt;Quisque a consequat ante Sit amet
                  magna at volutapt.&lt;/p&gt;{"\n"}
                  {"           "}&lt;/div&gt;{"\n"}
                  {"         "}&lt;/div&gt;{"\n"}
                  {"         "}&lt;div class="media"&gt;{"\n"}
                  {"             "}&lt;div
                  class="activity-dot-primary"&gt;&lt;/div&gt;{"\n"}
                  {"               "}&lt;div class="media-body d-block"&gt;
                  {"\n"}
                  {"                 "}&lt;div class="hospital-small-chart"&gt;
                  {"\n"}
                  {"                   "}&lt;div id="column-chart"&gt;
                  &lt;/div&gt;{"\n"}
                  {"                 "}&lt;/div&gt;{"\n"}
                  {"               "}&lt;/div&gt;{"\n"}
                  {"             "}&lt;/div&gt;{"\n"}
                  {"         "}&lt;/div&gt;{"\n"}
                  {"       "}&lt;/div&gt;{"\n"}
                  {"     "}&lt;/div&gt;
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-12 des-xl-50 yearly-growth-sec">
        <div className="card">
          <div className="card-header">
            <div className="header-top d-sm-flex justify-content-between align-items-center">
              <h5>Yearly growth</h5>
              <div className="center-content">
                <p className="d-sm-flex align-items-center">
                  <span className="m-r-10">
                    <i className="toprightarrow-primary fa fa-arrow-up m-r-10" />
                    $9657.55k{" "}
                  </span>
                  86% more then last year
                </p>
              </div>
              <div className="setting-list">
                <ul className="list-unstyled setting-option">
                  <li>
                    <div className="setting-primary">
                      <i className="icon-settings" />
                    </div>
                  </li>
                  <li>
                    <i className="view-html fa fa-code font-primary" />
                  </li>
                  <li>
                    <i className="icofont icofont-maximize full-card font-primary" />
                  </li>
                  <li>
                    <i className="icofont icofont-minus minimize-card font-primary" />
                  </li>
                  <li>
                    <i className="icofont icofont-refresh reload-card font-primary" />
                  </li>
                  <li>
                    <i className="icofont icofont-error close-card font-primary" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card-body p-0 chart-block">
            <div id="chart-yearly-growth-dash-2" />
            <div className="code-box-copy">
              <button
                className="code-box-copy__btn btn-clipboard"
                data-clipboard-target="#yearly-growth"
                title="Copy"
              >
                <i className="icofont icofont-copy-alt" />
              </button>
              <pre>
                <code className="language-html" id="yearly-growth">
                  {"  "}&lt;div class="card"&gt;{"\n"}
                  {"   "}&lt;div class="card-header pb-0"&gt;{"\n"}
                  {"     "}&lt;div class="header-top d-sm-flex
                  justify-content-between align-items-center"&gt;
                  {"\n"}
                  {"       "}&lt;h5&gt;Yearly growth&lt;/h5&gt;
                  {"\n"}
                  {"       "}&lt;div class="center-content"&gt;
                  {"\n"}
                  {"             "}&lt;p class="d-sm-flex
                  align-items-center"&gt;{"\n"}
                  {"                "}&lt;span class="m-r-10"&gt;
                  {"\n"}
                  {"                  "}&lt;i class=" toprightarrow-primary fa
                  fa-arrow-up m-r-10"&gt;&lt;/i&gt;{"  "}$9657.55k{"\n"}
                  {"                "}&lt;/span&gt; 86% more then last year
                  {"\n"}
                  {"            "}&lt;/p&gt;{"\n"}
                  {"         "}&lt;/div&gt;
                  {"                                             "}
                  {"\n"}
                  {"     "}&lt;div class="setting-list"&gt;{"\n"}
                  {"       "}&lt;ul class="list-unstyled setting-option"&gt;
                  {"\n"}
                  {"         "}&lt;li&gt;{"\n"}
                  {"           "}&lt;div class="setting-primary"&gt;&lt;i
                  class="icon-settings"&gt;&lt;/i&gt;&lt;/div&gt;
                  {"\n"}
                  {"         "}&lt;/li&gt;{"\n"}
                  {"         "}&lt;li&gt;&lt;i class="view-html fa fa-code
                  font-primary"&gt;&lt;/i&gt;&lt;/li&gt;
                  {"\n"}
                  {"         "}&lt;li&gt;&lt;i class="icofont icofont-maximize
                  full-card font-primary"&gt;&lt;/i&gt;&lt;/li&gt;{"\n"}
                  {"         "}&lt;li&gt;&lt;i class="icofont icofont-minus
                  minimize-card font-primary"&gt;&lt;/i&gt;&lt;/li&gt;{"\n"}
                  {"         "}&lt;li&gt;&lt;i class="icofont icofont-refresh
                  reload-card font-primary"&gt;&lt;/i&gt;&lt;/li&gt;{"\n"}
                  {"         "}&lt;li&gt;&lt;i class="icofont icofont-error
                  close-card font-primary"&gt;&lt;/i&gt;&lt;/li&gt;{"\n"}
                  {"       "}&lt;/ul&gt;{"\n"}
                  {"     "}&lt;/div&gt;{"\n"}
                  {"   "}&lt;/div&gt;{"\n"}
                  {"   "}&lt;/div&gt;{"\n"}
                  {"   "}&lt;div class="card-body p-0 chart-block"&gt;{"\n"}
                  {"      "}&lt;div id="chart-yearly-growth-dash-2"&gt;{"\n"}
                  {"      "}&lt;/div&gt;{"\n"}
                  {"   "}&lt;/div&gt; {"\n"}&lt;/div&gt;{"        "}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Display;
