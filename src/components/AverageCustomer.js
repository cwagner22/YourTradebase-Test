import React, { Component } from "react";
import PropTypes from "prop-types";
import { getDistanceFromLatLonInKm } from "../utils/distance";
import "./AverageCustomer.css";

class AverageCustomer extends Component {
  render() {
    const bristollLat = 51.450167;
    const bristollLong = -2.594678;
    const { customers } = this.props;

    const customersFiltered = customers.filter(customer => {
      // People living within 200km of Bristol
      const distance = getDistanceFromLatLonInKm(
        bristollLat,
        bristollLong,
        customer.location.latitude,
        customer.location.longitude
      );
      return distance <= 200;
    });

    const sum = customersFiltered.reduce(
      (sum, customer) => sum + parseFloat(customer.value),
      0
    );
    const average = sum / customersFiltered.length;

    return (
      <div className="AverageCustomer">
        <h4>
          The average customer value of all people living within 200km of
          Bristol is {average.toFixed(2)}
        </h4>
      </div>
    );
  }
}

AverageCustomer.propTypes = {
  customers: PropTypes.array.isRequired
};

export default AverageCustomer;
