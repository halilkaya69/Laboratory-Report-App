import React, { Component } from "react";
import { TextInput, Button, Table } from "@mantine/core";
import TableTr1 from "./TableTr1";
class Ekle1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      report: {
        laborantAd: "",
        laborantSoyad: "",
        laborantNo: "",
        dosyaNo: "",
        hastaAd: "",
        hastaSoyad: "",
        hastaTC: "",
        tarih: "",
        taniAdi: "",
        taniDetay: "",
        taniResimLink: "",
      },
      counter: 1,
      reports: [],
      arananDeger: "", 
    };
  }

  componentDidMount() {
    this.props.getReports();
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      report: {
        ...prevState.report,
        [name]: value,
      },
    }));
  };

  handleAdd = (event) => {
    console.log("add");
    event.preventDefault();

    fetch("http://localhost:3000/reports", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.report),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log("Post successfully added");
        // Ekledikten sonra kategorileri yeniden yükle
        this.props.getReports();
        
      })
      .catch((error) => {
        console.error("Error adding post:", error);
      });
  };

  render() {
    const { report } = this.state;

    return (
      <div>
        <h1>Yeni Kayıt Ekle</h1>

        <div>
          <form onSubmit={this.handleAdd}>
            <TextInput
              label="laborantAd"
              name="laborantAd"
              type="text"
              placeholder="Laborant Ad"
              id="laborantAd"
              value={report.laborantAd}
              onChange={this.handleChange}
            />
            <TextInput
              label="laborantSoyad"
              name="laborantSoyad"
              type="text"
              placeholder="Laborant Soyad"
              id="laborantSoyad"
              value={report.laborantSoyad}
              onChange={this.handleChange}
            />
            <TextInput
              label="laborantNo"
              name="laborantNo"
              type="text"
              placeholder="Laborant No"
              id="laborantNo"
              value={report.laborantNo}
              onChange={this.handleChange}
            />
            <TextInput
              label="dosyaNo"
              name="dosyaNo"
              type="text"
              placeholder="Dosya No"
              id="dosyaNo"
              value={report.dosyaNo}
              onChange={this.handleChange}
            />
            <TextInput
              label="hastaAd"
              name="hastaAd"
              type="text"
              placeholder="Hasta Ad"
              id="hastaAd"
              value={report.hastaAd}
              onChange={this.handleChange}
            />
            <TextInput
              label="hastaSoyad"
              name="hastaSoyad"
              type="text"
              placeholder="Hasta Soyad"
              id="hastaSoyad"
              value={report.hastaSoyad}
              onChange={this.handleChange}
            />
            <TextInput
              label="hastaTC"
              name="hastaTC"
              type="text"
              placeholder="Hasta TC"
              id="hastaTC"
              value={report.hastaTC}
              onChange={this.handleChange}
            />
            <TextInput
              label="tarih"
              name="tarih"
              type="text"
              placeholder="Tarih"
              id="tarih"
              value={report.tarih}
              onChange={this.handleChange}
            />
            <TextInput
              label="taniAdi"
              name="taniAdi"
              type="text"
              placeholder="Tanı Adı"
              id="taniAdi"
              value={report.taniAdi}
              onChange={this.handleChange}
            />
            <TextInput
              label="taniDetay"
              name="taniDetay"
              type="text"
              placeholder="Tanı Detay"
              id="taniDetay"
              value={report.taniDetay}
              onChange={this.handleChange}
            />
            <TextInput
              label="taniResimLink"
              name="taniResimLink"
              type="text"
              placeholder="Tanı Resim Link"
              id="taniResimLink"
              value={report.taniResimLink}
              onChange={this.handleChange}
            />
            <Button variant="filled" color="grape" type="submit">
              Ekle
            </Button>
          </form>
        </div>

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
      </div>
    );
  }
}

export default Ekle1;
