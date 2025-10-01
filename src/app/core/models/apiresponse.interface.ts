export interface ApiResponse<T> {
  status: number;
  code: number;
  data: T | T[] | null;
  errorMessage: string | null;
  dateAt: string;
}
