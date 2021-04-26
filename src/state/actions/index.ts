import {ActionType } from '../actionTypes/actionTypes';

export interface SearchRepositoriesAction{
    type: ActionType.SEARCH_REPOSITORIES;
}

export interface SearchRepositoriesSuccess{
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
    payload: string[];
}

export interface SearchRepositoriesError{
    type: ActionType.SEARCH_REPOSITORIES__ERROR;
    payload: string;
}

export type Action = 
|SearchRepositoriesAction 
| SearchRepositoriesSuccess 
| SearchRepositoriesError;
