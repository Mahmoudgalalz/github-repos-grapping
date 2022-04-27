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
// changing the status according to API to fix bugs
function forkingState(fork){
    if(fork) return 'Contrubiton';
    else return 'Private';

}
function LanguageState(lang){
    if(lang===null) return 'Not available';
    return lang;
}
function upperCase(Char){
    let fLetter=Char.charAt(0).toUpperCase();
    let FullString=Char.slice(1,Char.length);

    return fLetter+FullString;
}
function DescriptionState(Description){
    if(Description===null) return `None`;
    return Description;

}
function renderUsers(repos) {
    let html = '';
    let container;
    let htmlSegment;
    repos.forEach(repo => {
            htmlSegment = `
            <div class="space-x-4">
            <a target="_blank"
                class="relative block p-8 overflow-hidden border border-gray-100 rounded-lg mt-6"
                href="${repo.html_url}">
                <span
                  class="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-red-300 to-purple-600"
                ></span>
              
                <div class="justify-between sm:flex">
                  <div>
                    <h5 class="text-xl font-bold text-gray-900">
                    ${upperCase(repo.name)}
                    </h5>
                  </div>
              
                  <div class="flex-shrink-0 hidden ml-3 sm:block">
                    <i
                      class="bi bi-boxes"
                    ></i>
                  </div>
                </div>
              
                <div class="mt-4 sm:pr-8">
                  <p class="text-sm text-gray-500 whitespace-nowrap text-ellipsis overflow-hidden ...">
                  ${DescriptionState(repo.description)}
                  </p>
                </div>
              
                <dl class="flex mt-6">
                  <div class="flex flex-col-reverse">
                    <dt class="text-sm font-medium text-gray-600">${LanguageState(repo.language)}</dt>
                    <dd class="text-xs text-gray-500">Languages</dd>
                  </div>
              
                  <div class="flex flex-col-reverse ml-3 sm:ml-6">
                    <dt class="text-sm font-medium text-gray-600">${forkingState(repo.fork)}</dt>
                    <dd class="text-xs text-gray-500">Type</dd>
                  </div>
                </dl>
              </a></div>`;
         
        html += htmlSegment;
        container = document.querySelector('#hold');
        container.innerHTML = html;
    });

}
getRepos();
