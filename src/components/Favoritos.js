import React from 'react';

function PainelFavoritos({ favoritos }) {
  return (
    <div>
      <h2>Favoritos</h2>
      {favoritos.length > 0 ? (
        favoritos.map((atleta, index) => (
          <div key={index}>
            <h3>{atleta.player_name}</h3>
            <img src={atleta.player_image} alt={atleta.player_name} />
            <p>Idade: {atleta.player_age}</p>
            <p>País: {atleta.player_country}</p>
            <p>Posição: {atleta.player_type}</p>
            <p>Time: {atleta.team_name}</p>
            <hr />
          </div>
        ))
      ) : (
        <p>Nenhum atleta favorito.</p>
      )}
    </div>
  );
}

export default PainelFavoritos;
