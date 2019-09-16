
   

  function save_n(){

   var q_topic = document.getElementById('q_topic').value;
   var q_ans1 = document.getElementById('q_ans1').value;
   var q_ans2 = document.getElementById('q_ans2').value;
   var q_ans3 = document.getElementById('q_ans3').value;
   var q_ans4 = document.getElementById('q_ans4').value;
   var qid = firebase.database().ref().child('quiz').push().key;
   
   var data = {
    q_id: qid,
    q_topic: q_topic,
	q_ans1: q_ans1,
	q_ans2: q_ans2,
	q_ans3: q_ans3,
	q_ans4: q_ans4
   }
   
   var updates = {};
   updates['/quiz/' + qid] = data;
   firebase.database().ref().update(updates);
   
   alert('The question is created successfully!');
   reload_page();
  }
  
  function update_n(){

   var q_topic = document.getElementById('q_topic').value;
   var q_ans1 = document.getElementById('q_ans1').value;
   var q_ans2 = document.getElementById('q_ans2').value;
   var q_ans3 = document.getElementById('q_ans3').value;
   var q_ans4 = document.getElementById('q_ans4').value;
   var q_id = document.getElementById('q_id').value;


   var data = {
    q_id: q_id,
    q_topic: q_topic,
    q_ans1: q_ans1,
	q_ans2: q_ans2,
	q_ans3: q_ans3,
	q_ans4: q_ans4
   }
   
   var updates = {};
   updates['/quiz/' + q_id] = data;
   firebase.database().ref().update(updates);
   
   alert('The question is updated successfully!');
   
   reload_page();
  }
  
  function delete_n(){
   var q_id = document.getElementById('q_id').value;
  
   firebase.database().ref().child('/quiz/' + q_id).remove();
   alert('The question is deleted successfully!');
   reload_page();
  }
  
  function reload_page(){
   window.location.reload();
  }
  