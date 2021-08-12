import React, {useState, useEffect} from 'react';
import {faHeart,faClock,faStopwatch,faUndo,faExternalLinkSquareAlt,faExclamationCircle,faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {faQuestionCircle,faCalendarAlt} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './App.css';
import FISCH from "../contracts/FISCH.json";
import RewardPool from "../contracts/RewardPool.json";
import SimpleStorageContract from "../contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";

function App() {
  const [web3, setWeb3] = useState({undefined});
  const [contract, setContract] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const init  = async () => {
    try{
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      setWeb3(web3);
      setContract(instance);
      setAccounts(accounts);
      console.log(accounts);
    }catch(error){
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  }
  useEffect(init(),[]);

  return (
    <div>
  

   <div style={{backgroundImage:'url(/image/bg.png)', width:'100%', height:'670px'}}>
     

          <div>

            <table border="0" style={{marginLeft:'250px',position:'absolute'}}>

              <tr>
                <td>
                 <p style={{color:'yellow',fontWeight:'600',paddingTop:'50px'}}>Deposit an Earn Money</p> 
                </td>
                <td style={{paddingLeft:'150px'}}>
                  <img style={{zIndex:'1'}} src="/image/fischlogo2.png"/>
                </td>
                <td style={{paddingLeft:'150px',color:'yellow',fontWeight:'600',paddingTop:'50px'}}>
                  TVL: $101,000,000
                </td>
              </tr>
            </table>
           
        
     
    
            <div className="Box"  style={{height:'650px'}}>
              
                      <div className="content">
                        <ul>
                            <li className="active"><a href="#">Earn</a></li>
                            <li><a href="#">Exchange</a></li>
                            <li><a href="#">Create LP</a></li>
                            <li><a href="#">Learn V</a></li>

                        </ul>
                      </div>

                      <div className="content2_2" style={{opacity:0.9}}>
                      <table>
                     <tr>
                       <td>
                         
                       </td>
                       <td>
                         <img src="/image/logo.png" style={{width:'30px', marginLeft:'30px'}}/>
                       </td>
                       <td>
                         <span style={{fontWeight:'700'}}>FISCH-BUSD</span><br/>
                          <span style={{fontSize:'12px'}}>Fisch</span>
                       </td>
                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                        <span style={{marginLeft:'20px'}}>0</span> <br/>
                         <span style={{opacity:'0.5'}}>Balance</span>
                       </td>

                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                        <span style={{marginLeft:'20px'}}>0</span> <br/>
                         <span style={{opacity:'0.5'}}>Deposited</span>
                       </td>
                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                         <span style={{color:'yellow'}}>171.80%</span><br/>
                        <span style={{opacity:'0.5'}}>Yearly</span>
                    
                       </td>
                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                       <span>0.47%</span><br/>
                        <span style={{opacity:'0.5'}}>Daily</span>
                       </td>

                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                       <span>$1.60M</span><br/>
                        <span style={{opacity:'0.5'}}>TVL</span>
                       
                       </td>

                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                       <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'200px'}}>
                       <FontAwesomeIcon icon={faUndo}  />
                         </button>
                        <button style={{backgroundColor:'rgba(0, 0, 0, 0.1)',border:'none'}}>
                        <FontAwesomeIcon icon={faAngleDown} style={{color:'yellow'}} />
                        </button>
                        
                       </td>
                       
                     </tr>
                   </table>
                        <hr style={{opacity:'0.5'}}/>

                        <div className="content_4" style={{opacity:0.9}} >
                          
                        <table border='0' style={{marginTop:'10px'}}>
                    <tr>
                      <td style={{paddingLeft:'5px'}}>
                        <div style={{width:'250px',height:'200px',padding:'10px 10px'}}>
                              <span>Wallet</span> <span style={{marginLeft:'150px'}}>_ _</span><br></br>
                              <a href="#" style={{marginLeft:'170px',color:'gray',fontSize:'13px'}}>Get Fisch</a>

                              <br></br><br></br>

                         <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'235px'}}>
                           <table>
                             <tr>
                               <td>
                                 0
                               </td>
                               <td style={{paddingLeft:'170px'}}>
                                 MAX
                               </td>
                             </tr>
                           </table>
                         </button> <br></br><br></br>

                         <button style={{padding:'8px', borderRadius:'10px', border:'none',backgroundColor:'gray',color:'white',width:'235px'}}>
                           Deposit to Vault
                         </button>

                        </div>
                      </td>
                      <td style={{paddingLeft:'5px'}}>
                        <div style={{width:'250px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                              <span>vault</span> <span style={{marginLeft:'150px'}}>0.00</span><br></br>
                           
                              <br></br><br></br>

                         <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'235px'}}>
                           <table>
                             <tr>
                               <td>
                                 0
                               </td>
                               <td style={{paddingLeft:'170px'}}>
                                 MAX
                               </td>
                             </tr>
                           </table>
                         </button> <br></br><br></br>

                         <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'gray',color:'white',width:'235px'}}>
                          Withdraw to Wallet
                         </button>

                        </div>
                      </td>
                      <td style={{paddingLeft:'20px'}}>
                        <div style={{width:'250px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                          <br></br>
                             <span style={{marginTop:'60px', marginLeft:'90px'}}>Pending:</span>
                           
                              <br></br><br></br>
                          <table>

                            <tr>
                              <td style={{paddingLeft:'40px'}}>
                              <img src="/image/logo.png" style={{width:'13px', marginLeft:'30px'}}/>
                              </td>
                              <td>
                              <span>0.0</span> <span style={{color:'gray'}}>($0.0)</span>
                              </td>
                            </tr>
                          </table>


                             
                        
                         <br></br>

                         <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'yellow',color:'white',width:'235px'}}>
                          <span style={{color:'black'}}>Harvest</span>
                         </button>

                        </div>
                      </td>
                    </tr>

                  </table> <br></br>
                  <div style={{width:'850px', height:'130px', backgroundColor:'black', borderRadius:'10px',marginLeft:'20px'}}>
                    <table style={{fontSize:'13px'}}>
                      <tr>
                        
                        <td style={{padding:'20px 10px'}}>
                          <span>Farm</span><br></br><br></br>
                          <span style={{opacity:'0.5'}}>Weight:50%</span>
                      
                          <br></br>
                          <span style={{opacity:'0.5'}}>Fisch TVL:171.81%</span>

                        </td>

                        <td style={{paddingLeft:'350px'}}>
                          <span style={{marginLeft:'60px', opacity:'0.5'}}>Learn how to buy and add to staking </span><span><a href="#"  style={{color:'white'}}> Tutorials</a></span><br></br>
                          <span style={{marginLeft:'95px', opacity:'0.5'}}>Check Fees and Tokenomics </span><span><a href="#" style={{color:'white'}}> Read Doc</a></span><br></br><br></br>
                          <a href="#" style={{marginLeft:'295px',color:'white'}}>Vault</a>
                        

                        </td>
                      </tr>
                    </table>


                  </div>


                        </div>
                      </div>
                      
            </div>
            
            
            </div>
            
            

   </div>


   
   <div style={{backgroundImage:'url(/image/bg.png)', width:'100%', height:'570px'}}>
     <div>
       <div className="Box" style={{border:'1px solid yellow', height:'550px'}}>
         
                 <div className="content_2">
                 <table>
                     <tr>
                       <td>
                         
                       </td>
                       <td>
                         <img src="/image/logo.png" style={{width:'30px', marginLeft:'30px'}}/>
                       </td>
                       <td>
                         <span style={{fontWeight:'700'}}>FISCH-BUSD</span><br/>
                          <span style={{fontSize:'12px'}}>Fisch</span>
                       </td>
                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                        <span style={{marginLeft:'20px'}}>0</span> <br/>
                         <span style={{opacity:'0.5'}}>Balance</span>
                       </td>

                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                        <span style={{marginLeft:'20px'}}>0</span> <br/>
                         <span style={{opacity:'0.5'}}>Deposited</span>
                       </td>
                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                         <span style={{color:'yellow'}}>171.80%</span><br/>
                        <span style={{opacity:'0.5'}}>Yearly</span>
                    
                       </td>
                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                       <span>0.47%</span><br/>
                        <span style={{opacity:'0.5'}}>Daily</span>
                       </td>

                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                       <span>$1.60M</span><br/>
                        <span style={{opacity:'0.5'}}>TVL</span>
                       
                       </td>

                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                       <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'200px'}}>
                       <FontAwesomeIcon icon={faUndo}  />
                         </button>
                        <button style={{backgroundColor:'rgba(0, 0, 0, 0.1)',border:'none'}}>
                        <FontAwesomeIcon icon={faAngleDown} style={{color:'yellow'}} />
                        </button>
                        
                       </td>
                       
                     </tr>
                   </table>
                 </div>

                 <div className="content_3" style={{opacity:0.9}}>
                  <table border='0' style={{marginTop:'20px'}}>
                    <tr>
                      <td style={{paddingLeft:'5px'}}>
                        <div style={{width:'250px',height:'200px',padding:'15px 15px'}}>
                              <span>Wallet</span> <span style={{marginLeft:'150px'}}>_ _</span><br></br>
                              <a href="#" style={{marginLeft:'170px',color:'gray',fontSize:'13px'}}>Get Fisch</a>

                              <br></br><br></br>

                         <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'235px'}}>
                           <table>
                             <tr>
                               <td>
                                 0
                               </td>
                               <td style={{paddingLeft:'170px'}}>
                                 MAX
                               </td>
                             </tr>
                           </table>
                         </button> <br></br><br></br>

                         <button style={{padding:'8px', borderRadius:'10px', border:'none',backgroundColor:'gray',color:'white',width:'235px'}}>
                           Deposit to Vault
                         </button>

                        </div>
                      </td>
                      <td style={{paddingLeft:'5px'}}>
                        <div style={{width:'250px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                              <span>vault</span> <span style={{marginLeft:'150px'}}>0.00</span><br></br>
                           
                              <br></br><br></br>

                         <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'235px'}}>
                           <table>
                             <tr>
                               <td>
                                 0
                               </td>
                               <td style={{paddingLeft:'170px'}}>
                                 MAX
                               </td>
                             </tr>
                           </table>
                         </button> <br></br><br></br>

                         <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'gray',color:'white',width:'235px'}}>
                          Withdraw to Wallet
                         </button>

                        </div>
                      </td>
                      <td style={{paddingLeft:'20px'}}>
                        <div style={{width:'250px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                          <br></br>
                             <span style={{marginTop:'60px', marginLeft:'90px'}}>Pending:</span>
                           
                              <br></br><br></br>
                          <table>

                            <tr>
                              <td style={{paddingLeft:'40px'}}>
                              <img src="/image/logo.png" style={{width:'13px', marginLeft:'30px'}}/>
                              </td>
                              <td>
                              <span>0.0</span> <span style={{color:'gray'}}>($0.0)</span>
                              </td>
                            </tr>
                          </table>


                             
                        
                         <br></br>

                         <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'yellow',color:'white',width:'235px'}}>
                          <span style={{color:'black'}}>Harvest</span>
                         </button>

                        </div>
                      </td>
                    </tr>

                  </table>
                  <br></br>

                  <div style={{width:'850px', height:'130px', backgroundColor:'black', borderRadius:'10px',marginLeft:'20px'}}>
                    <table style={{fontSize:'13px'}}>
                      <tr>
                       

                  
                        <td style={{padding:'20px 10px'}}>
                          <span>Farm</span><br></br><br></br>
                          <span style={{opacity:'0.5'}}>Weight:50%</span>
                      
                          <br></br>
                          <span style={{opacity:'0.5'}}>Fisch TVL:171.81%</span>

                        </td>

                        <td style={{paddingLeft:'350px'}}>
                          <span style={{marginLeft:'60px', opacity:'0.5'}}>Learn how to buy and add to staking </span><span><a href="#"  style={{color:'white'}}> Tutorials</a></span><br></br>
                          <span style={{marginLeft:'95px', opacity:'0.5'}}>Check Fees and Tokenomics </span><span><a href="#" style={{color:'white'}}> Read Doc</a></span><br></br><br></br>
                          <a href="#" style={{marginLeft:'295px',color:'white'}}>Vault</a>
                        

                        </td>
                      </tr>
                    </table>


                  </div>
                 </div>

               
       </div>

       
       </div>

       
       

</div>



