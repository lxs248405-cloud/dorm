export interface User {
  id: string;
  name: string;
  studentId: string;
  avatar: string;
  credit: number;
  dorm: string;
}

export interface Item {
  id: string;
  title: string;
  category: string;
  status: 'available' | 'borrowed' | 'reserved';
  image: string;
  location: string;
  ownerName: string;
  creditRequired: number;
  condition: string;
}

export interface RequestPost {
  id: string;
  title: string;
  description: string;
  author: string;
  avatar: string;
  time: string;
  credit: number;
  replyCount: number;
}

export interface BorrowRecord {
  id: string;
  itemName: string;
  itemImage: string;
  location: string;
  borrowDate: string;
  returnDate: string;
  status: 'active' | 'returned' | 'overdue';
}
