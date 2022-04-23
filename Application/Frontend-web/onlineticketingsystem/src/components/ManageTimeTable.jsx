import React, {Component} from 'react';
import SideNavBar from './SideNavBar';
import user from '../images/user.jpg'
import service from '../services/OnlineTicketingSystemService';

class ManageTimeTable extends Component {
   constructor(props) {
       super(props);
       this.state ={
           vehicles : [],
           regNumber:'',
           routeNumber:'',
           arrival:'',
           depature:'',
           arrivalTime:'',
           DepatureTime:''
       }
       this.changeArrivalTimeChange = this.changeArrivalTimeChange.bind(this);
       this.changeDepatureTime= this.changeDepatureTime.bind(this);

   }
   //View All Vehicles
   componentDidMount() {
       service.ViewAllVehicles().then((res)=>{
           this.setState({vehicles: res.data});
       })
   }
   //Change Arrival Time
   changeArrivalTimeChange = (e) =>{
        this.setState({
            arrivalTime:e.target.value
        })
   }
   //Change Departure Time
   changeDepatureTime = (e) =>{
       this.setState({depatureTime:e.target.value});
   }
    //View Details
    ViewDetails(e,vehicleId,routeNumber,arrival,depature,arrivalTime,depatureTime){
        e.preventDefault();
        this.setState({
            regNumber:vehicleId,
            routeNumber:routeNumber,
            arrival:arrival,
            depature:depature,
            arrivalTime:arrivalTime,
            depatureTime:depatureTime
        })
    }
    
    //Save Changes
    saveChanges = (e) =>{
        e.preventDefault();
        service.updateTimeTable(this.state.regNumber,this.state.arrivalTime,this.state.depatureTime).then((res)=>{
            this.props.history.push("manageTimeTable")
        }).catch((err)=>{
            alert(err);
        })
    }

    //Delete Vehicle
    deleteVehicle =(e) =>{
        e.preventDefault();
        service.DeleteVehicle(this.state.regNumber).then((res) =>{
            alert("success")
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-2">
                    <SideNavBar/>
                </div>
                <div className={"col-sm-10 p-2"}>
                    {/*first row*/}
                    <div className="row">
                        <div className="col-sm-6">
                            <h2>Manage Time Table</h2>
                            <small>Welcome back, Andrew</small>
                        </div>
                        <div className="col-sm-6">
                            <div className={"row"}>
                                <div className={"headerDetails col-sm-8"}>
                                    <img className={"userImage"} src={user}/>
                                    <br/>
                                    admin
                                </div>
                                <div className={"col-sm-4"}>
                                    <small>Andrew Johnstons</small>
                                </div>
                            </div>
                            <div className={"row"}>
                                <div className={"headerDetails col-sm-6"}>
                                    {/*Add new Vehicle*/}
                                    <a href="/addNewVehicle"><button className={"btn btn-success"} ><i className="fas fa-plus"></i> &nbsp;Add Uint</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* second row*/}
                    <div className={"row"}>
                        <table className={"table"}>
                            <thead>
                            <tr>
                                <th scope="col">Bus No</th>
                                <th scope="col">Route No</th>
                                <th scope="col">Arrival</th>
                                <th scope="col">Depature</th>
                                <th scope="col">
                                    Arrival Time
                                    <br/>
                                    (PM)
                                </th>
                                <th scope="col">
                                    Depature Time
                                    <br/>
                                    (AM)
                                </th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.vehicles.map(
                                    vehicle =>
                                        <tr key = {vehicle._id}>
                                            <td>{vehicle.vehicleRegNumber}</td>
                                            <td>{vehicle.route.routeId}</td>
                                            <td>{vehicle.route.startLocation}</td>
                                            <td>{vehicle.route.endLocation}</td>
                                            <td>{vehicle.timeTable.araivalTime}</td>
                                            <td>{vehicle.timeTable.depatureTime}</td>
                                            <td>
                                                {/*View Details Button*/}
                                                <button type="button" onClick={e => this.ViewDetails(e,vehicle.vehicleRegNumber,vehicle.route.routeId,vehicle.route.startLocation,vehicle.route.endLocation,vehicle.timeTable.araivalTime,vehicle.timeTable.depatureTime)} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Manage</button></td>
                                        </tr>
                                )
                            }
                            </tbody>
                        </table>
                    </div>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                         aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Manage Time Tables</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div class="input-group input-group-sm mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="inputGroup-sizing-sm">Vehicle Reg Number</span>
                                        </div>
                                        <input type="text" class="form-control" readOnly="true" value={this.state.regNumber} aria-label="Small"aria-describedby="inputGroup-sizing-sm"/>
                                    </div>

                                    <div class="input-group input-group-sm mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="inputGroup-sizing-sm">Route Number</span>
                                        </div>
                                        <input type="text" class="form-control" readOnly="true" value={this.state.routeNumber} aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                                    </div>
                                    
                                    <div class="input-group input-group-sm mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="inputGroup-sizing-sm">Arrival</span>
                                        </div>
                                        <input type="text" class="form-control" readOnly="true" value={this.state.arrival} aria-label="Small"aria-describedby="inputGroup-sizing-sm"/>
                                    </div>

                                    <div class="input-group input-group-sm mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="inputGroup-sizing-sm">Depature</span>
                                        </div>
                                        <input type="text" class="form-control" readOnly="true" value={this.state.depature} aria-label="Small"aria-describedby="inputGroup-sizing-sm"/>
                                    </div>

                                    <div class="input-group input-group-sm mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="inputGroup-sizing-sm">Arrival Time</span>
                                        </div>
                                        <input type="text" class="form-control" aria-label="Small" value={this.state.arrivalTime} onChange={this.changeArrivalTimeChange} aria-describedby="inputGroup-sizing-sm"/>
                                    </div>

                                    <div class="input-group input-group-sm mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="inputGroup-sizing-sm">Depature Time</span>
                                        </div>
                                        <input type="text" class="form-control" aria-label="Small" value={this.state.depatureTime} onChange={this.changeDepatureTime}  aria-describedby="inputGroup-sizing-sm"/>
                                    </div>

                                </div>
                                <div className="modal-footer">
                                    {/*Close Button*/}
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close
                                    </button>
                                    {/*Delete Vehicle Button*/}
                                    <button type="button" className="btn btn-danger" onClick={this.deleteVehicle}>Remove Unit
                                    </button>
                                    {/*Save Button*/}
                                    <button type="button" className="btn btn-primary" onClick={this.saveChanges}>Save
                                        changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ManageTimeTable;