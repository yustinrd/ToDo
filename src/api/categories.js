import client from "./client";

export function getAllCategories() {
  return client.get(`/category`);
}

export function addCategory(category) {
  return client.post(`/category`, category);
}

export function editCategory(category) {
  return client.put(`/category/${category.id}`, category);
}

export function deleteCategory(id) {
  return client.delete(`/category/${id}`);
}