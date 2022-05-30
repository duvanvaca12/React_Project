export const fetchData = async (url, method = "GET") => {
  const response = await fetch(url, { method });
  const data = await response.json(); // Await
  return data;
};
