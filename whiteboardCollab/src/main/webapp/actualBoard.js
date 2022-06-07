
var board = document.getElementById("messageBoard");
var context = board.getContext("2d");
board.addEventListener("click", ImageCapture, false);


// Finds where the client is currently on the board

function WhereCurr(evt) {
    var boundary = board.getBoundingClientRect();

    return {
        x: evt.clientX - boundary.left,
        y: evt.clientY - boundary.top
    };
}


function ImageCapture(evt) {

    var currentPos = WhereCurr(evt);

    for (i = 0; i < document.MessageForm.color.length; i++) {
        if (document.MessageForm.color[i].checked) {
            var color = document.getElementById("colorpick");
            break;
        }
    }
    for (i = 0; i < document.MessageForm.shape.length; i++) {
        if (document.MessageForm.shape[i].checked) {
            var shape = document.MessageForm.shape[i];
            var message = document.getElementById('textbox');
            var note = document.getElementById('stickyBox')
            break;
        }
    }


// Turns position on board to readable

    var json = JSON.stringify({

        "shape": shape.value,
        "color": color.value,
        "message": message.value,
        "note":note.value,
        "coords": {
            "x": currentPos.x,
            "y": currentPos.y
        }
    });


    ImageAsText(json);
    if (document.getElementById("available").checked) {
        sendText(json);
    }
}

document.getElementById('clearButton').addEventListener('click', function () {
    context.clearRect(0, 0, board.width, board.height);
}, false);


function SaveCanvasAsImage(){
    let SaveButton = document.createElement('a');
    SaveButton.setAttribute('save', 'CanvasAsImage.png');
    let dataURL = board.toDataURL('image/png');
    let url = dataURL.replace(/^data:image\/png/,'data:application/octet-stream');
    SaveButton.setAttribute('href',url);
    SaveButton.click();
}


