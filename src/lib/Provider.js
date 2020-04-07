import React from 'react'
import { Provider } from 'react-redux'
import store from './redux'

const ProviderWrapper = ({ children }) => {
    return (
        <Provider store={store}>
            { children }
        </Provider>
    )
}

export default ProviderWrapper
