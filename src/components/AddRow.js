import React, { Component } from "react";
import "../styles/AddingRowStyle.css";
import AlertStatusOptions from "./AlertsStatusesOptions";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import EditIcon from "material-ui/svg-icons/image/edit";
import CheckIcon from "material-ui/svg-icons/navigation/check";

class AddRow extends React.Component {
  render() {
    const {
      data,
      header,
      editIdx,
      startEditing,
      stopEditing,
      handleChange,
      updateValue,
      showSubmit,
      recordsPerPage
    } = this.props;
    console.log("************************************************************************************efmdkjb ", editIdx);
    return (
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              {header.map((x, z) => (
                <TableHeaderColumn key={`thc-${z}`}>{x.name}</TableHeaderColumn>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((obj, i) => (
              <tr
                key={`tr-${i}`}
                onClick={() => showSubmit(i)}
              >
                <TableRowColumn key={`trc-${i}-1`}>{obj.id}</TableRowColumn>
                <TableRowColumn key={`trc-${i}-2`}>{obj.key}</TableRowColumn>
                <TableRowColumn key={`trc-${i}-3`}>
                  {editIdx != i ? (
                    obj.value
                  ) : (
                    <input
                      type="text"
                      value={obj.value}
                      onChange={handleChange}
                    />
                  )}
                </TableRowColumn>
                <TableRowColumn key={`trc-${i}-4`}>
                  {editIdx != i ? (
                    <EditIcon onClick={() => startEditing(i)} />
                  ) : (
                    <CheckIcon onClick={() => stopEditing(obj.key)} />
                  )}
                </TableRowColumn>
                <TableRowColumn key={`trc-${i}-5`}>
                  {editIdx != i ? (
                    <span />
                  ) : (
                    <AlertStatusOptions
                      i={obj.id}
                      updateValue={updateValue}
                      statuses="deleted,detected"
                    />
                  )}
                </TableRowColumn>
              </tr>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default AddRow;
