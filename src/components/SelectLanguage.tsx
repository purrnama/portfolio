import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { LOCALE_LABEL, SUPPORTED_LOCALES } from "../constants/locales";
import { useRouter } from "next/router";

function getShortName(locale: string): string {
  return locale.split("-")[0].toUpperCase() as string;
}

export default function SelectLanguage() {
  const router = useRouter();
  const locale = router.locale as string;

  async function HandleSelectLanguage(newLocale: string) {
    if (newLocale === locale) {
      return;
    }
    await router.replace(router.asPath, router.asPath, { locale: newLocale });
  }

  return (
    <Menu as="div" className={"relative w-20"}>
      <Menu.Button
        as="button"
        className="h-8 flex flex-row w-full justify-center items-center transition transition-75 rounded-lg bg-stone-50 dark:bg-stone-800 px-2 py-1 space-x-2 text-lg font-sans hover:bg-opacity-50 hover:dark:bg-opacity-50 shadow-sm"
      >
        <p>{getShortName(locale)}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform -translate-y-1 opacity-0"
        enterTo="transform translate-0 opacity-100"
        leave="transition ease-in duration-100"
        leaveFrom="transform translate-0 opacity-100"
        leaveTo="transform -translate-y-1 opacity-0"
      >
        <Menu.Items
          className={
            "absolute right-0 mt-2 p-3 w-max space-y-1 bg-stone-100 dark:bg-stone-800 rounded-lg text-left shadow-lg"
          }
        >
          {SUPPORTED_LOCALES.map((lang) => (
            <Menu.Item key={lang}>
              {({ active }) => (
                <div
                  className={
                    "font-sans transition transition-75 text-lg py-1 pl-2 pr-4 text-left rounded-md" +
                    (active && " bg-stone-200 dark:bg-stone-700")
                  }
                  onClick={() => HandleSelectLanguage(lang)}
                >
                  {LOCALE_LABEL[lang]}
                </div>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