<div style={{backgroundImage:'url(/image/bg.png)', width:'100%', height:'570px'}}>
     <div>
       <div className="Box" style={{border:'1px solid yellow', height:'550px'}}>
         
                 <div className="content_2">
                 <table>
                     <tr>
                       <td>
                         
                       </td>
                       <td>
                         <img src="/image/logo.png" style={{width:'30px', marginLeft:'30px'}}/>
                       </td>
                       <td>
                         <span style={{fontWeight:'700'}}>CAKE</span><br/>
                          <span style={{fontSize:'12px'}}>Fisch</span>
                       </td>
                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                        <span style={{marginLeft:'20px'}}>0</span> <br/>
                         <span style={{opacity:'0.5'}}>Balance</span>
                       </td>

                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                        <span style={{marginLeft:'20px'}}>0</span> <br/>
                         <span style={{opacity:'0.5'}}>Deposited</span>
                       </td>
                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                         <span style={{color:'yellow'}}>171.80%</span><br/>
                        <span style={{opacity:'0.5'}}>Yearly</span>
                    
                       </td>
                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                       <span>0.47%</span><br/>
                        <span style={{opacity:'0.5'}}>Daily</span>
                       </td>

                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                       <span>$1.60M</span><br/>
                        <span style={{opacity:'0.5'}}>TVL</span>
                       
                       </td>

                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                       <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'200px'}}>
                       <FontAwesomeIcon icon={faUndo}  />
                         </button>
                        <button style={{backgroundColor:'rgba(0, 0, 0, 0.1)',border:'none'}}>
                        <FontAwesomeIcon icon={faAngleDown} style={{color:'yellow'}} />
                        </button>
                        
                       </td>
                       
                     </tr>
                   </table>
                 </div>

                 <div className="content_3" style={{opacity:0.9}}>
                  <table border='0' style={{marginTop:'20px'}}>
                    <tr>
                      <td style={{paddingLeft:'5px'}}>
                        <div style={{width:'250px',height:'200px',padding:'15px 15px'}}>
                              <span>Wallet</span> <span style={{marginLeft:'150px'}}>_ _</span><br></br>
                              <a href="#" style={{marginLeft:'170px',color:'gray',fontSize:'13px'}}>Get Fisch</a>

                              <br></br><br></br>

                         <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'235px'}}>
                           <table>
                             <tr>
                               <td>
                                 0
                               </td>
                               <td style={{paddingLeft:'170px'}}>
                                 MAX
                               </td>
                             </tr>
                           </table>
                         </button> <br></br><br></br>

                         <button style={{padding:'8px', borderRadius:'10px', border:'none',backgroundColor:'gray',color:'white',width:'235px'}}>
                           Deposit to Vault
                         </button>

                        </div>
                      </td>
                      <td style={{paddingLeft:'5px'}}>
                        <div style={{width:'250px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                              <span>vault</span> <span style={{marginLeft:'150px'}}>0.00</span><br></br>
                           
                              <br></br><br></br>

                         <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'235px'}}>
                           <table>
                             <tr>
                               <td>
                                 0
                               </td>
                               <td style={{paddingLeft:'170px'}}>
                                 MAX
                               </td>
                             </tr>
                           </table>
                         </button> <br></br><br></br>

                         <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'gray',color:'white',width:'235px'}}>
                          Withdraw to Wallet
                         </button>

                        </div>
                      </td>
                      <td style={{paddingLeft:'20px'}}>
                        <div style={{width:'250px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                          <br></br>
                             <span style={{marginTop:'60px', marginLeft:'90px'}}>Pending:</span>
                           
                              <br></br><br></br>
                          <table>

                            <tr>
                              <td style={{paddingLeft:'40px'}}>
                              <img src="/image/logo.png" style={{width:'13px', marginLeft:'30px'}}/>
                              </td>
                              <td>
                              <span>0.0</span> <span style={{color:'gray'}}>($0.0)</span>
                              </td>
                            </tr>
                          </table>


                             
                        
                         <br></br>

                         <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'yellow',color:'white',width:'235px'}}>
                          <span style={{color:'black'}}>Harvest</span>
                         </button>

                        </div>
                      </td>
                    </tr>

                  </table>
                  <br></br>

                  <div style={{width:'850px', height:'130px', backgroundColor:'black', borderRadius:'10px',marginLeft:'20px'}}>
                    <table style={{fontSize:'13px'}}>
                      <tr>
                       
                        <td style={{padding:'20px 10px'}}>
                          <span>Farm</span><br></br><br></br>
                          <span style={{opacity:'0.5'}}>Weight:50%</span>
                      
                          <br></br>
                          <span style={{opacity:'0.5'}}>Fisch TVL:171.81%</span>

                        </td>

                        <td style={{paddingLeft:'350px'}}>
                          <span style={{marginLeft:'60px', opacity:'0.5'}}>Learn how to buy and add to staking </span><span><a href="#"  style={{color:'white'}}> Tutorials</a></span><br></br>
                          <span style={{marginLeft:'95px', opacity:'0.5'}}>Check Fees and Tokenomics </span><span><a href="#" style={{color:'white'}}> Read Doc</a></span><br></br><br></br>
                          <a href="#" style={{marginLeft:'295px',color:'white'}}>Vault</a>
                        

                        </td>
                      </tr>
                    </table>


                  </div>
                 </div>

               
       </div>

       
       </div>

       
       

</div>

<div style={{backgroundImage:'url(/image/bg.png)', width:'100%', height:'570px'}}>
     <div>
       <div className="Box" style={{border:'1px solid yellow', height:'550px'}}>
         
                 <div className="content_2">
                 <table>
                     <tr>
                       <td>
                         
                       </td>
                       <td>
                         <img src="/image/logo.png" style={{width:'30px', marginLeft:'30px'}}/>
                       </td>
                       <td>
                         <span style={{fontWeight:'700'}}>CAKE-BNB</span><br/>
                          <span style={{fontSize:'12px'}}>Fisch</span>
                       </td>
                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                        <span style={{marginLeft:'20px'}}>0</span> <br/>
                         <span style={{opacity:'0.5'}}>Balance</span>
                       </td>

                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                        <span style={{marginLeft:'20px'}}>0</span> <br/>
                         <span style={{opacity:'0.5'}}>Deposited</span>
                       </td>
                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                         <span style={{color:'yellow'}}>171.80%</span><br/>
                        <span style={{opacity:'0.5'}}>Yearly</span>
                    
                       </td>
                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                       <span>0.47%</span><br/>
                        <span style={{opacity:'0.5'}}>Daily</span>
                       </td>

                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                       <span>$1.60M</span><br/>
                        <span style={{opacity:'0.5'}}>TVL</span>
                       
                       </td>

                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                       <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'200px'}}>
                       <FontAwesomeIcon icon={faUndo}  />
                         </button>
                        <button style={{backgroundColor:'rgba(0, 0, 0, 0.1)',border:'none'}}>
                        <FontAwesomeIcon icon={faAngleDown} style={{color:'yellow'}} />
                        </button>
                        
                       </td>
                       
                     </tr>
                   </table>
                 </div>

                 <div className="content_3" style={{opacity:0.9}}>
                  <table border='0' style={{marginTop:'20px'}}>
                    <tr>
                      <td style={{paddingLeft:'5px'}}>
                        <div style={{width:'250px',height:'200px',padding:'15px 15px'}}>
                              <span>Wallet</span> <span style={{marginLeft:'150px'}}>_ _</span><br></br>
                              <a href="#" style={{marginLeft:'170px',color:'gray',fontSize:'13px'}}>Get Fisch</a>

                              <br></br><br></br>

                         <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'235px'}}>
                           <table>
                             <tr>
                               <td>
                                 0
                               </td>
                               <td style={{paddingLeft:'170px'}}>
                                 MAX
                               </td>
                             </tr>
                           </table>
                         </button> <br></br><br></br>

                         <button style={{padding:'8px', borderRadius:'10px', border:'none',backgroundColor:'gray',color:'white',width:'235px'}}>
                           Deposit to Vault
                         </button>

                        </div>
                      </td>
                      <td style={{paddingLeft:'5px'}}>
                        <div style={{width:'250px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                              <span>vault</span> <span style={{marginLeft:'150px'}}>0.00</span><br></br>
                           
                              <br></br><br></br>

                         <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'235px'}}>
                           <table>
                             <tr>
                               <td>
                                 0
                               </td>
                               <td style={{paddingLeft:'170px'}}>
                                 MAX
                               </td>
                             </tr>
                           </table>
                         </button> <br></br><br></br>

                         <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'gray',color:'white',width:'235px'}}>
                          Withdraw to Wallet
                         </button>

                        </div>
                      </td>
                      <td style={{paddingLeft:'20px'}}>
                        <div style={{width:'250px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                          <br></br>
                             <span style={{marginTop:'60px', marginLeft:'90px'}}>Pending:</span>
                           
                              <br></br><br></br>
                          <table>

                            <tr>
                              <td style={{paddingLeft:'40px'}}>
                              <img src="/image/logo.png" style={{width:'13px', marginLeft:'30px'}}/>
                              </td>
                              <td>
                              <span>0.0</span> <span style={{color:'gray'}}>($0.0)</span>
                              </td>
                            </tr>
                          </table>


                             
                        
                         <br></br>

                         <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'yellow',color:'white',width:'235px'}}>
                          <span style={{color:'black'}}>Harvest</span>
                         </button>

                        </div>
                      </td>
                    </tr>

                  </table>
                  <br></br>

                  <div style={{width:'850px', height:'130px', backgroundColor:'black', borderRadius:'10px',marginLeft:'20px'}}>
                    <table style={{fontSize:'13px'}}>
                      <tr>
                        
                        <td style={{padding:'20px 10px'}}>
                          <span>Farm</span><br></br><br></br>
                          <span style={{opacity:'0.5'}}>Weight:50%</span>
                      
                          <br></br>
                          <span style={{opacity:'0.5'}}>Fisch TVL:171.81%</span>

                        </td>

                        <td style={{paddingLeft:'350px'}}>
                          <span style={{marginLeft:'60px', opacity:'0.5'}}>Learn how to buy and add to staking </span><span><a href="#"  style={{color:'white'}}> Tutorials</a></span><br></br>
                          <span style={{marginLeft:'95px', opacity:'0.5'}}>Check Fees and Tokenomics </span><span><a href="#" style={{color:'white'}}> Read Doc</a></span><br></br><br></br>
                          <a href="#" style={{marginLeft:'295px',color:'white'}}>Vault</a>
                        

                        </td>
                      </tr>
                    </table>


                  </div>
                 </div>

               
       </div>

       
       </div>

       
       

</div>

<div style={{backgroundImage:'url(/image/bg.png)', width:'100%', height:'570px'}}>
     <div>
       <div className="Box" style={{border:'1px solid yellow', height:'550px'}}>
         
                 <div className="content_2">
                 <table>
                     <tr>
                       <td>
                         
                       </td>
                       <td>
                         <img src="/image/logo.png" style={{width:'30px', marginLeft:'30px'}}/>
                       </td>
                       <td>
                         <span style={{fontWeight:'700'}}>BUSD-BNB</span><br/>
                          <span style={{fontSize:'12px'}}>Fisch</span>
                       </td>
                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                        <span style={{marginLeft:'20px'}}>0</span> <br/>
                         <span style={{opacity:'0.5'}}>Balance</span>
                       </td>

                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                        <span style={{marginLeft:'20px'}}>0</span> <br/>
                         <span style={{opacity:'0.5'}}>Deposited</span>
                       </td>
                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                         <span style={{color:'yellow'}}>171.80%</span><br/>
                        <span style={{opacity:'0.5'}}>Yearly</span>
                    
                       </td>
                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                       <span>0.47%</span><br/>
                        <span style={{opacity:'0.5'}}>Daily</span>
                       </td>

                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                       <span>$1.60M</span><br/>
                        <span style={{opacity:'0.5'}}>TVL</span>
                       
                       </td>

                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                       <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'200px'}}>
                       <FontAwesomeIcon icon={faUndo}  />
                         </button>
                        <button style={{backgroundColor:'rgba(0, 0, 0, 0.1)',border:'none'}}>
                        <FontAwesomeIcon icon={faAngleDown} style={{color:'yellow'}} />
                        </button>
                        
                       </td>
                       
                     </tr>
                   </table>
                 </div>

                 <div className="content_3" style={{opacity:0.9}}>
                  <table border='0' style={{marginTop:'20px'}}>
                    <tr>
                      <td style={{paddingLeft:'5px'}}>
                        <div style={{width:'250px',height:'200px',padding:'15px 15px'}}>
                              <span>Wallet</span> <span style={{marginLeft:'150px'}}>_ _</span><br></br>
                              <a href="#" style={{marginLeft:'170px',color:'gray',fontSize:'13px'}}>Get Fisch</a>

                              <br></br><br></br>

                         <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'235px'}}>
                           <table>
                             <tr>
                               <td>
                                 0
                               </td>
                               <td style={{paddingLeft:'170px'}}>
                                 MAX
                               </td>
                             </tr>
                           </table>
                         </button> <br></br><br></br>

                         <button style={{padding:'8px', borderRadius:'10px', border:'none',backgroundColor:'gray',color:'white',width:'235px'}}>
                           Deposit to Vault
                         </button>

                        </div>
                      </td>
                      <td style={{paddingLeft:'5px'}}>
                        <div style={{width:'250px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                              <span>vault</span> <span style={{marginLeft:'150px'}}>0.00</span><br></br>
                           
                              <br></br><br></br>

                         <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'235px'}}>
                           <table>
                             <tr>
                               <td>
                                 0
                               </td>
                               <td style={{paddingLeft:'170px'}}>
                                 MAX
                               </td>
                             </tr>
                           </table>
                         </button> <br></br><br></br>

                         <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'gray',color:'white',width:'235px'}}>
                          Withdraw to Wallet
                         </button>

                        </div>
                      </td>
                      <td style={{paddingLeft:'20px'}}>
                        <div style={{width:'250px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                          <br></br>
                             <span style={{marginTop:'60px', marginLeft:'90px'}}>Pending:</span>
                           
                              <br></br><br></br>
                          <table>

                            <tr>
                              <td style={{paddingLeft:'40px'}}>
                              <img src="/image/logo.png" style={{width:'13px', marginLeft:'30px'}}/>
                              </td>
                              <td>
                              <span>0.0</span> <span style={{color:'gray'}}>($0.0)</span>
                              </td>
                            </tr>
                          </table>


                             
                        
                         <br></br>

                         <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'yellow',color:'white',width:'235px'}}>
                          <span style={{color:'black'}}>Harvest</span>
                         </button>

                        </div>
                      </td>
                    </tr>

                  </table>
                  <br></br>

                  <div style={{width:'850px', height:'130px', backgroundColor:'black', borderRadius:'10px',marginLeft:'20px'}}>
                    <table style={{fontSize:'13px'}}>
                      <tr>
                        
                        <td style={{padding:'20px 10px'}}>
                          <span>Farm</span><br></br><br></br>
                          <span style={{opacity:'0.5'}}>Weight:50%</span>
                      
                          <br></br>
                          <span style={{opacity:'0.5'}}>Fisch TVL:171.81%</span>

                        </td>

                        <td style={{paddingLeft:'350px'}}>
                          <span style={{marginLeft:'60px', opacity:'0.5'}}>Learn how to buy and add to staking </span><span><a href="#"  style={{color:'white'}}> Tutorials</a></span><br></br>
                          <span style={{marginLeft:'95px', opacity:'0.5'}}>Check Fees and Tokenomics </span><span><a href="#" style={{color:'white'}}> Read Doc</a></span><br></br><br></br>
                          <a href="#" style={{marginLeft:'295px',color:'white'}}>Vault</a>
                        

                        </td>
                      </tr>
                    </table>


                  </div>
                 </div>

               
       </div>

       
       </div>

       
       

