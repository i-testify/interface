import { Globe04, Home01 } from "@untitled-ui/icons-react"
import { Bookmark } from "lucide-react"

export const AppRoutes = {
    Home: {
        href: "/",
        icon: Home01
    },
    Discover: {
        href: "/discover",
        icon: Globe04
    },
    Trending: {
        href: "/trending",
        icon: Bookmark
    },
    Blog: {
        href: "/blog",
        icon: ""
    },
    HelpAndSupport: {
        href: "/help-n-support",
        icon: ""
    },
    Legal: {
        href: "/legal",
        icon: ""
    },
}

export const AppLinks = [
    {
        id: 1,
        href: AppRoutes.Home.href,
        icon: AppRoutes.Home.icon,
        label: "Home"
    },
    {
        id: 2,
        href: AppRoutes.Discover.href,
        icon: AppRoutes.Discover.icon,
        label: "Discover"
    },
    {
        id: 3,
        href: AppRoutes.Trending.href,
        icon: AppRoutes.Trending.icon,
        label: "Trending"
    },
]

export const FooterLinks = [
    {
        id: 1,
        href: AppRoutes.Blog.href,
        icon: AppRoutes.Blog.icon,
        label: "Blogs"
    },
    {
        id: 2,
        href: AppRoutes.HelpAndSupport.href,
        icon: AppRoutes.HelpAndSupport.icon,
        label: "Help & Support"
    },
    {
        id: 3,
        href: AppRoutes.Legal.href,
        icon: AppRoutes.Legal.icon,
        label: "Legal"
    },
]