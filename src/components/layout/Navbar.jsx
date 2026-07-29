'use client'

import { useRouter, usePathname } from 'next/navigation'
import { toast } from 'react-toastify'

import { Avatar, Button, Dropdown } from '@heroui/react'

import ThemeToggler from '@/lib/ThemeToggler'
import { authClient } from '@/lib/auth-client'
import { GraduationCap, Menu } from 'lucide-react'
import Link from 'next/link'

// রিকোয়ারমেন্ট অনুযায়ী ৩টি নির্দিষ্ট রুট
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
                    toast.success('See you soon! 👋 Logged out successfully', {
                        position: 'top-right',
                        autoClose: 3000,
                    })

                    router.push('/')
                    router.refresh()
                },
            },
        })
    }

    return (
        <nav className='sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl'>
            <header className='container mx-auto flex items-center justify-between py-4'>
                {/* Logo */}
                <Link href='/' className='group flex items-center gap-2.5'>
                    <div className='flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-tr from-blue-600 to-teal-400 text-white shadow-md transition-transform duration-300 group-hover:scale-105'>
                        <GraduationCap className='h-5 w-5' />
                    </div>

                    <div className='flex flex-col'>
                        <span className='text-xl font-extrabold tracking-tight text-foreground'>
                            Skill<span className='text-blue-500'>Sphere</span>
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation (3 routes) */}
                <ul className='hidden items-center gap-8 md:flex'>
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href
                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`relative py-1 font-semibold transition-all duration-200 ${
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
                <div className='flex items-center gap-3'>
                    {/* Theme Toggle */}
                    <div className='rounded-full border border-border bg-secondary p-1'>
                        <ThemeToggler />
                    </div>

                    {/* Loading skeleton */}
                    {isPending && (
                        <div className='h-10 w-24 animate-pulse rounded-2xl bg-muted' />
                    )}

                    {/* ── DESKTOP: Logged In ── */}
                    {!isPending && user && (
                        <div className='hidden items-center gap-3 md:flex'>
                            <div className='flex flex-col items-end'>
                                <span className='text-sm font-semibold text-foreground'>
                                    {user.name}
                                </span>
                                <span className='text-xs text-muted-foreground'>
                                    {user.email}
                                </span>
                            </div>

                            <Link href='/my-profile'>
                                <Avatar
                                    src={user.image || ''}
                                    name={user.name || 'User'}
                                    size='sm'
                                    isBordered
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

                    {/* ── DESKTOP: Logged Out ── */}
                    {!isPending && !user && (
                        <div className='hidden items-center gap-2 md:flex'>
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

                    {/* ── MOBILE: Avatar (only when logged in) ── */}
                    {!isPending && user && (
                        <Link href='/my-profile' className='md:hidden'>
                            <Avatar
                                src={user.image || ''}
                                name={user.name || 'User'}
                                size='sm'
                                isBordered
                                color='danger'
                                className='cursor-pointer ring-2 ring-border transition-transform hover:scale-105'
                            />
                        </Link>
                    )}

                    {/* ── MOBILE: Hamburger Dropdown ── */}
                    <div className='md:hidden'>
                        <Dropdown>
                            <Dropdown.Trigger>
                                <Button
                                    isIconOnly
                                    size='sm'
                                    variant='flat'
                                    aria-label='Open navigation menu'
                                    className='border border-border bg-secondary text-foreground'
                                >
                                    <Menu />
                                </Button>
                            </Dropdown.Trigger>

                            <Dropdown.Popover className='mt-5 w-full'>
                                <Dropdown.Menu aria-label='Navigation menu'>
                                    {/* 3 Nav Links */}
                                    {navLinks.map((link) => {
                                        const isActive = pathname === link.href
                                        return (
                                            <Dropdown.Item key={link.href} textValue={link.label}>
                                                <Link
                                                    href={link.href}
                                                    className={`block w-full font-medium ${
                                                        isActive
                                                            ? 'font-semibold text-blue-600 dark:text-blue-400'
                                                            : 'text-foreground'
                                                    }`}
                                                >
                                                    {link.label}
                                                </Link>
                                            </Dropdown.Item>
                                        )
                                    })}

                                    {/* Mobile Auth Actions */}
                                    {user ? (
                                        <Dropdown.Item
                                            key='logout'
                                            textValue='Logout'
                                            className='text-danger'
                                            onAction={handleLogout}
                                        >
                                            Logout
                                        </Dropdown.Item>
                                    ) : [
                                        <Dropdown.Item key='login' textValue='Login'>
                                            <Link
                                                href='/login'
                                                className={`block w-full font-medium ${
                                                    pathname === '/login'
                                                        ? 'font-semibold text-blue-600 dark:text-blue-400'
                                                        : 'text-foreground'
                                                }`}
                                            >
                                                Login
                                            </Link>
                                        </Dropdown.Item>,

                                        <Dropdown.Item
                                            key='register'
                                            textValue='Register'
                                            className='font-medium text-blue-600'
                                        >
                                            <Link
                                                href='/register'
                                                className={`block w-full font-medium ${
                                                    pathname === '/register'
                                                        ? 'font-semibold text-blue-600 dark:text-blue-400'
                                                        : 'text-blue-600'
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