</div>

<div style={{backgroundImage:'url(/image/bg.png)', width:'100%', height:'570px'}}>
     <div>
       <div className="Box" style={{border:'1px solid yellow', height:'550px'}}>
         
                 <div className="content_2">
                 <table>
                     <tr>
                       <td>
                         
                       </td>
                       <td>
                         <img src="/image/logo.png" style={{width:'30px', marginLeft:'30px'}}/>
                       </td>
                       <td>
                         <span style={{fontWeight:'700'}}>USDT-BUSD</span><br/>
                          <span style={{fontSize:'12px'}}>Fisch</span>
                       </td>
                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                        <span style={{marginLeft:'20px'}}>0</span> <br/>
                         <span style={{opacity:'0.5'}}>Balance</span>
                       </td>

                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                        <span style={{marginLeft:'20px'}}>0</span> <br/>
                         <span style={{opacity:'0.5'}}>Deposited</span>
                       </td>
                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                         <span style={{color:'yellow'}}>171.80%</span><br/>
                        <span style={{opacity:'0.5'}}>Yearly</span>
                    
                       </td>
                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                       <span>0.47%</span><br/>
                        <span style={{opacity:'0.5'}}>Daily</span>
                       </td>

                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                       <span>$1.60M</span><br/>
                        <span style={{opacity:'0.5'}}>TVL</span>
                       
                       </td>

                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                       <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'200px'}}>
                       <FontAwesomeIcon icon={faUndo}  />
                         </button>
                        <button style={{backgroundColor:'rgba(0, 0, 0, 0.1)',border:'none'}}>
                        <FontAwesomeIcon icon={faAngleDown} style={{color:'yellow'}} />
                        </button>
                        
                       </td>
                       
                     </tr>
                   </table>
                 </div>

                 <div className="content_3" style={{opacity:0.9}}>
                  <table border='0' style={{marginTop:'20px'}}>
                    <tr>
                      <td style={{paddingLeft:'5px'}}>
                        <div style={{width:'250px',height:'200px',padding:'15px 15px'}}>
                              <span>Wallet</span> <span style={{marginLeft:'150px'}}>_ _</span><br></br>
                              <a href="#" style={{marginLeft:'170px',color:'gray',fontSize:'13px'}}>Get Fisch</a>

                              <br></br><br></br>

                         <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'235px'}}>
                           <table>
                             <tr>
                               <td>
                                 0
                               </td>
                               <td style={{paddingLeft:'170px'}}>
                                 MAX
                               </td>
                             </tr>
                           </table>
                         </button> <br></br><br></br>

                         <button style={{padding:'8px', borderRadius:'10px', border:'none',backgroundColor:'gray',color:'white',width:'235px'}}>
                           Deposit to Vault
                         </button>

                        </div>
                      </td>
                      <td style={{paddingLeft:'5px'}}>
                        <div style={{width:'250px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                              <span>vault</span> <span style={{marginLeft:'150px'}}>0.00</span><br></br>
                           
                              <br></br><br></br>

                         <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'235px'}}>
                           <table>
                             <tr>
                               <td>
                                 0
                               </td>
                               <td style={{paddingLeft:'170px'}}>
                                 MAX
                               </td>
                             </tr>
                           </table>
                         </button> <br></br><br></br>

                         <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'gray',color:'white',width:'235px'}}>
                          Withdraw to Wallet
                         </button>

                        </div>
                      </td>
                      <td style={{paddingLeft:'20px'}}>
                        <div style={{width:'250px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                          <br></br>
                             <span style={{marginTop:'60px', marginLeft:'90px'}}>Pending:</span>
                           
                              <br></br><br></br>
                          <table>

                            <tr>
                              <td style={{paddingLeft:'40px'}}>
                              <img src="/image/logo.png" style={{width:'13px', marginLeft:'30px'}}/>
                              </td>
                              <td>
                              <span>0.0</span> <span style={{color:'gray'}}>($0.0)</span>
                              </td>
                            </tr>
                          </table>


                             
                        
                         <br></br>

                         <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'yellow',color:'white',width:'235px'}}>
                          <span style={{color:'black'}}>Harvest</span>
                         </button>

                        </div>
                      </td>
                    </tr>

                  </table>
                  <br></br>

                  <div style={{width:'850px', height:'130px', backgroundColor:'black', borderRadius:'10px',marginLeft:'20px'}}>
                    <table style={{fontSize:'13px'}}>
                      <tr>
                       
                        <td style={{padding:'20px 10px'}}>
                          <span>Farm</span><br></br><br></br>
                          <span style={{opacity:'0.5'}}>Weight:50%</span>
                      
                          <br></br>
                          <span style={{opacity:'0.5'}}>Fisch TVL:171.81%</span>

                        </td>

                        <td style={{paddingLeft:'350px'}}>
                          <span style={{marginLeft:'60px', opacity:'0.5'}}>Learn how to buy and add to staking </span><span><a href="#"  style={{color:'white'}}> Tutorials</a></span><br></br>
                          <span style={{marginLeft:'95px', opacity:'0.5'}}>Check Fees and Tokenomics </span><span><a href="#" style={{color:'white'}}> Read Doc</a></span><br></br><br></br>
                          <a href="#" style={{marginLeft:'295px',color:'white'}}>Vault</a>
                        

                        </td>
                      </tr>
                    </table>


                  </div>
                 </div>

               
       </div>

       
       </div>

       
       

</div>

<div style={{backgroundImage:'url(/image/bg.png)', width:'100%', height:'570px'}}>
     <div>
       <div className="Box" style={{border:'1px solid yellow', height:'550px'}}>
         
                 <div className="content_2">
                 <table>
                     <tr>
                       <td>
                         
                       </td>
                       <td>
                         <img src="/image/logo.png" style={{width:'30px', marginLeft:'30px'}}/>
                       </td>
                       <td>
                         <span style={{fontWeight:'700'}}>btcb-eth</span><br/>
                          <span style={{fontSize:'12px'}}>Fisch</span>
                       </td>
                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                        <span style={{marginLeft:'20px'}}>0</span> <br/>
                         <span style={{opacity:'0.5'}}>Balance</span>
                       </td>

                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                        <span style={{marginLeft:'20px'}}>0</span> <br/>
                         <span style={{opacity:'0.5'}}>Deposited</span>
                       </td>
                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                         <span style={{color:'yellow'}}>171.80%</span><br/>
                        <span style={{opacity:'0.5'}}>Yearly</span>
                    
                       </td>
                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                       <span>0.47%</span><br/>
                        <span style={{opacity:'0.5'}}>Daily</span>
                       </td>

                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                       <span>$1.60M</span><br/>
                        <span style={{opacity:'0.5'}}>TVL</span>
                       
                       </td>

                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                       <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'200px'}}>
                       <FontAwesomeIcon icon={faUndo}  />
                         </button>
                        <button style={{backgroundColor:'rgba(0, 0, 0, 0.1)',border:'none'}}>
                        <FontAwesomeIcon icon={faAngleDown} style={{color:'yellow'}} />
                        </button>
                        
                       </td>
                       
                     </tr>
                   </table>
                 </div>

                 <div className="content_3" style={{opacity:0.9}}>
                  <table border='0' style={{marginTop:'20px'}}>
                    <tr>
                      <td style={{paddingLeft:'5px'}}>
                        <div style={{width:'250px',height:'200px',padding:'15px 15px'}}>
                              <span>Wallet</span> <span style={{marginLeft:'150px'}}>_ _</span><br></br>
                              <a href="#" style={{marginLeft:'170px',color:'gray',fontSize:'13px'}}>Get Fisch</a>

                              <br></br><br></br>

                         <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'235px'}}>
                           <table>
                             <tr>
                               <td>
                                 0
                               </td>
                               <td style={{paddingLeft:'170px'}}>
                                 MAX
                               </td>
                             </tr>
                           </table>
                         </button> <br></br><br></br>

                         <button style={{padding:'8px', borderRadius:'10px', border:'none',backgroundColor:'gray',color:'white',width:'235px'}}>
                           Deposit to Vault
                         </button>

                        </div>
                      </td>
                      <td style={{paddingLeft:'5px'}}>
                        <div style={{width:'250px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                              <span>vault</span> <span style={{marginLeft:'150px'}}>0.00</span><br></br>
                           
                              <br></br><br></br>

                         <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'235px'}}>
                           <table>
                             <tr>
                               <td>
                                 0
                               </td>
                               <td style={{paddingLeft:'170px'}}>
                                 MAX
                               </td>
                             </tr>
                           </table>
                         </button> <br></br><br></br>

                         <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'gray',color:'white',width:'235px'}}>
                          Withdraw to Wallet
                         </button>

                        </div>
                      </td>
                      <td style={{paddingLeft:'20px'}}>
                        <div style={{width:'250px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                          <br></br>
                             <span style={{marginTop:'60px', marginLeft:'90px'}}>Pending:</span>
                           
                              <br></br><br></br>
                          <table>

                            <tr>
                              <td style={{paddingLeft:'40px'}}>
                              <img src="/image/logo.png" style={{width:'13px', marginLeft:'30px'}}/>
                              </td>
                              <td>
                              <span>0.0</span> <span style={{color:'gray'}}>($0.0)</span>
                              </td>
                            </tr>
                          </table>


                             
                        
                         <br></br>

                         <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'yellow',color:'white',width:'235px'}}>
                          <span style={{color:'black'}}>Harvest</span>
                         </button>

                        </div>
                      </td>
                    </tr>

                  </table>
                  <br></br>

                  <div style={{width:'850px', height:'130px', backgroundColor:'black', borderRadius:'10px',marginLeft:'20px'}}>
                    <table style={{fontSize:'13px'}}>
                      <tr>
                       
                        <td style={{padding:'20px 10px'}}>
                          <span>Farm</span><br></br><br></br>
                          <span style={{opacity:'0.5'}}>Weight:50%</span>
                      
                          <br></br>
                          <span style={{opacity:'0.5'}}>Fisch TVL:171.81%</span>

                        </td>

                        <td style={{paddingLeft:'350px'}}>
                          <span style={{marginLeft:'60px', opacity:'0.5'}}>Learn how to buy and add to staking </span><span><a href="#"  style={{color:'white'}}> Tutorials</a></span><br></br>
                          <span style={{marginLeft:'95px', opacity:'0.5'}}>Check Fees and Tokenomics </span><span><a href="#" style={{color:'white'}}> Read Doc</a></span><br></br><br></br>
                          <a href="#" style={{marginLeft:'295px',color:'white'}}>Vault</a>
                        

                        </td>
                      </tr>
                    </table>


                  </div>
                 </div>

               
       </div>

       
       </div>

       
       

</div>

