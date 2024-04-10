import { clsx } from 'shared/lib/helpers/clsx/clsx';
import cls from './ProfilePage.module.scss';
import DynamicModuleLoader from 'shared/lib/componets/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

interface ProfilePageProps {
  className?: string;
}
const initialReducer = {
  profileSchema: profileReducer,
};

export const ProfilePage = ({ className }: ProfilePageProps) => {
  return (
    <DynamicModuleLoader reducers={initialReducer}>
      <div className={clsx(cls, {}, [className])}>ProfilePage</div>;
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
