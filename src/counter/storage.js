export const loadState = () => {
  try {
    return localStorage.getItem('state');
  } catch (error) {}
};

export const saveState = state => {
  try {
    localStorage.setItem('state', state);
  } catch (error) {}
};
