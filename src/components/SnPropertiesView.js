import React, { Component } from "react";
import "../index.css";
import AlertsStatusesOptions from "./AlertsStatusesOptions";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Table from "./Table";
import Row from "./AddRow";
import axios from "axios";
import DisplayMessage from "./DisplayMessage";
import Pagination from "./Pagination";

class SnPropertiesView extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "",
      body: "",
      newValue: "",
      id: "",
      editIdx: -1,
      data: [
        {
          id: 1,
          key: "webapp-enable-google-maps",
          value: "true"
        },
        {
          id: 2,
          key: "live-diagnostics-hosts-types",
          value: ""
        },
        {
          id: 3,
          key: "live-diagnostics-system-status-check-interval-ms",
          value: ""
        },
        {
          id: 4,
          key: "live-diagnostics-vpu-status-check-interval-ms",
          value: ""
        },
        {
          id: 5,
          key: "live-diagnostics-position-status-check-interval-ms",
          value: ""
        },
        {
          id: 6,
          key: "webapp-live-diagnostics-widgets-refresh-interval-ms",
          value: ""
        },
        {
          id: 7,
          key: "ticket-postbill-pay-barcode-identifier",
          value: "*4017"
        },
        {
          id: 8,
          key: "offence-pin-padded-offset",
          value: "000000001"
        },
        {
          id: 9,
          key: "littering-offence-id-prefix",
          value: "8010"
        },
        {
          id: 10,
          key: "parking-offence-id-prefix",
          value: "4010"
        }
      ],
      messageDisplay: false,
      propKey: "NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    };
  }

  componentWillMount() {
    //   axios
    //     .get(`http://localhost:9090/echo?limit=10`)
    //     .then(res => {
    //       console.log("eheiudhjewhjfkbfkjbnkjerdbw ", res.data);
    //       // this.setState({ data: res.data })
    //     })
    //     .catch(err => console.log(err));
    this.setState({
      // data: this.props.propertyArray,
      pageNumber: this.props.pageNumber
    });
  }

  startEditing = i => {
    this.setState({ editIdx: i });
  };

  showSubmit = i => {
    console.log("show/hide submit" + i);
    this.setState({ showSubmit: i });
    console.log(this.state);
  };

  stopEditing = val => {
    console.log(val);
    this.setState({
      messageDisplay: !this.state.messageDisplay,
      editIdx: -1,
      propKey: val
    });
  };

  updateValue = (e, i) => {
    const { value } = e.target;
    console.log(value, i);
    this.setState(stat => ({
      data: stat.data.map((row, k) =>
        row.id === i ? { ...row, value: [row.value] + "," + value } : row
      )
    }));
  };

  handleChange = (e, name, i) => {
    const { value } = e.target;
    this.setState(stat => ({
      data: stat.data.map((row, j) =>
        j === i ? { ...row, [name]: value } : row
      )
    }));
  };

  onPageNumberChange = page => {
    console.log("changing page number ", page);
    this.setState({
      currentPage: page
    });
  };

  // onApplyClick = reducerCase => {
  //   console.log(reducerCase);
  //   this.setState({ edit });
  // };

  render() {
    // if (this.state.edit) {
    //   this.props.btnClickActionPropsPage(this.state);
    // }
    console.log(this.props);
    const {
      propertyArray,
      btnClickActionPropsPage,
      onPageNumberChange,
      pageNumber,
      displayData,
      pageSize,
      totalPages
    } = this.props;
    // console.log("-------------------state ", this.state);
    return (
      <div>
        <div className="center">
          {this.state.messageDisplay == true ? (
            <DisplayMessage
              stopEditing={this.stopEditing}
              propKey={this.state.propKey}
            />
          ) : null}
        </div>
        <MuiThemeProvider>
          <Row
            startEditing={this.startEditing}
            editIdx={this.state.editIdx}
            stopEditing={this.stopEditing}
            handleChange={this.handleChange}
            updateValue={this.updateValue}
            data={this.state.data}
            showSubmit={this.showSubmit}
            showOnClickRowId={this.state.showSubmit}
            recordsPerPage={this.state.recordsPerPage}
            header={[
              {
                name: "id"
              },
              {
                name: "key"
              },
              {
                name: "value"
              },
              {
                name: "possibleValues"
              }
            ]}
          />
        </MuiThemeProvider>
        <div>
          <Pagination
            propertiesData={this.state.data}
            className="pagination pull-right"
            currentPage={pageNumber}
            totalPages={totalPages}
            onChangePage={onPageNumberChange}
          />
        </div>
      </div>
    );
  }
}
export default SnPropertiesView;
