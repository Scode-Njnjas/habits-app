export function getActiveRouteName(state: any) {
  if (state) {
    const route = state.routes[state.index]
    if (route.state) {
      return getActiveRouteName(route.state)
    }
    return route.name
  }
}

export const screenTracking = (state: any) => {
  const currentRouteName = getActiveRouteName(state)
  console.log(`=== NAVIGATING to ---> ${currentRouteName}`)
}
