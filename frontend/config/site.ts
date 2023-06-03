import { BadgeCheck, FilePlus, Forward, Pencil } from "lucide-react"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "BW23",
  description: "A website for the Builder's Weekend June 2023",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  sideNav: [
    {
      label: "Create a credential format",
      href: "/credentials/create",
      icon: FilePlus,
    },
    {
      label: "Issue a credential",
      href: "/credentials/issue",
      icon: Pencil,
    },
    {
      label: "Proof request",
      href: "/credentials/proof",
      icon: Forward,
    },
    {
      label: "Verify credential",
      href: "/credentials/verify",
      icon: BadgeCheck,
    },
  ],
}
