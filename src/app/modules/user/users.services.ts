import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { successLogger } from '../../../shared/logger';
import { IUser } from './user.interface';
import { User } from './user.model';
import { generateUserId } from './users.utils';

const createUsers = async (user: IUser): Promise<IUser | null> => {
  // Default password
  if (!user.password) {
    user.password = config.default_user_pass as string;
    successLogger.info(config.default_user_pass as string);
  }

  // Set role
  // user.role = 'student';

  // User Id
  const id = await generateUserId();
  user.id = id;

  const createUser = await User.create(user);

  if (!createUser) {
    throw new ApiError(400, 'Failed to create user Api');
  }
  return createUser;
};
export const UserServices = {
  createUsers,
};
