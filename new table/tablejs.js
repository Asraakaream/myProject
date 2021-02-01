var entry = document.getElementById("entry");
entry.addEventListener("click", displaydetails);

 var row = 1;
function displaydetails() {
    var id = document.getElementById("myid").value ;
    var Name = document.getElementById("myname").value ;
    var age = document.getElementById("myage").value ;
    
    if ( !id || !Name || !age ){
    alert("please fill all the inputs");
    return;
    }

    var display = document.getElementById("display");
    var newRow = display.insertRow(row);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    cell1.innerHTML = id ;
    cell2.innerHTML = Name ;
    cell3.innerHTML = age ;

    row++;
}

 