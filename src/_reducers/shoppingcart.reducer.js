

const initialState = true?{
  diarysettings:{
    title_on_cover: 'Test Shopping',
    paper_type: 'White cardboard',
    paper_color: 'White',
    cover_color: 'Light Blue',
    paper_type_id: 1,
    paper_color_id: 2,
    cover_color_id: 1
  }
}:{};

export function shoppingcart(state = initialState, action) {
    console.log(state);
    switch (action.type) {
      default:
        return state
    }
}