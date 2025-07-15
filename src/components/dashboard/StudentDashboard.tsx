import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  BookOpen, 
  Calendar, 
  ClipboardList, 
  TrendingUp,
  Clock,
  FileText,
  Download,
  Eye
} from 'lucide-react';

const StudentDashboard = () => {
  const todaySchedule = [
    { time: '8:00 AM', subject: 'Mathematics', teacher: 'Mr. Chen', room: 'Room 201', status: 'current' },
    { time: '9:00 AM', subject: 'Physics', teacher: 'Dr. Smith', room: 'Lab 1', status: 'upcoming' },
    { time: '10:30 AM', subject: 'English Literature', teacher: 'Ms. Johnson', room: 'Room 105', status: 'upcoming' },
    { time: '1:00 PM', subject: 'History', teacher: 'Mr. Thompson', room: 'Room 302', status: 'upcoming' },
    { time: '2:30 PM', subject: 'Chemistry', teacher: 'Dr. Rodriguez', room: 'Lab 2', status: 'upcoming' }
  ];

  const assignments = [
    { title: 'Calculus Problem Set 5', subject: 'Mathematics', dueDate: 'Due Tomorrow', status: 'pending', progress: 75 },
    { title: 'World War II Essay', subject: 'History', dueDate: 'Due Friday', status: 'in-progress', progress: 40 },
    { title: 'Physics Lab Report', subject: 'Physics', dueDate: 'Due Monday', status: 'not-started', progress: 0 },
    { title: 'Shakespeare Analysis', subject: 'English', dueDate: 'Due Next Week', status: 'submitted', progress: 100 }
  ];

  const recentGrades = [
    { subject: 'Mathematics', assignment: 'Algebra Test', grade: 'A-', percentage: 92, date: '2 days ago' },
    { subject: 'Physics', assignment: 'Lab Practical', grade: 'B+', percentage: 88, date: '5 days ago' },
    { subject: 'English', assignment: 'Essay Analysis', grade: 'A', percentage: 95, date: '1 week ago' },
    { subject: 'History', assignment: 'Research Project', grade: 'B', percentage: 85, date: '1 week ago' }
  ];

  const announcements = [
    { title: 'Spring Break Schedule', content: 'School will be closed from March 25-29', type: 'holiday', time: '2 hours ago' },
    { title: 'Library Extended Hours', content: 'Library now open until 8 PM for exam preparation', type: 'facility', time: '1 day ago' },
    { title: 'Science Fair Registration', content: 'Register for the annual science fair by April 1st', type: 'event', time: '2 days ago' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'current': return 'bg-primary text-primary-foreground';
      case 'submitted': return 'bg-success text-success-foreground';
      case 'pending': return 'bg-warning text-warning-foreground';
      case 'in-progress': return 'bg-primary text-primary-foreground';
      case 'not-started': return 'bg-muted text-muted-foreground';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  const getGradeColor = (percentage: number) => {
    if (percentage >= 90) return 'text-success';
    if (percentage >= 80) return 'text-primary';
    if (percentage >= 70) return 'text-warning';
    return 'text-destructive';
  };

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Student Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Emma! Let's make today productive.</p>
        </div>
        <div className="flex space-x-2">
          <Button className="bg-gradient-to-r from-primary to-primary-light">
            <FileText className="w-4 h-4 mr-2" />
            Submit Assignment
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Download Schedule
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-lg border-0 bg-gradient-to-br from-card to-card/80">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Today's Classes</p>
                <p className="text-3xl font-bold text-foreground">5</p>
              </div>
              <Calendar className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-lg border-0 bg-gradient-to-br from-card to-card/80">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pending Assignments</p>
                <p className="text-3xl font-bold text-foreground">3</p>
              </div>
              <ClipboardList className="w-8 h-8 text-warning" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-lg border-0 bg-gradient-to-br from-card to-card/80">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Current GPA</p>
                <p className="text-3xl font-bold text-foreground">3.7</p>
              </div>
              <TrendingUp className="w-8 h-8 text-success" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-lg border-0 bg-gradient-to-br from-card to-card/80">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Attendance</p>
                <p className="text-3xl font-bold text-foreground">96%</p>
              </div>
              <Clock className="w-8 h-8 text-accent" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Schedule */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span>Today's Schedule</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {todaySchedule.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="text-sm font-medium text-primary min-w-[80px]">{item.time}</div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{item.subject}</p>
                    <p className="text-xs text-muted-foreground">{item.teacher} • {item.room}</p>
                  </div>
                  <Badge className={getStatusColor(item.status)} variant="secondary">
                    {item.status === 'current' ? 'Now' : 'Upcoming'}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Assignments */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <ClipboardList className="w-5 h-5 text-primary" />
              <span>Assignments</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {assignments.map((assignment, index) => (
                <div key={index} className="space-y-2 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{assignment.title}</p>
                    <Badge className={getStatusColor(assignment.status)} variant="secondary">
                      {assignment.status.replace('-', ' ')}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{assignment.subject}</span>
                    <span>{assignment.dueDate}</span>
                  </div>
                  {assignment.status !== 'submitted' && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Progress</span>
                        <span>{assignment.progress}%</span>
                      </div>
                      <Progress value={assignment.progress} className="h-2" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Grades */}
        <Card className="shadow-lg border-0 lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span>Recent Grades</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentGrades.map((grade, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border hover:shadow-md transition-shadow">
                  <div className="flex-1">
                    <p className="font-medium">{grade.assignment}</p>
                    <p className="text-sm text-muted-foreground">{grade.subject} • {grade.date}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-2xl font-bold ${getGradeColor(grade.percentage)}`}>{grade.grade}</p>
                    <p className="text-sm text-muted-foreground">{grade.percentage}%</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              <Eye className="w-4 h-4 mr-2" />
              View All Grades
            </Button>
          </CardContent>
        </Card>

        {/* Announcements */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-primary" />
              <span>Announcements</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {announcements.map((announcement, index) => (
                <div key={index} className="p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{announcement.title}</p>
                      <Badge variant="outline" className="text-xs capitalize">
                        {announcement.type}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{announcement.content}</p>
                    <p className="text-xs text-muted-foreground">{announcement.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentDashboard;