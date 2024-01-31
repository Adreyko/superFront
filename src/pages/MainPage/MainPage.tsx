import Counter from "entities/Counter/ui/Counter";
import { useTranslation } from "react-i18next";
const MainPage = () => {
  const { t } = useTranslation("main");
  return (
    <div>
      <Counter/>
      {t("Main")}
    </div>
  );
};

export default MainPage;
