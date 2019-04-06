var JSONURL = 'https://spreadsheets.google.com/feeds/list/1QG3I251IrMFqJHr2wXVJNI4Eyk2edGb_bBp_VJJJ0m8/1/public/basic?alt=json';

function callback(data){
    
    var cells = data.feed.entry;
    console.log(data);
    console.log(cells);
    
    var raw = document.createElement('p');
    raw.innerText = JSON.stringify(cells);
    document.body.appendChild(raw);
}

var rows = [];
var cells = data.feed.entry;

for (var i = 0; i < cells.length; i++){
  var rowObj = {};
  rowObj.timestamp = cells[i].title.$t;
  var rowCols = cells[i].content.$t.split(',');
  for (var j = 0; j < rowCols.length; j++){
    var keyVal = rowCols[j].split(':');
    rowObj[keyVal[0].trim()] = keyVal[1].trim();
  }
  rows.push(rowObj);
}

$(document).ready(function(){
    
    $.ajax({
        url:JSONURL,
        success: function(data){
            callback(data);
        }
    });

});