'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { authClient } from '@/lib/auth-client'
import { BookOpen, Award, Mail, Edit3, User, ArrowRight } from 'lucide-react'

// Dummy Data for Enrolled Courses & Rewards
const ENROLLED_COURSES = [
    {
        id: '1',
        title: 'Complete Web Development Bootcamp',
        instructor: 'John Doe',
        progress: 75,
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=300',
    },
    {
        id: '2',
        title: 'UI/UX Design Masterclass',
        instructor: 'Jane Smith',
        progress: 40,
        image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=300',
    },
]

const ACHIEVEMENTS = [
    {
        icon: '🎓',
        title: 'Fast Learner',
        description: 'Completed 5 modules in a week',
        status: 'Unlocked',
    },
    {
        icon: '⚡',
        title: 'Code Ninja',
        description: 'Submitted 10 assignments on time',
        status: 'Unlocked',
    },
    {
        icon: '🏆',
        title: 'Course Graduate',
        description: 'Finish 1 full course to unlock',
        status: 'Locked',
    },
]

const MyProfilePage = () => {
    const [activeTab, setActiveTab] = useState('courses')

    /* =========================
       BETTER AUTH SESSION
    ========================= */
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user

    /* =========================
       DYNAMIC USER DATA
    ========================= */
    const USER_DATA = {
        name: user?.name || 'SkillSphere Student',
        email: user?.email || 'student@skillsphere.com',
        image: user?.image || user?.avatar || '',
        role: 'Verified Student',
    }

    if (isPending) {
        return (
            <div className="min-h-[70vh] flex items-center justify-center text-foreground">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
            </div>
        )
    }

    if (!user) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4 text-foreground">
                <h2 className="text-2xl font-bold">You are not logged in!</h2>
                <Link
                    href="/login"
                    className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all"
                >
                    Go to Login
                </Link>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background text-foreground font-sans p-4 md:p-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-6">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2 flex items-center gap-3">
                            <User className="w-8 h-8 text-blue-600" />
                            My Profile
                        </h1>
                        <p className="text-muted-foreground font-medium">
                            Manage your personal profile, enrolled courses, and achievements in one place.
                        </p>
                    </div>

                    <div className="flex items-center gap-4 bg-card p-2 pr-6 rounded-full shadow-sm border border-border w-fit">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500 bg-secondary flex items-center justify-center">
                            {USER_DATA.image ? (
                                <Image
                                    src={USER_DATA.image}
                                    alt="Profile"
                                    fill
                                    unoptimized
                                    className="object-cover"
                                />
                            ) : (
                                <span className="text-xl font-bold text-blue-600">
                                    {USER_DATA.name.charAt(0)}
                                </span>
                            )}
                        </div>

                        <div>
                            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                                Logged in as
                            </p>
                            <p className="font-bold text-foreground text-sm leading-tight">
                                {USER_DATA.email}
                            </p>
                        </div>
                    </div>
                </header>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <aside className="w-full lg:w-80 shrink-0 space-y-6">
                        {/* Profile Info Card */}
                        <div className="bg-card p-6 rounded-3xl shadow-md border border-border text-center flex flex-col items-center">
                            <div className="relative w-28 h-28 mx-auto mb-4">
                                {USER_DATA.image ? (
                                    <Image
                                        src={USER_DATA.image}
                                        alt={USER_DATA.name}
                                        fill
                                        unoptimized
                                        className="object-cover rounded-full ring-4 ring-blue-500/20 shadow-md"
                                    />
                                ) : (
                                    <div className="w-full h-full rounded-full ring-4 ring-blue-500/20 bg-blue-100 dark:bg-blue-900/40 text-blue-600 flex items-center justify-center text-3xl font-bold">
                                        {USER_DATA.name.charAt(0)}
                                    </div>
                                )}
                                <div className="absolute bottom-1 right-1 w-6 h-6 bg-emerald-500 border-2 border-card rounded-full z-10" />
                            </div>

                            <h2 className="text-xl font-bold text-foreground">
                                {USER_DATA.name}
                            </h2>
                            <p className="text-muted-foreground text-xs mb-3 flex items-center gap-1">
                                <Mail className="w-3.5 h-3.5" />
                                {USER_DATA.email}
                            </p>

                            <span className="px-4 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 text-xs font-semibold rounded-full mb-6">
                                {USER_DATA.role}
                            </span>

                            {/* Update Profile Button */}
                            <Link
                                href="/my-profile/update-profile"
                                className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                            >
                                <Edit3 className="w-4 h-4" />
                                Update Profile
                            </Link>
                        </div>

                        {/* Navigation Tabs */}
                        <nav className="bg-card rounded-3xl shadow-sm border border-border overflow-hidden p-2">
                            {[
                                {
                                    id: 'courses',
                                    label: 'Enrolled Courses',
                                    icon: <BookOpen className="w-5 h-5" />,
                                },
                                {
                                    id: 'achievements',
                                    label: 'Achievements',
                                    icon: <Award className="w-5 h-5" />,
                                },
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`
                                        w-full flex items-center gap-3 px-5 py-3.5 rounded-2xl
                                        font-semibold text-sm transition-all mb-1
                                        ${
                                            activeTab === tab.id
                                                ? 'bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 font-bold'
                                                : 'text-muted-foreground hover:bg-secondary'
                                        }
                                    `}
                                >
                                    {tab.icon}
                                    {tab.label}
                                </button>
                            ))}
                        </nav>
                    </aside>

                    {/* Main Content Area */}
                    <main className="grow">
                        {/* Tab 1: Enrolled Courses */}
                        {activeTab === 'courses' && (
                            <div className="space-y-6">
                                <h3 className="text-xl font-bold text-foreground">My Enrolled Courses</h3>
                                <div className="grid gap-4">
                                    {ENROLLED_COURSES.map((course) => (
                                        <div
                                            key={course.id}
                                            className="bg-card p-5 rounded-2xl shadow-sm border border-border flex flex-col md:flex-row items-center gap-5 hover:shadow-md transition-shadow"
                                        >
                                            <div className="relative w-full md:w-32 h-24 rounded-xl overflow-hidden shrink-0">
                                                <Image
                                                    src={course.image}
                                                    alt={course.title}
                                                    fill
                                                    unoptimized
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="grow space-y-2 w-full">
                                                <h4 className="font-bold text-foreground text-lg">
                                                    {course.title}
                                                </h4>
                                                <p className="text-xs text-muted-foreground">
                                                    Instructor: {course.instructor}
                                                </p>
                                                {/* Progress bar */}
                                                <div className="w-full bg-secondary rounded-full h-2">
                                                    <div
                                                        className="bg-blue-600 h-2 rounded-full"
                                                        style={{ width: `${course.progress}%` }}
                                                    />
                                                </div>
                                                <p className="text-xs text-right text-muted-foreground font-medium">
                                                    {course.progress}% Completed
                                                </p>
                                            </div>
                                            <Link
                                                href={`/courses/${course.id}`}
                                                className="w-full md:w-auto px-4 py-2 bg-secondary hover:bg-border text-foreground font-semibold text-sm rounded-xl transition-colors flex items-center justify-center gap-1 shrink-0"
                                            >
                                                Continue
                                                <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Tab 2: Achievements */}
                        {activeTab === 'achievements' && (
                            <div className="space-y-6">
                                <h3 className="text-xl font-bold text-foreground">Student Badges & Achievements</h3>
                                <div className="grid md:grid-cols-3 gap-4">
                                    {ACHIEVEMENTS.map((item, index) => (
                                        <div
                                            key={index}
                                            className="bg-card p-6 rounded-2xl border border-border text-center flex flex-col items-center justify-between"
                                        >
                                            <div className="text-4xl mb-3">{item.icon}</div>
                                            <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                                            <p className="text-xs text-muted-foreground mb-4">{item.description}</p>
                                            <span
                                                className={`text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full ${
                                                    item.status === 'Unlocked'
                                                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300'
                                                        : 'bg-muted text-muted-foreground'
                                                }`}
                                            >
                                                {item.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    )
}

export default MyProfilePage;