function roomArea(options) {
    var width = options.width;
    var height = options.height;
    var length = options.length;
    return (width * length * height);
}
var roomEdge = {
    width: 40,
    height: 40,
    length: 40
};
var resultRoomArea = roomArea(roomEdge);
console.log("The Area ".concat(resultRoomArea, " sqf"));
