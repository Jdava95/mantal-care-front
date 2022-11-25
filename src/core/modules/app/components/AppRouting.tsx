import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

import { CORE_ROUTES } from '@core/routing/coreRoutes'

const AppRouting = () => {
  return (
    <Suspense fallback={'...loading'}>
      <Switch>
        {CORE_ROUTES.map((route) => (
          <Route key={route.path as string} {...route} />
        ))}
      </Switch>
    </Suspense>
  )
}

export default AppRouting
