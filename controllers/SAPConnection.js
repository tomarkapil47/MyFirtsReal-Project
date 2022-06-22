// const client = require('@sap/hana-client');
// const xsenv = require('@sap/xsenv');
// //Hello Router
// const NodeJsConnectWithSAP = (req, res) => {
//   //Lookup HANA DB Connection from Bound HDB Container Service

//   let hanaOptions = xsenv.getServices({
//     hana: {
//       tag: 'hana',
//     },
//   });
//   //Create DB connection with options from the bound service
//   let conn = client.createConnection();
//   var connParams = {
//     serverNode: hanaOptions.hana.host + ':' + hanaOptions.hana.port,
//     uid: hanaOptions.hana.user,
//     pwd: hanaOptions.hana.password,
//     CURRENTSCHEMA: hanaOptions.hana.schema,
//   };

//   //connect
//   conn.connect(connParams, (err) => {
//     if (err) {
//       return res.status(500).send(`ERROR: ${JSON.stringify(err)}`);
//     } else {
//       conn.exec(
//         `SELECT SESSION_USER, CURRENT_SCHEMA
//                          FROM "DUMMY"`,
//         (err, result) => {
//           if (err) {
//             return res.status(500).send(`ERROR: ${JSON.stringify(err)}`);
//           } else {
//             conn.disconnect();
//             console.log(result);
//             return res.status(200).send(result);
//           }
//         }
//       );
//     }
//     return null;
//   });
// };

// const NodeJsConnectSAP = (req, res) => {
//   let client = req.db;
//   client.prepare(
//     `SELECT SESSION_USER, CURRENT_SCHEMA
//                          FROM "DUMMY"`,
//     (err, statement) => {
//       if (err) {
//         return res.status(500).send('ERROR: ' + err.toString());
//       }
//       statement.exec([], (err, results) => {
//         if (err) {
//           return res.status(500).send('ERROR: ' + err.toString());
//         } else {
//           var result = JSON.stringify({
//             Objects: results,
//           });
//           console.log(result);
//           return res.status(200).send(result);
//         }
//       });
//       return null;
//     }
//   );
// };

// module.exports = { NodeJsConnectWithSAP, NodeJsConnectSAP };
