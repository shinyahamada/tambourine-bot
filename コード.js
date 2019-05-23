function myFunction() {
  var ss = SpreadsheetApp.getActiveSheet();
  var cell = ss.getRange(1,1);
  cell.setValue("hello world");
}
