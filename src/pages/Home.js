import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";

import Game from "../components/Game";

//Styles and Animations
import styled from "styled-components";
import motion from "framer-motion";

const Home = () => {
  //FETCH GAMES

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  //Get Data back
  const { popular, newGames, upcoming } = useSelector((state) => state.games);

  return (
    <GameList>
      <h1>Upcoming Games</h1>
      <Games>
        {upcoming.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_img}
            key={game.id}
          />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled.div``;
const Games = styled.div``;

export default Home;
