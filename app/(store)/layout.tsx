import type { Metadata } from "next";
import "../globals.css";

import { draftMode } from "next/headers";
import { ClerkProvider } from "@clerk/nextjs";

import { SanityLive } from "@/sanity/lib/live";
import { VisualEditing } from "next-sanity";

import DisableDraftMode from "@/components/DisableDraftMode";
import Navigation from "@/components/Menu/Navigation";

export const metadata: Metadata = {
  title: "Trendify - Shop Smart, Dress Sharp - Fashion You Love at Fair Prices",
  description: "E-Commerce store with dozens of products made for your choice",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider dynamic>
      <html lang="en">
        <body>
          {(await draftMode()).isEnabled && (
            <>
              <DisableDraftMode />
              <VisualEditing />
            </>
          )}

          <main>
            <Navigation />
            {children}
          </main>

          <SanityLive />
        </body>
      </html>
    </ClerkProvider>
  );
}
