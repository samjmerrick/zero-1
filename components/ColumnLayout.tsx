function ColumnLayout({ children }) {
  return (
    <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-5 lg:space-x-10">
      {children}
    </div>
  );
}

export default ColumnLayout;
