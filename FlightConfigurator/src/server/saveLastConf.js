var jsonfile = require('jsonfile')
var PDFDocument = require('pdfkit')
var fs = require('fs')

module.exports = function(app, projectDir) {
    app.post('/savelastconfig', function(req, res) {
      //save the pdfkit

      //create the outputpdf
      doc = new PDFDocument();
      doc.pipe(fs.createWriteStream('data/json/output.pdf'));
      /*
      The config name and date
      */
      doc.text(req.body.lastConfig.conf[0].name+" -- "+req.body.lastConfig.conf[0].custo+" -- "+req.body.lastConfig.conf[0].date+" -- "+req.body.lastConfig.conf[0].globalPrice)
        .font('Times-Roman', 11)
        .moveDown()
      /*
        create the layout
      **/
      doc.text("Cabin ")
        .font('Times-Roman', 11)
        .moveDown()
      doc.image('public/img/out.png',{width:300})
        .moveDown()

      /*
      save the cabin config
      */

      doc.text("Package name        Customization        Quantity          Price")
      var obj = req.body.lastConfig.conf[0];
      Object.keys(obj.components).map(function(value,key){
        var object = obj.components[value];
        return Object.keys(object).map(function(val,key){
          return doc.text(object[val].nameComponent+"             "+object[val].custo+"            "+object[val].number+"              "+object[val].price)
        })
      })
      /*
      save the system config
      */
      doc.moveDown()
      doc.text("Systems ")
        .font('Times-Roman', 11)
        .moveDown()
      doc.text("Package name        Price")
      Object.keys(obj.system).map(function(value,key){
        var object = obj.system[value];
        return Object.keys(object).map(function(val,key){
          return doc.text(object[val].nameComponent+"              "+object[val].price)
        })
      })

      doc.end(); //we end the document writing.*/

      //console.log(req.body);      // your JSON
      res.send(req.body);
      var file = projectDir+'/data.json'
      var obj = req.body
      jsonfile.writeFile(file, obj, function (err) {
        console.error(err)
      })
    });
}
