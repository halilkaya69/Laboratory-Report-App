import React, { Component } from "react";
import { Table } from "@mantine/core";
import TableTr1 from "./TableTr1";

class Table1 extends Component {
  render() {
    return (
      <div>
        <h3>report List</h3>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>laborantAd</Table.Th>
              <Table.Th>laborantSoyad</Table.Th>
              <Table.Th>laborantNo</Table.Th>
              <Table.Th>dosyaNo</Table.Th>
              <Table.Th>hastaAd</Table.Th>
              <Table.Th>hastaSoyad</Table.Th>
              <Table.Th>hastaTC</Table.Th>
              <Table.Th>tarih</Table.Th>
              <Table.Th>taniAdi</Table.Th>
              <Table.Th>taniDetay</Table.Th>
              <Table.Th>taniResimLink</Table.Th>
              <Table.Th>degistir</Table.Th>
              <Table.Th>detay</Table.Th>
              <Table.Th>sil</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {this.props.reports.map((report) => (
              <TableTr1
                key={report.id}
                report={report}
                deleteData={this.props.deleteData}
              />
            ))}
          </Table.Tbody>
        </Table>
      </div>
    );
  }
}

export default Table1;
