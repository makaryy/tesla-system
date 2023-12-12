export const Dot = ({ isActive, onClick }: { isActive: boolean; onClick: () => void }) => {
    return <span onClick={onClick} className={`mx-1 w-2 h-2 rounded-full cursor-pointer ${isActive ? "bg-primary-200" : "bg-accent-200"}`} />;
};
