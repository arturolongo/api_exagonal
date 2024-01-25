// En '../domain/userRepository.ts'

import User from './userEntity'; // Asegúrate de tener la ruta correcta
import { Document } from 'mongoose';

export interface UserRepository {
  createUser(user: User): Promise<User>;
  getAllUsers(): Promise<User[]>;
}
