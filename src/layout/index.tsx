function Layout(): JSX.Element {
  return (
    <>
      <main className="w-full h-auto min-h-64 bg-gradient-to-b from-white from-20% to-green-600">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
