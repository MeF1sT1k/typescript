import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { BugButton } from 'app/providers/ErrorBoundary';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export function Sidebar({ className }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(true);

    const mouseOver = () => setCollapsed(false);
    const mouseOut = () => setCollapsed(true);

    return (
        <div
            onMouseOver={mouseOver}
            onFocus={() => undefined}
            onBlur={() => undefined}
            onMouseOut={mouseOut}
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <div className={cls.switchers}>
                <BugButton />
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
}
