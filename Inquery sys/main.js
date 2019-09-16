alert("helloo");
var database;
var firebaseConfig = {
    apiKey: "AIzaSyAwrsDvmof984rMnalGbZZwMILihrLtPm0",
    authDomain: "s2-guide.firebaseapp.com",
    databaseURL: "https://s2-guide.firebaseio.com",
    projectId: "s2-guide",
    storageBucket: "",
    messagingSenderId: "971496001385",
    appId: "1:971496001385:web:5cbc8a5550fe0dfd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebase);

  database = firebase.database();
  var tempInqId;
  var rIndex, tblNotices;
  function submitIquiry(){
    var ref = database.ref('inquiry_list/');
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    //alert(name);
    var data = {
        name : name,
        email : email,
        subject : subject,
        message : message,
        readBit : 1
    }
    ref.push(data);
  }

  function onLoad(){
      var ref = database.ref('inquiry_list/');
      ref.on('value',loadData,errData);
  }

  function loadData(data){
    //console.log(data.val());
    var inquiries = data.val();
    var keys = Object.keys(inquiries);
    //console.log(keys);
    for(var i=0;i<keys.length;i++){
      var k = keys[i];
      var uName = inquiries[k].name;
      var subject = inquiries[k].subject;
      var msg = inquiries[k].message;
      var date = inquiries[k].date;
      //creating elements
      var mainDiv = document.getElementById("row");
      var divName = document.getElementById("div_name");
      var ename = document.createElement("h4");
      ename.innerHTML = uName;
      var line = document.getElementById("list");
      //line.outerHTML = "<div class="col-md-2" id="div_name">aaaa </div>";

      console.log(k,uName,subject,msg,date);

      tblNotices = document.getElementById('inq_list');
      var row = tblNotices.insertRow(rIndex);

      var userNamecel = row.insertCell(0);
      var subjectcell = row.insertCell(1);
      var msgcell = row.insertCell(2);
      var datecell = row.insertCell(3);
      var actionscell = row.insertCell(4);
      var inqID = row.insertCell(5);
//add if else function to change row color according to readbit
      userNamecel.appendChild(document.createTextNode(uName));
      subjectcell.appendChild(document.createTextNode(subject));
      msgcell.appendChild(document.createTextNode(msg));
      actionscell.outerHTML = "<tr id="+k+"><button type='button' id="+k+" class='btn btn-outline-primary' onClick='manInq("+i+");'><i class='fas fa-edit'></i></button><button type='button' class='btn btn-outline-primary' onClick='deleteInquiry();'><i class='far fa-trash-alt'></i></button></tr>"
      datecell.appendChild(document.createTextNode(date));
      inqID.appendChild(document.createTextNode(k));

    }
  }

  function manInq(k){
    //var id = option;
      var tbl = document.getElementById('tblNotices');

    alert("manq" + k);
    /*for(var i = 1; i < tblNotices.rows.length; i++)
                {
                    tblNotices.rows[i].onclick = function()
                    {
                      // get the selected row index
                      rIndex = this.rowIndex;
                      //document.getElementById("selectedId").value = this.cells[5].innerHTML;
                      alert('tableid');
                    };
                }*/
  }
  function readInquiry(id){
    alert(id);
  }
  function deleteInquiry(){

  }
  function errData(err){
    console.log("error!");
    console.log(err);
  }