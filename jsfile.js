function transform(line) {
var values = line.split(',');

var obj = new Object();
obj.first_name = values[0];
obj.last_name = values[1];
obj.gender = values[2];
var jsonString = JSON.stringify(obj);

return jsonString;
}