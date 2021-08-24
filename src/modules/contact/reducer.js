const initalState = [

    {
        id: 0,
        name: 'bekhruzjon',
        email: 'b@gamil.com',
        subject: 'developer',
        phone: '909515499',
        message: 'test'
    }

]
const contactReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            state = [...state, action.payload]
            return state
        case 'UPDATE_CONTACT':
          const  updateState = state.map(contact => contact.id === action.payload.id ? action.payload : contact);
            state=updateState;
            return state;
        case 'DELETE_CONTACT':
            const filterContact = state.filter(contact=>contact.id!==action.payload && contact);
            state = filterContact;
            return state;
        default:
            return state
    }
}
export default contactReducer;