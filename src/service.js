export default class Service {

  _apiBase = 'http://localhost:3004';

  async get(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  }

  async post(url, postData) {
    const res = await fetch(`${this._apiBase}${url}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    });

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  }

  async put(url, putData) {
    const res = await fetch(`${this._apiBase}${url}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(putData)
    });

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  }

  async delete(url) {
    const res = await fetch(`${this._apiBase}${url}`, {
      method: 'DELETE'
    });

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  }

  async getAllCategories() {
    return await this.get(`/category`);
  }

  async getCategory(id) {
    return await this.get(`/category/${id}`);
  }

  async deleteCategory(id) {
    return await this.delete(`/category/${id}`);
  }

  async addCategory(category) {
    return await this.post(`/category`, category);
  }

  async getAllTasks() {
    return await this.get(`/task`);
  }

  async getTask(id) {
    return await this.get(`/task/${id}`);
  }

  async updateTask(task) {
    return await this.put(`/task/${task.id}`, task);
  }
}
