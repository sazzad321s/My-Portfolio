import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-5 text-center">
      <h1 className="text-brand text-6xl font-extrabold">404</h1>
      <p className="mt-4 text-xl font-semibold">This page doesn&apos;t exist.</p>
      <p className="mt-2 text-muted">The link may be broken or the page may have moved.</p>
      <Button href="/" className="mt-8">Back to home</Button>
    </section>
  );
}
