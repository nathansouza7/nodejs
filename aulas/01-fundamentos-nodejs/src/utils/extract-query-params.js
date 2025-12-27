export function extractQueryParams(query) {
  return query.substr(1).split('&').reduce((queryParams, param) => {
    const [ey, value] = param.split('=')

    queryParams[key] = value
  }, {})
}