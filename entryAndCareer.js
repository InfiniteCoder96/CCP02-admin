

//daki

function Olevel(){
    var checkBox = document.getElementById("edu_rq");

    var OL= document.getElementById("OL");


    if (checkBox.checked == true){
        OL.style.display = "block";

    } else {
        OL.style.display = "none";

    }


}
function Alevel() {
    var checkBox = document.getElementById("edu_rq");
    var AL=document.getElementById("AL");

    if (checkBox.checked == true){
        AL.style.display = "block";

    } else {
        AL.style.display = "none";

    }

}

var option = ["SMaths", "SBiology", "SCommerce", "SOther"];
var dropdown = document.getElementById("stream");
dropdown.onchange=function () {

    for (var x = 0; x < option.length; x++) {

        document.getElementById(option[x]).style.display = "none";
    }
    document.getElementById(this.value).style.display = "block";

}

document.getElementById("Add").onclick=function() {
    var form = document.getElementById("myForm");
    var input = document.createElement("input");
    input.type = "text";
    var br = document.createElement("br");
    form.appendChild(input);
    form.appendChild(br);
    form.appendChild(br);
}

var ids=["Local Degree","Foreign Degree","Foundation Programme"];
var Dropdown=document.getElementById("type");
Dropdown.onchange=function () {
    for (var x = 0; x < ids.length; x++) {

        document.getElementById(ids[x]).style.display = "none";
    }
    document.getElementById(this.value).style.display = "block";

}

//has

var firebaseConfig = {
    apiKey: "AIzaSyDPkSmKr-2T6C0_1SFwjWeRFlCzzL5VXc0",
    authDomain: "s2guide.firebaseapp.com",
    databaseURL: "https://s2guide.firebaseio.com",
    projectId: "s2guide",
    storageBucket: "s2guide.appspot.com",
    messagingSenderId: "457852779269",
    appId: "1:457852779269:web:7e27f12f4d807544"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var rIndex,tableLocal;

function init()
{
    document.getElementById("local_form").style.display = "none";
    document.getElementById("career_form").style.display = "none";

    var databaseRef = firebase.database().ref('Local/');
    databaseRef.on('value', loadDataFromDB, errorLoading);
}

function loadDataFromDB(data)
{
    var childData = data.val();
    var keys = Object.keys(childData);

    for(var i=0; i<keys.length; i++)
    {
        //var k = document.getElementById('degree_id');
        var k = keys[i];

        var type = childData[k].type;
        var code = childData[k].degree_code;
        var title = childData[k].degree_title;
        var faculty = childData[k].faculty;

        tableLocal = document.getElementById('table_list');
        var row = tableLocal.insertRow(rIndex);

        var cellType = row.insertCell(0)
        var cellCode = row.insertCell(1);
        var cellTitle = row.insertCell(2);
        var cellFaculty = row.insertCell(3);
        var cellDelete = row.insertCell(4);

        cellType.appendChild(document.createTextNode(type));
        cellCode.appendChild(document.createTextNode(code));
        cellTitle.appendChild(document.createTextNode(title));
        cellFaculty.appendChild(document.createTextNode(faculty));

        cellDelete.outerHTML = "<tr id="+k+"><button type='button' id="+k+" class='btn btn-outline-primary' onClick='load_form_update();'><i class='fas fa-edit'></i></button><button type='button' class='btn btn-outline-primary' onClick='delete_LocalDegree();'><i class='far fa-trash-alt'></i></button></tr>"

    }
}

function selectedRowToInput(k)
{
    var tables = document.getElementById('tableLocal');

    /*for(var i = 1; i < tableLocal.rows.length; i++)
    {
        tableLocal.rows[i].onclick = function()
        {
            // get the selected row index
            rIndex = this.rowIndex;
            //document.getElementById("degree_code").value = this.cells[0].innerHTML;
            //document.getElementById("degree_title").value = this.cells[1].innerHTML;
            //document.getElementById("faculty").value = this.cells[2].innerHTML;
            //document.getElementById("duration").value = this.cells[3].innerHTML;
            //document.getElementById("entry").value = this.cells[4].innerHTML;
            //document.getElementById("locations").value = this.cells[5].innerHTML;
        };
    }*/

}

function errorLoading(err)
{
    console.log("error!");
    console.log(err);
}

function load_form_add()
{
    document.getElementById("local_table").style.display = "none";
    document.getElementById("career_form").style.display = "none";
    document.getElementById("local_form").style.display = "block";
}

function save_LocalDegree()
{
    var type = document.getElementById('type').value;
    var degree_code = document.getElementById('degree_code').value;
    var degree_title = document.getElementById('degree_title').value;
    var faculty = document.getElementById('faculty').value;
    var duration = document.getElementById('duration').value;

    var valEntry = "";
    for (var i=0;i<entry.length;i++)
    {
        if (entry[i].checked)
        {
            valEntry = valEntry + entry[i].value + " ";
        }
    }

    var valLocation = "";
    for (var j=0;j<locations.length;j++)
    {
        if (locations[j].checked)
        {
            valLocation = valLocation + locations[j].value + " ";
        }
    }

    var valEducationalRq = "";
    for(var i=0; i<edu_rq.length; i++)
    {
        if(edu_rq[i].checked)
        {
            valEducationalRq = valEducationalRq + edu_rq[i].value + " ";
        }
    }

    var Iid = firebase.database().ref().child('Local').push().key;

    var data = {
        degree_id: Iid,
        type: type,
        degree_code: degree_code,
        degree_title: degree_title,
        faculty: faculty,
        duration: duration,
        entry: valEntry,
        locations: valLocation,
        edu_rq: valEducationalRq
    }

    var result = confirm("Do you really want to add a degree?");
    if (result) {
        var updates = {};
        updates['/Local/' + Iid] = data;
        firebase.database().ref().update(updates);
    }

    alert('A Local degree is added successfully!');
    reload_page();

}

function load_form_update()
{
    document.getElementById("local_table").style.display = "none";
    document.getElementById("local_form").style.display = "block";
}

function update_LocalDegree()
{
    var degree_code = document.getElementById('degree_code').value;
    var degree_title = document.getElementById('degree_title').value;
    var faculty = document.getElementById('faculty').value;
    var duration = document.getElementById('duration').value;

    var valEntry = "";
    for (var i=0;i<entry.length;i++)
    {
        if (entry[i].checked)
        {
            valEntry = valEntry + entry[i].value + " ";
        }
    }

    var valLocation = "";
    for (var j=0;j<locations.length;j++)
    {
        if (locations[j].checked)
        {
            valLocation = valLocation + locations[j].value + " ";
        }
    }

    var degree_id = document.getElementById('degree_id').value;

    var data = {
        degree_code: degree_code,
        degree_id: degree_id,
        degree_title: degree_title,
        faculty: faculty,
        duration: duration,
        entry: valEntry,
        locations: valLocation
    }

    var result = confirm("Do you really want to update?");
    if (result) {
        var updates = {};
        updates['/Local/' + degree_id] = data;
        firebase.database().ref().update(updates);
    }
    alert('A Local Degree is updated successfully!');
    reload_page();
}

function delete_LocalDegree(){
    var result = confirm("Do you really want to delete?");
    if (result) {
        var degree_id = document.getElementById('degree_id').value;
        firebase.database().ref().child('/Local/' + degree_id).remove();
    }
    alert('A Local Degree is deleted successfully!');
    reload_page();
}

function reload_page()
{
    window.location.reload();
}

function entry_career(){
    document.getElementById("career_form").style.display = "block";
    document.getElementById("local_form").style.display = "none";
}