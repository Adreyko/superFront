import { useEffect, useState } from "react";
import Button from "shared/ui/Button/Button";

interface BugButtonProps {
  className?: string
}

export const BugButton = ({ className }: BugButtonProps) => {
  const [error, setError] = useState(false);
  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);
  const onError = () => {
    setError(true);
  };

  return <Button onClick={onError}>Throw error</Button>;
};

export default BugButton;
