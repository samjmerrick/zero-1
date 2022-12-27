function Label(props: { children: React.ReactNode }) {
  return (
    <span className="mr-2 inline whitespace-nowrap rounded-lg bg-zinc-200 p-2 align-middle text-sm font-bold">
      {props.children}
    </span>
  );
}

export default Label;
