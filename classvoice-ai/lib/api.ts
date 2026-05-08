export async function fetchInsights() {
  const response = await fetch('http://localhost:8000/insights')
  return response.json()
}