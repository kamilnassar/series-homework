export const getDramas = series => series.filter(show => show.genre === "Drama");

export const getEpisodeById = (season, idText) =>
  season.episodes.find(episode => episode.id.toString() === idText.toString() || episode.id === idText);

export const addEpisodeToFirstSeason = (show, episode) => {
  const firstSeason = show.seasons[0];
  return {
    ...show,
    seasons: [
      {
        ...firstSeason,
        episodes: [...firstSeason.episodes, episode]
      },
      ...show.seasons.slice(1)
    ]
  };
};