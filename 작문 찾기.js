var tag = document.getElementsByClassName("tag");
var table = document.getElementById("all_box");

function categoryCilck (tagNumber) 
{
    var table = document.getElementById("all_box");
    var tableChild = table.childNodes;
    for(i=0; i<tableChild.length; i++)
        table.removeChild(tableChild[i]);
    
        var row=""
        for(i=0; i <ssusage_data.length-2; i+=2) {
            if(ssusage_data[i][tagNumber]==1) {
                row += `<tr>
                            <td class="message_box" data-clipboard-text="${ssusage_data[i][0]}" >${ssusage_data[i][0]}</td><td class="message_box" data-clipboard-text="${ssusage_data[i+1][0]}">${ssusage_data[i+1][0]}</td>
                        </tr>`
            }
        }
        table.innerHTML= row;
}

function search() {
    var value = document.getElementById("search_content").value;
    var item = document.getElementsByClassName("message_box");

    for(var i=0; i<item.length; i++){

        if(item[i].innerHTML.indexOf(value) > -1)
            item[i].style.display = "flex";
        else
            item[i].style.display = "none";
    }
}