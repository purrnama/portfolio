import { Fragment } from "react";
import { Menu } from "@headlessui/react";
import SelectLanguage from "./SelectLanguage";
import SelectTheme from "./SelectTheme";
import { Transition } from "@headlessui/react";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";

export default function MobileNav() {
  const intl = useIntl();
  const router = useRouter();
  return (
    <Menu as="div" className={"lg:hidden relative"}>
      <Menu.Button
        as="button"
        className="h-8 flex flex-row w-full justify-center items-center transition transition-75 px-2 py-1 gap-2 text-lg font-sans border-solid border-black/20 dark:border-white/20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
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
            "absolute flex flex-col flex-1 right-0 mt-2 p-4 w-[200px] gap-3 bg-stone-100 dark:bg-stone-800 text-left shadow-lg"
          }
        >
          <Menu.Item key={"home"}>
            {({ active }) => (
              <div
                className={
                  "font-sans transition transition-75 text-lg py-1 px-2 text-left rounded-md" +
                  (active && " bg-stone-200 dark:bg-stone-700")
                }
                onClick={() => router.push("/")}
              >
                {intl.formatMessage({ id: "Home" })}
              </div>
            )}
          </Menu.Item>
          <Menu.Item key={"logs"}>
            {({ active }) => (
              <div
                className={
                  "font-sans transition transition-75 text-lg py-1 px-2 text-left rounded-md" +
                  (active && " bg-stone-200 dark:bg-stone-700")
                }
                onClick={() => router.push("/logs")}
              >
                {intl.formatMessage({ id: "Logs" })}
              </div>
            )}
          </Menu.Item>
          <Menu.Item key={"artworks"}>
            {({ active }) => (
              <div
                className={
                  "font-sans transition transition-75 text-lg py-1 px-2 text-left rounded-md" +
                  (active && " bg-stone-200 dark:bg-stone-700")
                }
                onClick={() => router.push("/artworks")}
              >
                {intl.formatMessage({ id: "Artworks" })}
              </div>
            )}
          </Menu.Item>
          <Menu.Item key={"work"}>
            {({ active }) => (
              <div
                className={
                  "font-sans transition transition-75 text-lg py-1 px-2 text-left rounded-md" +
                  (active && " bg-stone-200 dark:bg-stone-700")
                }
                onClick={() => router.push("/work")}
              >
                {intl.formatMessage({ id: "Work" })}
              </div>
            )}
          </Menu.Item>
          <Menu.Item key={"uses"}>
            {({ active }) => (
              <div
                className={
                  "font-sans transition transition-75 text-lg py-1 px-2 text-left rounded-md" +
                  (active && " bg-stone-200 dark:bg-stone-700")
                }
                onClick={() => router.push("/uses")}
              >
                {intl.formatMessage({ id: "Uses" })}
              </div>
            )}
          </Menu.Item>

          <hr className="opacity-20" />
          <div className="flex flex-row gap-2 flex-1">
            <SelectLanguage />
            <SelectTheme />
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
