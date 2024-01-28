// En '../application/userUseCases.ts'

import User from '../domain/userEntity';
import UserRepositoryImpl from '../infraestructure/userRepositorylmpl';

// Crear una instancia del repositorio dentro del archivo
const userRepository = new UserRepositoryImpl();

const addUser = async (name: string, email: string, password: string): Promise<User> => {
  const user: User = { _id: '', name, email, password };
  return await userRepository.createUser(user);
};

const getAllUsersUseCase = async (): Promise<User[]> => {
  return await userRepository.getAllUsers();
};

export { addUser, getAllUsersUseCase };
