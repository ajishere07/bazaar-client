// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise(async (resolve) => {
    const resp = await fetch("http://localhost:8000");
    const res = await resp.json();
    resolve({ data });
  });
}
