import React, { Component } from 'react'
import MedicineService from '../services/MedicineService'

class ViewMedicineComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            medicine: {}
        }
    }

    componentDidMount(){
        MedicineService.getMedicinesById(this.state.id).then( res => {
            this.setState({medicine: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Medicine Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Medicine Id: </label>
                            <div> { this.state.medicine.medicineId }</div>
                        </div>
                        <div className = "row">
                            <label> Medicine Name: </label>
                            <div> { this.state.medicine.medicineName }</div>
                        </div>
                        <div className = "row">
                            <label> Medicine cost: </label>
                            <div> { this.state.medicine.medicineCost }</div>
                        </div>
                    </div>
                    <div className = "row">
                            <label> Medicine Manufacturing Date: </label>
                            <div> { this.state.medicine.manufacturingDate }</div>
                        </div>
                        <div className = "row">
                            <label> Medicine Expiry Date: </label>
                            <div> { this.state.medicine.expiryDate}</div>
                        </div>
                        <div className = "row">
                            <label> Medicine cost: </label>
                            <div> { this.state.medicine.company }</div>
                        </div>
                        <div className = "row">
                            <label> Medicine cost: </label>
                            <div> { this.state.medicine.category }</div>
                        </div>
                    </div>

                </div>
           
        )
    }
}

export default ViewMedicineComponent
