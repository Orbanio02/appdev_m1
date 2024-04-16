// alert('Hello');

// 1st step - Movement animation to happen
const card = $('.card')[0];
const container = $('.container'); 

// 5th step - all items
const photo = $('.photo img');
const title = $('.title');
const social= $('.social');
const info= $('.info h4');
const profile= $('.profile');

// 2nd step - Moving animation event
container.on('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20; //rotating the element into x axis
    let yAxis = (window.innerWidth / 2 - e.pageY) / 20; //rotating the element into y axis
    card.style.transform  = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});


// 4th step - Adding animation in
container.on('mouseenter', e => {
    card.style.transform = 'none';
    // Popout animation for all items
    photo.style.transform = 'translateZ(50px)';
    title.style.transform = 'translateZ(50px)';
    social.style.transform = 'translateZ(50px)';
    info.style.transform = 'translateZ(50px)';
    profile.style.transform = 'translateZ(50px)';
});

// 3rd step - Removing animation in
container.on('mouseleave', e => {
    card.style.transform = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});


/*My Explanation:

1. Selecting Elements: 
   card and `container` variables are assigned jQuery selections for the elements with classes "card" and "container", respectively.

2. Movement Animation Event:
   The mousemove event on the container triggers a function updating the card's rotation based on mouse position.

3. Removing Animation In:
   When the mouse leaves the container, the card rotates back to its initial position.

4. Adding Animation In:
   When the mouse enters the container, the card's transformations are reset (`none`) and other elements pop out (`translateZ(50px)`).

5. Selecting All Items:
   Variables are assigned jQuery selections for specific elements within the container, used later for transformations.
   */