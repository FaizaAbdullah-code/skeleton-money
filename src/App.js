import "./App.css";
import logo from "./Images/logo.png";
import telegram from "./Images/telegram.png"
import twitter from "./Images/twitter.png"
import React, { useState, useEffect } from "react";

function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => setLoaded(true), 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>{!loaded ? (
      <div class="loader-wrapper">
        <img src="./Preloader.gif" alt="loader" class="loader" />
      </div>
    ) : (
      <div className="py-10 relative" id="app">
        <button class="fixed top-5 right-4 z-10  uppercase border-0 py-2 w-32 focus:outline-none hover:bg-red-600 rounded">
          Connect
        </button>

        <section className="intro">
          <div class="container">
            <div class="row">
              <div class="col-sm-7 text-white my-auto">
                <h1 className="head">Most sustainable auto compounding and staking protocol in defi!</h1>
                <p className="text mt-5">✩ Highest Fixed APY – 392,537% <br />
                  ✩ Easy Automatic Staking and Compounding in Your Wallet! <br />
                  ✩ Inspired by Safuu and Titano to Create a Flawless Protocol! <br />
                  ✩ Get Rewards Every 15 Minutes / 96 Times Daily!</p>
                <div class="container-button mt-3">
                  <a href="" class="btn btn-buy text-white">Buy</a>
                  <a href="" class="btn btn-whitepaper ml-4">WhitePaper</a>
                </div>
              </div>
              <div class="col-sm-5 mx-auto d-flex justify-content-center mt-5">
                <img src={logo} width="100%" alt="" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section className="about py-4">
          <div class="container">
            <h1 className="head text-center">Safu Titano Auto-Staking Protocol</h1>
            <div class="row py-5">
              <div class="col-sm-6 my-auto">
                <p className="text-center value">392,537%</p>
                <p className="text-center mt-4 heading text-white">Fixed Staking APY</p>
                <div class="container-button mt-3 mx-auto justify-content-center">
                  <a href="" class="btn btn-chart text-white"><i className="fa fa-bar-chart mr-2"></i>Live Chart</a>
                </div>
              </div>
              <div class="col-sm-6 text-white my-auto">
                <h4 className="heading mt-5">About</h4>
                <p className="text">Safu Titano is transforming DeFi with the SAFTI Autostaking Protocol (SAP) that delivers the industry’s highest fixed APY, rebasing rewards every 15 minutes, and a simple buy-hold-earn system that grows your portfolio in your wallet, fast.</p>
              </div>
            </div>
            <div class="container-button  mx-auto justify-content-center">
              <a href="" class="btn btn-contract text-white">$SAFTI Contract: <span className="address">0x84952dd90cdC57170b13D2291A8afCEdC8F97c71</span></a>
            </div>
          </div>
        </section>

        <section className="py-5 mt-3">
          <div className="contaier">
            <h1 className="head my-auto text-center">Tokenomics</h1>
            <div className="row">
              <div className="col-sm-6">
                <img src={logo} width="20%" height="80%" alt="" className="imgToken mt-4" loading="lazy" />
                <h4 className="headingToken text-center mt-4">Buy</h4>
                <p className="text-center mt-3 text-white">14% slipage</p>
                <hr class="break mt-4" />
                <h4 className="text-center headingToken mt-4">Auto-Liquidity System (ALS)</h4>
                <p className="text-center mt-4 text-white">4% of order fees return to liquidity</p>
                <hr class="break mt-4" />
                <h4 className="text-center headingToken mt-4">Risk Free Value (RFV)</h4>
                <p className="text-center mt-4 text-white">5% of order fees are stored in SAP</p>
                <hr class="break mt-4" />
                <h4 className="text-center headingToken mt-4">Treasury</h4>
                <p className="text-center mt-4 text-white">2.5% of order fees go to the treasury</p>
                <hr class="break mt-4" />
                <h4 className="text-center headingToken mt-4">Automated Supply Control (ASC)</h4>
                <p className="text-center mt-4 text-white">2.5% of $SAFTI is burnt in the fire pit</p>
                <hr class="break mt-4" />
              </div>
              <div className="col-sm-6">
                <img src={logo} width="20%" height="80%" alt="" className="imgToken mt-4" loading="lazy" />
                <h4 className="headingToken text-center mt-4">Sell</h4>
                <p className="text-center mt-3 text-white">16% slipage</p>
                <hr class="break mt-4" />
                <h4 className="text-center headingToken mt-4">Auto-Liquidity System (ALS)</h4>
                <p className="text-center mt-4 text-white">4% of order fees return to liquidity</p>
                <hr class="break mt-4" />
                <h4 className="text-center headingToken mt-4">Risk Free Value (RFV)</h4>
                <p className="text-center mt-4 text-white">5% of order fees are stored in SAP</p>
                <hr class="break mt-4" />
                <h4 className="text-center headingToken mt-4">Treasury</h4>
                <p className="text-center mt-4 text-white">4.5% of order fees go to the treasury</p>
                <hr class="break mt-4" />
                <h4 className="text-center headingToken mt-4">Automated Supply Control (ASC)</h4>
                <p className="text-center mt-4 text-white">2.5% of $SAFTI is burnt in the fire pit</p>
                <hr class="break mt-4" />
              </div>
            </div>
          </div>
        </section>
        <div className="col-sm-12 d-flex justify-content-center">
              <div class="p-4 w-[23rem] sm:w-[30rem]">
                <div class="h-full p-6 flex flex-row justify-center relative overflow-hidden space-x-10">
                  <a href="/">
                    <img src={telegram} width={48} height={48} alt="telegram" />
                  </a>
                  <a href="/">
                    <img src={twitter} width={48} height={48} alt="twitter" />
                  </a>
                </div>
              </div>
            </div>
      </div>
    )}
    </>
  );
}

export default App;
