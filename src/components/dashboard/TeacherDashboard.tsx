import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  BookOpen, 
  Users, 
  ClipboardList, 
  Calendar,
  Plus,
  Upload,
  MessageSquare,
  CheckCircle
} from 'lucide-react';

const TeacherDashboard = () => {
  const myClasses = [
    { name: 'Mathematics 10A', students: 28, subject: 'Mathematics', room: 'Room 201', nextClass: 'Today 9:00 AM' },
    { name: 'Mathematics 10B', students: 26, subject: 'Mathematics', room: 'Room 201', nextClass: 'Today 11:00 AM' },
    { name: 'Advanced Calculus', students: 18, subject: 'Mathematics', room: 'Room 203', nextClass: 'Tomorrow 10:00 AM' }
  ];

  const todaySchedule = [
    { time: '9:00 AM', class: 'Mathematics 10A', room: 'Room 201', duration: '50 min', type: 'lesson' },
    { time: '11:00 AM', class: 'Mathematics 10B', room: 'Room 201', duration: '50 min', type: 'lesson' },
    { time: '2:00 PM', class: 'Faculty Meeting', room: 'Conference Room', duration: '60 min', type: 'meeting' },
    { time: '3:30 PM', class: 'Parent Conference', room: 'Office', duration: '30 min', type: 'conference' }
  ];

  const pendingTasks = [
    { task: 'Grade Math Test - Class 10A', dueDate: 'Due Tomorrow', priority: 'high', progress: 60 },
    { task: 'Submit Lesson Plans - Week 12', dueDate: 'Due Friday', priority: 'medium', progress: 80 },
    { task: 'Update Student Progress Reports', dueDate: 'Due Next Week', priority: 'low', progress: 20 },
    { task: 'Prepare Parent Conference Materials', dueDate: 'Due Today', priority: 'high', progress: 90 }
  ];

  const recentMessages = [
    { from: 'Sarah Johnson (Parent)', subject: 'Question about Emma\'s progress', time: '2 hours ago', type: 'parent' },
    { from: 'Admin Office', subject: 'New curriculum guidelines', time: '5 hours ago', type: 'admin' },
    { from: 'Michael Davis (Student)', subject: 'Assignment clarification', time: '1 day ago', type: 'student' }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Teacher Dashboard</h1>
          <p className="text-muted-foreground">Good morning! Ready to inspire young minds today?</p>
        </div>
        <div className="flex space-x-2">
          <Button className="bg-gradient-to-r from-primary to-primary-light">
            <Plus className="w-4 h-4 mr-2" />
            New Assignment
          </Button>
          <Button variant="outline">
            <Upload className="w-4 h-4 mr-2" />
            Upload Material
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-lg border-0 bg-gradient-to-br from-card to-card/80">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">My Classes</p>
                <p className="text-3xl font-bold text-foreground">3</p>
              </div>
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-lg border-0 bg-gradient-to-br from-card to-card/80">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Students</p>
                <p className="text-3xl font-bold text-foreground">72</p>
              </div>
              <Users className="w-8 h-8 text-success" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-lg border-0 bg-gradient-to-br from-card to-card/80">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Today's Classes</p>
                <p className="text-3xl font-bold text-foreground">2</p>
              </div>
              <Calendar className="w-8 h-8 text-warning" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-lg border-0 bg-gradient-to-br from-card to-card/80">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pending Grades</p>
                <p className="text-3xl font-bold text-foreground">15</p>
              </div>
              <ClipboardList className="w-8 h-8 text-destructive" />
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
                    <p className="text-sm font-medium">{item.class}</p>
                    <p className="text-xs text-muted-foreground">{item.room} • {item.duration}</p>
                  </div>
                  <Badge variant={item.type === 'lesson' ? 'default' : 'secondary'} className="capitalize">
                    {item.type}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pending Tasks */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <ClipboardList className="w-5 h-5 text-primary" />
              <span>Pending Tasks</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingTasks.map((task, index) => (
                <div key={index} className="space-y-2 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{task.task}</p>
                    <Badge variant={
                      task.priority === 'high' ? 'destructive' : 
                      task.priority === 'medium' ? 'default' : 'secondary'
                    }>
                      {task.priority}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{task.dueDate}</p>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span>Progress</span>
                      <span>{task.progress}%</span>
                    </div>
                    <Progress value={task.progress} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* My Classes */}
        <Card className="shadow-lg border-0 lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-primary" />
              <span>My Classes</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {myClasses.map((classItem, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border hover:shadow-md transition-shadow">
                  <div className="flex-1">
                    <p className="font-medium">{classItem.name}</p>
                    <p className="text-sm text-muted-foreground">{classItem.students} students • {classItem.room}</p>
                    <p className="text-xs text-muted-foreground mt-1">Next: {classItem.nextClass}</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Users className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <ClipboardList className="w-4 h-4 mr-1" />
                      Attendance
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Messages */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              <span>Recent Messages</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentMessages.map((message, index) => (
                <div key={index} className="p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium">{message.from}</p>
                      <p className="text-xs text-muted-foreground line-clamp-2">{message.subject}</p>
                      <p className="text-xs text-muted-foreground mt-1">{message.time}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {message.type}
                    </Badge>
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

export default TeacherDashboard;