function ImageAsText(image) {
    console.log("drawImageText");
    var json = JSON.parse(image);
    context.fillStyle = json.color;

    if (json.shape === "circle") {
        context.beginPath();
        context.arc(json.coords.x, json.coords.y, 10, 0, 2 * Math.PI, false);
        context.fill();

    } else if (json.shape === "square") {
        context.fillRect(json.coords.x, json.coords.y, 18, 18);

    } else if (json.shape === "triangle") {
        context.beginPath();
        context.moveTo(json.coords.x, json.coords.y + 25);
        context.lineTo(json.coords.x + 25, json.coords.y);
        context.lineTo(json.coords.x + 50, json.coords.y + 25);
        context.lineTo(json.coords.x, json.coords.y + 25);
        context.fill();

    } else if (json.shape === "oval") {
        context.beginPath();
        context.arc(json.coords.x, json.coords.y, 40, 0, Math.PI)
        context.fill();

    } else if (json.shape === "diamond") {
        context.save();
        context.beginPath();
        context.moveTo(json.coords.x, json.coords.y);
        context.lineTo(json.coords.x - 25 / 2, json.coords.y + 25 / 2);
        context.lineTo(json.coords.x, json.coords.y + 25);
        context.lineTo(json.coords.x + 25 / 2, json.coords.y + 25 / 2);
        context.closePath();
        context.fill();
        context.restore();

    }
    // Allows User to enter text into canvas
    else if (json.shape === "text") {
        context.beginPath()
        context.fillStyle = json.color;
        var font_style = document.getElementById('input-font').value
        var font_size = document.getElementById('input-font-size').value
        context.font = font_size + " " + font_style;
        context.fillText(json.message, json.coords.x, json.coords.y);

    } else if (json.shape === "speechM") {
        context.beginPath();
        context.strokeStyle = json.color;
        context.moveTo(json.coords.x + 75, json.coords.y + 25);
        context.quadraticCurveTo(json.coords.x + 25, json.coords.y + 25, json.coords.x + 25, json.coords.y + 62.5);
        context.quadraticCurveTo(json.coords.x + 25, json.coords.y + 100, json.coords.x + 50, json.coords.y + 100);
        context.quadraticCurveTo(json.coords.x + 50, json.coords.y + 120, json.coords.x + 30, json.coords.y + 125);
        context.quadraticCurveTo(json.coords.x + 60, json.coords.y + 120, json.coords.x + 65, json.coords.y + 100);
        context.quadraticCurveTo(json.coords.x + 125, json.coords.y + 100, json.coords.x + 125, json.coords.y + 62.5);
        context.quadraticCurveTo(json.coords.x + 125, json.coords.y + 25, json.coords.x + 75, json.coords.y + 25);
        context.stroke();

    } else if (json.shape === "stickyNote") {

        var text = json.note;
        context.shadowColor = 'black';
        context.shadowBlur = 15;
        context.shadowOffsetY = 10

        context.lineWidth = 4;
        context.fillStyle = json.color;
        context.beginPath();
        context.fillRect(json.coords.x, json.coords.y, 70, 70);
        context.closePath();
        context.fill();
        context.textAlign= "center";
        context.textBaseline = "middle";
        context.fillStyle = "black"; // font color to write the text with
        var font_style_Note = document.getElementById('input-font-Note').value
        context.font = "15px" + " " + font_style_Note;


// Move it down by half the text height and left by half the text width
       var width = 70
       var height = 70
       context.fillText(text, json.coords.x + (width/2),json.coords.y + (height/2));

    } else if (json.shape === "heart") {
        context.beginPath();
        context.moveTo(json.coords.x + 75, json.coords.y + 40);
        context.bezierCurveTo(json.coords.x + 75, json.coords.y + 37, json.coords.x + 70, json.coords.y + 25, json.coords.x + 50, json.coords.y + 25);
        context.bezierCurveTo(json.coords.x + 20, json.coords.y + 25, json.coords.x + 20, json.coords.y + 62.5, json.coords.x + 20, json.coords.y + 62.5);
        context.bezierCurveTo(json.coords.x + 20, json.coords.y + 80, json.coords.x + 40, json.coords.y + 102, json.coords.x + 75, json.coords.y + 120);
        context.bezierCurveTo(json.coords.x + 110, json.coords.y + 102, json.coords.x + 130, json.coords.y + 80, json.coords.x + 130, json.coords.y + 62.5);
        context.bezierCurveTo(json.coords.x + 130, json.coords.y + 62.5, json.coords.x + 130, json.coords.y + 25, json.coords.x + 100, json.coords.y + 25);
        context.bezierCurveTo(json.coords.x + 85, json.coords.y + 25, json.coords.x + 75, json.coords.y + 37, json.coords.x + 75, json.coords.y + 40);
        context.fillStyle = json.color
        context.fill();

    }
        else if (json.shape === "vid") {
        var video = document.createElement("video");
        //video.src = "http://techslides.com/demos/sample-videos/small.mp4";
        video.src = document.getElementById("Vidsrc").value
        video.addEventListener('loadeddata', function() {
            video.play();
            update();
        });
        function update(){
            context.drawImage(video,json.coords.x,json.coords.y,100,100);
            requestAnimationFrame(update);
        }

        }

    //Loads image from file system and draws on canvas
    else if (json.shape === "load") {
        const fileUpload = document.getElementById('imageLoader');
        fileUpload.addEventListener('change', function (e) {
            let imgObj = new Image();
            imgObj.onload = drawImg;
            imgObj.src = URL.createObjectURL(this.files[0]);
        });


        function drawImg() {
            context.drawImage(this, json.coords.x, json.coords.y, 250, 250);
            var dataURL = board.toDataURL();
            console.log(dataURL)
        }
    }


// Allows freehand Draw
    else if (json.shape === "draw") {
        board.addEventListener("mousedown", startPosition);
        board.addEventListener("mouseup", endPosition);
        board.addEventListener("mousemove", draw);
        let painting = false;
        const draw_width = document.getElementById("lineWidth").value;

        function startPosition(e) {
            painting = true;
            draw(e)
            e.preventDefault()

        }

        function endPosition() {
            painting = false;
            context.beginPath();

        }

        function draw(e) {
            if (!painting) return;
            context.lineWidth = draw_width;
            context.lineCap = "round";
            context.lineTo(e.clientX, e.clientY);
            context.stroke();
            context.beginPath();
            context.moveTo(e.clientX, e.clientY);
            context.strokeStyle = json.color;

        }

        window.requestAnimationFrame(draw)
    } else {
        context.fillRect(json.coords.x, json.coords.y, 10, 10);

    }
}

// Takes a Screenshot of canvas converts to binary and sends through server
function ImageAsBinary(place) {
    var datas = new Uint8Array(place);
    var capturedInput = context.createImageData(board.width, board.height);

    for (var i = 8; i < capturedInput.data.length; i++) {
        capturedInput.data[i] = datas[i];
    }
    context.putImageData(capturedInput, 0, 0);

    var img = document.createElement('img');
    img.height = board.height;
    img.width = board.width;
    img.src = board.toDataURL();
}

function BinaryCaller() {
    var image = context.getImageData(0, 0, board.width, board.height);
    var buffer = new ArrayBuffer(image.data.length);
    var bytes = new Uint8Array(buffer);
    for (var i = 0; i < bytes.length; i++) {
        bytes[i] = image.data[i];
    }
    BinaryData(buffer);
}

