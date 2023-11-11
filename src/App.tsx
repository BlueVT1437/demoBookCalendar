import { schedulerData } from "./dummyData/appointment";
import {
  ScheduleComponent,
  Day,
  Week,
  Month,
  Agenda,
  Inject,
  WorkWeek,
	ResourceDirective,
} from "@syncfusion/ej2-react-schedule";

interface IAppointment {
  allDay: boolean;
  endDate?: string;
  startDate?: string;
  title?: string;
  rRule?: string;
}

function App() {

  return (
    <ScheduleComponent
      // selectedDate={new Date()}
      eventSettings={{
        dataSource: schedulerData,
      }}
      // currentView="Month"
    >
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
  );
}

export default App;
