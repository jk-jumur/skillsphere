'use client'



import React, { useState, useEffect } from 'react'

import { useRouter } from 'next/navigation'

import Link from 'next/link'

import Image from 'next/image'

import toast from 'react-hot-toast'

import { authClient } from '@/lib/auth-client'

import { ArrowLeft, User, Link as LinkIcon, Save, UserCheck, ShieldCheck, Sparkles } from 'lucide-react'

import { Button, Form } from '@heroui/react'



export default function UpdateProfilePage() {

const router = useRouter()


// Better Auth session data

const { data: session, isPending } = authClient.useSession()

const user = session?.user



// Form States

const [name, setName] = useState('')

const [image, setImage] = useState('')

const [loading, setLoading] = useState(false)

const [imgError, setImgError] = useState(false)





// 1. Populate existing user info
useEffect(() => {
    if (user) {
        queueMicrotask(() => {
            setName(user.name || '')
            setImage(user.image || user.avatar || '')
        })
    }
}, [user])

// 2. Reset image error state when image URL changes
useEffect(() => {
    queueMicrotask(() => {
        setImgError(false)
    })
}, [image])



// Form Submit Handler

const handleUpdateProfile = async (e) => {

e.preventDefault()

setLoading(true)



try {

const res = await authClient.updateUser({

name: name,

image: image,

})



if (res?.error) {

toast.error(res.error.message || 'Failed to update profile')

} else {

toast.success('Profile updated successfully! 🎉')

router.push('/my-profile')

}

} catch (err) {

toast.error(err?.message || 'Something went wrong!')

} finally {

setLoading(false)

}

}



if (isPending) {

return (

<div className="min-h-[70vh] flex items-center justify-center">

<div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />

</div>

)

}



return (

<div className="w-full h-fit max-h-fit overflow-hidden bg-background text-foreground p-4 md:p-8 flex flex-col items-center justify-center relative py-12">

<div className="w-full max-w-md my-auto">


{/* 1. Interactive Back Button */}

<div className="mb-6">

<Link

href="/my-profile"

className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-card/80 hover:bg-card border border-border/80 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 text-xs font-semibold text-muted-foreground hover:text-blue-600 transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-md"

>

<div className="w-6 h-6 rounded-full bg-secondary group-hover:bg-blue-50 dark:group-hover:bg-blue-950/50 flex items-center justify-center transition-colors">

<ArrowLeft className="w-3.5 h-3.5 text-foreground group-hover:text-blue-600 transition-transform duration-300 group-hover:-translate-x-1" />

</div>

<span>Back to Profile</span>

</Link>

</div>



{/* 2. Interactive Main Form Card */}

<div className="group/card bg-card/90 backdrop-blur-xl border border-border/80 hover:border-blue-300/80 p-6 md:p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">

{/* Animated Top Glow Border */}

<div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-blue-600 via-indigo-600 to-sky-400 group-hover/card:brightness-125 transition-all duration-500" />



{/* Card Header */}

<div className="flex items-start gap-4 mb-6 pb-5 border-b border-border/60">

<div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/50 flex items-center justify-center text-blue-600 shrink-0 shadow-sm transition-transform duration-500 group-hover/card:scale-110 group-hover/card:rotate-3">

<UserCheck className="w-6 h-6" />

</div>

<div>

<h1 className="text-xl md:text-2xl font-bold text-foreground tracking-tight flex items-center gap-2">

Update Information

<Sparkles className="w-4 h-4 text-blue-500 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />

</h1>

<p className="text-xs text-muted-foreground mt-0.5">

Modify your personal details & profile photo.

</p>

</div>

</div>



{/* Form Container */}

<Form onSubmit={handleUpdateProfile} className="space-y-5 w-full">


{/* 1. Full Name Field */}

<div className="w-full text-left space-y-1.5">

<label className="text-sm font-bold text-slate-800 dark:text-slate-200 block">

Full Name <span className="text-red-500">*</span>

</label>

<div className="group/input flex items-center gap-2.5 px-4 h-12 rounded-2xl bg-sky-50/40 dark:bg-slate-900/40 border border-sky-100 dark:border-slate-800 hover:border-blue-300 focus-within:!border-blue-500 transition-all duration-300 shadow-none hover:shadow-md hover:shadow-blue-500/5">

<User className="w-4 h-4 text-slate-400 group-focus-within/input:text-blue-500 group-hover/input:text-blue-500 shrink-0 transition-colors duration-300" />

<input

type="text"

value={name}

onChange={(e) => setName(e.target.value)}

placeholder="John Doe"

required

className="w-full bg-transparent outline-none border-none text-sm text-slate-700 dark:text-slate-200 placeholder:text-slate-400"

/>

</div>

</div>



{/* 2. Profile Image URL Field */}

<div className="w-full text-left space-y-1.5">

<label className="text-sm font-bold text-slate-800 dark:text-slate-200 block">

Profile Image URL

</label>

<div className="group/input flex items-center gap-2.5 px-4 h-12 rounded-2xl bg-sky-50/40 dark:bg-slate-900/40 border border-sky-100 dark:border-slate-800 hover:border-blue-300 focus-within:!border-blue-500 transition-all duration-300 shadow-none hover:shadow-md hover:shadow-blue-500/5">

<LinkIcon className="w-4 h-4 text-slate-400 group-focus-within/input:text-blue-500 group-hover/input:text-blue-500 shrink-0 -rotate-45 transition-colors duration-300" />

<input

type="url"

value={image}

onChange={(e) => setImage(e.target.value)}

placeholder="https://example.com/profile.jpg"

required

className="w-full bg-transparent outline-none border-none text-sm text-slate-700 dark:text-slate-200 placeholder:text-slate-400"

/>

</div>

</div>



{/* Interactive Live Image Preview */}

{image && !imgError && (

<div className="pt-1">

<div className="group/preview flex items-center gap-3.5 bg-secondary/40 hover:bg-secondary/70 p-3.5 rounded-2xl border border-border/80 hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">

<div className="relative w-12 h-12 shrink-0">

<Image

src={image}

alt="Preview"

width={48}

height={48}

unoptimized

className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500/30 group-hover/preview:ring-blue-500/60 shadow-sm transition-all duration-500 group-hover/preview:scale-110"

onError={() => setImgError(true)}

/>

<div className="absolute -bottom-0.5 -right-0.5 bg-emerald-500 w-3.5 h-3.5 rounded-full border-2 border-card" />

</div>

<div className="min-w-0 flex-1">

<p className="text-xs font-bold text-foreground flex items-center gap-1">

Live Photo Preview

<ShieldCheck className="w-3.5 h-3.5 text-blue-500 inline" />

</p>

<p className="text-[11px] text-muted-foreground truncate mt-0.5">

{image}

</p>

</div>

</div>

</div>

)}



{/* Interactive Submit Button */}

<div className="pt-2 w-full">

<Button

type="submit"

color="primary"

isLoading={loading}

className="w-full font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white h-11 transition-all duration-300 hover:scale-[1.02] active:scale-95"

radius="lg"

startContent={!loading && <Save className="w-4 h-4" />}

>

{loading ? 'Updating Profile...' : 'Update Information'}

</Button>

</div>

</Form>

</div>

</div>

</div>

)

}

