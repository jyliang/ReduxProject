import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const searchedRecipes = createReducer({}, {
  [types.SET_SEARCHED_RECIPES](state, action) {
    let newState = {};
    action.recipes.forEach((recipe) => {
      // console.log('something' + recipe.id + recipe.title);
      newState[recipe.thumbnail] = recipe
    });
    console.log(newState);
    return newState;
  }
});

export const recipeCount = createReducer(0, {
  [types.SET_SEARCHED_RECIPES](state, action) {
    return action.recipes.length
  },
  [types.ADD_RECIPE](state, action) {
    return state + 1;
  }
});
