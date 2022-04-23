import { Component } from "react";
import React from 'react';
import SideNavBar from './SideNavBar';
import service from '../services/OnlineTicketingSystemService';

class AddNewVehicle extends Component {
    constructor(props) {
        super(props);
        this.state ={
            route :[],
            timetables :[],
            selectedRoute : '',
            seletctedTimeTable:'',
            id:'',
            timeTableId:'',
            startLoc:'',
            endLoc : "",
            kms:'',
            vehicleRegNumber:'',
            numberOfSeats:'',
            vehicleType:'',
            vehicleStatus:'',
            depatureTime:'',
            arrivalTime:'',
            description:'',
            timetablesName:''
        }
        this.ChangeVehicleHandler = this.ChangeVehicleHandler.bind(this);
        this.ChangeNumberOfSeats = this.ChangeNumberOfSeats.bind(this);
        this.ChangeVehicleType = this.ChangeVehicleType.bind(this);
        this.ChangeVehiceStatus = this.ChangeVehiceStatus.bind(this);
    }

    componentDidMount() {
        //View All Routes
        service.ViewAllRoutes().then((res)=>{
            this.setState({route: res.data});
        });
        //View All Timetables
        service.ViewAllTimeTables().then((res=>{
            this.setState({timetables: res.data});
        }))
    }
    //Onsubmit function
    OnSubmit(){
        let vehicle = {
            vehicleRegNumber:this.state.vehicleRegNumber,
            numberOfSeats:this.state.numberOfSeats,
            vehicleType:this.state.vehicleType,
            vehicleStatus:this.state.vehicleStatus,
            route:this.state.selectedRoute,
            timeTable:this.state.seletctedTimeTable
        }
        service.AddNewVehicle(vehicle).then((res) =>{
            this.props.history.push("manageTimeTable")
        }).catch((err)=>{
            alert(err);
        })
    }
    //Vehicle Handler
    ChangeVehicleHandler = (e) =>{
        this.setState({vehicleRegNumber:e.target.value});
    }
    //Change number of seats
    ChangeNumberOfSeats = (e) =>{
        this.setState({numberOfSeats:e.target.value})
    }
    //Change Vehicle Type Hanlder
    ChangeVehicleType =(e) =>{
        this.setState({vehicleType:e.target.value})
    }
    //Change Vehicle status handler
    ChangeVehiceStatus = (e) =>{
        this.setState({vehicleStatus:e.target.value})
    }
    //Handle change
    handleChange(e){
        let idx = e.target.value;
        this.state.id = idx;
        for(let i =0; i < this.state.route.length; i++){
            if(this.state.route[i].routeId == this.state.id ){
                this.state.selectedRoute = this.state.route[i];
                this.setState({
                    startLoc:this.state.selectedRoute.startLocation,
                    endLoc:this.state.selectedRoute.endLocation,
                    kms:this.state.selectedRoute.amountOfKM,
                })
            }
        }
    }
    //Handle Change Time
    handleChangeTime(e){
        let idx = e.target.value;
        this.state.timetablesName = idx;
        for(let i =0; i < this.state.timetables.length; i++){
            if(this.state.timetables[i].timeTableName == idx){
                this.state.seletctedTimeTable = this.state.timetables[i];
                console.log(this.state.seletctedTimeTable)
                this.setState({
                    depatureTime:this.state.seletctedTimeTable.depatureTime,
                    arrivalTime:this.state.seletctedTimeTable.araivalTime,
                    description:this.state.seletctedTimeTable.discription
                })
            }
        }

    }

    render() { 
        return ( 
            <div className="row">
                <div className="col-sm-2">
                    <SideNavBar/>
                </div>
                <div className={"col-sm-8 vehcileAdd"}>
                    {/*Heading*/}
                    <h1>Add New Vehicle</h1>
                    <hr/>
                    <div className="row" >
                        <div className="col-sm-5  div1st">
                        <label className={"text-muted"}>Route Details</label><br/>
                            <label className="selectText">
                                Select a route : &nbsp;
                                <select onChange={(e)=>this.handleChange(e) }  className="selectBox" value={this.state.id} >
                                {
                                     this.state.route.map(v => (
                                        <option value={v.routeId}>{v.routeId}</option>
                                      ))
                                }
                                </select>
                            </label>
                            <div class="input-group input-group-sm mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-sm">Start Location</span>
                                </div>
                                <input type="text" class="form-control" value={this.state.startLoc} aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                            </div>
                            <div class="input-group input-group-sm mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-sm">End Location</span>
                                </div>
                                <input type="text" class="form-control" value={this.state.endLoc } aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                            </div>

                            <div class="input-group input-group-sm mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-sm">KMs</span>
                                </div>
                                <input type="text" class="form-control" aria-label="Small" value={this.state.kms} aria-describedby="inputGroup-sizing-sm"/>
                            </div>
                        </div>

                        {/* Time Table Details */}
                        <div className="col-sm-6 div1st">
                            <label className={"text-muted"}>Time Table Details</label> <br/>
                            <label className="selectText">
                                Select a time table : &nbsp;
                                <select onChange={(e)=>this.handleChangeTime(e) }  className="selectBox" value={this.state.timetablesName} >
                                {
                                     this.state.timetables.map(v => (
                                        <option value={v.timeTableName}>{v.timeTableName}</option>
                                      ))
                                }
                                </select>
                            </label>
                            <div class="input-group input-group-sm mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-sm">Depature Time</span>
                                </div>
                                <input type="text" class="form-control" value={this.state.depatureTime} aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                            </div>
                            <div class="input-group input-group-sm mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-sm">Araival Time</span>
                                </div>
                                <input type="text" class="form-control" value={this.state.arrivalTime} aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                            </div>

                            <div class="input-group input-group-sm mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-sm">Description</span>
                                </div>
                                <input type="text" class="form-control" aria-label="Small" value={this.state.description} aria-describedby="inputGroup-sizing-sm"/>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-11 div2nd">
                            <label className={"text-muted"}>Vehicle Details</label>
                            <div class="input-group input-group-sm mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-sm">Vehicle Reg Number</span>
                                </div>
                                <input type="text" class="form-control" value={this.state.vehicleRegNumber} aria-label="Small" onChange={this.ChangeVehicleHandler} aria-describedby="inputGroup-sizing-sm"/>
                            </div>

                            <div class="input-group input-group-sm mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-sm">Number of Seats</span>
                                </div>
                                <input type="text" class="form-control" value={this.state.numberOfSeats} aria-label="Small" onChange={this.ChangeNumberOfSeats} aria-describedby="inputGroup-sizing-sm"/>
                            </div>
                            
                            <div class="input-group input-group-sm mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-sm">Vehicle Type</span>
                                </div>
                                <input type="text" class="form-control" value={this.state.vehicleType} onChange={this.ChangeVehicleType} aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                            </div>

                            <div class="input-group input-group-sm mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-sm">Vehicle Status</span>
                                </div>
                                <input type="text" class="form-control" value={this.state.vehicleStatus} onChange={this.ChangeVehiceStatus} aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                            </div>

                        </div>
                    </div>
                    <hr />
                    {/*On Submit Button*/}
                    <div className="row buttoRow">
                    <button type="button" onClick={() =>this.OnSubmit()} class="btn btn-primary">Save Changes</button>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default AddNewVehicle;