// src/application/use-cases/user-use-cases.ts
import User from '../../domain/entities/user-entity';
import { UserRepository } from '../../domain/repositories/user-repository';

const addUser = async (userRepository: UserRepository, name: string, email: string, password: string): Promise<User> => {
  const user: User = { name, email, password };
  return await userRepository.createUser(user);
};

const getAllUsersUseCase = async (userRepository: UserRepository): Promise<User[]> => {
  return await userRepository.getAllUsers();
};

export { addUser, getAllUsersUseCase };