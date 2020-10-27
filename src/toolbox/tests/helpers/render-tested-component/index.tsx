import * as React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import {Provider} from 'react-redux'
import {MockStoreEnhanced} from 'redux-mock-store'
import {IAppState} from '@store/app-reducer'

export const renderTestedComponentWithStore = (
    component: React.FunctionComponentElement<any>,
    store: MockStoreEnhanced<IAppState>
) => {
    return render(
        <Provider store={store}>
            {component}
        </Provider>
    )
}
