import axios from 'axios';
const getAllVehicles = "http://localhost:9900/vehicle/getAllVehicles";
const getAllRoutes = "http://localhost:9900/route/getAllRoutes";
const getAllTimetables = "http://localhost:9900/timetable/getAllTimeTables";
const addNewVehicle = "http://localhost:9900/vehicle/add";
const updateTimeTable = "http://localhost:9900/vehicle/updateVehicle";
const deleteVehicle = "http://localhost:9900/vehicle/delete"

class OnlineTicketingSystemService{
    //View All Vehicles
    ViewAllVehicles(){
        return axios.get(getAllVehicles);
    }
    //View All Routes
    ViewAllRoutes(){
        return axios.get(getAllRoutes);
    }
    //View all Timetables
    ViewAllTimeTables(){
        return axios.get(getAllTimetables);
    }
    //Add new Vehicle
    AddNewVehicle(vehicle){
        return axios.post(addNewVehicle,vehicle);
    }
    //Update Timetable
    updateTimeTable(vehicleId,arrivalTime,depatureTime){
        return axios.get(updateTimeTable + "/" + vehicleId + "/" + arrivalTime + "/" + depatureTime);
    }
    //Delete Vehicle
    DeleteVehicle(vehicleId){
        return axios.delete(deleteVehicle + "/" + vehicleId + "/" + "PRIVATE");
    }
}
export default new OnlineTicketingSystemService();