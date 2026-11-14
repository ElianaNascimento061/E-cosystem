//Inicialização do mapa
const mapa = L.map('mapa_leaflet').setView([-4.947, -47.500], 13); //Coordenadas do centro de Açailândia

//Adiciona o mapa do OpenStreetMap - fornce as imagens que formam o mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mapa);

//Lista de pontos de coleta
const pontos = [
  {
    nome: "Câmara Municipal de Açailândia",
    latitude: -4.950127931105274,
    longitude: -47.5024717760541,
    endereco: "Rua Ceará, 662 - Centro",
    materiais: "De grande e pequeno porte"
  },
  {
    nome: "Loja Vivo",
    latitude: -4.949983185710571,
    longitude: -47.499872190248354,
    endereco: "Rua Duque de Caxias, 946 - Centro",
    materiais: "Celulares, carregadores, fones de ouvido e outros produtos de telefonia."
  },
  {
    nome: "Supermercado Mateus",
    latitude: -4.949098140666703,
    longitude: -47.498680805594404,
    endereco: "Rua Dorgival Pinheiro de Souza, 800 - Centro",
    materiais: "De pequeno porte como celulares, carregadores, cabos, adaptadores USB e etc."
  },
  {
    nome: "Agência dos Correios",
    latitude: -4.952520285766286,
    longitude: -47.49908387675772,
    endereco: "Rua Bom Jesus, 307 - Centro",
    materiais: "De pequeno porte como celulares, carregadores, cabos, adaptadores USB e etc."
  },
  {
    nome: "Magazine Luiza",
    latitude: -4.9490537071503615,
    longitude: -47.500764276757664,
    endereco: "Avenida Desembargador Tácito Caldas, 203 - Centro",
    materiais: "De pequeno porte como celulares, carregadores, cabos, adaptadores USB e etc."
  },
  {
    nome: "UEMASUL - Campus Açailândia",
    latitude: -4.943940627755332,
    longitude: -47.478306376757445,
    endereco: "Rua Topázio, 100 - Centro",
    materiais: "De pequeno e grande porte"
  },
  {
    nome: "Prefeitura Municipal de Açailândia",
    latitude: -4.940319288259625,
    longitude: -47.465247068783576,
    endereco: "Avenida Santa Luzia, s/n - Açailândia - MA.",
    materiais: "De pequeno e grande porte"
  },
  {
    nome: "Secretaria Municipal de Meio Ambiente",
    latitude: -4.939269014579315, 
    longitude: -47.49833609416201,
    endereco: "Rua Raimundo Pimentel Filho, 78 - Centro",
    materiais: "De pequeno e grande porte"
  }
];

//Adiciona os marcadores ao mapa
pontos.forEach(ponto => {
  const marcador = L.marker([
      ponto.latitude,
      ponto.longitude
  ]).addTo(mapa);

  //Conteúdo exibido ao clicar no marcador
  const conteudo = `
    <div class="popup-mapa">
      <h3>${ponto.nome}</h3>
      <p>
        <strong>Endereço:</strong>
        ${ponto.endereco}
      </p>
      ${ponto.materiais ? `
        <p>
          <strong>Equipamentos aceitos:</strong>
          ${ponto.materiais}
        </p>
      ` : ""}
    </div>
  `;
    marcador.bindPopup(conteudo);
});