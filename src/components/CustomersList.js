import React, { Component } from "react";
import { getDistanceFromLatLonInKm } from "../utils/distance";
import "./CustomersList.css";

class PrettyPrintJson extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div>
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
      <div className="Customers-list">
        <PrettyPrintJson data={customersFiltered} />
      </div>
    );
  }
}

export default CustomersList;
