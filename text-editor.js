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