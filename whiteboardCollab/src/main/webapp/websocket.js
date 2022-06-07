var wsUri = "ws://localhost:8080/whiteboardCollab-1.0-SNAPSHOT/wboardendpoint";
var websocket = new WebSocket(wsUri);
websocket.binaryType = "arraybuffer";

websocket.onmessage = function(evt) {
    onMessage(evt)
};

function sendText(json) {
    console.log("sending text: " + json);
    websocket.send(json);
}
function BinaryData(datas) {
    console.log("sending binary: " + Object.prototype.toString.call(datas));
    websocket.send(datas);
}
function onMessage(evt) {
    console.log("received: " + evt.data);
    console.log(evt.data);
if (typeof evt.data == "string") {
        ImageAsText(evt.data);
    } else {
        ImageAsBinary(evt.data);
    }

}


