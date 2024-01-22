import * as XLSX from 'xlsx';

  export const handleExportClick = (data) => {
    // Convert list data to worksheet
    const worksheet = XLSX.utils.json_to_sheet(data);

    // Create workbook and add the worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // Generate Excel file and download it
    XLSX.writeFile(workbook, 'Club-data.xlsx');
  };