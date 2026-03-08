const btnAbrir = document.querySelector(".btn-abrir");
const carta = document.querySelector(".carta");
const topoCarta = document.querySelector(".topo-carta");
contentCarta = document.querySelector(".content-carta");
sec2 = document.querySelector(".sec-2");
sec1 = document.querySelector(".sec-1");

function executar(){
    carta.style.animation = "none";
    topoCarta.style.animation = "none";
  
    setTimeout(() => {
      topoCarta.classList.add("abrir-topo");
    }, 500);
  
    setTimeout(() => {
      topoCarta.style.opacity = 0;
    }, 1000);
  
    setTimeout(() => {
      carta.classList.add("descer-carta");
      carta.style.opacity = 0;
    }, 1000);
  
    setTimeout(() => {
      contentCarta.style.opacity = 1;
    }, 2000);
  
    sec2.style.display= 'flex'
}


btnAbrir.addEventListener("click", () => {
  executar()
});

topoCarta.addEventListener("click", () =>{
  executar()
})


carta.addEventListener("click", () =>{
  executar()
})

const card1 = document.querySelector(".card-1");
const card2 = document.querySelector(".card-2");
const card3 = document.querySelector(".card-3");
const card4 = document.querySelector(".card-4");
const card5 = document.querySelector(".card-5");
const card6 = document.querySelector(".card-6");
const card7 = document.querySelector(".card-7");
const card8 = document.querySelector(".card-8");
const card9 = document.querySelector(".card-9");
const pcard1 = document.querySelector(".p-card-1");
const pcard2 = document.querySelector(".p-card-2");
const pcard3 = document.querySelector(".p-card-3");
const pcard4 = document.querySelector(".p-card-4");
const pcard5 = document.querySelector(".p-card-5");
const pcard6 = document.querySelector(".p-card-6");
const pcard7 = document.querySelector(".p-card-7");
const pcard8 = document.querySelector(".p-card-8");
const pcard9 = document.querySelector(".p-card-9");
const pAparecer1 = document.querySelector(".p-aparecer-1");
const pAparecer2 = document.querySelector(".p-aparecer-2");
const pAparecer3 = document.querySelector(".p-aparecer-3");
const pAparecer4 = document.querySelector(".p-aparecer-4");
const pAparecer5 = document.querySelector(".p-aparecer-5");
const pAparecer6 = document.querySelector(".p-aparecer-6");
const pAparecer7 = document.querySelector(".p-aparecer-7");
const pAparecer8 = document.querySelector(".p-aparecer-8");
const pAparecer9 = document.querySelector(".p-aparecer-9");



card1.addEventListener("click", () =>{
  card1.style.opacity= 1;
  pcard1.style.opacity= 1;
  pAparecer1.style.opacity= 0;
})
card2.addEventListener("click", () =>{
  card2.style.opacity= 1;
  pcard2.style.opacity= 1;
  pAparecer2.style.opacity= 0;
})
card3.addEventListener("click", () =>{
  card3.style.opacity= 1;
  pcard3.style.opacity= 1;
  pAparecer3.style.opacity= 0;
})
card4.addEventListener("click", () =>{
  card4.style.opacity= 1;
  pcard4.style.opacity= 1;
  pAparecer4.style.opacity= 0;
})
card5.addEventListener("click", () =>{
  card5.style.opacity= 1;
  pcard5.style.opacity= 1;
  pAparecer5.style.opacity= 0;
})
card6.addEventListener("click", () =>{
  card6.style.opacity= 1;
  pcard6.style.opacity= 1;
  pAparecer6.style.opacity= 0;
})
card7.addEventListener("click", () =>{
  card7.style.opacity= 1;
  pcard7.style.opacity= 1;
  pAparecer7.style.opacity= 0;
})
card8.addEventListener("click", () =>{
  card8.style.opacity= 1;
  pcard8.style.opacity= 1;
  pAparecer8.style.opacity= 0;
})
card9.addEventListener("click", () =>{
  card9.style.opacity= 1;
  pcard9.style.opacity= 1;
  pAparecer9.style.opacity= 0;
})


 function atualizarContador() {
            // 1. Defina a data de início (Ano, Mês-1, Dia)
            // Mês é 0-indexed (0 = Janeiro, 11 = Dezembro)
            const dataInicio = new Date('2025-12-07'); 
            const dataAtual = new Date();

            // 2. Calcula a diferença em milissegundos
            const diferencaTempo = dataAtual - dataInicio;

            // 3. Converte milissegundos para dias (1 dia = 24h * 60m * 60s * 1000ms)
            const diasDecorridos = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24));

            // 4. Exibe o resultado no elemento span
            document.getElementById('contador').innerText = diasDecorridos;
        }

        // Executa a função ao carregar a página
        atualizarContador();

        // Opcional: Atualiza a cada 24 horas (86400000 ms) se a página ficar aberta
        setInterval(atualizarContador, 86400000);





     


carta.addEventListener('click', () => {

  const topoDaSecao = sec1.getBoundingClientRect().top + window.scrollY;


  window.scrollTo({
    top: topoDaSecao + 1, 
    behavior: 'smooth'
  });
});