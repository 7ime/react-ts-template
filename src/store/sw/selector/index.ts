import {createSelector} from '@reduxjs/toolkit'
import {IAppState} from '../../app-reducer'

const getState = (state: IAppState) => state.sw

export const getRegistration = createSelector(getState, state => state.registration)
