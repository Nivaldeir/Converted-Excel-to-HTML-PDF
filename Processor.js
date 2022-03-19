class Processor{
    static Processor(data){
        var a = data.split('\r\n');
        var rows = []
        a.forEach(row => {
            var arr = row.split(',');
            rows.push(arr)
        });
        return rows
    }
}
module.exports = Processor;