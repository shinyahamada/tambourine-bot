function myFunction() {
  var ss = SpreadsheetApp.getActiveSheet();
  var cell = ss.getRange(1,1);
  cell.setValue("hello world");

}

function getHello(){

  var id = "1MsblkAIWSFvXqI6KNY16qczzBfvOfr-Nnf__WEX1IZs"
  var ss = SpreadsheetApp.openById(id);
  var sheet = ss.getSheetByName("Osaka");
  var values = sheet.getRange(1,1).getValues();

  Logger.log(values)
  return values
}


function doGet(e) {


  var office = e.parameter.office;

  if(office == 'osaka'){
    // getOsakaValues();
    return getOsakaValues();
  }else if(office == 'tokyo'){
    // getTokyoValues();
    return getTokyoValues();
  }else if(office == undefined){
    var rowData = {};
    var getValue = "undefined"

    //エラーはJSONで返すつもりなので
    rowData.value = getValue;
    var result = JSON.stringify(rowData);
    return ContentService.createTextOutput(result);
  }
}



function getOsakaValues() {
  var id = "1MsblkAIWSFvXqI6KNY16qczzBfvOfr-Nnf__WEX1IZs"
  var ss = SpreadsheetApp.openById(id);
  var lastRow = ss.getLastRow();
  var sheet = ss.getSheetByName("osaka");
  const columnBVals = sheet.getRange('A1:A' + lastRow).getValues(); // A列の値を配列で取得

  // listデータをjsonに変換
  payload = JSON.stringify(columnBVals);
  // payloadをreturnするだけではだめ
  // ContentServiceを利用して、responseを作成
  ContentService.createTextOutput();
  var output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  output.setContent(payload);
  // return response-data
  Logger.log(output);
   return output;

}

function getTokyoValues() {
  var id = "1MsblkAIWSFvXqI6KNY16qczzBfvOfr-Nnf__WEX1IZs"
  var ss = SpreadsheetApp.openById(id);
  var sheet = ss.getSheetByName("Tokyo");
  var lastRow = ss.getLastRow()
  var columnBVals = sheet.getRange('A1:A' + lastRow).getValues(); // A列の値を配列で取得

  // listデータをjsonに変換
  payload = JSON.stringify(columnBVals);
  // payloadをreturnするだけではだめ
  // ContentServiceを利用して、responseを作成
  ContentService.createTextOutput();
  var output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  output.setContent(payload);
  // return response-data
  Logger.log(payload);
   return output;

}
