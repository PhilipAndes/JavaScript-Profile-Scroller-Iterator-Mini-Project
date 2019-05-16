// To begin with, lets create the data: (usually the data would come from an API or database or some kind of backend, but in this case we are just going to create some ourself)
const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Boston MA',
        // The link here we get from an API portrait generator 
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: 'Jen Smith',
        age: 26,
        gender: 'female',
        lookingfor: 'male',
        location: 'Miami FL',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'William Johnson',
        age: 38,
        gender: 'male',
        lookingfor: 'female',
        location: 'Lynn MA', 
        image: 'https://randomuser.me/api/portraits/men/83.jpg'
    }
];

// After writing the function profileIterator below, we want to go under the data, (so right here) and initialize the variable profiles and set it to the profileIterator function, and we want to use the data here as parameter:
const profiles = profileIterator(data);

// We also need a clickevent, because when we click on the next button in the UI we want to iterate true the profiles:
// Next Event:
document.getElementById('next').addEventListener('click', nextProfile);

// Next profile Display
function nextProfile() {
    //We first need to iterate with profiles next() . value:
    const currentProfile = profiles.next().value;

    // Then we want the to put the content at the imageDisplay and profileDisplay in the UI, so lets say:
    // use backticks because we gonna use a template literal
    //Then we create a list with bootstrap classes to display the profile. 
    // Then we want the data from above:
    document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>   <li class="list-group-item">Location: ${currentProfile.location}</li>
            <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
        </ul>
    `;

    // Image display:
    document.getElementById('imageDisplay').innerHTML = `
    <img src="${currentProfile.image}">    
    `;
}


// So now lets create the actual iterator function:

// Profile Iterator:
function profileIterator(profiles) { //which takes in profiles
    // First create a variable nextIndex which is set to 0, thats like our counter
    let nextIndex = 0;

    // Then we want to return an object with a next() function
    return {
        next: function() {
            //Then we want to return from here, either the value or done
            // So the if the nextIndex (0) is smaller then the profiles.length (which is 3 atm) then (?) we want to return an object with value: profiles, and for the index it will be next index so ++
            // Else (:) done = true
            return nextIndex < profiles.length ? 
            { value: profiles [nextIndex++], done: false} : 
            { done: true}
        }
    };
}
