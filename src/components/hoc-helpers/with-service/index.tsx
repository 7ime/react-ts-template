import * as React from 'react'
import {IService} from '@services/model'
import ServiceContext from '../../context/service-context'

export type IMapServicesToProps = (service: IService) => Partial<IService>

export const withService = (mapServicesToProps: IMapServicesToProps) => (Wrapped: any) => {
    return (props: any) => {
        return (
            <ServiceContext.Consumer>
                {
                    (service: IService) => {
                        const servicesProps = mapServicesToProps(service)

                        return <Wrapped {...props} {...servicesProps}/>
                    }
                }
            </ServiceContext.Consumer>
        )
    }
}
