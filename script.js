var repo =[];
var nam = []
function myFunction(){
    console.log("hi")
    var val  = document.getElementById('search').value
 var url = 'https://api.github.com/users/'+val+'/repos'    
 var data = JSON.parse(Get(url));
  repo = []
nam =[]
 data.forEach(element => {
     repo.push(element.html_url);
     
 });
 data.forEach(element => {
nam.push(element.name)
});
 console.log(repo)
 console.log(nam)
 var div = document.createElement("div");
 div.id ='div'
 var p = document.createElement("div");
 p.innerHTML = 'Click on the name to view the repo'
p.style="font-weight: bold; font-size:20px;font-family: Serif;font-style: italic;color: rgb(3, 26, 61);padding-top:30px;height: 10%;margin-bottom:2%;margin-left:3%"
 var ul = document.createElement('ul')
    ul.id = 'ul'
    
    // for each loop to display repo link
    for(i=0;i<=nam.length;i++){
        var li = document.createElement('li')
        li.className = 'li'
         var anchr= document.createElement('a')
         anchr.href = repo[i]
         anchr.target="_blank";
         anchr.style="font-weight: bold; font-size:20px;font-family: Serif;color:rgb(29, 155, 228);padding-top:30px;height: 10%;margin-bottom:2%;margin-left:1%"
        anchr.innerHTML = nam[i]
        li.appendChild(anchr)
        ul.appendChild(li)}

div.appendChild(p)
div.appendChild(ul)
document.getElementById('repo').innerHTML= div.innerHTML
    }

// function get the JSON DATA from the API
function Get(yourUrl) {
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET", yourUrl, false);
    Httpreq.send(null);
    return Httpreq.responseText;
}