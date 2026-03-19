export interface Column<T> {
  key: keyof T;
  title: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}

export interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
}