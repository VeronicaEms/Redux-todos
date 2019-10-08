import todos from './todos';
import { combineReducers } from 'redux';

export default combineReducers({
    todos,
});

/*
* Esse index.js foi criado para unir os todos do arquivo ./todos em apenas um arquivo,
* onde todos eles sejam combinados e mandados para a view
*/
