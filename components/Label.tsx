function Label(props: { children: React.ReactNode }) {
  return (
    <span className="mr-2 inline whitespace-nowrap rounded-lg bg-neutral-100 py-2 px-2.5 align-middle text-xs font-semibold text-neutral-600">
      {props.children}
    </span>
  );
}

export default Label;
