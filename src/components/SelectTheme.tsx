import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import GeoDiv from "../components/GeoDiv";
import { useIntl } from "react-intl";
import { useTheme } from "next-themes";

export default function SelectTheme() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const intl = useIntl();

  function HandleToggleChange(value: string) {
    if (theme === value) {
      return;
    }
    setTheme(value);
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Menu as="div" className={"relative"}>
      <Menu.Button as="button" aria-label="Select color theme">
        <GeoDiv
          className="h-8 flex flex-row w-full justify-center items-center transition transition-75 bg-zinc-50 dark:bg-zinc-800 px-3 py-2 gap-2 font-sans hover:bg-zinc-50/50 dark:hover:bg-zinc-800/50 shadow-md hover:shadow-lg"
          border
        >
          {theme === "light" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </GeoDiv>
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
        <Menu.Items className={"absolute right-0 mt-2"}>
          <GeoDiv
            className="w-max bg-zinc-100 dark:bg-zinc-800 text-left shadow-lg"
            border
          >
            <Menu.Item key={"light"}>
              {({ active }) => (
                <div
                  className={
                    "font-sans flex flex-row transition transition-75 justify-start items-center text-left gap-3 p-2 pl-3 pr-4 " +
                    (active && "bg-zinc-200 dark:bg-zinc-700")
                  }
                  onClick={() => HandleToggleChange("light")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                  </svg>
                  <p>{intl.formatMessage({ id: "Light" })}</p>
                </div>
              )}
            </Menu.Item>
            <Menu.Item key={"dark"}>
              {({ active }) => (
                <div
                  className={
                    "font-sans flex flex-row transition transition-75 justify-start items-center text-left gap-3 p-2 pl-3 pr-4 " +
                    (active && "bg-zinc-200 dark:bg-zinc-700")
                  }
                  onClick={() => HandleToggleChange("dark")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>{intl.formatMessage({ id: "Dark" })}</p>
                </div>
              )}
            </Menu.Item>
          </GeoDiv>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
