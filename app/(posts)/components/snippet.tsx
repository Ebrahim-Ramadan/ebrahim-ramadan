import { Caption } from "./caption";

// @ts-ignore
export const Snippet = ({ children, scroll = true, caption = null }) => (
  <div className="my-6">
    <div className="relative overflow-hidden rounded-lg">
      <pre
        style={{
          width: "max-content",
          minWidth: "100%",
          maxWidth: "none",
        }}
        className={`
          p-4
          text-sm
          bg-gray-800 text-white
          dark:bg-[#222] dark:text-gray-300
          ${scroll ? "overflow-x-auto" : "whitespace-pre-wrap break-words"}
        `}
      >
        <code>{children}</code>
      </pre>
    </div>

    {caption != null ? <Caption>{caption}</Caption> : null}
  </div>
);