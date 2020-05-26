import { diaryConstants } from '../_constants/diary.constants';

const initialState = true?{
  diarysettings:{
    title_on_cover: 'Test Shopping',
    paper_type: 'White cardboard',
    paper_color: 'White',
    cover_color: 'lightblue',
    paper_type_id: 1,
    paper_color_id: 2,
    cover_color_id: 1
  }
}:{};

export function shoppingcart(state = initialState, action) {
    switch (action.type) {
      case diaryConstants.UPDATE_COVER:
        return {
          title_on_cover: action.title_on_cover,
          cover_color: action.cover_color
        }
      case diaryConstants.UPDATE_CONTENT:
          return {
            paper_color: action.paper_color,
            paper_type: action.paper_type
          }
      default:
        return state
    }
}