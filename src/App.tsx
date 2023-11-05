import { useState } from "react";
import Paper from "@mui/material/Paper";
import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  Appointments,
  ConfirmationDialog,
  AppointmentTooltip,
  AppointmentForm,
  MonthView,
} from "@devexpress/dx-react-scheduler-material-ui";
import { schedulerData } from "./dummyData/appointment";

interface IAppointment {
  allDay: boolean;
  endDate?: string;
  startDate?: string;
  title?: string;
  rRule?: string;
}

function App() {
  const [dataAppointment, setDataAppointment] = useState(schedulerData);

  const setAppointment = (appointmentInfo: any) => {
    console.log("startDate", new Date(appointmentInfo?.added.startDate));

    const newAppointment = {
      startDate: new Date(appointmentInfo?.added.startDate).toISOString(),
      endDate: new Date(appointmentInfo?.added.endDate).toISOString(),
      title: appointmentInfo.added.title,
    };
    // dataAppointment.push(newAppointment);
    setDataAppointment((prev) => [...prev, newAppointment]);
  };

  const deleteAppointment = (val: any) => {
		console.log('');
	}

  return (
    <Paper>
      <Scheduler data={dataAppointment} height={660}>
        {/* <ViewState
            currentDate={currentDate}
          /> */}
        <EditingState onCommitChanges={setAppointment} />
        <IntegratedEditing />
        {/* <DayView
            startDayHour={9}
            endDayHour={19}
          /> */}
        <MonthView />
        <ConfirmationDialog />
        <Appointments />
        <AppointmentTooltip showOpenButton showDeleteButton />
        <AppointmentForm />
      </Scheduler>
    </Paper>
  );
}

export default App;
