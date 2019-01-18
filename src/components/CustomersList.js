import React, { Component } from "react";
import { getDistanceFromLatLonInKm } from "../utils/distance"
import "./CustomersList.css";

class PrettyPrintJson extends React.Component {
  render() {
    const { data } = this.props;
    return (<div><pre>{JSON.stringify(data, null, 2)}</pre></div>);
  }
}

class CustomersList extends Component {
  render() {
    const bristollLat = 51.450167;
    const bristollLong = -2.594678;
    const { people } = this.props;
    const peopleFiltered = people
      .filter(customer => {
        const distance = getDistanceFromLatLonInKm(
          bristollLat,
          bristollLong,
          customer.location.latitude,
          customer.location.longitude
        );
        return distance <= 100 && customer.country === "england";
      })
      .sort((customer1, customer2) => customer2.value - customer1.value);

    return (
      <div className="People">
        <PrettyPrintJson data={peopleFiltered} />
      </div>
    );
  }
}

export default CustomersList;
