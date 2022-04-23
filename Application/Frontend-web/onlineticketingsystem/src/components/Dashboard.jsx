import React, {Component} from 'react';
import SideNavBar from './SideNavBar';

class Dashboard extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-2">
                    <SideNavBar/>
                </div>
                <div className={"col-sm-9 dashBody"}>
                    {/* first row */}
                    <div className="row">
                        <div className="col-sm-9">
                            {/* first row  in main first row*/}
                            <div className="row">
                                <div className="col-sm-7">
                                    <h3>Online Ticketing System</h3>
                                    <small className="text-muted">You can manage every transport action here.</small>
                                </div>
                                <div className="col-sm-5">
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <input type="text" className="search" placeholder={"search"} />
                                        </div>
                                        <div className="col-sm-4 calender">
                                        <i class="fas fa-calendar-week"></i>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-sm-3 week">Week</div>
                                        <div className="col-sm-3">Month</div>
                                        <div className="col-sm-3">Year</div>
                                    </div>
                                </div>
                            </div>
                            {/* Second Row in main first row*/}
                            <div className="row mt-3">
                                <div className="col-sm-3">
                                    <div className="card viewCard">
                                        <div className="row">
                                            <div className="m-2 col-sm-8">
                                                <h6>Ongoing Vehicles</h6>
                                            </div>
                                            <div className="col-sm-3">
                                                <i class="fas fa-eye"></i>
                                            </div>
                                            
                                        </div>
                                        <br/><br/><br/>
                                        <div className="row">
                                            <div className="m-2 col-sm-4" style={{textAlign:"right"}}>
                                                <h4>31 </h4>
                                            </div>
                                            <div className="col-sm-6 m-2">
                                                &nbsp;<small>+3 last day</small>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="card viewCard2">
                                    <div className="row">
                                            <div className="m-2 col-sm-8">
                                                <h6>All Routes</h6>
                                            </div>
                                            <div className="col-sm-3">
                                                <i class="fas fa-eye"></i>
                                            </div>
                                            
                                        </div>
                                        <br/><br/><br/>
                                        <div className="row">
                                            <div className="m-2 col-sm-4" style={{textAlign:"right"}}>
                                                <h4>12 </h4>
                                            </div>
                                            <div className="col-sm-6 m-2">
                                                &nbsp;<small>+3 last day</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="card crd3">
                                         <div className="row">
                                            <div className="col-sm-8 m-2">
                                                <h6>Time Tables</h6>
                                            </div>
                                            <div className="col-sm-3">
                                                <i class="fas fa-eye"></i>
                                            </div>
                                            
                                        </div>
                                        <br/><br/>
                                        <div className="row">
                                            <div className="m-2 col-sm-4" style={{textAlign:"right"}}>
                                                <h4>6 </h4>
                                            </div>
                                            <div className="col-sm-6 m-2">
                                                &nbsp;<small>+3 last day</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card sdeCard" style={{height:"100%"}}>

                            </div>
                        </div>
                    </div>
                    {/*second row  */}
                    <div className="row mt-2">
                        <div className="col-sm-9">

                            <div className="row">
                                <div className="col-sm-5">
                                    <h2>Total Profit</h2>
                                </div>
                                <div className="rightRow col-sm-7">
                                    <div className="row ">
                                        <div className="col-sm-4"><i style={{color:"red"}} class="fas fa-sort-up"></i>&nbsp; income</div>
                                        <div className="col-sm-4"><i style={{color:"red"}} class="fas fa-sort-down"></i> &nbsp;expense</div>
                                        <div className="col-sm-2"><i class="fas fa-bars"></i></div>
                                    </div>
                                </div>
                            </div>

                            <div className="row graph">
                            </div>
                            
                            <hr/>

                        </div>
                        <div className="col-sm-3 mt-2">
                            <div className="row">
                                <div className="col-sm-4 week">Vehicles</div>
                                <div className="col-sm-4">Routes</div>
                                <div className="col-sm-4 rightRow"><i class="fas fa-ellipsis-v"></i></div>
                            </div>

                            <div className="row mt-3">   
                                <div className={"bg-dark selected text-light"}>
                                    <div className="row m-2">
                                        <div className="col-sm-9">
                                            Kaduwela - Malabe
                                        </div>
                                        <div className="col-sm-3">
                                            <i style={{color:"red"}} class="fas fa-sort-up"></i>&nbsp; 25%
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="row m-2">
                                    <div className="col-sm-9">
                                        Narahenpita - Mattakkuliya
                                    </div>
                                    <div className="col-sm-3">
                                        <i style={{color:"red"}} class="fas fa-sort-up"></i>&nbsp; 18%
                                    </div>
                                 </div>

                                 <div className="row m-2">
                                    <div className="col-sm-9">
                                        Baththaramulla - Bambalapitiya
                                    </div>
                                    <div className="col-sm-3">
                                        <i style={{color:"red"}} class="fas fa-sort-up"></i>&nbsp; 12%
                                    </div>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;