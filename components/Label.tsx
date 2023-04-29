function Label(props: { children: React.ReactNode }) {
  return (
    <span className="mr-2 inline whitespace-nowrap rounded-2xl border border-neutral-400 py-2 px-3 align-middle text-xs text-neutral-300">
      {props.children}
    </span>
  );
}

export default Label;
