import {JsonPlaceholderAction, JsonPlaceholderState} from '../index'
import {createReducer} from '@reduxjs/toolkit'

export const reducer = createReducer(JsonPlaceholderState.initialState, (builder) => {
    builder
        .addCase(JsonPlaceholderAction.getPosts, (state) => {
            state.isLoadingPosts = true
        })
        .addCase(JsonPlaceholderAction.getPostsSuccess, (state, {payload}) => {
            state.isLoadingPosts = false
            state.posts = payload
        })
        .addCase(JsonPlaceholderAction.getPostsError, (state) => {
            state.isLoadingPosts = false
            state.isGetPostsError = true
        })
        .addCase(JsonPlaceholderAction.resetState, (state) => {
            return JsonPlaceholderState.initialState
        })
})
