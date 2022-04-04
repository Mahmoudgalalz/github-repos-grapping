async function getRepos() {
    let url = 'https://api.github.com/users/Mahmoudgalalz/repos';
    try {
        let res = await fetch(url);
        let data= await res.json();
        renderUsers(data);
    } catch (error) {
        console.log(error);
    }
}
function renderUsers(repos) {
    let html = '';
    let container;
    repos.forEach(repo => {

           let htmlSegment = `<div class="col">
                            <i class="bi bi-boxes"></i>
                            <a class="links" href="${repo.html_url}">${repo.name}</a>
                            <p class="description">${repo.description}</p>
                            <span class="badge rounded-pill bg-light text-dark">${repo.topics}</span>
                            <i class="bi bi-circle-fill languages"><span>${repo.language}</span></i>
                            </div>
                            </div>`;
                            
        html += htmlSegment;
        container = document.querySelector('#hold');
        container.innerHTML = html;
    });

}

getRepos();
