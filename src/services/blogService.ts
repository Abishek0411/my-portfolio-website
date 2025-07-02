import axios from 'axios';
import { API_BASE_URL } from '@/config/api';
import { BlogPost, CreatePostData } from '@/types/blog';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const blogService = {
  // Get all blog posts
  async getPosts(): Promise<BlogPost[]> {
    const response = await api.get('/posts');
    return response.data;
  },

  // Create a new blog post
  async createPost(postData: CreatePostData): Promise<BlogPost> {
    const response = await api.post('/posts', postData);
    return response.data;
  },
};