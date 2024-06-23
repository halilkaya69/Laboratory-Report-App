import React, { Component } from "react";

import { Table } from "@mantine/core";
import TableTr1 from "./TableTr1";
class Detay2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      reports: [],
      arananDeger: "", 
    };
  }

  componentDidMount() {
    this.props.getReports();
  }

  render() {
    const { report } = this.props;

    if (!report) {
      return <div>Loading...</div>; // or handle the undefined report case as needed
    }

    return (
      <div>
        <h1>{report.id}</h1>
        <div>
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
              <TableTr1 report={report} deleteData={this.props.deleteData} />
            </Table.Tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Detay2;
