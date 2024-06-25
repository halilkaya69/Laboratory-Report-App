import React, { useState, useEffect } from "react";
import { Button, Select } from "@mantine/core";
import { useGetAllReportQuery } from './services/report';
import Table1 from './Table1';

function SiralaForm(props) {
  const [arananDeger, setArananDeger] = useState('');
  const [reports, setReports] = useState([]);

  const { data, error, isLoading } = useGetAllReportQuery();

  useEffect(() => {
    if (data) {
      const sortedData = [...data].sort((a, b) => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Select
          label="Sort by"
          placeholder="Pick value"
          value={arananDeger}
          onChange={(value) => setArananDeger(value)}
          data={[
            "laborantAd",
            "laborantSoyad",
            "laborantNo",
            "dosyaNo",
            "hastaAd",
            "hastaSoyad",
            "hastaTC",
            "tarih",
            "taniAdi",
            "taniDetay",
            "taniResimLink",
          ]}
          mb="sm"
        />
        <Button type="submit" fullWidth>
          Sırala
        </Button>
      </form>
      
      
      <Table1 reports={reports} deleteData={props.deleteData} />

    </div>
  );
}

export default SiralaForm;
