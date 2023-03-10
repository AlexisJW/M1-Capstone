const projectDatas = [
  {
    featuredImage: './assets/images/featured-speakers/thats-me.jpg',
    name: 'Jean Walner Alexis',
    qualification: 'CEO Alexis Conference',
    description: 'Developer of web, mobile and desktop applications. Programming tools and languages: Spring boot (java), Codeigniter.',
  },
  {
    featuredImage: './assets/images/featured-speakers/satya-nadella.jpg',
    name: 'Satya Nadella',
    qualification: 'CEO of Microsoft',
    description: 'At Microsoft, Nadella has led major projects that included the companys move to cloud computing.',
  },
  {
    featuredImage: './assets/images/featured-speakers/arvind-krishna.jpg',
    name: 'Arvind Krishna',
    qualification: 'CEO of IBM',
    description: 'He has been the CEO of IBM since April 2020 and took on the role of Chairman in January 2021.',
  },
  {
    featuredImage: './assets/images/featured-speakers/Jeff_Bezos.jpeg',
    name: 'Jeff Bezos',
    qualification: 'CEO Amazon',
    description: 'Jeff Bezos is an American entrepreneur, media proprietor, investor, and commercial',
  },
  {
    featuredImage: './assets/images/featured-speakers/speaker-5.jpeg',
    name: 'Zahraa Abraham',
    qualification: 'DevOps Engineer, Awrosoft limited',
    description: 'A professional software enginner with numerous experiences in building amazing products.',
  },
  {
    featuredImage: './assets/images/featured-speakers/speaker-6.jpg',
    name: 'Deniz Buhari',
    qualification: 'Founder, 51Lanb',
    description: 'Deniz helped introduce innovate for Iraqs, giving enabling environment to young developer to showcase there skills in engineering technology.',
  },
];

document.querySelector('.keynote-speakers').innerHTML = projectDatas
  .map(
    (data) => `
<div class="speaker">

<div class="speaker-bg"></div>
<img src=${data.featuredImage} alt="speaker" />

<div class="speaker-description">
<h3>${data.name}</h3>
<p class="speaker-qualification">${data.qualification}</p>
<p>${data.description}</p>
</div>
</div>
`,
  ).join('');

function projects() {
  const speaker = Array.from(document.querySelectorAll('.speaker'));
  if (window.innerWidth > 0) {
    for (let i = 2; i < speaker.length; i += 1) {
      speaker[i].classList.add('hide-show-speaker');
    }
  }
}

projects();

function toggle() {
  document.querySelector('#btn').addEventListener('click', () => {
    const speaker = Array.from(document.querySelectorAll('.speaker'));
    const btn = document.querySelector('#btn');

    for (let i = 2; i < speaker.length; i += 1) {
      speaker[i].classList.toggle('hide-show-speaker');
    }

    if (btn.innerText.trim() === 'MORE') {
      btn.innerHTML = 'LESS <span> <i class="fa fa-angle-up" aria-hidden="true"></i></span>';
    } else {
      btn.innerHTML = 'MORE <span> <i class="fa fa-angle-down" aria-hidden="true"></i></span>';
    }
  });
}

toggle();

function toggleMenu() {
  document.querySelectorAll('.menu-bar').forEach((element) => element.addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('active');
  }));
}

toggleMenu();