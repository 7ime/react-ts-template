import {createSelector} from '@reduxjs/toolkit'
import {IAppState} from '../../app-reducer'

const getState = (state: IAppState) => state.ui

export const getTheme = createSelector(getState, state => state.theme)
export const getSystemTheme = createSelector(getState, state => state.systemTheme)
