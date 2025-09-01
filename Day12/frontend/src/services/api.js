const API_URL = "http://localhost:5000/api/tasks";

async function request(url, options) {
  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error(`Server error: ${res.status}`);
    }
    return res.json();
  } catch (err) {
    console.error("API request failed:", err.message);
    throw err;
  }
}

export function getTasks() {
  return request(API_URL);
}

export function addTask(text) {
  return request(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
}

export function completeTask(id) {
  return request(`${API_URL}/${id}/complete`, { method: "PUT" });
}

export function deleteTask(id) {
  return request(`${API_URL}/${id}`, { method: "DELETE" });
}
