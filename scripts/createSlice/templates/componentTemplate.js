const interfaceConst = 'interface';

module.exports = (
  componentName
) => `import { clsx } from 'shared/lib/helpers/clsx/clsx';
import { useTranslation } from 'react-i18next';
import cls from './${componentName}.module.scss';
import { memo } from 'react';

${interfaceConst} ${componentName}Props {
    className?: string;
}

export const ${componentName} = memo((props: ${componentName}Props) => {
    const { className } = props;
    const { t } = useTranslation();
    
    return (
        <div className={clsx(cls.${componentName}, {}, [className])}>
           
        </div>
    );
});`;
