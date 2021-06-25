var url = "https://api.minetools.eu/ping/144.91.120.249/25566";

$.getJSON(url, function(r) {
    //data is the JSON string
 if(r.error){
    $('#rest').html('Server Offline');
   return false;
 }
var pl = '';
 if(r.players.sample.length > 0 ) {
   var nameList = [];
   for (var i = 0; i < r.players.sample.length; i++) {
     nameList.push(r.players.sample[i].name);
   }

   pl = '<br>Players: '+ nameList.join(", ");
 }
 $('#rest').html(r.description.replace(/§(.+?)/gi, '')+'<br><b>Players Online:</b> '+r.players.online+pl);
 $('#favicon').attr('src', r.favicon);
});
