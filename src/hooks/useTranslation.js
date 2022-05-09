import { useRouter } from "next/router";
import en from "../../locales/en.json";
import es from "../../locales/es.json";

const useTranslation = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "es" ? es : en;
  return {
    t,
    locale,
    router,
  };
};

export default useTranslation;
