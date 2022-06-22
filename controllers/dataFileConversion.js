const fs = require('fs');
const xlsxtojson = require('xlsx-to-json');
const xlstojson = require('xls-to-json');
const XLSX = require('xlsx');

const path = require('path');
const { v4 } = require('uuid');
const { upload } = require('../middleware/Files');

// Convert Data excel to JSON through Multer

const scanDataFileFormate = (req, res) => {
  let excel2json;
  upload(req, res, (err) => {
    if (err) {
      res.status(401).json({ message: ' Something Went Wrong!!' });
      return false;
    }
    if (!req.file) {
      res.status(404).json({ message: 'File not found!' });
      return false;
    }

    if (
      req.file.originalname.split('.')[
        req.file.originalname.split('.').length - 1
      ] === 'xlsx'
    ) {
      excel2json = xlsxtojson;
    } else {
      excel2json = xlstojson;
    }

    // code to convert excel data to json  format
    try {
      excel2json(
        {
          input: req.file.path,
          output: null,
          sheet: 'FoodSales',
          lowerCaseHeaders: true,
        },
        async function (err, result) {
          if (err) {
            return res.status(500).json({
              error: 'File Not Found!!',
            });
          } else {
            fs.writeFile(
              path.join(__dirname, '../public/dataJsonFile/', v4() + '.json'),
              JSON.stringify(result),
              (err) => {
                if (err) {
                  console.log('err', err);
                  return res.status(422).json({ message: 'Invalid Data!' });
                }
                return res.status(200).json({
                  data: { result },
                });
              }
            );
          }
        }
      );
    } catch (err) {
      return res.status(400).json({
        error: 'Corupted excel file !',
      });
    }
  });
};

const DataFormatFile = async (req, res) => {
  try {
    const getDate = (date = Date.now()) => {
      const nD = new Date(date);
      return `${nD.getFullYear()}/${nD.getMonth()}/${nD.getDate()}`;
    };

    // Data Format JSON to Excel

    const dataFormatSheetColumnName = [
      'OrderDate',
      'Region',
      'City',
      'Categories',
      'Product',
      'Quantity',
      'UnitPrice',
      'TotalPrice',
    ];

    const dataFormatSheetName = 'dataFormate';
    const filePath = './public/dataExcelFile/users.xlsx';
    const dataFile = [
      {
        OrderDate: getDate(),
        Region: 'West',
        City: 'Noida',
        Categories: 'Bat',
        Product: 'MRF',
        Quantity: 4,
        UnitPrice: 1.5,
        TotalPrice: 6.0,
      },
      {
        OrderDate: getDate(),
        Region: 'East',
        City: 'Noida',
        Categories: 'Ball',
        Product: 'MRF',
        Quantity: 5,
        UnitPrice: 2.5,
        TotalPrice: 12.5,
      },
      {
        OrderDate: getDate(),
        Region: 'North',
        City: 'Noida',
        Categories: 'Support Gard',
        Product: 'MRF',
        Quantity: 6,
        UnitPrice: 2,
        TotalPrice: 12,
      },
      {
        OrderDate: getDate(),
        Region: 'South',
        City: 'Noida',
        Categories: 'Helmet',
        Product: 'MRF',
        Quantity: 10,
        UnitPrice: 1.5,
        TotalPrice: 15.0,
      },
    ];

    const exportdataFiletoExcel = (
      dataFile,
      dataFormatSheetColumnName,
      dataFormatSheetName,
      filePath
    ) => {
      const data = dataFile.map((item) => {
        return [
          item.OrderDate,
          item.Region,
          item.City,
          item.Categories,
          item.Product,
          item.Quantity,
          item.UnitPrice,
          item.TotalPrice,
        ];
      });
      const WorkDataFile = XLSX.utils.book_new();
      const WorkDataSheet = [dataFormatSheetColumnName, ...data];
      const worksheet = XLSX.utils.aoa_to_sheet(WorkDataSheet);
      XLSX.utils.book_append_sheet(
        WorkDataFile,
        worksheet,
        dataFormatSheetName
      );
      XLSX.writeFile(WorkDataFile, path.resolve(filePath));
      return true;
    };
    exportdataFiletoExcel(
      dataFile,
      dataFormatSheetColumnName,
      dataFormatSheetName,
      filePath
    );
    return res.status(200).json({
      message: 'File Successfully Created!!',
    });
  } catch (error) {
    console.log('Error While Make FormData===>', error);
    return false;
  }
};

module.exports = { scanDataFileFormate, DataFormatFile };
