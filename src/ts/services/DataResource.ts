class DataResource<T> {
  constructor(private endpoint: string) {}

  async loadAll(): Promise<T[]> {
    const response = await fetch(this.endpoint);

    return response.json();
  }

  async loadOne(id: number): Promise<T> {
    const response = await fetch(`${this.endpoint}/${id}`);

    return response.json();
  }

  async delete(id: number): Promise<Response> {
    const response = await fetch(`${this.endpoint}/${id}`, {
      method: "DELETE",
    });

    return response;
  }

  async save(data: T): Promise<Response> {
    const response = await fetch(this.endpoint, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    return response;
  }
}

export default DataResource;