<div style={{backgroundImage:'url(/image/bg.png)', width:'100%', height:'570px'}}>
     <div>
       <div className="Box" style={{border:'1px solid yellow', height:'550px'}}>
         
                 <div className="content_2">
                 <table>
                     <tr>
                       <td>
                         
                       </td>
                       <td>
                         <img src="/image/logo.png" style={{width:'30px', marginLeft:'30px'}}/>
                       </td>
                       <td>
                         <span style={{fontWeight:'700'}}>usdc-busd</span><br/>
                          <span style={{fontSize:'12px'}}>Fisch</span>
                       </td>
                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                        <span style={{marginLeft:'20px'}}>0</span> <br/>
                         <span style={{opacity:'0.5'}}>Balance</span>
                       </td>

                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                        <span style={{marginLeft:'20px'}}>0</span> <br/>
                         <span style={{opacity:'0.5'}}>Deposited</span>
                       </td>
                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                         <span style={{color:'yellow'}}>171.80%</span><br/>
                        <span style={{opacity:'0.5'}}>Yearly</span>
                    
                       </td>
                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                       <span>0.47%</span><br/>
                        <span style={{opacity:'0.5'}}>Daily</span>
                       </td>

                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                       <span>$1.60M</span><br/>
                        <span style={{opacity:'0.5'}}>TVL</span>
                       
                       </td>

                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                       <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'200px'}}>
                       <FontAwesomeIcon icon={faUndo}  />
                         </button>
                        <button style={{backgroundColor:'rgba(0, 0, 0, 0.1)',border:'none'}}>
                        <FontAwesomeIcon icon={faAngleDown} style={{color:'yellow'}} />
                        </button>
                        
                       </td>
                       
                     </tr>
                   </table>
                 </div>

                 <div className="content_3" style={{opacity:0.9}}>
                  <table border='0' style={{marginTop:'20px'}}>
                    <tr>
                      <td style={{paddingLeft:'5px'}}>
                        <div style={{width:'250px',height:'200px',padding:'15px 15px'}}>
                              <span>Wallet</span> <span style={{marginLeft:'150px'}}>_ _</span><br></br>
                              <a href="#" style={{marginLeft:'170px',color:'gray',fontSize:'13px'}}>Get Fisch</a>

                              <br></br><br></br>

                         <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'235px'}}>
                           <table>
                             <tr>
                               <td>
                                 0
                               </td>
                               <td style={{paddingLeft:'170px'}}>
                                 MAX
                               </td>
                             </tr>
                           </table>
                         </button> <br></br><br></br>

                         <button style={{padding:'8px', borderRadius:'10px', border:'none',backgroundColor:'gray',color:'white',width:'235px'}}>
                           Deposit to Vault
                         </button>

                        </div>
                      </td>
                      <td style={{paddingLeft:'5px'}}>
                        <div style={{width:'250px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                              <span>vault</span> <span style={{marginLeft:'150px'}}>0.00</span><br></br>
                           
                              <br></br><br></br>

                         <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'235px'}}>
                           <table>
                             <tr>
                               <td>
                                 0
                               </td>
                               <td style={{paddingLeft:'170px'}}>
                                 MAX
                               </td>
                             </tr>
                           </table>
                         </button> <br></br><br></br>

                         <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'gray',color:'white',width:'235px'}}>
                          Withdraw to Wallet
                         </button>

                        </div>
                      </td>
                      <td style={{paddingLeft:'20px'}}>
                        <div style={{width:'250px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                          <br></br>
                             <span style={{marginTop:'60px', marginLeft:'90px'}}>Pending:</span>
                           
                              <br></br><br></br>
                          <table>

                            <tr>
                              <td style={{paddingLeft:'40px'}}>
                              <img src="/image/logo.png" style={{width:'13px', marginLeft:'30px'}}/>
                              </td>
                              <td>
                              <span>0.0</span> <span style={{color:'gray'}}>($0.0)</span>
                              </td>
                            </tr>
                          </table>


                             
                        
                         <br></br>

                         <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'yellow',color:'white',width:'235px'}}>
                          <span style={{color:'black'}}>Harvest</span>
                         </button>

                        </div>
                      </td>
                    </tr>

                  </table>
                  <br></br>

                  <div style={{width:'850px', height:'130px', backgroundColor:'black', borderRadius:'10px',marginLeft:'20px'}}>
                    <table style={{fontSize:'13px'}}>
                      <tr>
                       
                        <td style={{padding:'20px 10px'}}>
                          <span>Farm</span><br></br><br></br>
                          <span style={{opacity:'0.5'}}>Weight:50%</span>
                      
                          <br></br>
                          <span style={{opacity:'0.5'}}>Fisch TVL:171.81%</span>

                        </td>

                        <td style={{paddingLeft:'350px'}}>
                          <span style={{marginLeft:'60px', opacity:'0.5'}}>Learn how to buy and add to staking </span><span><a href="#"  style={{color:'white'}}> Tutorials</a></span><br></br>
                          <span style={{marginLeft:'95px', opacity:'0.5'}}>Check Fees and Tokenomics </span><span><a href="#" style={{color:'white'}}> Read Doc</a></span><br></br><br></br>
                          <a href="#" style={{marginLeft:'295px',color:'white'}}>Vault</a>
                        

                        </td>
                      </tr>
                    </table>


                  </div>
                 </div>

               
       </div>

       
       </div>

       
       

</div>

<div style={{backgroundImage:'url(/image/bg.png)', width:'100%', height:'570px'}}>
     <div>
       <div className="Box" style={{border:'1px solid yellow', height:'550px'}}>
         
                 <div className="content_2">
                 <table>
                     <tr>
                       <td>
                         
                       </td>
                       <td>
                         <img src="/image/logo.png" style={{width:'30px', marginLeft:'30px'}}/>
                       </td>
                       <td>
                         <span style={{fontWeight:'700'}}>usdt-bnb</span><br/>
                          <span style={{fontSize:'12px'}}>Fisch</span>
                       </td>
                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                        <span style={{marginLeft:'20px'}}>0</span> <br/>
                         <span style={{opacity:'0.5'}}>Balance</span>
                       </td>

                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                        <span style={{marginLeft:'20px'}}>0</span> <br/>
                         <span style={{opacity:'0.5'}}>Deposited</span>
                       </td>
                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                         <span style={{color:'yellow'}}>171.80%</span><br/>
                        <span style={{opacity:'0.5'}}>Yearly</span>
                    
                       </td>
                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                       <span>0.47%</span><br/>
                        <span style={{opacity:'0.5'}}>Daily</span>
                       </td>

                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                       <span>$1.60M</span><br/>
                        <span style={{opacity:'0.5'}}>TVL</span>
                       
                       </td>

                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                       <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'200px'}}>
                       <FontAwesomeIcon icon={faUndo}  />
                         </button>
                        <button style={{backgroundColor:'rgba(0, 0, 0, 0.1)',border:'none'}}>
                        <FontAwesomeIcon icon={faAngleDown} style={{color:'yellow'}} />
                        </button>
                        
                       </td>
                       
                     </tr>
                   </table>
                 </div>

                 <div className="content_3" style={{opacity:0.9}}>
                  <table border='0' style={{marginTop:'20px'}}>
                    <tr>
                      <td style={{paddingLeft:'5px'}}>
                        <div style={{width:'250px',height:'200px',padding:'15px 15px'}}>
                              <span>Wallet</span> <span style={{marginLeft:'150px'}}>_ _</span><br></br>
                              <a href="#" style={{marginLeft:'170px',color:'gray',fontSize:'13px'}}>Get Fisch</a>

                              <br></br><br></br>

                         <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'235px'}}>
                           <table>
                             <tr>
                               <td>
                                 0
                               </td>
                               <td style={{paddingLeft:'170px'}}>
                                 MAX
                               </td>
                             </tr>
                           </table>
                         </button> <br></br><br></br>

                         <button style={{padding:'8px', borderRadius:'10px', border:'none',backgroundColor:'gray',color:'white',width:'235px'}}>
                           Deposit to Vault
                         </button>

                        </div>
                      </td>
                      <td style={{paddingLeft:'5px'}}>
                        <div style={{width:'250px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                              <span>vault</span> <span style={{marginLeft:'150px'}}>0.00</span><br></br>
                           
                              <br></br><br></br>

                         <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'235px'}}>
                           <table>
                             <tr>
                               <td>
                                 0
                               </td>
                               <td style={{paddingLeft:'170px'}}>
                                 MAX
                               </td>
                             </tr>
                           </table>
                         </button> <br></br><br></br>

                         <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'gray',color:'white',width:'235px'}}>
                          Withdraw to Wallet
                         </button>

                        </div>
                      </td>
                      <td style={{paddingLeft:'20px'}}>
                        <div style={{width:'250px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                          <br></br>
                             <span style={{marginTop:'60px', marginLeft:'90px'}}>Pending:</span>
                           
                              <br></br><br></br>
                          <table>

                            <tr>
                              <td style={{paddingLeft:'40px'}}>
                              <img src="/image/logo.png" style={{width:'13px', marginLeft:'30px'}}/>
                              </td>
                              <td>
                              <span>0.0</span> <span style={{color:'gray'}}>($0.0)</span>
                              </td>
                            </tr>
                          </table>


                             
                        
                         <br></br>

                         <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'yellow',color:'white',width:'235px'}}>
                          <span style={{color:'black'}}>Harvest</span>
                         </button>

                        </div>
                      </td>
                    </tr>

                  </table>
                  <br></br>

                  <div style={{width:'850px', height:'130px', backgroundColor:'black', borderRadius:'10px',marginLeft:'20px'}}>
                    <table style={{fontSize:'13px'}}>
                      <tr>
                       
                        <td style={{padding:'20px 10px'}}>
                          <span>Farm</span><br></br><br></br>
                          <span style={{opacity:'0.5'}}>Weight:50%</span>
                      
                          <br></br>
                          <span style={{opacity:'0.5'}}>Fisch TVL:171.81%</span>

                        </td>

                        <td style={{paddingLeft:'350px'}}>
                          <span style={{marginLeft:'60px', opacity:'0.5'}}>Learn how to buy and add to staking </span><span><a href="#"  style={{color:'white'}}> Tutorials</a></span><br></br>
                          <span style={{marginLeft:'95px', opacity:'0.5'}}>Check Fees and Tokenomics </span><span><a href="#" style={{color:'white'}}> Read Doc</a></span><br></br><br></br>
                          <a href="#" style={{marginLeft:'295px',color:'white'}}>Vault</a>
                        

                        </td>
                      </tr>
                    </table>


                  </div>
                 </div>

               
       </div>

       
       </div>

       
       

</div>

<div style={{backgroundImage:'url(/image/bg.png)', width:'100%', height:'570px'}}>
     <div>
       <div className="Box" style={{border:'1px solid yellow', height:'550px'}}>
         
                 <div className="content_2">
                 <table>
                     <tr>
                       <td>
                         
                       </td>
                       <td>
                         <img src="/image/logo.png" style={{width:'30px', marginLeft:'30px'}}/>
                       </td>
                       <td>
                         <span style={{fontWeight:'700'}}>btcb-busd</span><br/>
                          <span style={{fontSize:'12px'}}>Fisch</span>
                       </td>
                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                        <span style={{marginLeft:'20px'}}>0</span> <br/>
                         <span style={{opacity:'0.5'}}>Balance</span>
                       </td>

                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                        <span style={{marginLeft:'20px'}}>0</span> <br/>
                         <span style={{opacity:'0.5'}}>Deposited</span>
                       </td>
                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                         <span style={{color:'yellow'}}>171.80%</span><br/>
                        <span style={{opacity:'0.5'}}>Yearly</span>
                    
                       </td>
                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                       <span>0.47%</span><br/>
                        <span style={{opacity:'0.5'}}>Daily</span>
                       </td>

                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                       <span>$1.60M</span><br/>
                        <span style={{opacity:'0.5'}}>TVL</span>
                       
                       </td>

                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                       <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'200px'}}>
                       <FontAwesomeIcon icon={faUndo}  />
                         </button>
                        <button style={{backgroundColor:'rgba(0, 0, 0, 0.1)',border:'none'}}>
                        <FontAwesomeIcon icon={faAngleDown} style={{color:'yellow'}} />
                        </button>
                        
                       </td>
                       
                     </tr>
                   </table>
                 </div>

                 <div className="content_3" style={{opacity:0.9}}>
                  <table border='0' style={{marginTop:'20px'}}>
                    <tr>
                      <td style={{paddingLeft:'5px'}}>
                        <div style={{width:'250px',height:'200px',padding:'15px 15px'}}>
                              <span>Wallet</span> <span style={{marginLeft:'150px'}}>_ _</span><br></br>
                              <a href="#" style={{marginLeft:'170px',color:'gray',fontSize:'13px'}}>Get Fisch</a>

                              <br></br><br></br>

                         <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'235px'}}>
                           <table>
                             <tr>
                               <td>
                                 0
                               </td>
                               <td style={{paddingLeft:'170px'}}>
                                 MAX
                               </td>
                             </tr>
                           </table>
                         </button> <br></br><br></br>

                         <button style={{padding:'8px', borderRadius:'10px', border:'none',backgroundColor:'gray',color:'white',width:'235px'}}>
                           Deposit to Vault
                         </button>

                        </div>
                      </td>
                      <td style={{paddingLeft:'5px'}}>
                        <div style={{width:'250px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                              <span>vault</span> <span style={{marginLeft:'150px'}}>0.00</span><br></br>
                           
                              <br></br><br></br>

                         <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'235px'}}>
                           <table>
                             <tr>
                               <td>
                                 0
                               </td>
                               <td style={{paddingLeft:'170px'}}>
                                 MAX
                               </td>
                             </tr>
                           </table>
                         </button> <br></br><br></br>

                         <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'gray',color:'white',width:'235px'}}>
                          Withdraw to Wallet
                         </button>

                        </div>
                      </td>
                      <td style={{paddingLeft:'20px'}}>
                        <div style={{width:'250px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                          <br></br>
                             <span style={{marginTop:'60px', marginLeft:'90px'}}>Pending:</span>
                           
                              <br></br><br></br>
                          <table>

                            <tr>
                              <td style={{paddingLeft:'40px'}}>
                              <img src="/image/logo.png" style={{width:'13px', marginLeft:'30px'}}/>
                              </td>
                              <td>
                              <span>0.0</span> <span style={{color:'gray'}}>($0.0)</span>
                              </td>
                            </tr>
                          </table>


                             
                        
                         <br></br>

                         <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'yellow',color:'white',width:'235px'}}>
                          <span style={{color:'black'}}>Harvest</span>
                         </button>

                        </div>
                      </td>
                    </tr>

                  </table>
                  <br></br>

                  <div style={{width:'850px', height:'130px', backgroundColor:'black', borderRadius:'10px',marginLeft:'20px'}}>
                    <table style={{fontSize:'13px'}}>
                      <tr>
                       
                        <td style={{padding:'20px 10px'}}>
                          <span>Farm</span><br></br><br></br>
                          <span style={{opacity:'0.5'}}>Weight:50%</span>
                      
                          <br></br>
                          <span style={{opacity:'0.5'}}>Fisch TVL:171.81%</span>

                        </td>

                        <td style={{paddingLeft:'350px'}}>
                          <span style={{marginLeft:'60px', opacity:'0.5'}}>Learn how to buy and add to staking </span><span><a href="#"  style={{color:'white'}}> Tutorials</a></span><br></br>
                          <span style={{marginLeft:'95px', opacity:'0.5'}}>Check Fees and Tokenomics </span><span><a href="#" style={{color:'white'}}> Read Doc</a></span><br></br><br></br>
                          <a href="#" style={{marginLeft:'295px',color:'white'}}>Vault</a>
                        

                        </td>
                      </tr>
                    </table>


                  </div>
                 </div>

               
       </div>

       
       </div>

       
       

