const posts = [
    {
        id: 1,
        title: "Desafios da Transição",
        category: "Transição",
        date: "15-09-2024",
        image: "./image/TransicaoCarreiraPost.jpg",
        content: `A transição para uma carreira em tecnologia é um caminho que muitos profissionais...`,
        views: 0
    },
    {
        id: 2,
        title: "Metodologias Ágeis",
        category: "Metodologias",
        date: "22-09-2024",
        image: "./image/FotoMetodologias.jpg",
        content: `As metodologias ágeis estão mudando a forma como as equipes desenvolvem software...`,
        views: 0
    },
    {
        id: 3,
        title: "Inteligência Artificial",
        category: "IA", 
        date: "01-10-2024",
        image: "./image/FotoIA.jpg",
        content: "A Inteligência Artificial (IA) está rapidamente se tornando uma força transformadora em...",
        views: 0
    },
];

const postsContainer = document.getElementById('posts-container');

function exibirPosts(filteredPosts) {
    postsContainer.innerHTML = ''; 
    filteredPosts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.classList.add('post-card');
        postCard.innerHTML = `
            <img src="${post.image}" alt="${post.title}" style="width: 100%; height: auto;">
            <h3>${post.title}</h3>
            <p>${post.content.substring(0, 100)}...</p>
            <p><small>Categoria: ${post.category}</small></p>
            <p>Visualizações: ${post.views}</small></p>
            <p><small>${post.date} </p>
        `;
        postCard.addEventListener('click', () => {
            post.views++; 
            window.location.href = `post.html?postId=${post.id}`;
        });
        postsContainer.appendChild(postCard);
    });
}

function filtrarPost(category) {
    if (category === 'All') {
        exibirPosts(posts); 
    } else {
        const filtered = posts.filter(post => post.category === category);
        exibirPosts(filtered);
    }
}

document.querySelectorAll('.filter button').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        filtrarPost(category);
    });
});

exibirPosts(posts);