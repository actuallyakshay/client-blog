export interface INavLinks {
  title: string;
  path: string;
}

export interface IBlogResponse {
  success: boolean;
  total_blogs: number;
  message: string;
  offset: number;
  limit: number;
  blogs: IBlog[];
}

export interface IBlog {
  content_text: string;
  category: string;
  updated_at: string;
  user_id: number;
  title: string;
  photo_url: string;
  created_at: string;
  id: number;
  description: string;
  content_html: string;
}

export interface IFilter {
  limit?: number;
  offSet?: number;
}

export interface IFetchAPICall {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  data?: any;
}
