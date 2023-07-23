export type TNavItem = {
    label: string;
    subLabel?: string;
    items: TNavItem[];
    href?: string;
};

export type HeaderProps = {
    navItems: TNavItem[];
    phone: string;
    email: string;
    name: string;
};
