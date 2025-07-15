import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  UserCheck, 
  BookOpen, 
  TrendingUp, 
  Calendar,
  Plus,
  Eye,
  AlertTriangle
} from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    { title: 'Total Students', value: '1,247', icon: Users, color: 'text-blue-600', change: '+12 this month' },
    { title: 'Total Teachers', value: '78', icon: UserCheck, color: 'text-green-600', change: '+3 this month' },
    { title: 'Active Classes', value: '42', icon: BookOpen, color: 'text-purple-600', change: 'All running' },
    { title: 'Attendance Rate', value: '94.2%', icon: TrendingUp, color: 'text-orange-600', change: '+2.1% vs last month' }
  ];

  const recentActivities = [
    { action: 'New student enrollment', student: 'Alex Johnson', time: '2 hours ago', type: 'success' },
    { action: 'Teacher assignment', teacher: 'Ms. Rodriguez', class: 'Math Grade 10', time: '4 hours ago', type: 'info' },
    { action: 'Low attendance alert', class: 'Physics Grade 11', time: '6 hours ago', type: 'warning' },
    { action: 'Grade submission', teacher: 'Mr. Thompson', subject: 'History', time: '1 day ago', type: 'success' }
  ];

  const upcomingEvents = [
    { title: 'Parent-Teacher Conference', date: 'March 15, 2024', type: 'meeting' },
    { title: 'Semester Exams Begin', date: 'March 20, 2024', type: 'exam' },
    { title: 'Spring Break', date: 'March 25, 2024', type: 'holiday' },
    { title: 'Science Fair', date: 'April 5, 2024', type: 'event' }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening at your school.</p>
        </div>
        <div className="flex space-x-2">
          <Button className="bg-gradient-to-r from-primary to-primary-light">
            <Plus className="w-4 h-4 mr-2" />
            Quick Add
          </Button>
          <Button variant="outline">
            <Eye className="w-4 h-4 mr-2" />
            Reports
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow border-0 bg-gradient-to-br from-card to-card/80">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                </div>
                <div className={`p-3 rounded-full bg-muted/50 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span>Recent Activities</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'success' ? 'bg-success' :
                    activity.type === 'warning' ? 'bg-warning' : 'bg-primary'
                  }`} />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">
                      {activity.student && `Student: ${activity.student}`}
                      {activity.teacher && `Teacher: ${activity.teacher}`}
                      {activity.class && ` • Class: ${activity.class}`}
                      {activity.subject && ` • Subject: ${activity.subject}`}
                    </p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span>Upcoming Events</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{event.title}</p>
                    <p className="text-xs text-muted-foreground">{event.date}</p>
                  </div>
                  <Badge variant="secondary" className="capitalize">
                    {event.type}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="shadow-lg border-0 bg-gradient-to-r from-primary/5 to-accent/5">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <Users className="w-6 h-6" />
              <span className="text-sm">Add Student</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <UserCheck className="w-6 h-6" />
              <span className="text-sm">Add Teacher</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <BookOpen className="w-6 h-6" />
              <span className="text-sm">Create Class</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <Calendar className="w-6 h-6" />
              <span className="text-sm">Schedule Event</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;