function Container({ children }) {
  return (
    <div className="container mx-auto w-full space-y-4 px-5 md:max-w-7xl">
      {children}
    </div>
  );
}

export default Container;
