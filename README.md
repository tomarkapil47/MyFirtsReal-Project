# what project does

Customer is working on an Automated platform to manage and track the Deliveries. They are planning to create a system where they can get the updates from their end client’s ERP systems (API integrations) and then cross-verify and update from a Cellular/BLE device once the package has been received. They already have the IOT device and now looking to build this platform to integrate with various ERP systems. Promised Delivery (None) and track and trace the perticular pallet/containers and also send the ASN to the customers or Vendors.

# project Dependencies

## 1-Android

In android part it will scan the barcode and get pallets/contaiers information then pass to the middleware application which is build on node js. The SDK which using in android is AsReader [https://asreader.com/].In AsReader we are using camera type sdk[https://asreader.com/products/camera-type/].AsReader dedicated application enabling high-speed reading of barcode using camera.

- [1D-Barcode](https://www.dynamsoft.com/blog/insights/the-comprehensive-guide-to-1d-and-2d-barcodes/)([website](https://www.dynamsoft.com/blog/insights/the-comprehensive-guide-to-1d-and-2d-barcodes/)) -
- UPC-A.
- UPC-E.
- EAN 8.
- EAN 13.
- Industrial 2 of 5.
- Interleaved 2 of 5.
- Codabar.
- Code 11.
- Code 39.
- Code 93.
- Code 128.
- DataBar.
- MSI Code.
- Patch Code.

- [2D-Barcode](https://www.dynamsoft.com/blog/insights/the-comprehensive-guide-to-1d-and-2d-barcodes/)([website](https://www.dynamsoft.com/blog/insights/the-comprehensive-guide-to-1d-and-2d-barcodes/)) -
- QR Code.
- PDF417.
- DataMatrix.
- GS1 Composite Code.
- MaxiCode.
- Aztec Code.

## App Privacy

The developer, Asterisk Corporation, has not provided details about its privacy practices and handling of data to Apple. For more information, see the [developer’s privacy policy].

## 2-Middleware Application

In middleware section it will get the scan data and formate it and then connect to SAP through URL like:-

```js
app.get('/test/url', async (req, res, next) => {
  try {
    axios
      .get('https://api.cf.us10.hana.ondemand.com')
      .then((response) => {
        console.log(response.data);
        return res.status(200).json({
          res: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (err) {
    console.log(err);
  }
});
```

then we connect to the different ERP and send formated data according their require like JSON , Excel etc.

## 3-SAP

After the Middleware application we will redirect to the SAP which will provide the full dynamic work flow experience , For more details [https://www.sap.com/india/index.html]
.there is some sap functonality:

- [ASN](http://saphelp.ucc.ovgu.de/NW750/EN/72/8dbf53f106b44ce10000000a174cb4/content.htm)([website](http://saphelp.ucc.ovgu.de/NW750/EN/72/8dbf53f106b44ce10000000a174cb4/content.htm))-This DataSource contains data from advanced shipping notifications (ASNs) for the supplier delivery performance rating (SDPR) function in Service Parts Planning (SPP) and for supplier performance management in SAP Supply Network Collaboration (SAP SNC).
- [Purchase](https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/6b120435270a45c8b81b203e74c62aae/8780b65334e6b54ce10000000a174cb4.html?version=1709%20001)([website](https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/6b120435270a45c8b81b203e74c62aae/8780b65334e6b54ce10000000a174cb4.html?version=1709%20001))-You can create, change, and display purchase orders on a single screen.
- Financial Accounting (FI).
- Financial Supply Chain Management (FSCM).
- Controlling (CO).
- Materials Management (MM).
- Sales and Distribution (SD).
- Logistics Execution (LE).
- Production Planning (PP).
- Quality Management (QM).
- Plant Maintenance (PM).
- Project System (PS).
- Human Resources (HR).
# MyFirtsReal-Project
