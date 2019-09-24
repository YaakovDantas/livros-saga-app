import ApiService from '../../utils/ApiService';
import PopUp from '../../utils/popUp';


export function getAuthors(token) {
    
    return {
        type: 'SAGE_GET_AUTHORS',
        payload: token
    }
}


export function getAuthor(id, token) {
   
    return {
        type: 'SAGA_GET_AUTHOR',
        payload: {id, token}
    }

}

export function cleanName(){
    return {
        type : 'CLEAN_NAME'
    }
}

export function createAuthor(name, token) {
    
    return {
        type : 'SAGA_CREATE_AUTHOR',
        payload: { name, token }
    }
}

export function attAuthor(name, id, token) {
    
    return {
        type: 'SAGA_ATT_AUTHOR',
        payload: {name, id, token}
    }

}

export function deleteAuthor(id,token) {
    
    return {
        type:'SAGA_DELETE_AUTHOR',
        payload: {id, token}
    }
}
// dispatch => {
//     ApiService.DeleteAuthor(id, token)
//     .then(res => dispatch(getAuthors(token)))
//     .then(res => {
//      PopUp.exibeMensagem('success', "Author was deleted with success");
//     })
//  }
export function changeNameForm(e) {
    return {
            type: 'CHANGE_NAME',
            payload: e.target.value
        
    }
}

