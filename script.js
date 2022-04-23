let url='https://api.github.com/users/'

async function getRepos() {
    url+=document.querySelector('input').value;
    url+='/repos';
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
    let htmlSegment;
    repos.forEach(repo => {
        if(repo.fork && repo.description!=null && repo.language!=null){
            htmlSegment = `<div class="col" id="gold">
            <i class="bi bi-boxes gold"></i>
            <p class="cont">Contribution</p>
            <a class="links" href="${repo.html_url}">${repo.name}</a>
            <p class="description">${repo.description}</p>
            <span class="badge rounded-pill bg-light text-dark">${repo.topics}</span>
            <i class="bi bi-circle-fill languages"><span>${repo.language}</span></i>
            </div>
            </div>`;
        }
        else if(repo.language===null){
            htmlSegment = `<div class="col" id="gold">
            <i class="bi bi-boxes gold"></i>
            <p class="cont">Contribution</p>
            <a class="links" href="${repo.html_url}">${repo.name}</a>
            <p class="description"></p>
            <span class="badge rounded-pill bg-light text-dark">${repo.topics}</span>
            </div>
            </div>`;
        }
        else if(repo.description===null){
            htmlSegment = `<div class="col" id="gold">
            <i class="bi bi-boxes gold"></i>
            <p class="cont">Contribution</p>
            <a class="links" href="${repo.html_url}">${repo.name}</a>
            <p class="description"></p>
            <span class="badge rounded-pill bg-light text-dark">${repo.topics}</span>
            <i class="bi bi-circle-fill languages"><span>${repo.language}</span></i>
            </div>
            </div>`;
        }
        else if(repo.fork!=null&& repo.description===null){
            htmlSegment = `<div class="col" id="gold">
            <i class="bi bi-boxes gold"></i>
            <p class="cont">Contribution</p>
            <a class="links" href="${repo.html_url}">${repo.name}</a>
            <p class="description"></p>
            <span class="badge rounded-pill bg-light text-dark">${repo.topics}</span>
            <i class="bi bi-circle-fill languages"><span>${repo.language}</span></i>
            </div>
            </div>`;
        }
        else{
            htmlSegment = `<div class="col">
                            <i class="bi bi-boxes"></i>
                            <a class="links" href="${repo.html_url}">${repo.name}</a>
                            <p class="description">${repo.description}</p>
                            <span class="badge rounded-pill bg-light text-dark">${repo.topics}</span>
                            <i class="bi bi-circle-fill languages"><span>${repo.language}</span></i>
                            </div>
                            </div>`;
        }
        html += htmlSegment;
        container = document.querySelector('#hold');
        container.innerHTML = html;
    });

}
getRepos();
