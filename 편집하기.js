function handlePaste (e) {
    var clipboardData, pastedData;
 
    e.stopPropagation();
    e.preventDefault();
 
    clipboardData = e.clipboardData || window.clipboardData;
    pastedData = clipboardData.getData('Text');
    
    alert(pastedData);
}

//document.getElementById('pasteBtn').addEventListener('click', function () {
//    document.getElementById('edit_textarea').addEventListener('paste', handlePaste);});


function edit_copy() {
    var copyText = document.getElementById('edit_textarea');
    copyText.select();
    document.execCommand('copy');
    alert("Copy Success");
}

function allDelete() {
    document.getElementById('cutBtn');
    var textArea = document.getElementById('edit_textarea');
    textArea.value=""
}