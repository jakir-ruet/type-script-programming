interface roomEdge{
   width: number;
   height: number;
   length: number;
}
function roomArea(options: roomEdge) {
   let width = options.width;
   let height = options.height;
   let length = options.length;
   return(width * length * height)
}
let roomEdge = {
   width: 40,
   height: 40,
   length: 40,
}
let resultRoomArea = roomArea(roomEdge);
console.log(`The Area ${resultRoomArea} sqf`);