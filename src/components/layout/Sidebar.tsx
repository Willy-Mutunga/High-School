import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { 
  Home,
  Users,
  BookOpen,
  Calendar,
  ClipboardList,
  BarChart3,
  MessageSquare,
  Settings,
  FileText,
  UserCheck,
  GraduationCap,
  Bell,
  Upload
} from 'lucide-react';

interface SidebarItem {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  roles?: string[];
}

const sidebarItems: SidebarItem[] = [
  { label: 'Dashboard', icon: Home, href: '/dashboard', roles: ['admin', 'teacher', 'student', 'parent'] },
  
  // Admin specific
  { label: 'Students', icon: Users, href: '/students', roles: ['admin'] },
  { label: 'Teachers', icon: UserCheck, href: '/teachers', roles: ['admin'] },
  { label: 'Classes', icon: BookOpen, href: '/classes', roles: ['admin'] },
  { label: 'Analytics', icon: BarChart3, href: '/analytics', roles: ['admin'] },
  
  // Teacher specific
  { label: 'My Classes', icon: BookOpen, href: '/my-classes', roles: ['teacher'] },
  { label: 'Attendance', icon: ClipboardList, href: '/attendance', roles: ['teacher'] },
  { label: 'Grades', icon: FileText, href: '/grades', roles: ['teacher'] },
  { label: 'Materials', icon: Upload, href: '/materials', roles: ['teacher'] },
  
  // Student specific
  { label: 'Schedule', icon: Calendar, href: '/schedule', roles: ['student'] },
  { label: 'Assignments', icon: FileText, href: '/assignments', roles: ['student'] },
  { label: 'Grades', icon: BarChart3, href: '/my-grades', roles: ['student'] },
  
  // Parent specific
  { label: 'Child Progress', icon: BarChart3, href: '/child-progress', roles: ['parent'] },
  { label: 'Attendance', icon: ClipboardList, href: '/child-attendance', roles: ['parent'] },
  
  // Common
  { label: 'Messages', icon: MessageSquare, href: '/messages', roles: ['admin', 'teacher', 'student', 'parent'] },
  { label: 'Announcements', icon: Bell, href: '/announcements', roles: ['admin', 'teacher', 'student', 'parent'] },
  { label: 'Settings', icon: Settings, href: '/settings', roles: ['admin', 'teacher', 'student', 'parent'] },
];

const Sidebar = () => {
  const { user } = useAuth();
  
  if (!user) return null;

  const userItems = sidebarItems.filter(item => 
    !item.roles || item.roles.includes(user.role)
  );

  return (
    <aside className="w-64 bg-card border-r border-border h-[calc(100vh-4rem)] overflow-y-auto">
      <div className="p-4">
        <nav className="space-y-2">
          {userItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              className={cn(
                "w-full justify-start space-x-3 h-11 hover:bg-primary/10 hover:text-primary transition-colors",
                item.href === '/dashboard' && "bg-primary/10 text-primary"
              )}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Button>
          ))}
        </nav>
      </div>
      
      {/* Role Badge */}
      <div className="mt-auto p-4 border-t border-border">
        <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
          <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
            <GraduationCap className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-sm font-medium capitalize">{user.role}</p>
            <p className="text-xs text-muted-foreground">Access Level</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;