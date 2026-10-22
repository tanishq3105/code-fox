console.time("dashboard render");
export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.timeEnd("dashboard render");
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center items-center bg-muted/40 px-4 py-12">
      <div className="w-full max-w-sm">{children}</div>
    </div>
  );
}
