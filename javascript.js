function zoomIn(img) {
    var expandedImg = document.getElementById("zoomedIn");
    expandedImg.src = img.src;
    expandedImg.className = img.id;
    expandedImg.parentElement.style.display = "block";
}

function zoomOut() {
    document.getElementById("container").style.display="none";
}

function prevImg() {
    var nextImg = "";
    var expandedImg = document.getElementById("zoomedIn");
    var imgId = expandedImg.className;
    console.log(expandedImg.className);
    var newId = parseInt(imgId) - 1;
    console.log(newId);
    if (imgId == "1") {
        newId = "8";
    }
    nextImg = document.getElementById(newId);
    expandedImg.src = nextImg.src;
    expandedImg.className = newId;
    imgId = newId;
}

function nextImg() {
    var nextImg = "";
    var expandedImg = document.getElementById("zoomedIn");
    var imgId = expandedImg.className;
    console.log(expandedImg.className);
    var newId = parseInt(imgId) + 1;
    console.log(newId);
    if (imgId == "8") {
        newId = "1";
    }
    nextImg = document.getElementById(newId);
    expandedImg.src = nextImg.src;
    expandedImg.className = newId;
    imgId = newId;
}