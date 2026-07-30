'use client'

import { useRouter, usePathname } from 'next/navigation'
import toast from 'react-hot-toast'

import { Avatar, Button, Dropdown } from '@heroui/react'

import ThemeToggler from '@/lib/ThemeToggler'
import { authClient } from '@/lib/auth-client'
import { GraduationCap, Menu } from 'lucide-react'
import Link from 'next/link'

const navLinks = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'Courses',
        href: '/courses',
    },
    {
        label: 'My Profile',
        href: '/my-profile',
    },
]

const Navbar = () => {
    const router = useRouter()
    const pathname = usePathname()

    /* =========================
       SESSION
    ========================= */

    const { data: session, isPending } = authClient.useSession()
    const user = session?.user

    /* =========================
       LOGOUT
    ========================= */

    const handleLogout = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    toast.success('Logged out successfully!', {
                        position: 'top-right',
                    })

                    router.push('/')
                    router.refresh()
                },
                onError: (ctx) => {
                    toast.error(ctx.error.message || 'Logout failed! Please try again.', {
                        position: 'top-right',
                    })
                },
            },
        })
    }

    return (
        <nav className='sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl'>
            <header className='container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4'>
                {/* Logo */}
                <Link href='/' className='group flex items-center gap-2.5 shrink-0'>
                    <div className='flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-linear-to-tr from-blue-600 to-teal-400 text-white shadow-md transition-transform duration-300 group-hover:scale-105'>
                        <GraduationCap className='h-4 w-4 sm:h-5 sm:w-5' />
                    </div>

                    <div className='flex flex-col'>
                        <span className='text-lg sm:text-xl font-extrabold tracking-tight text-foreground'>
                            Skill<span className='text-blue-500'>Sphere</span>
                        </span>
                    </div>
                </Link>

                {/* Desktop & Tablet Navigation */}
                <ul className='hidden lg:flex items-center gap-6 xl:gap-8'>
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href
                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`relative py-1 font-semibold transition-all duration-200 text-sm xl:text-base ${
                                        isActive
                                            ? 'text-blue-600 dark:text-blue-400'
                                            : 'text-foreground hover:text-blue-500'
                                    }`}
                                >
                                    {link.label}
                                    {isActive && (
                                        <span className='absolute inset-x-0 -bottom-1 h-[2px] rounded-full bg-blue-600 dark:bg-blue-400' />
                                    )}
                                </Link>
                            </li>
                        )
                    })}
                </ul>

                {/* Right Side */}
                <div className='flex items-center gap-2 sm:gap-3'>
                    {/* Theme Toggle */}
                    <div className='rounded-full border border-border bg-secondary p-1'>
                        <ThemeToggler />
                    </div>

                    {/* Loading skeleton */}
                    {isPending && (
                        <div className='h-9 sm:h-10 w-20 sm:w-24 animate-pulse rounded-2xl bg-muted' />
                    )}

                    {/* ── DESKTOP & TABLET: Logged In ── */}
                    {!isPending && user && (
                        <div className='hidden lg:flex items-center gap-3'>
                            <div className='flex flex-col items-end'>
                                <span className='text-sm font-semibold text-foreground max-w-[120px] xl:max-w-[180px] truncate'>
                                    {user.name}
                                </span>
                                <span className='text-xs text-muted-foreground max-w-[120px] xl:max-w-[180px] truncate'>
                                    {user.email}
                                </span>
                            </div>

                            <Link href='/my-profile'>
                                <Avatar
                                    src={user?.image || user?.avatar || ''}
                                    name={user?.name || 'User'}
                                    size='sm'
                                    isBordered
                                    showFallback
                                    referrerPolicy="no-referrer"
                                    color='danger'
                                    className='cursor-pointer ring-2 ring-border transition-transform hover:scale-105'
                                />
                            </Link>

                            <Button
                                size='sm'
                                variant='flat'
                                onPress={handleLogout}
                                className='border border-border bg-secondary font-medium text-foreground transition-colors hover:bg-hover'
                            >
                                Logout
                            </Button>
                        </div>
                    )}

                    {/* ── DESKTOP & TABLET: Logged Out ── */}
                    {!isPending && !user && (
                        <div className='hidden lg:flex items-center gap-2'>
                            <Button
                                asChild
                                size='sm'
                                variant='light'
                                className='font-medium text-foreground transition-colors hover:bg-hover'
                            >
                                <Link href='/login'>Login</Link>
                            </Button>

                            <Button
                                asChild
                                size='sm'
                                className='bg-blue-600 font-medium text-white shadow-lg transition-all hover:scale-[1.02] hover:bg-blue-700'
                            >
                                <Link href='/register'>Register</Link>
                            </Button>
                        </div>
                    )}

                    {/* ── MOBILE & TABLET: Avatar (only when logged in) ── */}
                    {!isPending && user && (
                        <Link href='/my-profile' className='lg:hidden'>
                            <Avatar
                                src={user?.image || user?.avatar || ''}
                                name={user?.name || 'User'}
                                size='sm'
                                isBordered
                                showFallback
                                referrerPolicy="no-referrer"
                                color='danger'
                                className='cursor-pointer ring-2 ring-border transition-transform hover:scale-105'
                            />
                        </Link>
                    )}

                    {/* ── MOBILE & TABLET: Hamburger Dropdown ── */}
                    <div className='lg:hidden'>
                        <Dropdown>
                            {/* Line 193 Error Fixed: Using styled div instead of nested Button */}
                            <Dropdown.Trigger>
                                <div
                                    role="button"
                                    aria-label="Open navigation menu"
                                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-secondary text-foreground hover:bg-muted cursor-pointer transition-colors"
                                >
                                    <Menu className="h-5 w-5" />
                                </div>
                            </Dropdown.Trigger>

                            <Dropdown.Popover className="mt-2 w-56 rounded-2xl border border-border bg-background/95 p-1 shadow-xl backdrop-blur-xl">
                                <Dropdown.Menu aria-label='Navigation menu' className="w-full">
                                    {/* Nav Links */}
                                    {navLinks.map((link) => {
                                        const isActive = pathname === link.href
                                        return (
                                            <Dropdown.Item key={link.href} textValue={link.label}>
                                                <Link
                                                    href={link.href}
                                                    className={`block w-full py-1.5 px-2 font-medium transition-colors ${
                                                        isActive
                                                            ? 'font-bold text-blue-600 dark:text-blue-400'
                                                            : 'text-foreground hover:text-blue-500'
                                                    }`}
                                                >
                                                    {link.label}
                                                </Link>
                                            </Dropdown.Item>
                                        )
                                    })}

                                    {/* Mobile/Tablet Auth Actions */}
                                    {user ? (
                                        <Dropdown.Item
                                            key='logout'
                                            textValue='Logout'
                                            className='text-danger focus:text-danger font-medium'
                                            onAction={handleLogout}
                                        >
                                            <span className="block w-full py-1.5 px-2">Logout</span>
                                        </Dropdown.Item>
                                    ) : [
                                        <Dropdown.Item key='login' textValue='Login'>
                                            <Link
                                                href='/login'
                                                className={`block w-full py-1.5 px-2 font-medium ${
                                                    pathname === '/login'
                                                        ? 'font-bold text-blue-600 dark:text-blue-400'
                                                        : 'text-foreground hover:text-blue-500'
                                                }`}
                                            >
                                                Login
                                            </Link>
                                        </Dropdown.Item>,

                                        <Dropdown.Item
                                            key='register'
                                            textValue='Register'
                                        >
                                            <Link
                                                href='/register'
                                                className={`block w-full py-1.5 px-2 font-semibold ${
                                                    pathname === '/register'
                                                        ? 'text-blue-600 dark:text-blue-400'
                                                        : 'text-blue-600 hover:text-blue-700'
                                                }`}
                                            >
                                                Register
                                            </Link>
                                        </Dropdown.Item>,
                                    ]}
                                </Dropdown.Menu>
                            </Dropdown.Popover>
                        </Dropdown>
                    </div>
                </div>
            </header>
        </nav>
    )
}

export default Navbar;