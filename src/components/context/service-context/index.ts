import * as React from 'react'

import getService from '@services/index'

const ServiceContext = React.createContext(getService())

ServiceContext.displayName = 'ServiceContext'

export default ServiceContext
