'use client';

import * as React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import {
  MessageCircle,
  Briefcase,
  Code,
  Folder,
  GraduationCap,
  Camera,
  Mail,
  Linkedin,
  Youtube,
  Instagram,
  Youtube as YouTubeIcon
} from 'lucide-react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';

const PROFILE_DATA = {
  user: {
    name: 'Sabelo Khoza',
    title: 'Software Developer',
    avatar: 'https://pbs.twimg.com/profile_images/1909615404789506048/MTqvRsjo_400x400.jpg',
    badge: 'Co-foundr',
    badgeCount: '~10K'
  },
  categories: [
    {
      title: 'General Chat',
      path: '/landing',
      icon: MessageCircle,
      color: 'bg-orange-500'
    },
    {
      title: 'Experience',
      path: '/profile/experience',
      icon: Briefcase,
      color: 'bg-purple-500'
    },
    {
      title: 'Skills',
      path: '/profile/skills',
      icon: Code,
      color: 'bg-blue-500'
    },
    {
      title: 'Projects',
      path: '/profile/projects',
      icon: Folder,
      color: 'bg-red-500'
    },
    {
      title: 'Education',
      path: '/profile/education',
      icon: GraduationCap,
      color: 'bg-purple-600'
    },
    {
      title: 'Journey Gallery',
      path: '/profile/gallery',
      icon: Camera,
      color: 'bg-green-500'
    },
    {
      title: 'Contact',
      path: '/profile/contact',
      icon: Mail,
      color: 'bg-gray-500'
    }
  ],
  socialLinks: [
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
    { name: 'YouTube', icon: YouTubeIcon, url: '#' },
    { name: 'Instagram', icon: Instagram, url: '#' },
  ]
};

export default function ProfileSidebar({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  // Get current active section based on pathname
  const getCurrentSection = () => {
    const category = PROFILE_DATA.categories.find(cat => cat.path === pathname);
    return category ? category.title : 'General Chat';
  };

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" className="bg-gray-900 text-white border-r border-gray-800">
        <SidebarHeader className="border-b border-gray-800">
          <div className="p-6">
            <div className="flex flex-col items-center space-y-4">
              {/* Profile Card */}
              <div className="bg-gray-800 rounded-lg p-4 w-full max-w-sm">
                <div className="flex flex-col items-center space-y-3">
                  <div className="relative">
                    <Avatar className="h-16 w-16 ring-4 ring-orange-500">
                      <AvatarImage
                        src={PROFILE_DATA.user.avatar}
                        alt={PROFILE_DATA.user.name}
                      />
                      <AvatarFallback className="bg-orange-500 text-white text-lg">
                        {PROFILE_DATA.user.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  
                  <div className="text-center space-y-1">
                    <h3 className="font-semibold text-lg text-white">{PROFILE_DATA.user.name}</h3>
                    <p className="text-sm text-gray-400">{PROFILE_DATA.user.title}</p>
                  </div>

                  {/* Badge */}
                  <div className="flex items-center gap-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                    <Youtube className="h-4 w-4" />
                    <span>{PROFILE_DATA.user.badge}</span>
                    <span className="text-xs opacity-75">{PROFILE_DATA.user.badgeCount}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SidebarHeader>

        <SidebarContent className="bg-gray-900">
          <SidebarGroup>
            <SidebarGroupLabel className="text-white font-semibold text-lg mb-4 px-4">
              CATEGORIES
            </SidebarGroupLabel>
            <SidebarMenu className="space-y-2 px-4">
              {PROFILE_DATA.categories.map((category) => {
                const isActive = pathname === category.path;
                return (
                  <SidebarMenuItem key={category.title}>
                    <SidebarMenuButton 
                      className={`w-full justify-start text-left p-3 rounded-lg transition-all duration-200 cursor-pointer ${
                        isActive 
                          ? 'bg-orange-500 text-white' 
                          : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                      }`}
                      onClick={() => handleNavigation(category.path)}
                    >
                      <div className={`p-1 rounded-md mr-3 ${isActive ? 'bg-orange-600' : category.color}`}>
                        <category.icon className="h-4 w-4 text-white" />
                      </div>
                      <span className="font-medium">{category.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="border-t border-gray-800 bg-gray-900">
          <div className="p-4">
            <div className="text-xs font-medium text-gray-400 mb-3 uppercase tracking-wider">
              Connect With Me
            </div>
            <div className="space-y-2">
              {PROFILE_DATA.socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="flex items-center gap-3 p-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <link.icon className="h-4 w-4" />
                  <span className="text-sm">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </SidebarFooter>
        
        <SidebarRail />
      </Sidebar>

      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/profile" className="text-muted-foreground">
                    Profile
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-medium">
                    {getCurrentSection()}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        
        <div className="p-6">
          <div className="max-w-4xl mx-auto">
            {children}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}