// import React from 'react';
// import DataTable from "react-data-table-component";
// import "../../../css/patientTable.css";
// import Button from "@mui/material/Button";
// import { Link } from "react-router-dom";



// const data = [
//   { mrn: 'MRN-101022', patientName: 'Sagar Behare', age: 28, ward: 'General Ward',room: 'Room 1', 
//     bed: 'B 1', admissionDate: '12/04/2023', status: 'Admitted'},
//   { mrn: 'MRN-101022', patientName: 'Sagar Behare', age: 28, ward: 'General Ward',room: 'Room 1', 
//     bed: 'B 1', admissionDate: '12/04/2023', status: 'Admitted'},
//   { mrn: 'MRN-101022', patientName: 'Sagar Behare', age: 28, ward: 'General Ward',room: 'Room 1', 
//     bed: 'B 1', admissionDate: '12/04/2023', status: 'Admitted'},
//   { mrn: 'MRN-101022', patientName: 'Sagar Behare', age: 28, ward: 'General Ward',room: 'Room 1', 
//     bed: 'B 1', admissionDate: '12/04/2023', status: 'Admitted'},
//   { mrn: 'MRN-101022', patientName: 'Sagar Behare', age: 28, ward: 'General Ward',room: 'Room 1', 
//     bed: 'B 1', admissionDate: '12/04/2023', status: 'Discharged'}
// ];

// const columns = [
//   {
//       name: 'MRN',
//       selector: row => row.mrn,
//       width: '10%',

//       cell: (row) => (
        
//       <Button variant='text' underline="always" component={Link} to={"/patientRegistration"}
//         sx={{
//           color: "black",
//           font: "inherit",
//           padding:'0',
//           textDecoration:'underline'
//         }}
//       >
//         {row.mrn}
//       </Button>
//       )
//   },
//   {
//       name: 'Patient Name',
//       selector: row => row.patientName,
//       width: '23%'
//   },
//   {
//       name: 'Age',
//       selector: row => row.age,
//       width: '5%'
//   },
//   {
//       name: 'Ward',
//       selector: row => row.ward,
//       width: '15%'
//   },
//   {
//       name: 'Room',
//       selector: row => row.room,
//       width: '15%'
//   },
//   {
//       name: 'Bed',
//       selector: row => row.bed,
//       width: '10%'
//   },
//   {
//       name: 'Admission Dt',
//       selector: row => row.admissionDate,
//       width: '12%',
//       sortable:true
//   },
//   {
//       name: 'Status',
//       selector: row => row.status,
//       width: '10%',
//       sortable:true,
//       cell: (row) => (
//         <div className={`status-admitted ${row.status === 'Admitted' ? '' : 'status-discharged'}`}>
//           {row.status}
//         </div>
//       )
//   }
// ];

// const tableStyles = {
//   table: {
//     style: {
//       marginBottom: '16px',
//       fontFamily: 'Source Serif Pro',
//     },
//   },
//   headRow: {
//     style: {
//       backgroundColor: '#647B89',
//       color: '#ffffff',
//       borderRadius: '15px 15px 0px 0px'
//     },
//   },
//   headCells: {
//     style: {
//       fontSize: '18px',
//       fontWeight: 'bold'
//     },
//   },
  
//   rows: {
//     style: {
//       fontSize: '16px',
//       //backgroundColor: 'transparent'

//       backgroundColor: '#DAF2FF',
//       //backgroundColor: 'lightblue', // Apply the custom background color
//       //color: 'white', // Apply the custom text color
//     },
//     // Style the rows on hover
//     highlightOnHoverStyle: {
//       //backgroundColor: 'blue', // Apply the custom background color on hover
//     }
//   }
// };

// /*(const conditionalRowStyles = [
//   {
//     when: (row) => row.status === 'Admitted',
//     style: {
//       backgroundColor: 'lightblue',
//     },
//   },
// ];*/



// const PatientList = () => {
//   return (
//     <DataTable columns={columns}
//         data={data}
//         //selectableRows
//         fixedHeader
//         customStyles={tableStyles}
// //        conditionalRowStyles={conditionalRowStyles}
//         pagination
//       >

//       </DataTable>


//   );
// };

// export default PatientList;