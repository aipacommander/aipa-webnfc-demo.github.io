function doPost(e) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('シート1');
    var postData = JSON.parse(e.postData.getDataAsString());
    var token = 'BBtGOmbmwikr6vr0XzAip0G5';

    // Googleスプレッドシートにデータを追加する処理
    if (token === postData.token){
        var datetime = new Date();
        var date = (datetime.getFullYear() + '/' + ('0' + (datetime.getMonth() + 1)).slice(-2) + '/' + ('0' + datetime.getDate()).slice(-2))
        var time = (('0' + datetime.getHours()).slice(-2) + ':' + ('0' + datetime.getMinutes()).slice(-2));
        var text = postData.text;

        array = [date,time,'tester', text, e];
        sheet.appendRow(array);
    }
    // var result = ContentService.createTextOutput(JSON.stringify({name: 'taro'}))
    // return result;    
}
