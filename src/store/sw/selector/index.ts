import {createSelector} from '@reduxjs/toolkit'
import {IAppState} from '../../app-reducer'

const getState = (state: IAppState) => state.sw

export const getWorker = createSelector(getState, state => state.worker)
