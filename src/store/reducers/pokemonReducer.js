const initialState = {
    data: [],
    loading: false,
    error: null
}

export default function pokemonReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_START':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_POKEMON_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.pokemon
            }
        case 'FETCH_POKEMON_FAILURE':
            return {
                ...state,
                loading: false,
                data: action.err
            }
        default:
            return state
    }
}