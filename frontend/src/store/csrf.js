async function csrfFetch(url, options = {}) {
  options.method ||= 'GET';
  options.headers ||= {};

  if (options.method.toUpperCase() !== 'GET') {
    options.headers['Content-Type'] ||= 'application/json';
    options.headers['X-CSRF-Token'] ||= sessionStorage.getItem('X-CSRF-Token');
  }

  const response = await fetch(url, options);

  if (response.status >= 400) throw response;
  return response;
}

export function storeCSRFToken(reponse) {
  const csrfToken = reponse.headers.get('X-CSRF-Token');

  if (csrfToken) {
    sessionStorage.setItem('X-CSRF-Token', csrfToken);
  }
}

export async function restoreCSRF() {
  const response = await csrfFetch('/api/session');
  storeCSRFToken(response);
  return response;
}


export default csrfFetch;