</div>

<div style={{backgroundImage:'url(/image/bg.png)', width:'100%', height:'570px'}}>
     <div>
       <div className="Box" style={{border:'1px solid yellow', height:'550px'}}>
         
                 <div className="content_2">
                 <table>
                     <tr>
                       <td>
                         
                       </td>
                       <td>
                         <img src="/image/logo.png" style={{width:'30px', marginLeft:'30px'}}/>
                       </td>
                       <td>
                         <span style={{fontWeight:'700'}}>eth-bnb</span><br/>
                          <span style={{fontSize:'12px'}}>Fisch</span>
                       </td>
                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                        <span style={{marginLeft:'20px'}}>0</span> <br/>
                         <span style={{opacity:'0.5'}}>Balance</span>
                       </td>

                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                        <span style={{marginLeft:'20px'}}>0</span> <br/>
                         <span style={{opacity:'0.5'}}>Deposited</span>
                       </td>
                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                         <span style={{color:'yellow'}}>171.80%</span><br/>
                        <span style={{opacity:'0.5'}}>Yearly</span>
                    
                       </td>
                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                       <span>0.47%</span><br/>
                        <span style={{opacity:'0.5'}}>Daily</span>
                       </td>

                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                       <span>$1.60M</span><br/>
                        <span style={{opacity:'0.5'}}>TVL</span>
                       
                       </td>

                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                       <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'200px'}}>
                       <FontAwesomeIcon icon={faUndo}  />
                         </button>
                        <button style={{backgroundColor:'rgba(0, 0, 0, 0.1)',border:'none'}}>
                        <FontAwesomeIcon icon={faAngleDown} style={{color:'yellow'}} />
                        </button>
                        
                       </td>
                       
                     </tr>
                   </table>
                 </div>

                 <div className="content_3" style={{opacity:0.9}}>
                  <table border='0' style={{marginTop:'20px'}}>
                    <tr>
                      <td style={{paddingLeft:'5px'}}>
                        <div style={{width:'250px',height:'200px',padding:'15px 15px'}}>
                              <span>Wallet</span> <span style={{marginLeft:'150px'}}>_ _</span><br></br>
                              <a href="#" style={{marginLeft:'170px',color:'gray',fontSize:'13px'}}>Get Fisch</a>

                              <br></br><br></br>

                         <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'235px'}}>
                           <table>
                             <tr>
                               <td>
                                 0
                               </td>
                               <td style={{paddingLeft:'170px'}}>
                                 MAX
                               </td>
                             </tr>
                           </table>
                         </button> <br></br><br></br>

                         <button style={{padding:'8px', borderRadius:'10px', border:'none',backgroundColor:'gray',color:'white',width:'235px'}}>
                           Deposit to Vault
                         </button>

                        </div>
                      </td>
                      <td style={{paddingLeft:'5px'}}>
                        <div style={{width:'250px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                              <span>vault</span> <span style={{marginLeft:'150px'}}>0.00</span><br></br>
                           
                              <br></br><br></br>

                         <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'235px'}}>
                           <table>
                             <tr>
                               <td>
                                 0
                               </td>
                               <td style={{paddingLeft:'170px'}}>
                                 MAX
                               </td>
                             </tr>
                           </table>
                         </button> <br></br><br></br>

                         <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'gray',color:'white',width:'235px'}}>
                          Withdraw to Wallet
                         </button>

                        </div>
                      </td>
                      <td style={{paddingLeft:'20px'}}>
                        <div style={{width:'250px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                          <br></br>
                             <span style={{marginTop:'60px', marginLeft:'90px'}}>Pending:</span>
                           
                              <br></br><br></br>
                          <table>

                            <tr>
                              <td style={{paddingLeft:'40px'}}>
                              <img src="/image/logo.png" style={{width:'13px', marginLeft:'30px'}}/>
                              </td>
                              <td>
                              <span>0.0</span> <span style={{color:'gray'}}>($0.0)</span>
                              </td>
                            </tr>
                          </table>


                             
                        
                         <br></br>

                         <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'yellow',color:'white',width:'235px'}}>
                          <span style={{color:'black'}}>Harvest</span>
                         </button>

                        </div>
                      </td>
                    </tr>

                  </table>
                  <br></br>

                  <div style={{width:'850px', height:'130px', backgroundColor:'black', borderRadius:'10px',marginLeft:'20px'}}>
                    <table style={{fontSize:'13px'}}>
                      <tr>
                       
                        <td style={{padding:'20px 10px'}}>
                          <span>Farm</span><br></br><br></br>
                          <span style={{opacity:'0.5'}}>Weight:50%</span>
                      
                          <br></br>
                          <span style={{opacity:'0.5'}}>Fisch TVL:171.81%</span>

                        </td>

                        <td style={{paddingLeft:'350px'}}>
                          <span style={{marginLeft:'60px', opacity:'0.5'}}>Learn how to buy and add to staking </span><span><a href="#"  style={{color:'white'}}> Tutorials</a></span><br></br>
                          <span style={{marginLeft:'95px', opacity:'0.5'}}>Check Fees and Tokenomics </span><span><a href="#" style={{color:'white'}}> Read Doc</a></span><br></br><br></br>
                          <a href="#" style={{marginLeft:'295px',color:'white'}}>Vault</a>
                        

                        </td>
                      </tr>
                    </table>


                  </div>
                 </div>

               
       </div>

       
       </div>

       
       

</div>
<div style={{backgroundImage:'url(/image/bg.png)', width:'100%', height:'570px'}}>
     <div>
       <div className="Box" style={{border:'1px solid yellow', height:'550px'}}>
         
                 <div className="content_2">
                 <table>
                     <tr>
                       <td>
                         
                       </td>
                       <td>
                         <img src="/image/logo.png" style={{width:'30px', marginLeft:'30px'}}/>
                       </td>
                       <td>
                         <span style={{fontWeight:'700'}}>usdc-usdt</span><br/>
                          <span style={{fontSize:'12px'}}>Fisch</span>
                       </td>
                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                        <span style={{marginLeft:'20px'}}>0</span> <br/>
                         <span style={{opacity:'0.5'}}>Balance</span>
                       </td>

                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                        <span style={{marginLeft:'20px'}}>0</span> <br/>
                         <span style={{opacity:'0.5'}}>Deposited</span>
                       </td>
                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                         <span style={{color:'yellow'}}>171.80%</span><br/>
                        <span style={{opacity:'0.5'}}>Yearly</span>
                    
                       </td>
                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                       <span>0.47%</span><br/>
                        <span style={{opacity:'0.5'}}>Daily</span>
                       </td>

                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                       <span>$1.60M</span><br/>
                        <span style={{opacity:'0.5'}}>TVL</span>
                       
                       </td>

                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                       <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'200px'}}>
                       <FontAwesomeIcon icon={faUndo}  />
                         </button>
                        <button style={{backgroundColor:'rgba(0, 0, 0, 0.1)',border:'none'}}>
                        <FontAwesomeIcon icon={faAngleDown} style={{color:'yellow'}} />
                        </button>
                        
                       </td>
                       
                     </tr>
                   </table>
                 </div>

                 <div className="content_3" style={{opacity:0.9}}>
                  <table border='0' style={{marginTop:'20px'}}>
                    <tr>
                      <td style={{paddingLeft:'5px'}}>
                        <div style={{width:'250px',height:'200px',padding:'15px 15px'}}>
                              <span>Wallet</span> <span style={{marginLeft:'150px'}}>_ _</span><br></br>
                              <a href="#" style={{marginLeft:'170px',color:'gray',fontSize:'13px'}}>Get Fisch</a>

                              <br></br><br></br>

                         <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'235px'}}>
                           <table>
                             <tr>
                               <td>
                                 0
                               </td>
                               <td style={{paddingLeft:'170px'}}>
                                 MAX
                               </td>
                             </tr>
                           </table>
                         </button> <br></br><br></br>

                         <button style={{padding:'8px', borderRadius:'10px', border:'none',backgroundColor:'gray',color:'white',width:'235px'}}>
                           Deposit to Vault
                         </button>

                        </div>
                      </td>
                      <td style={{paddingLeft:'5px'}}>
                        <div style={{width:'250px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                              <span>vault</span> <span style={{marginLeft:'150px'}}>0.00</span><br></br>
                           
                              <br></br><br></br>

                         <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'235px'}}>
                           <table>
                             <tr>
                               <td>
                                 0
                               </td>
                               <td style={{paddingLeft:'170px'}}>
                                 MAX
                               </td>
                             </tr>
                           </table>
                         </button> <br></br><br></br>

                         <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'gray',color:'white',width:'235px'}}>
                          Withdraw to Wallet
                         </button>

                        </div>
                      </td>
                      <td style={{paddingLeft:'20px'}}>
                        <div style={{width:'250px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                          <br></br>
                             <span style={{marginTop:'60px', marginLeft:'90px'}}>Pending:</span>
                           
                              <br></br><br></br>
                          <table>

                            <tr>
                              <td style={{paddingLeft:'40px'}}>
                              <img src="/image/logo.png" style={{width:'13px', marginLeft:'30px'}}/>
                              </td>
                              <td>
                              <span>0.0</span> <span style={{color:'gray'}}>($0.0)</span>
                              </td>
                            </tr>
                          </table>


                             
                        
                         <br></br>

                         <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'yellow',color:'white',width:'235px'}}>
                          <span style={{color:'black'}}>Harvest</span>
                         </button>

                        </div>
                      </td>
                    </tr>

                  </table>
                  <br></br>

                  <div style={{width:'850px', height:'130px', backgroundColor:'black', borderRadius:'10px',marginLeft:'20px'}}>
                    <table style={{fontSize:'13px'}}>
                      <tr>
                        
                        <td style={{padding:'20px 10px'}}>
                          <span>Farm</span><br></br><br></br>
                          <span style={{opacity:'0.5'}}>Weight:50%</span>
                      
                          <br></br>
                          <span style={{opacity:'0.5'}}>Fisch TVL:171.81%</span>

                        </td>

                        <td style={{paddingLeft:'350px'}}>
                          <span style={{marginLeft:'60px', opacity:'0.5'}}>Learn how to buy and add to staking </span><span><a href="#"  style={{color:'white'}}> Tutorials</a></span><br></br>
                          <span style={{marginLeft:'95px', opacity:'0.5'}}>Check Fees and Tokenomics </span><span><a href="#" style={{color:'white'}}> Read Doc</a></span><br></br><br></br>
                          <a href="#" style={{marginLeft:'295px',color:'white'}}>Vault</a>
                        

                        </td>
                      </tr>
                    </table>


                  </div>
                 </div>

               
       </div>

       
       </div>

       
       

