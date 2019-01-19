import React, { Component } from "react";
import PropTypes from "prop-types";
import { getDistanceFromLatLonInKm } from "../utils/distance";
import "./CustomersList.css";

class PrettyPrintJson extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="PrettyPrintJson">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  }
}

class CustomersList extends Component {
  render() {
    const bristollLat = 51.450167;
    const bristollLong = -2.594678;
    const { customers } = this.props;

    const customersFiltered = customers
      .filter(customer => {
        // People living in England
        if (customer.country !== "england") return false;

        // People living within 100km of Bristol
        const distance = getDistanceFromLatLonInKm(
          bristollLat,
          bristollLong,
          customer.location.latitude,
          customer.location.longitude
        );
        return distance <= 100;
      })
      // Sorted by value (descending)
      .sort((customer1, customer2) => customer2.value - customer1.value);

    customersFiltered.toJSON = function() {
      return this.map(customer => ({
        id: customer.id,
        full_name: `${customer.name.first} ${customer.name.last}`,
        value: customer.value,
        email: customer.email
      }));
    };

    return (
      <div className="CustomersList">
        <h4>
          There are {customersFiltered.length} customers living within 100km of
          Bristol (GPS coordinates 51.450167, -2.594678) and living in England:
        </h4>
        <PrettyPrintJson data={customersFiltered} />
      </div>
    );
  }
}

CustomersList.propTypes = {
  customers: PropTypes.array.isRequired
};

export default CustomersList;
