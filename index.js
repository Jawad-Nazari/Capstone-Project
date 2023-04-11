// Defining Varibles
const ham = document.querySelector('.nav-container-parnav > .ham');
const ul = document.querySelector('.nav-ul');
// Adding Event Listener
ham.addEventListener('click', () => {
  if (ham.classList.contains('change')) {
    ham.classList.remove('change');
    ul.classList.remove('change');
  } else {
    ham.classList.add('change');
    ul.classList.add('change');
  }
});

// Speakers data
const speakers = [
  {
    name: 'Farhad Darya',
    description: 'Senior Web Developer at Vibrant Tech',
    details: 'Skills: HTML5 · Shopify · WordPress · Tailwind CSS · Bootstrap · Cascading Style Sheets (CSS) · PHP',
    image: './images/speaker1.png',
  },

  {
    name: 'Shahla Zaland',
    description: 'UI/UX Designer at Twitter.',
    details: ` Senior UI/UX web Designer and Advicer, delivering exceptional websites with expertise in HTML,
        CSS, JavaScript, and web development technologies.`,
    image: './images/speaker2.svg',
  },

  {
    name: 'Maryam Sama',
    description: 'Senior Full Stack (Web Developer) at Simplelogix',
    details: 'Complete Development Shopify and WordPress Projects Experience with custom theme and/or Storefront API',
    image: './images/speaker3.svg',
  },

  {
    name: 'Fariba Madhosh',
    description: 'UI/UX Designer at Apple.',
    details: `WooCommerce, User-centered Design, User Flows, Figma (Software), Responsive Web Design · 
    User Experience Design (UED), Web Project Management Web Design`,
    image: './images/speaker4.svg',
  },

  {
    name: 'Lian Adams.',
    description: 'Senior Product Designer at Linkedin',
    details: ` Senior Product Designer and developer, delivering exceptional websites with expertise in HTML,
        CSS, JavaScript, and web development technologies.`,
    image: './images/speaker5.svg',
  },

  {
    name: 'Nahid Farid.',
    description: 'Full Stack We Developer at AWS',
    details: ` Beckend developer and Mentor, delivering exceptional websites with expertise in HTML,
        CSS, JavaScript, and web development technologies.`,
    image: './images/speaker6.svg',
  },

];

// The speaker section target
const mainSpeakers = document.querySelector('.main-speakers');
mainSpeakers.style.alignItems = 'center';
mainSpeakers.style.display = 'grid';

// Expandedd details style
const descriptionStyle = {
  position: 'relative',
  marginLeft: '10px',
  marginBottom: '16px',
  fontFamily: 'Lato',
  fontSize: '0.8rem',
};

// Style for image of speakers

const speakersImageStyle = {
  width: '120px',
  marginLeft: '20px',
  zIndex: '1',
  position: 'relative',
};

// Function to shows all speakers and making grids on breakpoint

function gridmaker() {
  if (window.innerWidth >= 768) {
    mainSpeakers.style.gridTemplateColumns = '1fr 1fr';
  } else if (window.innerWidth <= 768) {
    mainSpeakers.style.gridTemplateColumns = '1fr';
  }
}

const body = document.querySelector('body');
body.addEventListener('click', gridmaker);

// Function for creating and appending the elements
const inc = 1;
function main(count) {
  for (let i = 0; i < count; i += inc) {
    /* The wrapper that covers all of each speaker
   elements. */
    const overAll = document.createElement('div');
    overAll.style.display = 'flex';
    overAll.style.alignItems = 'center';
    mainSpeakers.appendChild(overAll);

    /* The wrapper div that integrate the checker
    image and the speaker image */
    const pictureWrapper = document.createElement('div');
    pictureWrapper.style.position = 'relative';
    pictureWrapper.style.marginBottom = '30px';
    overAll.appendChild(pictureWrapper);

    // Information about the speaker
    const descriptionCon = document.createElement('div');
    descriptionCon.style.marginBottom = '30px';
    overAll.appendChild(descriptionCon);

    // Image of speaker
    const speaker = document.createElement('img');
    speaker.src = speakers[i].image;
    Object.assign(speaker.style, speakersImageStyle);
    pictureWrapper.appendChild(speaker);

    // Informations about the speaker

    // Name of the speaker
    const name = document.createElement('h3');
    Object.assign(name.style, descriptionStyle);
    name.innerHTML = speakers[i].name;
    name.style.fontWeight = '500';
    descriptionCon.appendChild(name);

    // Title or Description
    const description = document.createElement('h6');
    Object.assign(description.style, descriptionStyle);
    description.style.color = '#ec5240';
    description.style.marginTop = '-10px';
    description.style.fontWeight = '500';
    description.innerHTML = speakers[i].description;
    descriptionCon.appendChild(description);
    const expand = document.createElement('h6');
    Object.assign(expand.style, descriptionStyle);
    expand.style.color = '#272a30';
    expand.innerHTML = speakers[i].details;
    descriptionCon.appendChild(expand);
  }
}

// The see more button to reveal the remaining speakers section
const more = document.querySelector('#seemore');
more.addEventListener('click', () => {
  mainSpeakers.innerHTML = '';
  more.style.opacity = '0';
  main(6);
});

// Function to automatically adjust the position Of the elements on breakpoint
if (window.innerWidth >= 768) {
  window.onload = main(6);
  mainSpeakers.style.gridTemplateColumns = '1fr 1fr';
} else {
  window.onload = main(4);
}