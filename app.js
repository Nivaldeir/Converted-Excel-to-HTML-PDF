var Reader = require('./Reader')
var Processor = require('./Processor')
var Table = require('./Table')
var HtmlParse = require('./HtmlParse')
var Writer = require('./Writer')
var PDFWriter = require('./PdfWriter')

var leitor = new Reader()
var escritor = new Writer()

async function main() {
    var dados = await leitor.Read('./users.csv')
    var dadosProcessados = Processor.Processor(dados)

    var users = new Table(dadosProcessados)
    var html = await HtmlParse.Parse(users)

    escritor.Writer('MeuHtmlGerado.html', html)
    PDFWriter.WhiterPDF(Date.now() + '.pdf', html)
}

main()