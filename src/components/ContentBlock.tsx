import { HTMLAttributes, PropsWithChildren } from "react";

function ContentBlock({
  children,
  className,
}: PropsWithChildren & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`min-h-[200px] h-auto w-full p-8 ` + className}>
      {children}
    </div>
  );
}

export default ContentBlock;
