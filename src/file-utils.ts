import fs from 'fs';
/**
 * Create/overwrite a new JSON file saving the inputted data at the specified path location.
 * @export
 * @param {any} data The data to write to file.
 * @param {string} path A file descriptor like 'User/documents/new-data.json'.
 */
export function saveJsonToFile(data: any, path: string): void {
  try {
    fs.writeFileSync(path, JSON.parse(JSON.stringify(data, null, 4)));
  } catch (err) {
      console.error(err);
  }
}

// ```js
//     // import fs, express, cors, bodyParser
//     // do the usual express setup

//     app.use(cors());
//     app.use(bodyParser.json());

//     // set up a port listener that the frontend will call to make request

//     app.get('/api/get-file-contents', (req, res) => {
//         res.json(loadFiles('myPath/here/'));
//     });

//     loadFiles(path) {
//         results = [];
//         fs.readdirSync(path).forEach(file => {
//             results.push(readFile(path, file));
//         });
//         return results;
//     }

//     readFile(path, file) {
//         let contents = fs.readFileSync(path+'/'+fileName, 'utf8');
//         return contents;
//     }
// ```
