import { diaryConstants } from '../_constants/diary.constants';

const initialState = false?{
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
            title_on_cover: action.diary.title,
            cover_color: action.diary.select_coverColor,
            paper_color: action.diary.select_paperColor,
            paper_type: action.diary.select_paperType,
            paper_type_id: action.diary.select_paperType_id,
            paper_color_id: action.diary.select_paperColor_id,
            cover_color_id: action.diary.select_coverColor_id
          }
        }
      default:
        return state
    }
}