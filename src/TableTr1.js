import React, { Component } from "react";
import {  Button, Table } from "@mantine/core";
import {  Link } from "react-router-dom";
class TableTr1 extends Component {
  render() {
    return (
      <>
        <Table.Tr key={this.props.report.dosyaNo}>
          <Table.Td>{this.props.report.laborantAd}</Table.Td>
          <Table.Td>{this.props.report.laborantSoyad}</Table.Td>
          <Table.Td>{this.props.report.laborantNo}</Table.Td>
          <Table.Td>{this.props.report.dosyaNo}</Table.Td>
          <Table.Td>{this.props.report.hastaAd}</Table.Td>
          <Table.Td>{this.props.report.hastaSoyad}</Table.Td>
          <Table.Td>{this.props.report.hastaTC}</Table.Td>
          <Table.Td>{this.props.report.tarih}</Table.Td>
          <Table.Td>{this.props.report.taniAdi}</Table.Td>
          <Table.Td>{this.props.report.taniDetay}</Table.Td>
          <Table.Td>
            {this.props.report.taniResimLink && (
              <img
                src={this.props.report.taniResimLink}
                alt="Resim"
                style={{ width: "200px", height: "200px" }}
              />
            )}
          </Table.Td>
          <Table.Td>
            
              
              <Link to={`/duzenle/${this.props.report.id}`}><Button>Duzenle</Button></Link>
            
          </Table.Td>

          <Table.Td>
            
              <Link to={`/detay/${this.props.report.id}`}><Button>Detay </Button></Link>
           
          </Table.Td>
          <Table.Td>
            <Button onClick={() => this.props.deleteData(this.props.report.id)}>
              Sil
            </Button>
          </Table.Td>
        </Table.Tr>
      </>
    );
  }
}

export default TableTr1;
