import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  User, 
  Calendar, 
  TrendingUp, 
  Clock,
  MessageSquare,
  FileText,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

const ParentDashboard = () => {
  const childInfo = {
    name: 'Emma Davis',
    grade: '10th Grade',
    class: 'Class 10A',
    attendance: 96,
    gpa: 3.7
  };

  const upcomingEvents = [
    { title: 'Parent-Teacher Conference', date: 'March 15, 2024', time: '3:00 PM', teacher: 'Mr. Chen' },
    { title: 'Science Fair', date: 'April 5, 2024', time: 'All Day', type: 'School Event' },
    { title: 'Semester Exams Begin', date: 'March 20, 2024', time: '8:00 AM', type: 'Exams' }
  ];

  const recentGrades = [
    { subject: 'Mathematics', assignment: 'Algebra Test', grade: 'A-', percentage: 92, date: '2 days ago', teacher: 'Mr. Chen' },
    { subject: 'Physics', assignment: 'Lab Practical', grade: 'B+', percentage: 88, date: '5 days ago', teacher: 'Dr. Smith' },
    { subject: 'English', assignment: 'Essay Analysis', grade: 'A', percentage: 95, date: '1 week ago', teacher: 'Ms. Johnson' },
    { subject: 'History', assignment: 'Research Project', grade: 'B', percentage: 85, date: '1 week ago', teacher: 'Mr. Thompson' }
  ];

  const attendanceData = [
    { subject: 'Mathematics', present: 18, total: 20, percentage: 90 },
    { subject: 'Physics', present: 19, total: 20, percentage: 95 },
    { subject: 'English', present: 20, total: 20, percentage: 100 },
    { subject: 'History', present: 17, total: 20, percentage: 85 },
    { subject: 'Chemistry', present: 19, total: 20, percentage: 95 }
  ];

  const notifications = [
    { title: 'Assignment Due Reminder', content: 'Calculus Problem Set 5 due tomorrow', type: 'reminder', time: '2 hours ago' },
    { title: 'Low Grade Alert', content: 'Chemistry Quiz score below average (68%)', type: 'alert', time: '1 day ago' },
    { title: 'Perfect Attendance', content: 'Emma maintained perfect attendance this week!', type: 'achievement', time: '2 days ago' }
  ];

  const getGradeColor = (percentage: number) => {
    if (percentage >= 90) return 'text-success';
    if (percentage >= 80) return 'text-primary';
    if (percentage >= 70) return 'text-warning';
    return 'text-destructive';
  };

  const getAttendanceColor = (percentage: number) => {
    if (percentage >= 95) return 'text-success';
    if (percentage >= 90) return 'text-primary';
    if (percentage >= 85) return 'text-warning';
    return 'text-destructive';
  };

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Parent Dashboard</h1>
          <p className="text-muted-foreground">Stay connected with {childInfo.name}'s academic journey.</p>
        </div>
        <div className="flex space-x-2">
          <Button className="bg-gradient-to-r from-primary to-primary-light">
            <MessageSquare className="w-4 h-4 mr-2" />
            Contact Teacher
          </Button>
          <Button variant="outline">
            <FileText className="w-4 h-4 mr-2" />
            View Reports
          </Button>
        </div>
      </div>

      {/* Child Overview */}
      <Card className="shadow-lg border-0 bg-gradient-to-r from-primary/5 to-accent/5">
        <CardContent className="p-6">
          <div className="flex items-center space-x-6">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white text-xl font-bold">
              {childInfo.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground">{childInfo.name}</h2>
              <p className="text-muted-foreground">{childInfo.grade} • {childInfo.class}</p>
            </div>
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <p className="text-2xl font-bold text-success">{childInfo.attendance}%</p>
                <p className="text-sm text-muted-foreground">Attendance</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{childInfo.gpa}</p>
                <p className="text-sm text-muted-foreground">Current GPA</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Grades */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span>Recent Grades</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentGrades.map((grade, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex-1">
                    <p className="font-medium">{grade.assignment}</p>
                    <p className="text-sm text-muted-foreground">{grade.subject} • {grade.teacher}</p>
                    <p className="text-xs text-muted-foreground">{grade.date}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-xl font-bold ${getGradeColor(grade.percentage)}`}>{grade.grade}</p>
                    <p className="text-sm text-muted-foreground">{grade.percentage}%</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Attendance by Subject */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-primary" />
              <span>Attendance by Subject</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {attendanceData.map((subject, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{subject.subject}</p>
                    <span className={`text-sm font-medium ${getAttendanceColor(subject.percentage)}`}>
                      {subject.percentage}%
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{subject.present}/{subject.total} classes attended</span>
                  </div>
                  <Progress value={subject.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Events */}
        <Card className="shadow-lg border-0 lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span>Upcoming Events</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border hover:shadow-md transition-shadow">
                  <div className="flex-1">
                    <p className="font-medium">{event.title}</p>
                    <p className="text-sm text-muted-foreground">{event.date} • {event.time}</p>
                    <p className="text-xs text-muted-foreground">
                      {event.teacher ? `With ${event.teacher}` : event.type}
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    Add to Calendar
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-primary" />
              <span>Notifications</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {notifications.map((notification, index) => (
                <div key={index} className="p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-start space-x-2">
                    {notification.type === 'alert' && <AlertTriangle className="w-4 h-4 text-warning mt-1" />}
                    {notification.type === 'achievement' && <CheckCircle className="w-4 h-4 text-success mt-1" />}
                    {notification.type === 'reminder' && <Clock className="w-4 h-4 text-primary mt-1" />}
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">{notification.title}</p>
                      <p className="text-xs text-muted-foreground">{notification.content}</p>
                      <p className="text-xs text-muted-foreground">{notification.time}</p>
                    </div>
                  </div>
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
              <MessageSquare className="w-6 h-6" />
              <span className="text-sm">Message Teacher</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <FileText className="w-6 h-6" />
              <span className="text-sm">Download Report</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <Calendar className="w-6 h-6" />
              <span className="text-sm">Schedule Meeting</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <User className="w-6 h-6" />
              <span className="text-sm">Update Profile</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ParentDashboard;