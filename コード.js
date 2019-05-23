function myFunction() {
  var ss = SpreadsheetApp.getActiveSheet();
  var cell = ss.getRange(1,1);
  cell.setValue("hello world");

}

function getHello(){

  var id = "1MsblkAIWSFvXqI6KNY16qczzBfvOfr-Nnf__WEX1IZs"
  var ss = SpreadsheetApp.openById(id);
  var sheet = ss.getSheetByName("シート1");
  var values = sheet.getRange(1,1).getValues();

  Logger.log(values)
  return values
}



function getLastRowWithValue() {
  var id = "1MsblkAIWSFvXqI6KNY16qczzBfvOfr-Nnf__WEX1IZs"
  var ss = SpreadsheetApp.openById(id);
  var sheet = ss.getSheetByName("シート1");
  var lastRow = ss.getLastRow()
  const columnBVals = sheet.getRange('A1:A' + lastRow).getValues(); // A列の値を配列で取得
  return columnBVals;
}

function doGet(e) {
  // listデータをjsonに変換
  payload = JSON.stringify(getLastRowWithValue())
  // payloadをreturnするだけではだめ
  // ContentServiceを利用して、responseを作成
  ContentService.createTextOutput()
  var output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  output.setContent(payload);
  // return response-data
  return output;
}
