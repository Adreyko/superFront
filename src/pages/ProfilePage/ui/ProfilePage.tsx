import { clsx } from '@/shared/lib/helpers/clsx/clsx';
import cls from './ProfilePage.module.scss';
import DynamicModuleLoader from '@/shared/lib/componets/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from '@/entities/Profile';

import { Page } from '@/widgets/Page/Page';
import EditableProfileCard from '@/features/editableProfleCard/ui/EditableProfleCard/EditableProfleCard';
import { useParams } from 'react-router-dom';

interface ProfilePageProps {
  className?: string;
}
const initialReducer = {
  profileSchema: profileReducer,
};

export const ProfilePage = ({ className }: ProfilePageProps) => {
  const { id } = useParams<{ id: string }>();
  if (!id) {
    return null;
  }
  return (
    <DynamicModuleLoader reducers={initialReducer}>
      <Page className={clsx(cls, {}, [className])}>
        <EditableProfileCard id={id} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
