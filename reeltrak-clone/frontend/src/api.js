async function request(path, options = {}) {
  const res = await fetch(`/api${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.message || `Request failed (${res.status})`);
  return data;
}

export const getHealth = () => request('/health');
export const getUsers = () => request('/users');
export const createUser = (body) =>
  request('/users', { method: 'POST', body: JSON.stringify(body) });
