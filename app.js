const data = [
    {
        name: 'Manik Sheak',
        age: 18,
        gender: 'male',
        lookingfor: 'female',
        location: 'Boston MA',
        image:'img/manik.JPG'
    }, 
    {
        name: 'John Smith',
        age: 20,
        gender: 'female',
        lookingfor: 'female',
        location: 'Miami FL',
        image: 'img/Jen.JPG'
    },
    {
        name: 'William Johnson',
        age: 17,
        gender: 'male',
        lookingfor: 'female',
        location:'Lynn MA',
        image: 'img/John.jpg'
    },
];

  const profiles = profileIterator(data);

//  Call First Profile
    nextProfile();  

// Next Event
   document.getElementById('next').addEventListener('click', nextProfile); 

// Nexr profile display
    function nextProfile() {
        const currentProfile = profiles.next().value;

        if(currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
          <ul class = "list-group">
            <li class = "list-group-item"> Name: ${currentProfile.name}</li>
            <li class = "list-group-item"> Age: ${currentProfile.age}</li>
            <li class = "list-group-item"> Location: ${currentProfile.location}</li>
            <li class = "list-group-item"> Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
          </ul>
        `;

        document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
    } else {
        window.location.reload();
    }
    } 

// Profile Iterator
   function profileIterator(profiles)  {
       let nextIndex = 0;

       return {
           next: function() {
               return nextIndex < profiles.length ?
               { value: profiles[nextIndex++], done: false} : 
               { done: true}
           }
       };
   } 
