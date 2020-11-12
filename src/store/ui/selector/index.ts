import {createSelector} from '@reduxjs/toolkit'
import {IAppState} from '../../app-reducer'

const getState = (state: IAppState) => state.ui

export const getUserTheme = createSelector(getState, state => state.userTheme)
export const getSystemTheme = createSelector(getState, state => state.systemTheme)
export const getTheme = createSelector(getUserTheme, getSystemTheme, (userTheme, systemTheme) => {
    return systemTheme || userTheme
})

