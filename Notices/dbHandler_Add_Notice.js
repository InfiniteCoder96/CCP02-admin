
   

  function save_notice(){
   var notice_topic = document.getElementById('notice_topic').value;
   var notice_description = document.getElementById('notice_description').value;
  
   var nid = firebase.database().ref().child('notices').push().key;
   
   var data = {
    notice_id: nid,
    notice_topic: notice_topic,
	notice_description: notice_description
   }
   
   var updates = {};
   updates['/notices/' + nid] = data;
   firebase.database().ref().update(updates);
   
   alert('The notice is created successfully!');
   reload_page();
  }
  
  function update_notice(){
   var notice_topic = document.getElementById('notice_topic').value;
   var notice_description = document.getElementById('notice_description').value;
   var notice_id = document.getElementById('notice_id').value;

   var data = {
    notice_id: notice_id,
    notice_topic: notice_topic,
	notice_description: notice_description
   }
   
   var updates = {};
   updates['/notices/' + notice_id] = data;
   firebase.database().ref().update(updates);
   
   alert('The notice is updated successfully!');
   
   reload_page();
  }
  
  function delete_notice(){
   var notice_id = document.getElementById('notice_id').value;
  
   firebase.database().ref().child('/notices/' + notice_id).remove();
   alert('The notice is deleted successfully!');
   reload_page();
  }
  
  function reload_page(){
   window.location.reload();
  }
  