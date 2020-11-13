import {createSelector} from '@reduxjs/toolkit'
import {IAppState} from '../../app-reducer'
import {ETypesThemes} from '@constants/theme'

const getState = (state: IAppState) => state.ui

export const getLanguage = createSelector(getState, state => state.language)
export const getCustomTheme = createSelector(getState, state => state.customTheme)
export const getSystemTheme = createSelector(getState, state => state.systemTheme)
export const getPriorityTheme = createSelector(getState, state => state.priorityTheme)

export const getTheme = createSelector(getPriorityTheme, getCustomTheme, getSystemTheme, (
    priority, custom, system
) => {
    if (priority && priority === ETypesThemes.system && system) {
        return system
    }

    return custom
})
