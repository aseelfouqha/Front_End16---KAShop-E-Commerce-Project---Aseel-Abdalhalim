import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "Home": "Home",
          "Login": "Login",
          "Register": "Register",
          "Cart": "Cart",
          "Categories": "Categories",
          "Products": "Products",
          "Add to Cart":"Add to Cart"

        }
      },
      ar: {
        translation: {
          "Home": "الرئيسية",
          "Login": "تسجيل الدخول",
          "Register": "إنشاء حساب",
          "Cart": "سلة التسوق",
          "Categories": "التصنيفات",
          "Products": "المنتجات",
          "Add to Cart":"أضف إلى السلة"

        }
    },
    lng: "ar", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    }
  });