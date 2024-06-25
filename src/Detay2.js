import React, { useState, useEffect } from "react";
import { Table } from "@mantine/core";
import TableTr1 from "./TableTr1";
import { useGetAllReportQuery } from './services/report';

function Detay2(props) {
  const [reports, setReports] = useState([]);
  const [report, setReport] = useState(props.report);
  const [arananDeger, setArananDeger] = useState('');

  useEffect(() => {
    if (props.report) {
      setReport(props.report);
    }
  }, [props.report]);

  const { data, error, isLoading } = useGetAllReportQuery();

  useEffect(() => {
    if (data) {
      const sortedData = [...data].sort((a, b) => {/*[...data]: A new array containing the same elements as data. */
        if (a[arananDeger] < b[arananDeger]) {
          return -1;
        }
        if (a[arananDeger] > b[arananDeger]) {
          return 1;
        }
        return 0;
      });
      setReports(sortedData);
    }
  }, [data, arananDeger]);

  if (!report || isLoading) {
    return <div>Loading...</div>;
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
            
              <TableTr1 key={report.id} report={report} deleteData={props.deleteData} />
            
          </Table.Tbody>
        </Table>
      </div>
    </div>
  );
}

export default Detay2;
