// Convert time to hours and minutes
export const calcTime = time => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};
// Convert a number to money formatting
export const convertMoney = money => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};

// Session Storage
const HOME_SESSION_STATE = 'HOME_STATE';
const MOVIE_SESSION_STATE = 'MOVIE_STATE';

export const getHomeState = () => {
  const homeState = sessionStorage.getItem(HOME_SESSION_STATE);
  return homeState ? JSON.parse(homeState) : '';
}

export const setHomeState = (state) => {
  const homeState = JSON.stringify(state);
  sessionStorage.setItem(HOME_SESSION_STATE, homeState);
}

export const getMovieState = (id) => {
  const movieState = sessionStorage.getItem(`${MOVIE_SESSION_STATE}_${id}`);
  return movieState ? JSON.parse(movieState) : '';
}

export const setMovieState = (id, state) => {
  const movieState = JSON.stringify(state);
  sessionStorage.setItem(`${MOVIE_SESSION_STATE}_${id}`, movieState);
}

