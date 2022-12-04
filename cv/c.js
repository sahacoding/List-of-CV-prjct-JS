console.log("CV")

// Data is an array of objects which contains information about the candidates

const data = [
    {
        Name : 'Arpan Saha',
        age : 26,
        city : "Halisahar",
        language : 'python',
        framework : 'Django',
        image : "https://randomuser.me/api/portraits/men/75.jpg",
    },

    {
        Name : 'Rohan Das',
        age : 28,
        city : "Kolkata",
        language : 'javascript',
        framework : 'Angular',
        image : "https://randomuser.me/api/portraits/men/73.jpg",
    },

    {
        Name : 'Avijit Mondal',
        age : 26,
        city : "Mumbai",
        language : 'python',
        framework : 'Django',
        image : "https://randomuser.me/api/portraits/men/71.jpg",
    },

    {
        Name : 'Snigdha Saha',
        age : 26,
        city : "Kerala",
        language : 'javascript',
        framework : 'Django',
        image : "https://randomuser.me/api/portraits/women/70.jpg",
    }
]

// CV iterator
function cvIterator(profiles){
    let nextIndex = 0;
    return{
        next : function() {
            return nextIndex < profiles.length ?
            {value: profiles[nextIndex++], done: false} :
            {done: true}
        }
    };
}
const candidates = cvIterator(data)

nextCV();
//Button listner for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);


function nextCV(){

    const currentCandidate= candidates.next().value;
    

    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){

    image.innerHTML = `<image src='${currentCandidate.image}'>`;

    profile.innerHTML = `<ul class="list-group">
  <li class="list-group-item">Name :
  ${currentCandidate.name}</li>
  <li class="list-group-item">Age : ${currentCandidate.age}</li>
  <li class="list-group-item">Lives in ${currentCandidate.city}</li>
  <li class="list-group-item">Primarily works on : ${currentCandidate.language}</li>
  <li class="list-group-item">with ${currentCandidate.framework} framework</li>
</ul>`;
    
}
else{
      alert('End of application');
      window.location.reload();
}
}
