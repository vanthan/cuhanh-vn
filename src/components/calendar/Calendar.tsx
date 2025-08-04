'use client';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg }from '@fullcalendar/interaction';

// Props của component, nhận vào một danh sách các sự kiện
interface CalendarProps {
  events: { title: string; date: string }[];
}

export default function Calendar({ events }: CalendarProps) {
  // Xử lý khi người dùng click vào một ngày
  const handleDateClick = (event: DateClickArg) => {
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      weekends={true}
      events={events}
      dateClick={handleDateClick}
    />
  );
}