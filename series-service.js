//---------------------A---------------------
//function #1
export const getEpisodeTitle = (show, seasonIndex, episodeIndex) => {
  return show.seasons[seasonIndex].episodes[episodeIndex].title;
};

//function #2
export const getLastSeasonNumber = (show) => {
  const seasons = show.seasons;
  if (!seasons || seasons.length === 0) {
    return 0;
  }
  return seasons[seasons.length - 1].number;
};

//function #3
export const getNextSeasonYear = (show) => {
    return show.nextSeason ? show.nextSeason.year : "No announcement";
};

//---------------------B---------------------

//function #4
export const getById = (series, id) => {
  return series.find(show => show.id === id);
};

//function #5
export const getSeasonsCount = series => {
  return series.map(show => ({
    title: show.title,
    seasons: show.seasons ? show.seasons.length : 0
  }));
};

//function #6
export const hasTopEpisode = (show, minRating) => {
  if (!show.seasons) {
    return false;
  }
  return show.seasons.some(season =>
    season.episodes.some(episode => episode.rating >= minRating)
  );
};