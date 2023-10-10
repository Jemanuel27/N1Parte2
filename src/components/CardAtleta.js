import React from 'react';

function CardAtleta({ atleta, onAddToFavorites, favoritos }) {
    const isFavorito = favoritos.some((fav) => fav.player_id === atleta.player_id);
  
    return (
      <div className="card">
        <h1>{atleta.player_name}</h1>
        <img src={atleta.player_image} alt={atleta.player_name} />
        <p>
          Idade: {atleta.player_age} | Posição: {atleta.player_type} | Time: {atleta.team_name}
        </p>
        {isFavorito ? (
          <p>Já está nos favoritos</p>
        ) : (
          <button onClick={() => onAddToFavorites(atleta)}>Adicionar aos favoritos</button>
        )}
      </div>
    );
  }
  
  export default CardAtleta;
  