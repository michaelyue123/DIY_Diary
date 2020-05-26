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
      case diaryConstants.UPDATE_DIARY:
        return {
          diarysettings: {
            title_on_cover: action.diary.title_on_cover,
            cover_color: action.diary.cover_color,
            paper_color: action.diary.paper_color,
            paper_type: action.diary.paper_type,
            paper_type_id: action.diary.paper_type_id,
            paper_color_id: action.diary.paper_color_id,
            cover_color_id: action.diary.cover_color_id
          }
        }
      default:
        return state
    }
}