/***************************************************************************************************************
    ARRAY CONTENENTE I POST
***************************************************************************************************************/
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


/***************************************************************************************************************
    POST DI ESEMPIO
***************************************************************************************************************/

// PRENDO DAL DOM L'ELEMNTO A CUI AGGANCERO' I MIEI CONTENUTI
const container = document.getElementById('container');
// console.log(container);
// STAMPO NEL DOM TUTTI I POST CONTENUTI NELL'ARRAY POSTS
getPosts();
// console.log(posts[0].likes);

function getPosts() {
    posts.forEach(element => {
        // credo div class post
        const post = document.createElement('div');
        post.className = 'post';

        {   // HEADER
            //creo div class post header
            const postH = document.createElement('div');
            postH.className = 'post__header';

            //creo div class post meta
            const postM = document.createElement('div');
            postM.className = 'post-meta';

            //creo div class post meta icon
            const postMI = document.createElement('div');
            postMI.className = 'post-meta__icon';

            // creo img class profile pc con src e alt presi dall'array posts
            let img = getImg(element);
            // lo appendo a postMI
            postMI.append(img);

            // creo div post meta data
            const postMD = document.createElement('div');
            postMD.className = 'post-meta__data';

            // creo div contenente l'autore
            const postMA = document.createElement('div');
            postMA.className = 'post-meta__author';
            postMA.innerHTML = element.author.name;

            // creo div contenente quando è stato fatto il post
            const postMT = document.createElement('div');
            postMT.className = 'post-meta__time';
            postMT.innerHTML = calcWhen(element.created);
            postMD.append(postMA);
            postMD.append(postMT);

            // appendo la struttura
            postM.append(postMI);
            postM.append(postMD);
            postH.append(postM);
            post.append(postH);
        }

        {   // BODY
            const postT = document.createElement('div');
            postT.className = 'post__text';
            postT.innerHTML = element.content;
            post.append(postT);

            const postI = document.createElement('div');
            postI.className = 'post__image';

            const postImg = document.createElement('img');
            postImg.src = element.media;
            postI.append(postImg);
            post.append(postI);
        }

        {   // FOOTER
            const postF = document.createElement('div');
            postF.className = 'post__footer';

            const likes = document.createElement('div');
            likes.classList.add('likes', 'js-likes')

            const cta = document.createElement('div');
            cta.className = 'likes__cta';

            const a = document.createElement('a');
            a.classList.add('like-button', 'js-like-button')
            a.href = '#nogo';
            a.dataset.postid = element.id;
            // console.log(a);

            const i = document.createElement('i');
            i.classList.add("like-button__icon", "fas", "fa-thumbs-up");
            i.ariaHidden = 'true';

            const likeBtn = document.createElement('span');
            likeBtn.className = 'like-button__label';
            likeBtn.innerHTML = ' Mi Piace';
            let liked = false;

            const counter = document.createElement('b');
            counter.className = 'js-likes-counter';
            counter.id = `like-counter-${element.id}`
            counter.innerHTML = element.likes;

            cta.addEventListener('click', function () {
                if (!liked) {
                    a.classList.add('text-primary');
                    liked = true;
                    likesCount(true, element.id);
                }
                else {
                    a.classList.remove('text-primary');
                    liked = false;
                    likesCount(false, element.id);
                }
            })

            cta.addEventListener('mouseover', function () {
                if (liked) {
                    likeBtn.innerHTML = ' non mi piace più'
                }
            })

            cta.addEventListener('mouseleave', function () {
                likeBtn.innerHTML = ' Mi Piace'
            })

            a.append(i);
            a.append(likeBtn);
            cta.append(a);

            const counterEl = document.createElement('div');
            counterEl.className = 'likes__counter';
            counterEl.innerHTML = 'Piace a '
            counterEl.append(counter);
            counterEl.innerHTML += ' persone.'

            likes.append(cta);
            likes.append(counterEl);
            postF.append(likes);
            post.append(postF);

        }

        container.append(post);
    });
}

function calcWhen(postDate) {
    const today = new Date();
    const currentDay = today.getDay();
    // console.log(currentDay);
    const currentMonth = today.getMonth() + 1
    const currentYear = today.getFullYear();
    // console.log(postDate);
    const [year, month, day] = postDate.split('-')
    // console.log(month);
    let message = '';
    const diffYear = currentYear - year;
    // console.log(diffYear);

    const diffMonth = currentMonth - month
    // console.log(diffMonth);

    const diffDays = currentDay - day;
    // console.log(diffDays);

    if (diffYear > 1) {
        message += `${diffYear} anni `;
    } else if (diffYear > 0) {
        message += `${diffYear} anno `;
    }

    if (diffYear && diffMonth > 0) message += ' e '

    if (diffMonth > 1) {
        message += `${diffMonth} mesi `;
    } else if (diffMonth > 0) {
        message += `${diffYear} mese `;
    }

    if (!diffYear && diffMonth <= 0) message += `${diffDays} giorni `;

    return message += 'fa';
}

function getImg(element) {
    let img = document.createElement('img');
    img.className = 'profile-pic';
    if (element.author.image !== null) {
        img.src = element.author.image;
        img.alt = element.author.name;
    } else {
        img = document.createElement('div');
        img.classList.add('border', 'bg-primary', 'rounded-circle', 'text-white', 'fw-bold', 'fakeImg');
        img.innerHTML += getFirstLetter(element);
    }
    return img;
}

function getFirstLetter(element) {
    [nome, cognome] = element.author.name.split(' ');
    return nome[0] + cognome[0];
}

function likesCount(bool, id) {
    const counter = document.getElementById(`like-counter-${id}`)
    if (bool) counter.innerHTML++;
    else counter.innerHTML--;
}