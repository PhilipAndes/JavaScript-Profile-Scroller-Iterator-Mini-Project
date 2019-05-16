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
