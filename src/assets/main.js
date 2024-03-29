
const API = `https://youtube-v31.p.rapidapi.com/search?channelId=UClEbp8JDwEkb369Eu2Ltk2Q&part=snippet%2Cid&order=date&maxResults=9`;

//aqui agregaremos la iteracion de cada elemento(referencia)
const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd184c3e23amsh3f130883e71e936p1675cdjsn5a978ab2864a',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response = await fetch(urlApi, options)
    const data = await response.json();
    return data; 
}

//funcion que se autoinvoca
//cuando cargue el archivo se va a ejecutar
(async ()=>{
    try{
        const videos = await fetchData(API);
        //crearemos un template en html para que itere por los elementos de la respuesta
        //view es esa porcion de html
        //usamos js para iterar 
        //en esta API , para acceder a los videos, se refiere a items, se hace un map para devolver un nuevo arreglo con el template por cada resultado
        let view = `
        ${videos.items.map(video=>`
        <div class="group">
        <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <a target="_blank" href="https://youtube.com/video/${video.id.videoId}">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
          </a>
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700 dark:text-slate-400"">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
        `).slice(0,8).join('')} <!--para iterar solo 4 videos-->
            
        `;
        content.innerHTML = view;
    }catch(error){
console.log(error);
    }
})();
	

