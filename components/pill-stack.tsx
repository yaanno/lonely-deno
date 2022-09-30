import Pill from "./pill.tsx";

export default function PillStack({
  stack,
  type,
  classNames = "",
}: {
  stack: string[] | null;
  type: string;
  classNames?: string;
}) {
  const colorScheme = type === "tag" ? "green" : "red";
  return (
    <div className={`${classNames} flex flex-wrap w-full gap-1 mb-1.5`}>
      {stack?.map((stackItem) => (
        <Pill color={colorScheme} type={type}>
          {stackItem}
        </Pill>
      ))}
    </div>
  );
}