</div>
<div style={{backgroundImage:'url(/image/bg.png)', width:'100%', height:'570px'}}>
     <div>
       <div className="Box" style={{border:'1px solid yellow', height:'550px'}}>
         
                 <div className="content_2">
                 <table>
                     <tr>
                       <td>
                         
                       </td>
                       <td>
                         <img src="/image/logo.png" style={{width:'30px', marginLeft:'30px'}}/>
                       </td>
                       <td>
                         <span style={{fontWeight:'700'}}>btcb-bnb</span><br/>
                          <span style={{fontSize:'12px'}}>Fisch</span>
                       </td>
                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                        <span style={{marginLeft:'20px'}}>0</span> <br/>
                         <span style={{opacity:'0.5'}}>Balance</span>
                       </td>

                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                        <span style={{marginLeft:'20px'}}>0</span> <br/>
                         <span style={{opacity:'0.5'}}>Deposited</span>
                       </td>
                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                         <span style={{color:'yellow'}}>171.80%</span><br/>
                        <span style={{opacity:'0.5'}}>Yearly</span>
                    
                       </td>
                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                       <span>0.47%</span><br/>
                        <span style={{opacity:'0.5'}}>Daily</span>
                       </td>

                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                       <span>$1.60M</span><br/>
                        <span style={{opacity:'0.5'}}>TVL</span>
                       
                       </td>

                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                       <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'200px'}}>
                       <FontAwesomeIcon icon={faUndo}  />
                         </button>
                        <button style={{backgroundColor:'rgba(0, 0, 0, 0.1)',border:'none'}}>
                        <FontAwesomeIcon icon={faAngleDown} style={{color:'yellow'}} />
                        </button>
                        
                       </td>
                       
                     </tr>
                   </table>
                 </div>

                 <div className="content_3" style={{opacity:0.9}}>
                  <table border='0' style={{marginTop:'20px'}}>
                    <tr>
                      <td style={{paddingLeft:'5px'}}>
                        <div style={{width:'250px',height:'200px',padding:'15px 15px'}}>
                              <span>Wallet</span> <span style={{marginLeft:'150px'}}>_ _</span><br></br>
                              <a href="#" style={{marginLeft:'170px',color:'gray',fontSize:'13px'}}>Get Fisch</a>

                              <br></br><br></br>

                         <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'235px'}}>
                           <table>
                             <tr>
                               <td>
                                 0
                               </td>
                               <td style={{paddingLeft:'170px'}}>
                                 MAX
                               </td>
                             </tr>
                           </table>
                         </button> <br></br><br></br>

                         <button style={{padding:'8px', borderRadius:'10px', border:'none',backgroundColor:'gray',color:'white',width:'235px'}}>
                           Deposit to Vault
                         </button>

                        </div>
                      </td>
                      <td style={{paddingLeft:'5px'}}>
                        <div style={{width:'250px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                              <span>vault</span> <span style={{marginLeft:'150px'}}>0.00</span><br></br>
                           
                              <br></br><br></br>

                         <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'235px'}}>
                           <table>
                             <tr>
                               <td>
                                 0
                               </td>
                               <td style={{paddingLeft:'170px'}}>
                                 MAX
                               </td>
                             </tr>
                           </table>
                         </button> <br></br><br></br>

                         <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'gray',color:'white',width:'235px'}}>
                          Withdraw to Wallet
                         </button>

                        </div>
                      </td>
                      <td style={{paddingLeft:'20px'}}>
                        <div style={{width:'250px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                          <br></br>
                             <span style={{marginTop:'60px', marginLeft:'90px'}}>Pending:</span>
                           
                              <br></br><br></br>
                          <table>

                            <tr>
                              <td style={{paddingLeft:'40px'}}>
                              <img src="/image/logo.png" style={{width:'13px', marginLeft:'30px'}}/>
                              </td>
                              <td>
                              <span>0.0</span> <span style={{color:'gray'}}>($0.0)</span>
                              </td>
                            </tr>
                          </table>


                             
                        
                         <br></br>

                         <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'yellow',color:'white',width:'235px'}}>
                          <span style={{color:'black'}}>Harvest</span>
                         </button>

                        </div>
                      </td>
                    </tr>

                  </table>
                  <br></br>

                  <div style={{width:'850px', height:'130px', backgroundColor:'black', borderRadius:'10px',marginLeft:'20px'}}>
                    <table style={{fontSize:'13px'}}>
                      <tr>
                        
                        <td style={{padding:'20px 10px'}}>
                          <span>Farm</span><br></br><br></br>
                          <span style={{opacity:'0.5'}}>Weight:50%</span>
                      
                          <br></br>
                          <span style={{opacity:'0.5'}}>Fisch TVL:171.81%</span>

                        </td>

                        <td style={{paddingLeft:'350px'}}>
                          <span style={{marginLeft:'60px', opacity:'0.5'}}>Learn how to buy and add to staking </span><span><a href="#"  style={{color:'white'}}> Tutorials</a></span><br></br>
                          <span style={{marginLeft:'95px', opacity:'0.5'}}>Check Fees and Tokenomics </span><span><a href="#" style={{color:'white'}}> Read Doc</a></span><br></br><br></br>
                          <a href="#" style={{marginLeft:'295px',color:'white'}}>Vault</a>
                        

                        </td>
                      </tr>
                    </table>


                  </div>
                 </div>

               
       </div>

       
       </div>

       
       

</div>
<div style={{backgroundImage:'url(/image/bg.png)', width:'100%', height:'570px'}}>
     <div>
       <div className="Box" style={{border:'1px solid yellow', height:'550px'}}>
         
                 <div className="content_2">
                 <table>
                     <tr>
                       <td>
                         
                       </td>
                       <td>
                         <img src="/image/logo.png" style={{width:'30px', marginLeft:'30px'}}/>
                       </td>
                       <td>
                         <span style={{fontWeight:'700'}}>tusd-busd</span><br/>
                          <span style={{fontSize:'12px'}}>Fisch</span>
                       </td>
                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                        <span style={{marginLeft:'20px'}}>0</span> <br/>
                         <span style={{opacity:'0.5'}}>Balance</span>
                       </td>

                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                        <span style={{marginLeft:'20px'}}>0</span> <br/>
                         <span style={{opacity:'0.5'}}>Deposited</span>
                       </td>
                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                         <span style={{color:'yellow'}}>171.80%</span><br/>
                        <span style={{opacity:'0.5'}}>Yearly</span>
                    
                       </td>
                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                       <span>0.47%</span><br/>
                        <span style={{opacity:'0.5'}}>Daily</span>
                       </td>

                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                       <span>$1.60M</span><br/>
                        <span style={{opacity:'0.5'}}>TVL</span>
                       
                       </td>

                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                       <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'200px'}}>
                       <FontAwesomeIcon icon={faUndo}  />
                         </button>
                        <button style={{backgroundColor:'rgba(0, 0, 0, 0.1)',border:'none'}}>
                        <FontAwesomeIcon icon={faAngleDown} style={{color:'yellow'}} />
                        </button>
                        
                       </td>
                       
                     </tr>
                   </table>
                 </div>

                 <div className="content_3" style={{opacity:0.9}}>
                  <table border='0' style={{marginTop:'20px'}}>
                    <tr>
                      <td style={{paddingLeft:'5px'}}>
                        <div style={{width:'250px',height:'200px',padding:'15px 15px'}}>
                              <span>Wallet</span> <span style={{marginLeft:'150px'}}>_ _</span><br></br>
                              <a href="#" style={{marginLeft:'170px',color:'gray',fontSize:'13px'}}>Get Fisch</a>

                              <br></br><br></br>

                         <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'235px'}}>
                           <table>
                             <tr>
                               <td>
                                 0
                               </td>
                               <td style={{paddingLeft:'170px'}}>
                                 MAX
                               </td>
                             </tr>
                           </table>
                         </button> <br></br><br></br>

                         <button style={{padding:'8px', borderRadius:'10px', border:'none',backgroundColor:'gray',color:'white',width:'235px'}}>
                           Deposit to Vault
                         </button>

                        </div>
                      </td>
                      <td style={{paddingLeft:'5px'}}>
                        <div style={{width:'250px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                              <span>vault</span> <span style={{marginLeft:'150px'}}>0.00</span><br></br>
                           
                              <br></br><br></br>

                         <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'235px'}}>
                           <table>
                             <tr>
                               <td>
                                 0
                               </td>
                               <td style={{paddingLeft:'170px'}}>
                                 MAX
                               </td>
                             </tr>
                           </table>
                         </button> <br></br><br></br>

                         <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'gray',color:'white',width:'235px'}}>
                          Withdraw to Wallet
                         </button>

                        </div>
                      </td>
                      <td style={{paddingLeft:'20px'}}>
                        <div style={{width:'250px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                          <br></br>
                             <span style={{marginTop:'60px', marginLeft:'90px'}}>Pending:</span>
                           
                              <br></br><br></br>
                          <table>

                            <tr>
                              <td style={{paddingLeft:'40px'}}>
                              <img src="/image/logo.png" style={{width:'13px', marginLeft:'30px'}}/>
                              </td>
                              <td>
                              <span>0.0</span> <span style={{color:'gray'}}>($0.0)</span>
                              </td>
                            </tr>
                          </table>


                             
                        
                         <br></br>

                         <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'yellow',color:'white',width:'235px'}}>
                          <span style={{color:'black'}}>Harvest</span>
                         </button>

                        </div>
                      </td>
                    </tr>

                  </table>
                  <br></br>

                  <div style={{width:'850px', height:'130px', backgroundColor:'black', borderRadius:'10px',marginLeft:'20px'}}>
                    <table style={{fontSize:'13px'}}>
                      <tr>
                       
                        <td style={{padding:'20px 10px'}}>
                          <span>Farm</span><br></br><br></br>
                          <span style={{opacity:'0.5'}}>Weight:50%</span>
                      
                          <br></br>
                          <span style={{opacity:'0.5'}}>Fisch TVL:171.81%</span>

                        </td>

                        <td style={{paddingLeft:'350px'}}>
                          <span style={{marginLeft:'60px', opacity:'0.5'}}>Learn how to buy and add to staking </span><span><a href="#"  style={{color:'white'}}> Tutorials</a></span><br></br>
                          <span style={{marginLeft:'95px', opacity:'0.5'}}>Check Fees and Tokenomics </span><span><a href="#" style={{color:'white'}}> Read Doc</a></span><br></br><br></br>
                          <a href="#" style={{marginLeft:'295px',color:'white'}}>Vault</a>
                        

                        </td>
                      </tr>
                    </table>


                  </div>
                 </div>

               
       </div>

       
       </div>

       
       

</div>
<div style={{backgroundImage:'url(/image/bg.png)', width:'100%', height:'570px'}}>
     <div>
       <div className="Box" style={{border:'1px solid yellow', height:'550px'}}>
         
                 <div className="content_2">
                 <table>
                     <tr>
                       <td>
                         
                       </td>
                       <td>
                         <img src="/image/logo.png" style={{width:'30px', marginLeft:'30px'}}/>
                       </td>
                       <td>
                         <span style={{fontWeight:'700'}}>eth-usdc</span><br/>
                          <span style={{fontSize:'12px'}}>Fisch</span>
                       </td>
                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                        <span style={{marginLeft:'20px'}}>0</span> <br/>
                         <span style={{opacity:'0.5'}}>Balance</span>
                       </td>

                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                        <span style={{marginLeft:'20px'}}>0</span> <br/>
                         <span style={{opacity:'0.5'}}>Deposited</span>
                       </td>
                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                         <span style={{color:'yellow'}}>171.80%</span><br/>
                        <span style={{opacity:'0.5'}}>Yearly</span>
                    
                       </td>
                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                       <span>0.47%</span><br/>
                        <span style={{opacity:'0.5'}}>Daily</span>
                       </td>

                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                       <span>$1.60M</span><br/>
                        <span style={{opacity:'0.5'}}>TVL</span>
                       
                       </td>

                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                       <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'200px'}}>
                       <FontAwesomeIcon icon={faUndo}  />
                         </button>
                        <button style={{backgroundColor:'rgba(0, 0, 0, 0.1)',border:'none'}}>
                        <FontAwesomeIcon icon={faAngleDown} style={{color:'yellow'}} />
                        </button>
                        
                       </td>
                       
                     </tr>
                   </table>
                 </div>

                 <div className="content_3" style={{opacity:0.9}}>
                  <table border='0' style={{marginTop:'20px'}}>
                    <tr>
                      <td style={{paddingLeft:'5px'}}>
                        <div style={{width:'250px',height:'200px',padding:'15px 15px'}}>
                              <span>Wallet</span> <span style={{marginLeft:'150px'}}>_ _</span><br></br>
                              <a href="#" style={{marginLeft:'170px',color:'gray',fontSize:'13px'}}>Get Fisch</a>

                              <br></br><br></br>

                         <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'235px'}}>
                           <table>
                             <tr>
                               <td>
                                 0
                               </td>
                               <td style={{paddingLeft:'170px'}}>
                                 MAX
                               </td>
                             </tr>
                           </table>
                         </button> <br></br><br></br>

                         <button style={{padding:'8px', borderRadius:'10px', border:'none',backgroundColor:'gray',color:'white',width:'235px'}}>
                           Deposit to Vault
                         </button>

                        </div>
                      </td>
                      <td style={{paddingLeft:'5px'}}>
                        <div style={{width:'250px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                              <span>vault</span> <span style={{marginLeft:'150px'}}>0.00</span><br></br>
                           
                              <br></br><br></br>

                         <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'235px'}}>
                           <table>
                             <tr>
                               <td>
                                 0
                               </td>
                               <td style={{paddingLeft:'170px'}}>
                                 MAX
                               </td>
                             </tr>
                           </table>
                         </button> <br></br><br></br>

                         <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'gray',color:'white',width:'235px'}}>
                          Withdraw to Wallet
                         </button>

                        </div>
                      </td>
                      <td style={{paddingLeft:'20px'}}>
                        <div style={{width:'250px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                          <br></br>
                             <span style={{marginTop:'60px', marginLeft:'90px'}}>Pending:</span>
                           
                              <br></br><br></br>
                          <table>

                            <tr>
                              <td style={{paddingLeft:'40px'}}>
                              <img src="/image/logo.png" style={{width:'13px', marginLeft:'30px'}}/>
                              </td>
                              <td>
                              <span>0.0</span> <span style={{color:'gray'}}>($0.0)</span>
                              </td>
                            </tr>
                          </table>


                             
                        
                         <br></br>

                         <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'yellow',color:'white',width:'235px'}}>
                          <span style={{color:'black'}}>Harvest</span>
                         </button>

                        </div>
                      </td>
                    </tr>

                  </table>
                  <br></br>

                  <div style={{width:'850px', height:'130px', backgroundColor:'black', borderRadius:'10px',marginLeft:'20px'}}>
                    <table style={{fontSize:'13px'}}>
                      <tr>
                       
                        <td style={{padding:'20px 10px'}}>
                          <span>Farm</span><br></br><br></br>
                          <span style={{opacity:'0.5'}}>Weight:50%</span>
                      
                          <br></br>
                          <span style={{opacity:'0.5'}}>Fisch TVL:171.81%</span>

                        </td>

                        <td style={{paddingLeft:'350px'}}>
                          <span style={{marginLeft:'60px', opacity:'0.5'}}>Learn how to buy and add to staking </span><span><a href="#"  style={{color:'white'}}> Tutorials</a></span><br></br>
                          <span style={{marginLeft:'95px', opacity:'0.5'}}>Check Fees and Tokenomics </span><span><a href="#" style={{color:'white'}}> Read Doc</a></span><br></br><br></br>
                          <a href="#" style={{marginLeft:'295px',color:'white'}}>Vault</a>
                        

                        </td>
                      </tr>
                    </table>


                  </div>
                 </div>

               
       </div>

       
       </div>

       
       

