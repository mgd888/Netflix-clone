interface LayoutWithProps {
    children?: React.ReactNode;
}

const Layout: React.FC<LayoutWithProps> = ({ children }) => {
    return <>{children}</>;
};

export default Layout;
