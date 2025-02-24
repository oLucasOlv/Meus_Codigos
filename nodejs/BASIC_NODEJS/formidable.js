const formidable = require("formidable");
const http = require("http");
const fs = require("fs");

http
    .createServer( (req, res) => {
        if (req.url == "/fileupload") {
            const form = new formidable.IncomingForm();
            form.parse(req,  (err, fields, files) => {
                const oldpath = files.filetoupload.filepath;
                const newpath =
                    "c:/meus_codigos/nodejs/" + files.filetoupload.originialFilename;

                fs.rename(oldpath, newpath,  (err) => {
                    if (err) throw err;
                    res.write("File oploaded end moved");
                    res.end();
                });
            });
        } else {
            res.writeHead(200, { "content-type": "text/html" });
            res.write(
                '<form action="fileupload" method="post" enctype="multipart/form-data">'
            );
            res.write('<input type"file" name="filetoupload"><br>');
            res.write('<input type="submit">');
            res.write("</form>");
            return res.end();
        }
    })
    .listen(8080);
