import React, { useState, useEffect } from "react";
import { TextInput, Button, Table } from "@mantine/core";
import TableTr1 from "./TableTr1";
import { useUpdateReportMutation } from './services/report';

function Duzenle2(props) {
  const [report, setReport] = useState(props.report);

  useEffect(() => {
    setReport(props.report);
  }, [props.report]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setReport((prevReport) => ({
      ...prevReport,
      [name]: value,
    }));
  };

  const [updateReport] = useUpdateReportMutation();

  const handleSubmit3 = (event) => {
    event.preventDefault();//yenilese daha iyi gibi
    const { id } = report; // report içindeki id değerini alıyoruz
    updateReport({ id, updatedData: report })
      .unwrap()
      .then((updatedReport) => {
        console.log("Rapor başarıyla güncellendi:", updatedReport);
        
      })
      .catch((error) => {
        console.error("Rapor güncelleme hatası:", error);
      });
  };

  if (!report) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{report.id}</h1>
      

      <div>
        <form onSubmit={handleSubmit3}>
          <TextInput
            label="laborantAd"
            name="laborantAd"
            type="text"
            value={report.laborantAd}
            id="laborantAd"
            onChange={handleChange}
          />
          <TextInput
            label="laborantSoyad"
            name="laborantSoyad"
            type="text"
            value={report.laborantSoyad}
            id="laborantSoyad"
            onChange={handleChange}
          />
          <TextInput
            label="laborantNo"
            name="laborantNo"
            type="text"
            value={report.laborantNo}
            id="laborantNo"
            onChange={handleChange}
          />
          <TextInput
            label="dosyaNo"
            name="dosyaNo"
            type="text"
            value={report.dosyaNo}
            id="dosyaNo"
            onChange={handleChange}
          />
          <TextInput
            label="hastaAd"
            name="hastaAd"
            type="text"
            value={report.hastaAd}
            id="hastaAd"
            onChange={handleChange}
          />
          <TextInput
            label="hastaSoyad"
            name="hastaSoyad"
            type="text"
            value={report.hastaSoyad}
            id="hastaSoyad"
            onChange={handleChange}
          />
          <TextInput
            label="hastaTC"
            name="hastaTC"
            type="text"
            value={report.hastaTC}
            id="hastaTC"
            onChange={handleChange}
          />
          <TextInput
            label="tarih"
            name="tarih"
            type="text"
            value={report.tarih}
            id="tarih"
            onChange={handleChange}
          />
          <TextInput
            label="taniAdi"
            name="taniAdi"
            type="text"
            value={report.taniAdi}
            id="taniAdi"
            onChange={handleChange}
          />
          <TextInput
            label="taniDetay"
            name="taniDetay"
            type="text"
            value={report.taniDetay}
            id="taniDetay"
            onChange={handleChange}
          />
          <TextInput
            label="taniResimLink"
            name="taniResimLink"
            type="text"
            value={report.taniResimLink}
            id="taniResimLink"
            onChange={handleChange}
          />
          <Button variant="filled" color="grape" type="submit">
            Save
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
            <TableTr1 report={report} deleteData={props.deleteData} />
          </Table.Tbody>
        </Table>
      </div>
    </div>
  );
}

export default Duzenle2;
