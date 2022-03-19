var pdf = require('html-pdf')
class PdfWriter{
    static WhiterPDF(filename, html){
        pdf.create(html, {}).toFile(filename)
    }
}

module.exports = PdfWriter