const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getProducts = async (page: number, limit: number) => {
  const response = await fetch(`${API_URL}/products?limit=${limit}&page=${page}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  return await response.json();
}

export const getProductById = async (id: string) => {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }

  return await response.json();
}

export const createProduct = async (product: any) => {
  const response = await fetch(`${API_URL}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error('Failed to create product');
  }

  return await response.json();
}

export const updateProduct = async (id: string, product: any) => {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error('Failed to update product');
  }

  return await response.json();
}

export const deleteProduct = async (id: string) => {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to delete product');
  }

  return await response.json();
}

export const getProductsByCategory = async (category: string) => {
  const response = await fetch(`${API_URL}/products?category=${category}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch products by category');
  }

  return await response.json();
}