export function TailwindIndicator() {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="fixed z-50 flex items-center justify-center h-8 px-3 text-xs font-medium rounded-md bottom-1 right-1 bg-muted text-muted-foreground">
      <div className="flex items-center sm:hidden">extra-small &mdash; xs</div>
      <div className="items-center hidden md:hidden sm:flex">
        small &mdash; sm
      </div>
      <div className="items-center hidden md:flex lg:hidden">
        medium &mdash; md
      </div>
      <div className="items-center hidden lg:flex xl:hidden">
        large &mdash; lg
      </div>
      <div className="items-center hidden xl:flex 2xl:hidden">
        extra-large &mdash; xl
      </div>
      <div className="items-center hidden 2xl:flex">
        &gt;2 extra-large &mdash; 2xl
      </div>
    </div>
  );
}
