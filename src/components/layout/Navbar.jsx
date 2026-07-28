'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { GraduationCap, Menu } from 'lucide-react'
import { Avatar, Button, Dropdown } from '@heroui/react'

import ThemeToggoler from '@/lib/ThemeToggler'
import { authClient } from '@/lib/auth-client'

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
            <header className='container mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8'>
                {/* Logo (Updated to match Footer style) */}
                <Link href='/' className='group flex items-center gap-2.5'>
                    <div className='flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-tr from-blue-600 to-teal-400 text-white shadow-md transition-transform duration-300 group-hover:scale-105'>
                        <GraduationCap className='h-5 w-5' />
                    </div>

                    {/* Text logo */}
                    <div className='flex flex-col'>
                        <span className='text-xl font-extrabold tracking-tight text-foreground'>
                            Skill<span className='text-blue-500'>Sphere</span>
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <ul className='hidden items-center gap-8 md:flex'>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className='font-medium text-foreground transition-colors duration-200 hover:text-primary'
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}

                    {/* Profile Link Only When Logged In */}
                    {user && (
                        <li>
                            <Link
                                href='/profile'
                                className='font-medium text-foreground transition-colors duration-200 hover:text-primary'
                            >
                                My Profile
                            </Link>
                        </li>
                    )}
                </ul>

                {/* Right Side */}
                <div className='flex items-center gap-3'>
                    {/* Theme Toggle — always visible */}
                    <div className='rounded-full border border-border bg-secondary p-1'>
                        <ThemeToggoler />
                    </div>

                    {/* Loading skeleton */}
                    {isPending && (
                        <div className='h-10 w-24 animate-pulse rounded-2xl bg-muted' />
                    )}

                    {/* ── DESKTOP: Logged In ── */}
                    {!isPending && user && (
                        <div className='hidden items-center gap-3 md:flex'>
                            {/* User Info */}
                            <div className='flex flex-col items-end'>
                                <span className='text-sm font-semibold text-foreground'>
                                    {user.name}
                                </span>

                                <span className='text-xs text-muted-foreground'>
                                    {user.email}
                                </span>
                            </div>

                            {/* Avatar */}
                            <Link href='/profile'>
                                <Avatar
                                    src={user.image || ''}
                                    name={user.name || 'User'}
                                    size='sm'
                                    isBordered
                                    color='danger'
                                    className='cursor-pointer ring-2 ring-border transition-transform hover:scale-105'
                                />
                            </Link>

                            {/* Logout */}
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
                                className='bg-primary font-medium text-primary-foreground shadow-lg transition-all hover:scale-[1.02] hover:opacity-90'
                            >
                                <Link href='/register'>Register</Link>
                            </Button>
                        </div>
                    )}

                    {/* ── MOBILE: Avatar (only when logged in) ── */}
                    {!isPending && user && (
                        <Link href='/profile' className='md:hidden'>
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
                            {/* 💡 এখানে Button-এর বদলে div ব্যবহার করে nested button error সমাধান করা হয়েছে */}
                            <Dropdown.Trigger>
                                <div
                                    role='button'
                                    aria-label='Open navigation menu'
                                    className='flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary text-foreground cursor-pointer transition-colors hover:bg-hover'
                                >
                                    <Menu className='h-5 w-5' />
                                </div>
                            </Dropdown.Trigger>

                            <Dropdown.Popover className='mt-5 w-full'>
                                <Dropdown.Menu aria-label='Navigation menu'>
                                    {/* Nav Links */}
                                    {navLinks.map((link) => (
                                        <Dropdown.Item key={link.href} textValue={link.label}>
                                            <Link
                                                href={link.href}
                                                className='block w-full font-medium text-foreground'
                                            >
                                                {link.label}
                                            </Link>
                                        </Dropdown.Item>
                                    ))}

                                    {/* My Profile — only when logged in */}
                                    {user
                                        ? [
                                                <Dropdown.Item key='profile' textValue='My Profile'>
                                                    <Link
                                                        href='/profile'
                                                        className='block w-full font-medium text-foreground'
                                                    >
                                                        My Profile
                                                    </Link>
                                                </Dropdown.Item>,

                                                <Dropdown.Item
                                                    key='logout'
                                                    textValue='Logout'
                                                    className='text-danger'
                                                    onAction={handleLogout}
                                                >
                                                    Logout
                                                </Dropdown.Item>,
                                            ]
                                        : [
                                                <Dropdown.Item key='login' textValue='Login'>
                                                    <Link
                                                        href='/login'
                                                        className='block w-full font-medium text-foreground'
                                                    >
                                                        Login
                                                    </Link>
                                                </Dropdown.Item>,

                                                <Dropdown.Item
                                                    key='register'
                                                    textValue='Register'
                                                    className='font-medium text-primary'
                                                >
                                                    <Link
                                                        href='/register'
                                                        className='block w-full font-medium text-primary'
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