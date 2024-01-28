// src/domain/repositories/user-repository.ts
import User from '../entities/user-entity';

export interface UserRepository {
  createUser(user: User): Promise<User>;
  getAllUsers(): Promise<User[]>;
}
