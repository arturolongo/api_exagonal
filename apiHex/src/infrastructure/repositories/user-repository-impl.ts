// src/infrastructure/repositories/user-repository-impl.ts
import mongoose, { Schema, Document } from 'mongoose';
import User from '../../domain/entities/user-entity';
import { UserRepository } from '../../domain/repositories/user-repository';

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