</div>

<div style={{backgroundImage:'url(/image/bg.png)', width:'100%', height:'570px'}}>
     <div>
       <div className="Box" style={{border:'1px solid yellow', height:'550px'}}>
         
                 <div className="content_2">
                 <table>
                     <tr>
                       <td>
                         
                       </td>
                       <td>
                         <img src="/image/logo.png" style={{width:'30px', marginLeft:'30px'}}/>
                       </td>
                       <td>
                         <span style={{fontWeight:'700'}}>dai-busd</span><br/>
                          <span style={{fontSize:'12px'}}>Fisch</span>
                       </td>
                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                        <span style={{marginLeft:'20px'}}>0</span> <br/>
                         <span style={{opacity:'0.5'}}>Balance</span>
                       </td>

                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                        <span style={{marginLeft:'20px'}}>0</span> <br/>
                         <span style={{opacity:'0.5'}}>Deposited</span>
                       </td>
                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                         <span style={{color:'yellow'}}>171.80%</span><br/>
                        <span style={{opacity:'0.5'}}>Yearly</span>
                    
                       </td>
                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                       <span>0.47%</span><br/>
                        <span style={{opacity:'0.5'}}>Daily</span>
                       </td>

                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                       <span>$1.60M</span><br/>
                        <span style={{opacity:'0.5'}}>TVL</span>
                       
                       </td>

                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                       <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'200px'}}>
                       <FontAwesomeIcon icon={faUndo}  />
                         </button>
                        <button style={{backgroundColor:'rgba(0, 0, 0, 0.1)',border:'none'}}>
                        <FontAwesomeIcon icon={faAngleDown} style={{color:'yellow'}} />
                        </button>
                        
                       </td>
                       
                     </tr>
                   </table>
                 </div>

                 <div className="content_3" style={{opacity:0.9}}>
                  <table border='0' style={{marginTop:'20px'}}>
                    <tr>
                      <td style={{paddingLeft:'5px'}}>
                        <div style={{width:'250px',height:'200px',padding:'15px 15px'}}>
                              <span>Wallet</span> <span style={{marginLeft:'150px'}}>_ _</span><br></br>
                              <a href="#" style={{marginLeft:'170px',color:'gray',fontSize:'13px'}}>Get Fisch</a>

                              <br></br><br></br>

                         <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'235px'}}>
                           <table>
                             <tr>
                               <td>
                                 0
                               </td>
                               <td style={{paddingLeft:'170px'}}>
                                 MAX
                               </td>
                             </tr>
                           </table>
                         </button> <br></br><br></br>

                         <button style={{padding:'8px', borderRadius:'10px', border:'none',backgroundColor:'gray',color:'white',width:'235px'}}>
                           Deposit to Vault
                         </button>

                        </div>
                      </td>
                      <td style={{paddingLeft:'5px'}}>
                        <div style={{width:'250px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                              <span>vault</span> <span style={{marginLeft:'150px'}}>0.00</span><br></br>
                           
                              <br></br><br></br>

                         <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'235px'}}>
                           <table>
                             <tr>
                               <td>
                                 0
                               </td>
                               <td style={{paddingLeft:'170px'}}>
                                 MAX
                               </td>
                             </tr>
                           </table>
                         </button> <br></br><br></br>

                         <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'gray',color:'white',width:'235px'}}>
                          Withdraw to Wallet
                         </button>

                        </div>
                      </td>
                      <td style={{paddingLeft:'20px'}}>
                        <div style={{width:'250px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                          <br></br>
                             <span style={{marginTop:'60px', marginLeft:'90px'}}>Pending:</span>
                           
                              <br></br><br></br>
                          <table>

                            <tr>
                              <td style={{paddingLeft:'40px'}}>
                              <img src="/image/logo.png" style={{width:'13px', marginLeft:'30px'}}/>
                              </td>
                              <td>
                              <span>0.0</span> <span style={{color:'gray'}}>($0.0)</span>
                              </td>
                            </tr>
                          </table>


                             
                        
                         <br></br>

                         <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'yellow',color:'white',width:'235px'}}>
                          <span style={{color:'black'}}>Harvest</span>
                         </button>

                        </div>
                      </td>
                    </tr>

                  </table>
                  <br></br>

                  <div style={{width:'850px', height:'130px', backgroundColor:'black', borderRadius:'10px',marginLeft:'20px'}}>
                    <table style={{fontSize:'13px'}}>
                      <tr>
                       
                        <td style={{padding:'20px 10px'}}>
                          <span>Farm</span><br></br><br></br>
                          <span style={{opacity:'0.5'}}>Weight:50%</span>
                      
                          <br></br>
                          <span style={{opacity:'0.5'}}>Fisch TVL:171.81%</span>

                        </td>

                        <td style={{paddingLeft:'350px'}}>
                          <span style={{marginLeft:'60px', opacity:'0.5'}}>Learn how to buy and add to staking </span><span><a href="#"  style={{color:'white'}}> Tutorials</a></span><br></br>
                          <span style={{marginLeft:'95px', opacity:'0.5'}}>Check Fees and Tokenomics </span><span><a href="#" style={{color:'white'}}> Read Doc</a></span><br></br><br></br>
                          <a href="#" style={{marginLeft:'295px',color:'white'}}>Vault</a>
                        

                        </td>
                      </tr>
                    </table>


                  </div>
                 </div>

               
       </div>

       
       </div>

       
       

</div>
<div style={{backgroundImage:'url(/image/bg.png)', width:'100%', height:'570px'}}>
     <div>
       <div className="Box" style={{border:'1px solid yellow', height:'550px'}}>
         
                 <div className="content_2">
                 <table>
                     <tr>
                       <td>
                         
                       </td>
                       <td>
                         <img src="/image/logo.png" style={{width:'30px', marginLeft:'30px'}}/>
                       </td>
                       <td>
                         <span style={{fontWeight:'700'}}>cake-busd</span><br/>
                          <span style={{fontSize:'12px'}}>Fisch</span>
                       </td>
                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                        <span style={{marginLeft:'20px'}}>0</span> <br/>
                         <span style={{opacity:'0.5'}}>Balance</span>
                       </td>

                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                        <span style={{marginLeft:'20px'}}>0</span> <br/>
                         <span style={{opacity:'0.5'}}>Deposited</span>
                       </td>
                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                         <span style={{color:'yellow'}}>171.80%</span><br/>
                        <span style={{opacity:'0.5'}}>Yearly</span>
                    
                       </td>
                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                       <span>0.47%</span><br/>
                        <span style={{opacity:'0.5'}}>Daily</span>
                       </td>

                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                       <span>$1.60M</span><br/>
                        <span style={{opacity:'0.5'}}>TVL</span>
                       
                       </td>

                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                       <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'200px'}}>
                       <FontAwesomeIcon icon={faUndo}  />
                         </button>
                        <button style={{backgroundColor:'rgba(0, 0, 0, 0.1)',border:'none'}}>
                        <FontAwesomeIcon icon={faAngleDown} style={{color:'yellow'}} />
                        </button>
                        
                       </td>
                       
                     </tr>
                   </table>
                 </div>

                 <div className="content_3" style={{opacity:0.9}}>
                  <table border='0' style={{marginTop:'20px'}}>
                    <tr>
                      <td style={{paddingLeft:'5px'}}>
                        <div style={{width:'250px',height:'200px',padding:'15px 15px'}}>
                              <span>Wallet</span> <span style={{marginLeft:'150px'}}>_ _</span><br></br>
                              <a href="#" style={{marginLeft:'170px',color:'gray',fontSize:'13px'}}>Get Fisch</a>

                              <br></br><br></br>

                         <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'235px'}}>
                           <table>
                             <tr>
                               <td>
                                 0
                               </td>
                               <td style={{paddingLeft:'170px'}}>
                                 MAX
                               </td>
                             </tr>
                           </table>
                         </button> <br></br><br></br>

                         <button style={{padding:'8px', borderRadius:'10px', border:'none',backgroundColor:'gray',color:'white',width:'235px'}}>
                           Deposit to Vault
                         </button>

                        </div>
                      </td>
                      <td style={{paddingLeft:'5px'}}>
                        <div style={{width:'250px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                              <span>vault</span> <span style={{marginLeft:'150px'}}>0.00</span><br></br>
                           
                              <br></br><br></br>

                         <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'235px'}}>
                           <table>
                             <tr>
                               <td>
                                 0
                               </td>
                               <td style={{paddingLeft:'170px'}}>
                                 MAX
                               </td>
                             </tr>
                           </table>
                         </button> <br></br><br></br>

                         <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'gray',color:'white',width:'235px'}}>
                          Withdraw to Wallet
                         </button>

                        </div>
                      </td>
                      <td style={{paddingLeft:'20px'}}>
                        <div style={{width:'250px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                          <br></br>
                             <span style={{marginTop:'60px', marginLeft:'90px'}}>Pending:</span>
                           
                              <br></br><br></br>
                          <table>

                            <tr>
                              <td style={{paddingLeft:'40px'}}>
                              <img src="/image/logo.png" style={{width:'13px', marginLeft:'30px'}}/>
                              </td>
                              <td>
                              <span>0.0</span> <span style={{color:'gray'}}>($0.0)</span>
                              </td>
                            </tr>
                          </table>


                             
                        
                         <br></br>

                         <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'yellow',color:'white',width:'235px'}}>
                          <span style={{color:'black'}}>Harvest</span>
                         </button>

                        </div>
                      </td>
                    </tr>

                  </table>
                  <br></br>

                  <div style={{width:'850px', height:'130px', backgroundColor:'black', borderRadius:'10px',marginLeft:'20px'}}>
                    <table style={{fontSize:'13px'}}>
                      <tr>
                        
                        <td style={{padding:'20px 10px'}}>
                          <span>Farm</span><br></br><br></br>
                          <span style={{opacity:'0.5'}}>Weight:50%</span>
                      
                          <br></br>
                          <span style={{opacity:'0.5'}}>Fisch TVL:171.81%</span>

                        </td>

                        <td style={{paddingLeft:'350px'}}>
                          <span style={{marginLeft:'60px', opacity:'0.5'}}>Learn how to buy and add to staking </span><span><a href="#"  style={{color:'white'}}> Tutorials</a></span><br></br>
                          <span style={{marginLeft:'95px', opacity:'0.5'}}>Check Fees and Tokenomics </span><span><a href="#" style={{color:'white'}}> Read Doc</a></span><br></br><br></br>
                          <a href="#" style={{marginLeft:'295px',color:'white'}}>Vault</a>
                        

                        </td>
                      </tr>
                    </table>


                  </div>
                 </div>

               
       </div>

       
       </div>

       
       

</div>

<div style={{backgroundImage:'url(/image/bg.png)', width:'100%', height:'570px'}}>
     <div>
       <div className="Box" style={{border:'1px solid yellow', height:'550px'}}>
         
                 <div className="content_2">
                 <table>
                     <tr>
                       <td>
                         
                       </td>
                       <td>
                         <img src="/image/logo.png" style={{width:'30px', marginLeft:'30px'}}/>
                       </td>
                       <td>
                         <span style={{fontWeight:'700'}}>dot-bnb</span><br/>
                          <span style={{fontSize:'12px'}}>Fisch</span>
                       </td>
                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                        <span style={{marginLeft:'20px'}}>0</span> <br/>
                         <span style={{opacity:'0.5'}}>Balance</span>
                       </td>

                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                        <span style={{marginLeft:'20px'}}>0</span> <br/>
                         <span style={{opacity:'0.5'}}>Deposited</span>
                       </td>
                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                         <span style={{color:'yellow'}}>171.80%</span><br/>
                        <span style={{opacity:'0.5'}}>Yearly</span>
                    
                       </td>
                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                       <span>0.47%</span><br/>
                        <span style={{opacity:'0.5'}}>Daily</span>
                       </td>

                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                       <span>$1.60M</span><br/>
                        <span style={{opacity:'0.5'}}>TVL</span>
                       
                       </td>

                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                       <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'200px'}}>
                       <FontAwesomeIcon icon={faUndo}  />
                         </button>
                        <button style={{backgroundColor:'rgba(0, 0, 0, 0.1)',border:'none'}}>
                        <FontAwesomeIcon icon={faAngleDown} style={{color:'yellow'}} />
                        </button>
                        
                       </td>
                       
                     </tr>
                   </table>
                 </div>

                 <div className="content_3" style={{opacity:0.9}}>
                  <table border='0' style={{marginTop:'20px'}}>
                    <tr>
                      <td style={{paddingLeft:'5px'}}>
                        <div style={{width:'250px',height:'200px',padding:'15px 15px'}}>
                              <span>Wallet</span> <span style={{marginLeft:'150px'}}>_ _</span><br></br>
                              <a href="#" style={{marginLeft:'170px',color:'gray',fontSize:'13px'}}>Get Fisch</a>

                              <br></br><br></br>

                         <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'235px'}}>
                           <table>
                             <tr>
                               <td>
                                 0
                               </td>
                               <td style={{paddingLeft:'170px'}}>
                                 MAX
                               </td>
                             </tr>
                           </table>
                         </button> <br></br><br></br>

                         <button style={{padding:'8px', borderRadius:'10px', border:'none',backgroundColor:'gray',color:'white',width:'235px'}}>
                           Deposit to Vault
                         </button>

                        </div>
                      </td>
                      <td style={{paddingLeft:'5px'}}>
                        <div style={{width:'250px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                              <span>vault</span> <span style={{marginLeft:'150px'}}>0.00</span><br></br>
                           
                              <br></br><br></br>

                         <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'235px'}}>
                           <table>
                             <tr>
                               <td>
                                 0
                               </td>
                               <td style={{paddingLeft:'170px'}}>
                                 MAX
                               </td>
                             </tr>
                           </table>
                         </button> <br></br><br></br>

                         <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'gray',color:'white',width:'235px'}}>
                          Withdraw to Wallet
                         </button>

                        </div>
                      </td>
                      <td style={{paddingLeft:'20px'}}>
                        <div style={{width:'250px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                          <br></br>
                             <span style={{marginTop:'60px', marginLeft:'90px'}}>Pending:</span>
                           
                              <br></br><br></br>
                          <table>

                            <tr>
                              <td style={{paddingLeft:'40px'}}>
                              <img src="/image/logo.png" style={{width:'13px', marginLeft:'30px'}}/>
                              </td>
                              <td>
                              <span>0.0</span> <span style={{color:'gray'}}>($0.0)</span>
                              </td>
                            </tr>
                          </table>


                             
                        
                         <br></br>

                         <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'yellow',color:'white',width:'235px'}}>
                          <span style={{color:'black'}}>Harvest</span>
                         </button>

                        </div>
                      </td>
                    </tr>

                  </table>
                  <br></br>

                  <div style={{width:'850px', height:'130px', backgroundColor:'black', borderRadius:'10px',marginLeft:'20px'}}>
                    <table style={{fontSize:'13px'}}>
                      <tr>
                       
                        <td style={{padding:'20px 10px'}}>
                          <span>Farm</span><br></br><br></br>
                          <span style={{opacity:'0.5'}}>Weight:50%</span>
                      
                          <br></br>
                          <span style={{opacity:'0.5'}}>Fisch TVL:171.81%</span>

                        </td>

                        <td style={{paddingLeft:'350px'}}>
                          <span style={{marginLeft:'60px', opacity:'0.5'}}>Learn how to buy and add to staking </span><span><a href="#"  style={{color:'white'}}> Tutorials</a></span><br></br>
                          <span style={{marginLeft:'95px', opacity:'0.5'}}>Check Fees and Tokenomics </span><span><a href="#" style={{color:'white'}}> Read Doc</a></span><br></br><br></br>
                          <a href="#" style={{marginLeft:'295px',color:'white'}}>Vault</a>
                        

                        </td>
                      </tr>
                    </table>


                  </div>
                 </div>

               
       </div>

       
       </div>

       
       

