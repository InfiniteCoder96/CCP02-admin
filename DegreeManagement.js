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
    var checkBox = document.getElementById("myCheck");
    var AL=document.getElementById("AL");

    if (checkBox.checked == true){
        AL.style.display = "block";
    } else {
        AL.style.display = "none";
    }
}

var option = ["Maths", "Bio Science", "Commerce", "Other Stream"];
var dropdown = document.getElementById("stream");
dropdown.onchange=function ()
{
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

//Author
//Hasini_Anthony
//I9829265
var tempLocal_id ="";
var rIndex,tableLocal, tableForeign, tableFoundation;

function init()
{
    document.getElementById("local_form").style.display = "none";
    document.getElementById("career_form").style.display = "none";

    var databaseRef_local = firebase.database().ref('Local/');
    databaseRef_local.on('value', loadDataFromDB_local, errorLoading);

    var databaseRef_foreign = firebase.database().ref('International/');
    databaseRef_foreign.on('value', loadDataFromDB_foreign, errorLoading);

    var databaseRef_foundation = firebase.database().ref('Foundation/');
    databaseRef_foundation.on('value', loadDataFromDB_foundation, errorLoading);
}

function loadDataFromDB_local(data)
{
    var childData = data.val();
    var keys = Object.keys(childData);

    for(var i=0; i<keys.length; i++)
    {
        //var k = document.getElementById('degree_id');
        var k = keys[i];

        var code = childData[k].degree_code;
        var title = childData[k].degree_title;
        var faculty = childData[k].faculty;

        tableLocal = document.getElementById('table_local');
        var row = tableLocal.insertRow(rIndex);

        var cellCode = row.insertCell(0);
        var cellTitle = row.insertCell(1);
        var cellFaculty = row.insertCell(2);
        var cellDelete = row.insertCell(3);

        cellCode.appendChild(document.createTextNode(code));
        cellTitle.appendChild(document.createTextNode(title));
        cellFaculty.appendChild(document.createTextNode(faculty));

        cellDelete.outerHTML = "<tr id="+k+"><button type='button' id="+k+" class='btn btn-outline-primary' onClick='load_form_update(this);'><i class='fas fa-edit'></i></button><button type='button' id = "+k+" class='btn btn-outline-primary' onClick='delete_LocalDegree(this);'><i class='far fa-trash-alt'></i></button></tr>"

    }
}

function loadDataFromDB_foreign(data)
{
    var childData = data.val();
    var keys = Object.keys(childData);

    for(var i=0; i<keys.length; i++)
    {
        //var k = document.getElementById('degree_id');
        var k = keys[i];

        var code = childData[k].foreign_degree_code;
        var title = childData[k].foreign_degree_title;
        var faculty = childData[k].fac;
        var university = childData[k].uni;

        tableForeign = document.getElementById('table_foreign');
        var row = tableForeign.insertRow(rIndex);

        var cellCode = row.insertCell(0);
        var cellTitle = row.insertCell(1);
        var cellFaculty = row.insertCell(2);
        var cellUni = row.insertCell(3);
        var cellDelete = row.insertCell(4);

        cellCode.appendChild(document.createTextNode(code));
        cellTitle.appendChild(document.createTextNode(title));
        cellFaculty.appendChild(document.createTextNode(faculty));
        cellUni.appendChild(document.createTextNode(university));

        cellDelete.outerHTML = "<tr id="+k+"><button type='button' id="+k+" class='btn btn-outline-primary' onClick='load_form_update(this);'><i class='fas fa-edit'></i></button><button type='button' id="+k+" class='btn btn-outline-primary' onClick='delete_ForeignDegree(this);'><i class='far fa-trash-alt'></i></button></tr>"

    }
}

function loadDataFromDB_foundation(data)
{
    var childData = data.val();
    var keys = Object.keys(childData);

    for(var i=0; i<keys.length; i++)
    {
        //var k = document.getElementById('degree_id');
        var k = keys[i];

        var code = childData[k].course_code;
        var title = childData[k].course_title;
        var faculty = childData[k].faculty_f;
        var university = childData[k].uni_f;

        tableFoundation = document.getElementById('table_foundation');
        var row = tableFoundation.insertRow(rIndex);

        var cellCode = row.insertCell(0);
        var cellTitle = row.insertCell(1);
        var cellFaculty = row.insertCell(2);
        var cellUni = row.insertCell(3);
        var cellDelete = row.insertCell(4);

        cellCode.appendChild(document.createTextNode(code));
        cellTitle.appendChild(document.createTextNode(title));
        cellFaculty.appendChild(document.createTextNode(faculty));
        cellUni.appendChild(document.createTextNode(university));

        cellDelete.outerHTML = "<tr id="+k+"><button type='button' id="+k+" class='btn btn-outline-primary' onClick='load_form_update(this);'><i class='fas fa-edit'></i></button><button type='button' id = "+k+" class='btn btn-outline-primary' onClick='delete_Foundation(this);'><i class='far fa-trash-alt'></i></button></tr>"

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
    //local degree only
    var type = document.getElementById('type').value;
    var degree_code = document.getElementById('degree_code').value;
    var degree_title = document.getElementById('degree_title').value;
    var faculty = document.getElementById('faculty').value;
    var duration = document.getElementById('duration').value;
    var descriptions = document.getElementById('descriptions').value;
    var Technology = document.getElementById('cat1').value;
    var Analytical = document.getElementById('cat2').value;
    var Mathematical = document.getElementById('cat3').value;
    var Creativity = document.getElementById('cat4').value;
    var Management = document.getElementById('cat5').value;
    var Intake = "";
    for (var i=0;i<entry.length;i++)
    {
        if (entry[i].checked)
        {
            Intake = Intake + entry[i].value + " ";
        }
    }
    var Locations = "";
    for (var j=0;j<locations.length;j++)
    {
        if (locations[j].checked)
        {
            Locations = Locations + locations[j].value + " ";
        }
    }
    var Approvals = "";
    for(var i=0; i<arm.length; i++)
    {
        if(arm[i].checked)
        {
            Approvals = Approvals + arm[i].value + " ";
        }
    }

    //ordinary level
    var Minimum_passes_ol = document.getElementById('minimum').value;
    var English = document.getElementById('english').value;
    var Mathematics = document.getElementById('mathematics').value;
    //advanced level
    var Stream = document.getElementById('stream').value;
    var Minimum_passes_al = document.getElementById('passes').value;
    //maths
    var Physics = document.getElementById('Physics').value;
    var Chemistry = document.getElementById('Chemistry').value;
    var Maths = document.getElementById('Math').value;
    var IT = document.getElementById('IT').value;
    //commerce
    var Econ = document.getElementById('Econ').value;
    var Accounting = document.getElementById('acc').value;
    var Business = document.getElementById('bus').value;
    var IT_Tech = document.getElementById('tch').value;
    //biology
    var Physics_b = document.getElementById('phys').value;
    var Chemestry_b = document.getElementById('chem').value;
    var Biology = document.getElementById('bio').value;
    var Technology_IT = document.getElementById('tech').value;
    //other
    var Subject1 = document.getElementById('sub1').value;
    var Result1 = document.getElementById('s1').value;
    var Subject2 = document.getElementById('sub2').value;
    var Result2 = document.getElementById('s2').value;
    var Subject3 = document.getElementById('sub3').value;
    var Result3 = document.getElementById('s3').value;

    var Career1 = document.getElementById('career_paths1').value;
    var Career2 = document.getElementById('career_paths2').value;
    var Career3 = document.getElementById('career_paths3').value;

    //Foreign degree only
    var foreign_degree_code = document.getElementById('foreign_degree_code').value;
    var foreign_degree_title = document.getElementById('foreign_degree_title').value;
    var fac = document.getElementById('fac').value;
    var uni = document.getElementById('uni').value;
    var country = document.getElementById('country').value;
    var dur = document.getElementById('dur').value;
    var desc = document.getElementById('desc').value;

    //Foundation only
    var course_code = document.getElementById('course_code').value;
    var course_title = document.getElementById('course_title').value;
    var faculty_f = document.getElementById('faculty_f').value;
    var uni_f = document.getElementById('uni_f').value;
    var country_f = document.getElementById('country_f').value;
    var duration_f = document.getElementById('duration_f').value;
    var des = document.getElementById('des').value;

    var ref = firebase.database().ref('Local/');
    var iref = firebase.database().ref('International/');
    var fref = firebase.database().ref('Foundation/');

    //local
    var data_maths = {
        type: type,
        degree_code: degree_code,
        degree_title: degree_title,
        faculty: faculty,
        duration: duration,
        Intake: Intake,
        Locations: Locations,
        Approvals: Approvals,
        "Category" : {
            Technology: Technology,
            Analytical: Analytical,
            Mathematical: Mathematical,
            Creativity: Creativity,
            Management: Management
        },
        descriptions: descriptions,
        "Ordinary Level" : {
            Minimum_passes_ol: Minimum_passes_ol,
            English: English,
            Mathematics: Mathematics
        },
        "Advanced Level" : {
            Stream: Stream,
            Minimum_passes_al: Minimum_passes_al,
            Physics: Physics,
            Chemistry: Chemistry,
            Maths: Maths,
            IT: IT
            },
        "Career Paths" : {
            Career1: Career1,
            Career2: Career2,
            Career3: Career3
        }
        }

    var data_com = {
        type: type,
        degree_code: degree_code,
        degree_title: degree_title,
        faculty: faculty,
        duration: duration,
        entry: Intake,
        locations: Locations,
        arm: Approvals,
        "Category" : {
            Technology: Technology,
            Analytical: Analytical,
            Mathematical: Mathematical,
            Creativity: Creativity,
            Management: Management
        },
        descriptions: descriptions,
        "Ordinary Level" : {
            Minimum_passes_ol: Minimum_passes_ol,
            English: English,
            Mathematics: Mathematics
        },
        "Advanced Level" : {
            Stream: Stream,
            Minimum_passes_al: Minimum_passes_al,
            Econ: Econ,
            Accounting: Accounting,
            Business: Business,
            IT_Tech: IT_Tech
        }
    }

    var data_bio = {
        type: type,
        degree_code: degree_code,
        degree_title: degree_title,
        faculty: faculty,
        duration: duration,
        entry: Intake,
        locations: Locations,
        arm: Approvals,
        "Category" : {
            Technology: Technology,
            Analytical: Analytical,
            Mathematical: Mathematical,
            Creativity: Creativity,
            Management: Management
        },
        descriptions: descriptions,
        "Ordinary Level" : {
            Minimum_passes_ol: Minimum_passes_ol,
            English: English,
            Mathematics: Mathematics
        },
        "Advanced Level" : {
            Stream: Stream,
            Minimum_passes_al: Minimum_passes_al,
            Physics_b: Physics_b,
            Chemestry_b: Chemestry_b,
            Biology: Biology,
            Technology_IT: Technology_IT
        }
    }

    var data_other = {
        type: type,
        degree_code: degree_code,
        degree_title: degree_title,
        faculty: faculty,
        duration: duration,
        entry: Intake,
        locations: Locations,
        arm: Approvals,
        "Category" : {
            Technology: Technology,
            Analytical: Analytical,
            Mathematical: Mathematical,
            Creativity: Creativity,
            Management: Management
        },
        descriptions: descriptions,
        "Ordinary Level" : {
            Minimum_passes_ol: Minimum_passes_ol,
            English: English,
            Maths: Maths
        },
        "Advanced Level" : {
            Stream: Stream,
            Minimum_passes_al: Minimum_passes_al,
            "Subject-1" : {
                Subject1 : Subject1,
                Result1: Result1
            },
            "Subject-2" : {
                Subject2 : Subject2,
                Result2: Result2
            },
            "Subject-3" : {
                Subject3 : Subject3,
                Result3: Result3
            }
        }
    }

    var data_any = {
        type: type,
        degree_code: degree_code,
        degree_title: degree_title,
        faculty: faculty,
        duration: duration,
        entry: Intake,
        locations: Locations,
        arm: Approvals,
        "Category" : {
            Technology: Technology,
            Analytical: Analytical,
            Mathematical: Mathematical,
            Creativity: Creativity,
            Management: Management
        },
        descriptions: descriptions,
        "Ordinary Level" : {
            Minimum_passes_ol: Minimum_passes_ol,
            English: English,
            Mathematics: Mathematics
        },
        "Advanced Level" : {
            Stream: Stream,
            Minimum_passes_al: Minimum_passes_al
        }
    }
    //foreign
   var data_fr = {
        type: type,
        foreign_degree_code: foreign_degree_code,
        foreign_degree_title: foreign_degree_title,
        fac: fac,
        uni: uni,
        country: country,
        dur: dur,
        entry: Intake,
        locations: Locations,
        arm: Approvals,
        desc: desc
    }

    //foundation
    var data_f = {
        type: type,
        course_code: course_code,
        course_title: course_title,
        faculty_f: faculty_f,
        uni_f: uni_f,
        country_f: country_f,
        entry: Intake,
        locations: Locations,
        des: des
    }

    if(type == 'Local Degree'){
        if(Stream == 'Combined_Maths'){
            ref.push(data_maths);
        }
        else if(Stream == 'Bio_Science'){
            ref.push(data_bio);
        }
        else if(Stream == 'Commerce'){
            ref.push(data_com);
        }
        else if(Stream == 'Other_Stream'){
            ref.push(data_other)
        }
        else if(Stream == 'Any_Stream'){
            ref.push(data_any);
        }

        /*var result = confirm("Do you really want to add a degree?");
        if (result) {
            var updates = {};
            updates['/Local/' + Iid] = data;
            firebase.database().ref().update(updates);
            alert('A local degree is added successfully!');
        }
        else{
            alert('Cancelled!');
        }*/
    }
    else if(type == 'Foreign Degree'){
        iref.push(data_fr);
        /*var result = confirm("Do you really want to add a degree?");
        if (result) {
            var updates = {};
            updates['/International/' + Iid] = data_fr;
            firebase.database().ref().update(updates);
            alert('A foreign degree is added successfully!');
        }
        else{
            alert('Cancelled!');
        }*/
    }
    else if(type == 'Foundation Programme'){
        fref.push(data_f);
        /*var result = confirm("Do you really want to add a course?");
        if (result) {
            var updates = {};
            updates['/Foundation/' + Iid] = data_f;
            firebase.database().ref().update(updates);
            alert('A Foundation course is added successfully!');
        }
        else{
            alert('Cancelled!');
        }*/
    }

    reload_page();
}

function load_form_update(obj)
{
    /*var type = document.getElementById('type').value;
    var degree_code = document.getElementById('degree_code').value;
    var degree_title = document.getElementById('degree_title').value;
    var faculty = document.getElementById('faculty').value;
    var duration = document.getElementById('duration').value;
    var descriptions = document.getElementById('descriptions').value;
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
    var valRecognition = "";
    for(var i=0; i<arm.length; i++)
    {
        if(arm[i].checked)
        {
            valRecognition = valRecognition + arm[i].value + " ";
        }
    }*/

    document.getElementById('selectedId').value = obj.id;
    tempLocal_id = obj.id;
    alert(tempLocal_id);

    document.getElementById("local_table").style.display = "none";
    //document.getElementById("local_form").style.display = "block";
    document.getElementById("div_degree_single").style.display = "block";

    var ref = firebase.database().ref('Local/'+tempLocal_id);
    ref.once('value',function(snapshot){
        //console.log(snapshot.val().name);
        //type = snapshot.val().type;
        degree_code = snapshot.val().degree_code;
        degree_title = snapshot.val().degree_title;
        faculty = snapshot.val().faculty;
        //duration = snapshot.val().duration;
        //valEntry = snapshot.val().entry;
        //valLocation = snapshot.val().locations;
        valRecognition = snapshot.val().arm;
        //descriptions = snapshot.val().descriptions;
    });

    document.getElementById('fid').innerHTML = tempLocal_id;
    document.getElementById('code_label').innerHTML = degree_code;
    document.getElementById('code_title').innerHTML = degree_title;
    document.getElementById('code_faculty').innerHTML = faculty;
    document.getElementById('code_approvals').innerHTML = valRecognition;
    //document.getElementById('lbl_msg').innerHTML = message;
}

function Update_Local()
{
    alert(tempLocal_id);
    var key = tempLocal_id;
    var code_label = document.getElementById("code_label").value;
    var data = {
        code_label : code_label
    }
    firebase.database().ref().child('Local/'+key).update(data);

    alert(code_label);
    alert('send successfully');
    reload_page();
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


function delete_LocalDegree(obj)
{
    alert(obj.id);
    var key = obj.id;
    firebase.database().ref().child('Local/'+key).remove();
           /*var result = confirm("Do you really want to delete?");
       if (result)
       {
           var key = document.getElementById('degree_id').value;
           alert(key);
          // firebase.database().ref().child('/Local/' + key).remove();
           //alert('A Local Degree is deleted successfully!');
        }
       else{
           alert("Cancelled!!")
       }*/
       reload_page();
}

function delete_ForeignDegree(obj)
{
    alert(obj.id);
    var key = obj.id;
    firebase.database().ref().child('International/'+key).remove();

    reload_page();
}

function delete_Foundation(obj)
{
    alert(obj.id);
    var key = obj.id;
    firebase.database().ref().child('Foundation/'+key).remove();

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

