import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardAtleta from './CardAtleta';
import PainelFavoritos from './Favoritos';

function PesquisarAtletas() {
  const [nomeAtleta, setNomeAtleta] = useState('');
  const [atletas, setAtletas] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setNomeAtleta(e.target.value);
  };

  const addToFavorites = (atleta) => {
    if (!favoritos.some((fav) => fav.player_id === atleta.player_id)) {
      setFavoritos([...favoritos, atleta]);
    }
  };

  const buscarAtletas = () => {
    setIsLoading(true);

    // Substitua 'SUA_CHAVE_DE_API' pela sua chave de API Apifootball
    const apiKey = '23a2495a633253850a9ad8999dd626eb7639663230f50f483ed40b33ea5ede3c';
    const apiUrl = `https://apiv3.apifootball.com/?action=get_players&player_name=${nomeAtleta}&APIkey=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setAtletas(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar atletas:', error);
        setAtletas([]);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    // Você pode adicionar lógica aqui para carregar atletas iniciais, se necessário
  }, []);

  return (
    <div>
      <h1>Pesquisa de Atletas</h1>
      <input
        type="text"
        placeholder="Digite o nome do atleta"
        value={nomeAtleta}
        onChange={handleInputChange}
      />
      <button onClick={buscarAtletas}>Pesquisar</button>
      {isLoading && <p>Carregando...</p>}
      <div className="resultado">
        {atletas.map((atleta, index) => (
          <CardAtleta
            key={index}
            atleta={atleta}
            onAddToFavorites={addToFavorites}
            favoritos={favoritos}
          />
        ))}
      </div>
      <PainelFavoritos favoritos={favoritos} />
    </div>
  );
}

export default PesquisarAtletas;