</div>

<div style={{backgroundImage:'url(/image/bg.png)', width:'100%', height:'570px'}}>
     <div>
       <div className="Box" style={{border:'1px solid yellow', height:'550px'}}>
         
                 <div className="content_2">
                 <table>
                     <tr>
                       <td>
                         
                       </td>
                       <td>
                         <img src="/image/logo.png" style={{width:'30px', marginLeft:'30px'}}/>
                       </td>
                       <td>
                         <span style={{fontWeight:'700'}}>cake-usdt</span><br/>
                          <span style={{fontSize:'12px'}}>Fisch</span>
                       </td>
                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                        <span style={{marginLeft:'20px'}}>0</span> <br/>
                         <span style={{opacity:'0.5'}}>Balance</span>
                       </td>

                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                        <span style={{marginLeft:'20px'}}>0</span> <br/>
                         <span style={{opacity:'0.5'}}>Deposited</span>
                       </td>
                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                         <span style={{color:'yellow'}}>171.80%</span><br/>
                        <span style={{opacity:'0.5'}}>Yearly</span>
                    
                       </td>
                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                       <span>0.47%</span><br/>
                        <span style={{opacity:'0.5'}}>Daily</span>
                       </td>

                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                       <span>$1.60M</span><br/>
                        <span style={{opacity:'0.5'}}>TVL</span>
                       
                       </td>

                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                       <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'200px'}}>
                       <FontAwesomeIcon icon={faUndo}  />
                         </button>
                        <button style={{backgroundColor:'rgba(0, 0, 0, 0.1)',border:'none'}}>
                        <FontAwesomeIcon icon={faAngleDown} style={{color:'yellow'}} />
                        </button>
                        
                       </td>
                       
                     </tr>
                   </table>
                 </div>

                 <div className="content_3" style={{opacity:0.9}}>
                  <table border='0' style={{marginTop:'20px'}}>
                    <tr>
                      <td style={{paddingLeft:'5px'}}>
                        <div style={{width:'250px',height:'200px',padding:'15px 15px'}}>
                              <span>Wallet</span> <span style={{marginLeft:'150px'}}>_ _</span><br></br>
                              <a href="#" style={{marginLeft:'170px',color:'gray',fontSize:'13px'}}>Get Fisch</a>

                              <br></br><br></br>

                         <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'235px'}}>
                           <table>
                             <tr>
                               <td>
                                 0
                               </td>
                               <td style={{paddingLeft:'170px'}}>
                                 MAX
                               </td>
                             </tr>
                           </table>
                         </button> <br></br><br></br>

                         <button style={{padding:'8px', borderRadius:'10px', border:'none',backgroundColor:'gray',color:'white',width:'235px'}}>
                           Deposit to Vault
                         </button>

                        </div>
                      </td>
                      <td style={{paddingLeft:'5px'}}>
                        <div style={{width:'250px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                              <span>vault</span> <span style={{marginLeft:'150px'}}>0.00</span><br></br>
                           
                              <br></br><br></br>

                         <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'235px'}}>
                           <table>
                             <tr>
                               <td>
                                 0
                               </td>
                               <td style={{paddingLeft:'170px'}}>
                                 MAX
                               </td>
                             </tr>
                           </table>
                         </button> <br></br><br></br>

                         <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'gray',color:'white',width:'235px'}}>
                          Withdraw to Wallet
                         </button>

                        </div>
                      </td>
                      <td style={{paddingLeft:'20px'}}>
                        <div style={{width:'250px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                          <br></br>
                             <span style={{marginTop:'60px', marginLeft:'90px'}}>Pending:</span>
                           
                              <br></br><br></br>
                          <table>

                            <tr>
                              <td style={{paddingLeft:'40px'}}>
                              <img src="/image/logo.png" style={{width:'13px', marginLeft:'30px'}}/>
                              </td>
                              <td>
                              <span>0.0</span> <span style={{color:'gray'}}>($0.0)</span>
                              </td>
                            </tr>
                          </table>


                             
                        
                         <br></br>

                         <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'yellow',color:'white',width:'235px'}}>
                          <span style={{color:'black'}}>Harvest</span>
                         </button>

                        </div>
                      </td>
                    </tr>

                  </table>
                  <br></br>

                  <div style={{width:'850px', height:'130px', backgroundColor:'black', borderRadius:'10px',marginLeft:'20px'}}>
                    <table style={{fontSize:'13px'}}>
                      <tr>
                        
                        <td style={{padding:'20px 10px'}}>
                          <span>Farm</span><br></br><br></br>
                          <span style={{opacity:'0.5'}}>Weight:50%</span>
                      
                          <br></br>
                          <span style={{opacity:'0.5'}}>Fisch TVL:171.81%</span>

                        </td>

                        <td style={{paddingLeft:'350px'}}>
                          <span style={{marginLeft:'60px', opacity:'0.5'}}>Learn how to buy and add to staking </span><span><a href="#"  style={{color:'white'}}> Tutorials</a></span><br></br>
                          <span style={{marginLeft:'95px', opacity:'0.5'}}>Check Fees and Tokenomics </span><span><a href="#" style={{color:'white'}}> Read Doc</a></span><br></br><br></br>
                          <a href="#" style={{marginLeft:'295px',color:'white'}}>Vault</a>
                        

                        </td>
                      </tr>
                    </table>


                  </div>
                 </div>

               
       </div>

       
       </div>

       
       

</div>
<div style={{backgroundImage:'url(/image/bg.png)', width:'100%', height:'700px'}}>
     <div>
       <div className="Box" style={{border:'1px solid yellow', height:'550px'}}>
         
                 <div className="content_2">
                 <table>
                     <tr>
                       <td>
                         
                       </td>
                       <td>
                         <img src="/image/logo.png" style={{width:'30px', marginLeft:'30px'}}/>
                       </td>
                       <td>
                         <span style={{fontWeight:'700'}}>bunny-bnb</span><br/>
                          <span style={{fontSize:'12px'}}>Fisch</span>
                       </td>
                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                        <span style={{marginLeft:'20px'}}>0</span> <br/>
                         <span style={{opacity:'0.5'}}>Balance</span>
                       </td>

                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                        <span style={{marginLeft:'20px'}}>0</span> <br/>
                         <span style={{opacity:'0.5'}}>Deposited</span>
                       </td>
                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                         <span style={{color:'yellow'}}>171.80%</span><br/>
                        <span style={{opacity:'0.5'}}>Yearly</span>
                    
                       </td>
                       <td style={{paddingLeft:'40px',fontSize:'12px'}}>
                       <span>0.47%</span><br/>
                        <span style={{opacity:'0.5'}}>Daily</span>
                       </td>

                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                       <span>$1.60M</span><br/>
                        <span style={{opacity:'0.5'}}>TVL</span>
                       
                       </td>

                       <td style={{paddingLeft:'50px',fontSize:'12px'}}>
                       <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'200px'}}>
                       <FontAwesomeIcon icon={faUndo}  />
                         </button>
                        <button style={{backgroundColor:'rgba(0, 0, 0, 0.1)',border:'none'}}>
                        <FontAwesomeIcon icon={faAngleDown} style={{color:'yellow'}} />
                        </button>
                        
                       </td>
                       
                     </tr>
                   </table>
                 </div>

                 <div className="content_3" style={{opacity:0.9}}>
                  <table border='0' style={{marginTop:'20px'}}>
                    <tr>
                      <td style={{paddingLeft:'5px'}}>
                        <div style={{width:'250px',height:'200px',padding:'15px 15px'}}>
                              <span>Wallet</span> <span style={{marginLeft:'150px'}}>_ _</span><br></br>
                              <a href="#" style={{marginLeft:'170px',color:'gray',fontSize:'13px'}}>Get Fisch</a>

                              <br></br><br></br>

                         <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'235px'}}>
                           <table>
                             <tr>
                               <td>
                                 0
                               </td>
                               <td style={{paddingLeft:'170px'}}>
                                 MAX
                               </td>
                             </tr>
                           </table>
                         </button> <br></br><br></br>

                         <button style={{padding:'8px', borderRadius:'10px', border:'none',backgroundColor:'gray',color:'white',width:'235px'}}>
                           Deposit to Vault
                         </button>

                        </div>
                      </td>
                      <td style={{paddingLeft:'5px'}}>
                        <div style={{width:'250px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                              <span>vault</span> <span style={{marginLeft:'150px'}}>0.00</span><br></br>
                           
                              <br></br><br></br>

                         <button style={{padding:'8px',border:'1px solid white', borderRadius:'10px',backgroundColor:'#323131',color:'white',width:'235px'}}>
                           <table>
                             <tr>
                               <td>
                                 0
                               </td>
                               <td style={{paddingLeft:'170px'}}>
                                 MAX
                               </td>
                             </tr>
                           </table>
                         </button> <br></br><br></br>

                         <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'gray',color:'white',width:'235px'}}>
                          Withdraw to Wallet
                         </button>

                        </div>
                      </td>
                      <td style={{paddingLeft:'20px'}}>
                        <div style={{width:'250px',height:'200px',backgroundColor:'black',padding:'15px 15px', borderRadius:'10px'}}>
                          <br></br>
                             <span style={{marginTop:'60px', marginLeft:'90px'}}>Pending:</span>
                           
                              <br></br><br></br>
                          <table>

                            <tr>
                              <td style={{paddingLeft:'40px'}}>
                              <img src="/image/logo.png" style={{width:'13px', marginLeft:'30px'}}/>
                              </td>
                              <td>
                              <span>0.0</span> <span style={{color:'gray'}}>($0.0)</span>
                              </td>
                            </tr>
                          </table>


                             
                        
                         <br></br>

                         <button style={{padding:'8px', borderRadius:'10px',border:'none', backgroundColor:'yellow',color:'white',width:'235px'}}>
                          <span style={{color:'black'}}>Harvest</span>
                         </button>

                        </div>
                      </td>
                    </tr>

                  </table>
                  <br></br>

                  <div style={{width:'850px', height:'130px', backgroundColor:'black', borderRadius:'10px',marginLeft:'20px'}}>
                    <table style={{fontSize:'13px'}}>
                      <tr>
                       
                        <td style={{padding:'20px 10px'}}>
                          <span>Farm</span><br></br><br></br>
                          <span style={{opacity:'0.5'}}>Weight:50%</span>
                      
                          <br></br>
                          <span style={{opacity:'0.5'}}>Fisch TVL:171.81%</span>

                        </td>

                        <td style={{paddingLeft:'350px'}}>
                          <span style={{marginLeft:'60px', opacity:'0.5'}}>Learn how to buy and add to staking </span><span><a href="#"  style={{color:'white'}}> Tutorials</a></span><br></br>
                          <span style={{marginLeft:'95px', opacity:'0.5'}}>Check Fees and Tokenomics </span><span><a href="#" style={{color:'white'}}> Read Doc</a></span><br></br><br></br>
                          <a href="#" style={{marginLeft:'295px',color:'white'}}>Vault</a>
                        

                        </td>
                      </tr>
                    </table>


                  </div>
                 </div>

               
       </div>

       
       </div>

       
       

</div>




   </div>



   
  );
}

export default App;
