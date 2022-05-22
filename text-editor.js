//agar beech line me kuch add karna ho to kaise karege
//bold italic
//
let editor = document.getElementById("text-editor");
// console.log(editor.children[0].innerHTML);
function addSeg(_type) {
    //
    document.getElementById("tableParams").classList.remove("show");
    document.getElementById("img-loader").classList.remove("show");
    // 
    switch (_type) {
        case "h2":
            editor.innerHTML += `<h2 >Heading</h2>`;
            break;
        case "p":
            editor.innerHTML += `<p>Paragraph</p>`;
            break;
        case "table":
            if(document.getElementById("tableParams").classList.contains("show")){
                document.getElementById("tableParams").classList.remove("show");   
            }else{

                document.getElementById("tableParams").classList.add("show");
            }
            
            break;
        case "h2":
            editor.innerHTML += `<h2 >Heading</h2>`;
            break;
        case "image":
            if(document.getElementById("img-loader").classList.contains("show")){
                document.getElementById("img-loader").classList.remove("show");   
            }else{

                document.getElementById("img-loader").classList.add("show");
            }
            break;
        case "p":
            editor.innerHTML += `<p>Paragraph</p>`;
            break;

        default:
            editor.innerHTML += `<p >Paragraph</p>`;


    }
}

function addTable() {
    let numRow = document.getElementById("numRow").value;
    let numCol = document.getElementById("numRow").value;;
    if (numCol + numRow > 0) {
        document.getElementById("tableParams").classList.remove("show");
        let tableElems = `<table id="table">`;
        for (let i = 0; i < numRow; i++) {
            tableElems += "<tr>";
            for (let j = 0; j < numCol; j++) {
                if (i == 0) {
                    tableElems += "<th>hoooo</th>";
                } else {
                    if(i%2){
                        tableElems += "<td>hoooo</td>";
                    }
                    else{
                        tableElems += "<td id='colcol'>hoooo</td>";
                    }
                }

            }
            tableElems += "</tr>";
        }
        tableElems += "</table>"
        // console.log(tableElems)
        editor.innerHTML += tableElems;
    }
}
function loadImg(){
    let imgCont=document.getElementById("previewImg");
    this.img = document.createElement("img");
    this.img.src= document.getElementById("imgurl").value
    //preview
    // imgCont.append(this.img);viewImg
    editor.append(this.img)
    document.getElementById("img-loader").classList.remove("show");
    // doesFileExist(this.img.src);
    
    // console.log(this.img.)
}
// saveData()
function saveData(){
    let newdata = [];
    // let newArticle = editor.innerHTML;
    // let length = editor.childElementCount; 
    // **************************************
    // to make object
    for (let i = 0; i < editor.children.length; i++) {
        const element = editor.children[i];
        if(element.tagName.toLowerCase().toString()=="img"){
            
            newelement={"type": element.tagName.toLowerCase().toString(),
        "content": element.src};
        }else{
            
            newelement={"type": element.tagName.toLowerCase().toString(),
        "content": element.innerText};
        }
        

        newdata.push(newelement)
    }
    // to make string
    let clip = `[`;
    for (let i = 0; i < editor.children.length; i++) {
        const element = editor.children[i];
        if(element.tagName.toLowerCase().toString()=="img"){
            
            clip+=`{"type": "`+element.tagName.toLowerCase().toString()+`",
        "content":"`+ element.src+`"}`;
        }else{
            clip+=`{"type": "`+element.tagName.toLowerCase().toString()+`",
        "content":"`+ element.innerText+`"}`;
        }
        if(i+1<editor.children.length){

            clip += "," ;        
        }
    
    // newdata.push(newelement)
}
clip+="]";        

    // console.log(newdata)
//     console.log(clip)
    navigator.clipboard.writeText(clip);
    saveSnackbar();
}
function saveSnackbar() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
