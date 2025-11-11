import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      role: 'ADMIN',
    },
    {
      id: 2,
      name: 'Brian Smith',
      email: 'brian.smith@example.com',
      role: 'ENGINEER',
    },
    {
      id: 3,
      name: 'Carla Nwosu',
      email: 'carla.nwosu@example.com',
      role: 'INTERN',
    },
    {
      id: 4,
      name: 'David Lee',
      email: 'david.lee@example.com',
      role: 'ENGINEER',
    },
    {
      id: 5,
      name: 'Ella Martins',
      email: 'ella.martins@example.com',
      role: 'ADMIN',
    },
  ];

  getUsers(role?: 'INTERN' | 'ADMIN' | 'ENGINEER') {
    if (role) {
      const userByRole = this.users.filter((user) => user.role === role);
      return userByRole;
    }
    return this.users;
  }
  getOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }
  createUser(user: {
    name: string;
    email: string;
    role: 'INTERN' | 'ADMIN' | 'ENGINEER';
  }) {
    const maxUserId = [...this.users].sort((a, b) => b.id - a.id)[0].id;
    const newUser = { id: maxUserId + 1, ...user };
    this.users.push(newUser);
    return newUser;
  }
  editOne(
    id: number,
    editUserDetails: {
      name?: string;
      email?: string;
      role?: 'INTERN' | 'ADMIN' | 'ENGINEER';
    },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { editUserDetails, ...user };
      }
      return user;
    });
    return this.getOne(id);
  }
  deleteOne(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
    this.getOne(id);
  }
}
