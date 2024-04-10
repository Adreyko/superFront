import { clsx } from 'shared/lib/helpers/clsx/clsx';
import cls from './Profile.module.scss';

interface ProfileProps {
  className?: string;
}

export const Profile = ({ className }: ProfileProps) => {
  return <div className={clsx(cls, {}, [className])}>Profile</div>;
};

export default Profile;
