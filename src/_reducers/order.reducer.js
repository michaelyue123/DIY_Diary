

const initialState = false? {
    order: {
        orderID: '12345678',
        order_date: '25-03-2020',
        delivery_date: '25-03-2020',
        purchase_option: '1',
        delivery_option: '1',
        phone: '0449112869',
        delivery_street: '915 Collins St',
        delivery_suburb: 'Docklands',
        delivery_postcode: '3008',
        delivery_state: 'Victoria',
    }
}:{};


export function orderDetail(state = initialState, action) {
    switch (action.type) {
        default:
          return state
    }
}

