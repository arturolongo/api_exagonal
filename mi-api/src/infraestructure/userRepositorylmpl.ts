// En '../infrastructure/userRepositoryImpl.ts'

import mongoose, { Schema, Document } from 'mongoose';
import User from '../domain/userEntity';
import { UserRepository } from '../domain/userRepository';

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const UserModel = mongoose.model<User & Document>('User', UserSchema);

class UserRepositoryImpl implements UserRepository {
  async createUser(user: User): Promise<User> {
    const newUser = new UserModel(user);
    return await newUser.save();
  }

  async getAllUsers(): Promise<User[]> {
    return await UserModel.find().exec();
  }
}

export default UserRepositoryImpl;
