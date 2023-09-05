import { classNames } from "shared/lib/helpers/className/className";
import cls from "./ErrorPage.module.scss";

interface ErrorPageProps {
  className?: string
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
  return (
    <div className={classNames(cls.ErrorPage, {}, [className])}>
      <h1>Sorry.. there was an error</h1>
    </div>
  );
};

export default ErrorPage;
