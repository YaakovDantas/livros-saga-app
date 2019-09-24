

export function getBooks(token) {
    
  
    return {
        type: 'SAGA_GET_BOOKS',
        payload : {token}
    }
}