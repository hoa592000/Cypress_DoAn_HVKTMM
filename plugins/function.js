const Excel = require("exceljs");
const workBook = new Excel.Workbook();
const filepath = "../TestData.xlsx";
const sheet = "Sheet1";


function verify(sheet, row, column) {
    if (sheet == null) throw new Error("Nhập sai tên sheet rồi");
    if (row < 2 || column < 1) throw new Error("hàng phải bắt đầu từ 2 và cột phải bắt đầu từ 1");
}

async function WriteToXlsx(row, column, value) {
    await workBook.xlsx.readFile(filepath);
    const workSheet = workBook.worksheets.find(w => w.name === sheet);
    verify(workSheet, row, column);
    workSheet.getCell(row, column).value = value;
    await workBook.xlsx.writeFile(filepath);
}

async function WriteMultipleValueToXlsx(startRow, column, value) {
    await workBook.xlsx.readFile(filepath);
    const workSheet = workBook.worksheets.find(w => w.name === sheet);
    verify(workSheet, startRow, column);
    if (!Array.isArray(value)) throw new Error("Cần đưa vào mảng string giá trị sẽ nhập lần lượt vào các cột");
    value.forEach((val) => {
        workSheet.getCell(startRow++, column).value = val;
    });
    await workBook.xlsx.writeFile(filepath);
}

/**
 * Write value back to Excel file, Note: this function write single value only
 * @param{number} row  row number, start from 2
 * @param{number} column column number, start from 1
 * @param{string} value value to write
 * @return {Promise<void>}
 */
exports.writeValueToExcel = WriteToXlsx;

/**
 * Write value to multiple row, the row affect depend on the number of value
 * @param{number} startRow row number which will start writing from, start from 2
 * @param{number} column column number to write, start from 1
 * @param{[string]} value array of value will span to write
 * @return {Promise<void>}
 */
exports.writeMultipleValueToExcel = WriteMultipleValueToXlsx;

// t fix cứng Sheet1 r nhìn
WriteToXlsx(2,3,"yèugedfj").then();