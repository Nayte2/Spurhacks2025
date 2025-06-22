import PageIllustration from "@/components/page-illustration";

export const metadata = {
  title: "Authentication - Simplified Learning Study",
  description: "Sign in or create an account",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative flex grow flex-col">
      <PageIllustration multiple />

      {children}
    </main>
  );
}
